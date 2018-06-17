# Server Scalability

## Load Testers

Load testers are commonly used in applications to see how many concurrent request or just how many request a server can handle before it can't anymore. That way, they can set up an action to remedy their server crashing or stopping when it reaches a certain threshold. We will build our own VERY simple one that sends a request to the server every X amount of time and keeps a counter to see how many request can be filled in Y time.