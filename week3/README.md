## Static Functions
Static functions are functions on the classes that you can call.Just regular functions attached to the class but **instances you create cannot acces them**. They are at the higher level.

Sometimes we need a functionality that the classes themselves have, not individual instances. So class itself can know how to create new instance. So inside of the class we can do, `` static create() { return new Meetup() } `` . So instances doesnt have a create method but meetup class does. And if you don't pass needed parameters, you will have an empty object created. ( if you have an database and you want to load it while creating and object, pass it as parameter)

## Asynchronous Javascript
There is no synchronous in programming. Everything is asynchronous, but we needed a User Interface. And this is called 'Event based programming'. Anything that requires interactions is event based. It is the main model of Javascript, it is an event loop based environment for running server side code.

with sync functions, until it loads, program will block user to access functionality which is not useful.

Javascript especially node js is non-blocking.So when you make a readFile function asynchronous for example, you are telling, just read the file and let us know when it is done. Therefor as a third parameter, we need to pass a callback function. In node.js there is a standard way of parsing errors, to be able to catch the error, you need to pass it as a first parameter in the callback function. 
**Every callback function in node.js by definition, requires error as a first parameter which has a default value of NULL.**