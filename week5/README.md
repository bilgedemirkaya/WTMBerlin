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

--- 
To be able to add a method to our modal; 
``PhoneSchema.methods.downloadApp = async function (app) { }``

## Signal to noise ratio

Signal-to-noise ratio is a measure used engineering that compares the level of a desired signal to the level of background noise. That is basically means how quality is your signal is.We have that concept in our code as well.

In programming, single to noise ratio is; the number of the characters you have to type to get a funtionality done. In javascript signal to noise is very high.


## Cross Functional Program

In my phone modal I declared a method of download an app. 

```
 PhoneSchema.methods.downloadApp = async function (appId) {
    const socialApp = await platformService.find(appId)
    this.apps.push(appId)
    socialApp.users.push(this)

    await this.save()
    await socialApp.save()
}
``` 

The problem with this code is, it dictates also a change in other Platform modal. It is modifying and saving a Platform and it is dangerous. That means there are a lot of dependencies in two modals. So Changing a platform is not responsibility of a phone modal. So change cannot happen in one of the functions. It can only happen on a higher level function which can access both of these functions independently. So we will carry our function above into the **phoneService** and take out the responsibilty from the person modal. However this is not an ideal way etiher. It is still a phone service and changin the platform modal is not its business. Therefore we need a **new service** to implement download the app functionality.

This will decrease the signal to noise rotio but definitely a better architecture. Because multiple teams maintain these modals and we dont want any dependecies so we need higher level entities.

**Note**: Models can have their own methods that are only related themselves.
**Note**: $gt is a Mongodb operator that selects those documents where the value of the field is greater than (i.e. > ) the specified value 