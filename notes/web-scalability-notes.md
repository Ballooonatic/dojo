# Is it web scale

## Dimensionality of Scaling

Scaling vertically ~ increasing the resources and capabilities of a single server. I personally also like to think of it as optimizing a single server so that they use the resources and power to their full extent.

Scaling horizontally ~ to spread the load across multiple nodes. This is harder than it sounds because you have to gracefully allow each server or node to compliment the other. Scaling horizontally, done right, will allow you to scale when users are growing exponentially.

## Database Scaling

### Indexing

Let's pretend we have a table with a first name, last name, and a birthdate. We have a million records spanning a decade. In order to optimize db queries, we can put, for example, each birthday that shares the same year into a bin. Then we go further and put together all the ones that share the same month of each year. I imagine it like a file/foler structure.

> The algorithm MySQL uses are more complex but the concept works the same way. Matter of fact, their index usually works better than how we would organize our own. It can improve your speed by tens or hundreds. When inserting a data row into a SQL database with an index in place, MySQL will organize it in a way for easy retrieval.
> MySQL has a few different types of indices (RTREE, BTREE, HASH), but InnoDB only allows the use of BTREE. This algorithm is very similar to how a binary search tree works!