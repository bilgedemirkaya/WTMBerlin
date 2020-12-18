## Mongoose
A third party library which provides a schema-based solution to model the application data.

We need a schema similar to the constructor to structure our data.
So to be able to say we need a person with those fields, we need a constant var for our schema and equal to mongoose's schema which takes a parameter of an object of our fields. Example;
``` const PersonSchema = new mongoose.Schema({
name: String,
age: Number
})
``` 
*We need to specify the data types for database* 
*We don't need to include id, bcs mongodb will include unique id for each record*
Then we need a model, and need to export that model. That basically it and we can communicate the mongoose with our application.

## Why did we need base-server?
We didn't directly talk to database in our index files but *modularize* our code. Therefore, even database changes someday, we will not need to touch our index file, it doesn't depend on database. Modules structures for responsiblities, index file doesnt have responsiblity for talking to databse but only routers. Therefor we needed a base-server in between.

Base-server is a link that goes btw database and routers. It defines how we should interact with the database.
