# Is it web scale

## Dimensionality of Scaling

Scaling vertically ~ increasing the resources and capabilities of a single server. I personally also like to think of it as optimizing a single server so that they use the resources and power to their full extent.

Scaling horizontally ~ to spread the load across multiple nodes. This is harder than it sounds because you have to gracefully allow each server or node to compliment the other. Scaling horizontally, done right, will allow you to scale when users are growing exponentially.

## Database Scaling

### Indexing

Let's pretend we have a table with a first name, last name, and a birthdate. We have a million records spanning a decade. In order to optimize db queries, we can put, for example, each birthday that shares the same year into a bin. Then we go further and put together all the ones that share the same month of each year. I imagine it like a file/foler structure.

The algorithm MySQL uses are more complex but the concept works the same way. Matter of fact, their index usually works better than how we would organize our own. It can improve your speed by tens or hundreds. When inserting a data row into a SQL database with an index in place, MySQL will organize it in a way for easy retrieval.

MySQL has a few different types of indices (RTREE, BTREE, HASH), but InnoDB only allows the use of BTREE. This algorithm is very similar to how a binary search tree works!

### Foreign Keys

Foreign keys do two things very well.

1. They uphold the integrity of your data. When a foreign key constraint occurs, that means you are inserting an incorrect id/reference id or you are deleting something that SHOULD be there!

2. They are automatically indexed for joining. This allows you to separate the data into multiple tables but also be able to quickly retrieve the data when needed. This is much more useful for increasing your database speed.

Separation of data into different rows allows only necessary data to be pulled when queried. By correctly using foreign keys that are indexed for speed, you can join these separate tables MUCH faster than if you manually added keys that were not indexed.

A database engineer may completely opt out of using foreign keys.  By managing these connections manually, it allows for customization and custom built indices on how these links should be used or queried for. As beginners, foreign keys serve a very good purpose of organizing data.

### Queries

The best way to speed up a database is to ensure that the query is only looking in the required row. If you were to look for birthdays in May, you wouldn't look through ALL the possible birthdays, just the ones necessary. Less rows to search = faster queries!

MySQL has a good tool to optimize queries! The EXPLAIN keyword is used to explain what the database is searching through. When I run an EXPLAIN statement, I get this returned by MySQL:

![mysql query result](http://s3.amazonaws.com/General_V88/boomyeah/company_209/chapter_3594/handouts/chapter3594_6176_mySQLExplain.PNG "query output")

My database is larger than ~1,000,000 but because it is using the where statement, it only has to look through ~70,000 rows!

EXPLAIN can really help you see how many records you are searching through to retrieve your results!

### CACHE CACHE CACHE

Caching is a vital step for the majority of read-only applications. Cache is just a small(or large) storage to store quick access data. Cache essentially saves the result of a query, calculation, or algorithm in order to prevent the same one from running again. Of course, this is practically useless if our data is constantly changing and a query or calculation has to account for that. When it comes to large-scale applications, one must decide over the most recent data vs speed. Google, for example,  is not concerned with every new search request when calculating the trending search of the day. They probably only update that every hour!

#### MySQL cache

Open MySQL Workbench and use these commands to configure your database cache:

```sql
SHOW VARIABLES LIKE 'have_query_cache%'
SHOW VARIABLES LIKE 'query_cache%'
SET GLOBAL <VARIABLE NAME>
```

> Note: Cache is set by bit size. If you don't know what a bit is, it is the smallest piece of information that a computer knows(yes or no, zero or one). A standard kilobyte(kb) is 8000 bits(8 bit per byte, 1000 byte per kilobyte). My database of ~ 70000 rows is ~10MB.

#### my.cnf

Many databases have default configuration file as mentions before. Although you set your cache in the workbench, the settings will reset on your disconnect of the server or database. Your settings can be saved with the configuration file we tweaked before, my.ini  or my.cnf

MySQL(along with many others) has a default config file(called my.ini) that allows you to configure many things like cache, timeouts, ports, etc. Again, if you are using MAMP, this can be found in /Applications/MAMP/conf/my.cnf. Otherwise, it can be found in your installation directory.

#### Distributed Caching

Although MySQL does allow cache, the cache system they use is impractical. It works by saving the query used and is reset every time there is an update. Facebook uses MySQL as its main database but uses Memcache. Memcache is a cache system that allows for distribution. By utilizing a distributing cache, multiple databases can utilize the same cache system. Without a distributed cache system, performance would not be optimized if every database had the same cache query in different cache storage.

Facebook boasts that:
> "... most queries (more than 90 percent) never hit the database at all but only touch the cache layer."

### Partition and Sharding

#### Partition

You may have noticed in the query page that the EXPLAIN keyword had a column with partition. Partition is exactly like what it sounds. You partition your table into different sections. You can think of this as indexing the whole table based on what column you want. For example:

```sql
alter table business_infos
partition by HASH(id)
partitions 200.
```

This SQL code will alter our table business_info table and split it by the column id into 200 equal partitions. However, MySQL database engine(InnoDB) does not allow partitioning on tables that have foreign keys. Why would this be?

My educated guess would be that partitioning whole tables will actually decrease performance if we had to look in multiple places for our data. Hopefully, they will support it in the next release of MySQL.

#### Sharding

Sharding works much the same way as partition does. Instead, you split your actual database into separate databases with lesser rows. Again, this is more than we will cover in this scope because even 10 million records are really not big enough for sharding or partition.

#### Performance Improvement

Every situation in database optimizing is reducing the number of rows we need to search through. Less rows, faster results! In the first example of partitioning by id, the database is split into 200 sections and the rows are put according to their id. Afterward, when querying for id, they only have to search the partitions containing the right ids.

Take for example a messaging application. If one were to partition by date, a query for the database would possibly only go to the partition with the most recent messages, effectively reducing the number of rows to search through and giving the user only the most recent messages(which are the ones we really want!).

### Data Types

Setting the data types from the get-go is important. By choosing the correct type from the start, we end up saving storage and memory. In the most simple term, allocating something to INT vs BIG INT will save you 4 bytes per row. Multiply this by millions and you see a difference. On the other hand, although we do not see an improvement in query time(you might in some case), using correct data type will allow database engines to efficiently use their memory for searches.