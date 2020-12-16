## Static Functions
Static functions are functions on the classes that you can call.Just regular functions attached to the class but **instances you create cannot acces them**. They are at the higher level.

Sometimes we need a functionality that the classes themselves have, not individual instances. So class itself can know how to create new instance. So inside of the class we can do, `` static create() { return new Meetup() } `` . So instances doesnt have a create method but meetup class does. And if you don't pass needed parameters, you will have an empty object created. ( if you have an database and you want to load it while creating and object, pass it as parameter)

## Asynchronous Javascript
There is no synchronous in programming. Everything is asynchronous, but we needed a User Interface. And this is called 'Event based programming'. Anything that requires interactions is event based. It is the main model of Javascript, it is an event loop based environment for running server side code.

with sync functions, until it loads, program will block user to access functionality which is not useful.

Javascript especially node js is non-blocking.So when you make a readFile function asynchronous for example, you are telling, just read the file and let us know when it is done. *Node.js doesnt have the necessary rights to readh the file, it just tells OS to read the file.* Therefor as a third parameter, we need to pass a callback function. It is 'calling us back' when it is done. In node.js there is a standard way of parsing errors, to be able to catch the error, you need to pass it as a first parameter in the callback function. 
**Every callback function in node.js by definition, requires error as a first parameter which has a default value of NULL.**

## readFile function asynchronously
```
const load = function(filename, callback) {
    fs.readFile(filename, 'utf8',(err, file) => {
        if(err) {
            console.log("there is error",err);
            callback(err);
            return;
        }
        callback(err, JSON.parse(file));
    });
}
```
Always check the errors when calling a callback function.

## Which line will execute first? 
``` 
fs.readFile(__dirname + '/files/1.txt', 'utf8', (err, contents1) => {
    console.log(contents1)
})

fs.readFile(__dirname + '/files/2.txt', 'utf8', (err, contents2) => {
    console.log(contents2)
})

fs.readFile(__dirname + '/files/3.txt', 'utf8', (err, contents3) => {
    console.log(contents3)   
})

console.log('am i first')
``` 
It's going to execute line 31,35,39 and 43. Log the 'am i first'. And then it will log contents from the files randomly. Because operating system reads these files whenever it wants. If second is in memory, it can load faster than first file for example. **Random Access Memory (RAM)** is the main memory in a computer and its access time is random. 

If you want them execute in order you need to put them in callback hell.

```
fs.readFile(__dirname + '/files/1.txt', 'utf8', (err, contents1) => {
    console.log(contents1)
    fs.readFile(__dirname + '/files/2.txt', 'utf8', (err, contents2) => {
        console.log(contents2)
        fs.readFile(__dirname + '/files/3.txt', 'utf8', (err, contents3) => {
            console.log(contents3)
        })
    })
})
```
This time the order will be "am i first", firstfile, second, third. 

## Promises

When a promise is created it's either will be resolved or rejected. This is the alternate way of impelementing code above. WHenever you have a async function you need to use promises. There are only couple of instances you should use callbacks instead of promises and these instance are real event-driven programming. ( when yo are listening for a click for example)

```
// async function
 let readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, contents) => {
            if (err) {
                console.log('there is an error', err)
                return reject(err)
            }
            resolve(contents)
        })
    })
}

// execute async function and chain the calls.

readFile(__dirname + '/files/1.txt')
    .then(console.log)
    .then(() => readFile(__dirname + '/files/2.txt'))
    .then(console.log)
    .then(() => readFile(__dirname + '/files/3.txt'))
    .then(console.log)
    .catch(console.log)
```

It's same with the try catch function functionality. We do the tasks in order and then catch if there is an error.

## Async Await
It is originially C# practice and JS started aloow to implement it for 2-3 years. Whenever we have a promise we can use aysnc await rather than `then()`

```
async function main() {
    const contents1 = await readFile(__dirname + '/files/1.txt')
    console.log(contents1)

    const contents2 = await readFile(__dirname + '/files/2.txt')
    console.log(contents2)

    const contents3 = await readFile(__dirname + '/files/3.txt')
    console.log(contents3)
}
main() 
console.log("am i frst")
```

Now this will read the files respectively.

**Note** there is a function called promisify which takes to callback and return it into promise.

## Service based Architecture

Classes are modeling the real world objects. But where those models will live? How do we find the functionality of filtering, updating, creating, deleting these models? This is where services come into play.

You shouldn't be dealing with creating, saving, mapping them in you main function. They should be wrapped in services. 

example; 
```
async function main() {
    const people = await PersonService.findAll()
    const meetup = await MeetupService.find(1)

    meetup.report()
}
main() 
```

*Notes are taken from the WTMBerlin classes*