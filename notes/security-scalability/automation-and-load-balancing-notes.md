# Automation and Load Balancing

## Load Balancing

Once we have vertically scaled as much as possible, we can scale horizontally! If you have not maximized your server, please continue to look over the code to see where bottlenecks are still present!

### Receptionist and Workers

In a well-trained office staff, receptionists do not do much work(no offense). They just take the request and dish it off to the next available worker. Many cloud services offer this service for their clients but we can make our own! These server receptionist are called load balances because they balance the overall load to all the server(of course). Enough talk. Here is how you do it:

Directions:

+ Create 2 identical load servers and save their public IP address
+ Create another balance-server that takes request directly
+ When a request comes to the balancer, send a request to whichever server has next and give the response of that request back to the client

Tada! It is as easy as that. Your load balancer is just a Web Proxy or a medium between the client and servers. With a proxy in place, you now have a load balancer that pushes request out to 2 different servers evenly, in a very simple way of course.

The concept of load balancing can also apply to the database. We can replicate our database so that each server has its own database to query from to limit the amount of connections each database has*. Wow! How cool!

Lets pull the code:
`git clone https://github.com/nguyenhmp/loadBalancer.git`

*This is beyond the scope of the course (when we replicate, we have to make sure all the data is consistent for reads/writes, you should only do that if you have (terabytes of data)).

Setting Up the AWS database
Since we are using AWS to deploy, we need a Relational Database Service that our servers will connect to. Go to your RDS AWS dashboard and create a new parameter group named 'scalingdb'(case sensitive). This is where your database settings are found and we are once again going to increase our MAX_ALLOWED_PACKET to the max. Then download this script to launch a database that we can use into amazon - [HERE](http://s3.amazonaws.com/General_V88/boomyeah/company_209/chapter_3609/handouts/chapter3609_6305_awsQuickDbLaunch.js). The username and password for this database will be root and rootroot respectively and it uses the parameter group scalingdb to launch. Feel free to change the username and password if you please. This script will use the AWS SDK to launch the server but only if you have the right configurations set up. Additionally, the script will wait for the database instance to be ready before sending you the end point(address) of the database. While waiting for the database to be ready, you can add an inbound rule to 3306 at your current IP address(or all IP addresses for now since only you have the endpoint). Do this by changing the security group rules on your database instance(click the database->Instance Actions-> See Details-> security group link.

![not sure](http://s3.amazonaws.com/General_V88/boomyeah/company_209/chapter_3609/handouts/chapter3609_6308_rds3.PNG)

Once ready and you have added the inbound rule, you should be able to connect using MySQL workbench. Use our database script to create the database and add 10,000 businesses using the script given. Finally, change the MySQL configuration in your node server file to point to this new instance.

## Semi-Automation

### Creating a Shell/bash scripts

Scripts are essential to automating server deployments. These scripts are, essentially, command prompt or terminal commands so that with the run of one script, you successfully set up your system without manually SSH-ing into the instance. It is very easy to SSH into a command line and install all the necessary components of deploying using ssh commands but by using scripts, we are allowed to run multiple commands in one executable! For example, let's create a bash script with the following code:

```bash
#!/bin/bash
echo Hello World;
echo My first bash script;
```

Insert it into a file called 'hello.sh'. Navigate to that folder in the terminal/command line and after running sh ./hello.sh on windows or bash ./hello.sh. After doing that, you should see this:

> C:\Users\minh_\Desktop>sh hello.sh
> Hello World
> My first bash script

With that single run of our script, we were able to run 2 echo commands. We can do this with any command that we would do to set up our AWS server when we SSH. After we finish our script, we can transfer it over to our server using SCP(more on this later) and then run our script to initiate all of our commands at once!

#### Using Our Script

##### Transferring a file using SCP

Secure CoPy is a command that allows you to transfer files over through a Secure Shell link (SSH). The command runs much like SSH where we are required to enter our PEM key and public IP address. Here is an example of using SCP:

`scp -i ./servers.pem hello.sh ubuntu@ec2-52-38-178-114.us-west-2.compute.amazonaws.com:/home/ubuntu`

This may seem like a complicated command but all it is doing is using the SCP command that comes with SSH and using SSH, transfers the file you want over to the target IP address. The extra parameters are the file you want to transfer(hello.sh) and the location you want to transfer to in the target machine following the public IP address.

##### Using our script

After SCP, your Amazon instance now has the script in its ~ directory. Most of the time, we use SSH to create a continuous remote login to our shell on another host so that we can interact with it using multiple commands but we can also use SSH to just run a single command. For example:

`ssh -i "servers.pem" ubuntu@ec2-52-38-178-114.us-west-2.compute.amazonaws.com 'chmod -x ./hello.sh'`
`ssh -i "servers.pem" ubuntu@ec2-52-38-178-114.us-west-2.compute.amazonaws.com 'sh hello.sh'`

runs two commands. The first one modifies the script to be executable and the second one runs the command using the sh command the specifying the script. With all these new tools, we can automate ALL of our deployment straight from the command line of our host computer in 3 commands! Let's actually write a deployment script!

## Full Automation

In order to fully automate our server deployment, we will have to set up a couple things. We will use the Amazon SDK in Node.js and in order to do this, we need to set up a few things on our system to give permission to AWS to do things.

You first have to create an Amazon Identity Manager and give it full rights to start and stop servers. Do this by logging into your account and clicking your name -> Security Credentials:

Create a new user and download the credentials for that user. SAVE THIS. If you lose this, you will not have the credentials for this user! Go back to the list of users and click the user you just created and click the Permissions tab and attach a new Policy. Give the user administrator access to the API gateway.

When you have created a role and have the access key and public key, install the [AWS Command Line Interface](https://aws.amazon.com/cli/). Once you have installed it, open your terminal/command line and type:

`aws configure`

to configure your settings. Use your Amazon Identity Manager key to configure your credentials(the things you download) or you can navigate to ~.aws and access the config file directly. When you are done, your credential file should look like this:

```sh
[default]
aws_access_key_id = <KEY>
aws_secret_access_key = <SECRET KEY>
```

Or when you type `aws configure` on your command line, the credentials should be in there. For my zone, I chose `us-west-2`.

From there, we will attack our auto deployment in 2 steps. One is to determine how to launch an instance from another instance. To do this in node, Amazon's SDK works just like an API call. You already have the script that launches a database, the method to launch a server is not much different. It just utilizes the EC2 part of the SDK. The documentation can be found [HERE](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html).

With the SDK, you can launch new servers but you will also need to send it scripts and commands from inside node. Many programming languages have a method to initiate command lines tool. The node way is using child processes. Look at this code sample here:

```js
var childProcess = require('child_process').spawn;
var scp = childProcess('ssh',
    [ '-o StrictHostKeyChecking=no',
        '-i',
        '/scaleapp1.pem',
        "echo hello"
    ])
scp.stdout.on('data', function(data) {
   console.log(`stdout: ${data}`);
});
scp.stderr.on('data', function(data) {
   console.log(`stderr: ${data}`);
});
scp.on('close', function(data) {
 console.log(`child process exited with code ${code}`);
})
```

We use the childProcess module here to initiate a command line command. The first parameter of childProcess is the command you want to run and the second parameter of childProcess is an array of arguments for that command. It is a little tricky and unclear which parameters should be separated but besides for that, this is a usable method. The three callbacks for the childProcess is when it get data, when it gets and error and when it finishes.

For the AWS EC2 SDK, focus on ec2.runInstance, ec2.waitFor and ec2.describeInstances. These three methods with node.childProcess.spawn should allow you to fully automate launching a new server and adding it to your load balancer!