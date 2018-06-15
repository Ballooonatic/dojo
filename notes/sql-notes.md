# SQL cheatsheet

## Installation

Use homebrew to install MySQL.
`brew install mysql`

Use homebrew to start your MySQL Server as a  "service", meaning it will run in the background and allow connections.
`brew services start mysql`

Before this next step, make sure you go into Settings on your mac, to MySQL, and click Initialize Database.

Now with MySQL installed, you have access to some new command line tools. Run the following command to set the MySQL root user's password to "root".
`mysqladmin -u root password "root"`
`mysql -u root -p`

## Query Syntax

### SELECT

"*" gets everything.
`SELECT * FROM tables;`

You can separate multiple columns with commas
`SELECT first_name, last_name FROM users;`

WHERE lets you apply expressions to your queries
`SELECT last_name FROM users WHERE id = 2 OR id = 3;`

This query gets all the first names that start with K
`SELECT * FROM users WHERE first_name LIKE "K%";`

All users whose first name ends with "e", sorted by age. ASC works too
`SELECT * FROM users WHERE first_name LIKE "%e" ORDER BY birthday DESC;`

Sort by alphabetical order
`SELECT first_name FROM users ORDER BY first_name;`

### INSERT

`INSERT INTO table_name (column_name1, column_name2) VALUES ('column1_value', 'column2_value');`

### UPDATE

Note: Without that WHERE, this will update every row in the table
`UPDATE table_name SET column_name1 = 'some_value', column_name2='another_value' WHERE condition(s)`

### DELETE

If you are getting an error regarding SQL SAFE UPDATES, run the following command to let MySQL Workbench know that you know what you are doing and you want to DELETE stuff from the database.
`SET SQL_SAFE_UPDATES = 0;`

Delete syntax. Again, without the WHERE, it'll delete everything.
`DELETE FROM table_name WHERE condition(s)`

### FUNCTIONS

`SELECT FUNCTION(column) FROM table_name`

example
`SELECT CONCAT('Mr. ', first_name, ' ', last_name) AS full_name FROM clients`

![coding dojo sql function list](http://s3.amazonaws.com/General_V88/boomyeah/company_209/chapter_2161/handouts/chapter2161_1533_Screen-Shot-2013-10-08-at-10.24.19-PM.png "coding dojo sql function list")

### JOINS

One to One

```sql
SELECT * FROM customers
JOIN addresses ON addresses.id = customers.address_id;
```

One to Many

```sql
SELECT * FROM orders
JOIN customers ON customers.id = orders.customer_id;
```

Many to Many

```sql
SELECT * FROM orders
JOIN items_orders ON orders.id = items_orders.order_id
JOIN items ON items.id = items_orders.item_id;
```

#### LEFT JOINS

Okay let's pretend we have an ERD like this.

![mock twitter database](http://i.imgur.com/pJ7GbOP.png "mock twitter database")

> What query would you run to get all tweets from the user id of 1?

```sql
SELECT *
FROM users
LEFT JOIN tweets
ON users.id = tweets.user_id
WHERE users.id = 1;
```

> You can just grab the tweets by:

```sql
SELECT tweets.tweet
FROM users
LEFT JOIN tweets
ON users.id = tweets.user_id
WHERE users.id = 1;
```

> What query would you run to get all the tweets that user with id 2, or user with id 1, has tagged as favorites?

```sql
SELECT first_name, tweet
FROM users
LEFT JOIN faves
ON users.id = faves.user_id
LEFT JOIN tweets
ON faves.tweet_id = tweets.id
WHERE users.id = 1 OR users.id = 2;
```

> What query would you run to get all the users that are following the user with id 1?
> This will be the first time we are introduced to a self-join. This often scares a lot of the students, but we aren't doing anything new. We are just dealing with a many to many relationship, but we are using the same table twice.
> For example, we know that one user can have many followers and that one user can follow many other users. This is a many to many relationship but the two rows that are having a relationship just happen to be of the same type. We could have another table called followers but that would be repetitive because we would have the same columns or field names as we are just storing a user. We don't need the second table because we can do a self-join. The key word to remember is the word "AS" because it lets us join the same table twice by providing SQL with another variable to reference the table that is getting joined again.

```sql
SELECT users.first_name as followed, users2.first_name as follower
FROM users
LEFT JOIN follows
ON users.id = follows.followed_id
LEFT JOIN users as users2
ON users2.id = follows.follower_id
WHERE users.id = 1;
```

> What query would you run to get all users that are not following the user with id of 2?

```sql
SELECT *
FROM users
WHERE users.id NOT IN (
SELECT follower_id
FROM follows
WHERE followed_id = 2
) AND users.id != 2;
```

> We can run functions on specific columns and often times it is paired up with the GROUP BY statement. We will have plenty of practice with functions in the next tab.
> This query selects a user of id = 1 and how many followers thy have

```sql
SELECT users.first_name as user, COUNT(users2.first_name) as follower_count
FROM users
LEFT JOIN follows
ON users.id = follows.followed_id
LEFT JOIN users as users2
ON users2.id = follows.follower_id
WHERE users.id = 1
GROUP BY users.id
```

> Left Join vs. Join
> Outputs even rows that have a null field

```sql
SELECT first_name, tweet
FROM users
LEFT JOIN tweets
ON users.id = tweets.user_id
```

> Outputs only fields with both name and associated tweet.

```sql
SELECT first_name, tweet
FROM users
JOIN tweets
ON users.id = tweets.user_id
```

### Exporting

We can export the database that we built from our MySQL workbench into an SQL file. If we want to share our database records to other developers, we can just send them the SQL file and they can run the export on their local machine to create the databases and populate it with data.