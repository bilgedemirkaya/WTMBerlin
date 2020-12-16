## DNS

DNS is basically a list that matches the domain names to IP adresses. DNS server is just a machine running somewhere, that matches domain names to IP adresses.

## Express.js

is a framework that enables us to create web servers easily. It gives us flexibility and it is easy of use.
After installing it, we need to import it ``const express = require('express')``. 
Next step is initialize this framework, ``const app = express()``. we just created a web application with this line.
Then you need to specify the port which express listen to. ``app.listen(3000)``.

**Note** Whenever you are cominicating with the external environment, is usually asynchronous. 

So when we say app.listen() it is async and we need to have a callback function here.
 ``app.listen(3000, () => {
console.log("ok") // we just need to know it is working, anything else.
})``

--- 
Whenever server talks to web servers, it needs to use verbs. For get request, first parameter is what root to get. Second is a callback for telling our web server how to respond.
``
app.get('/', (req,res) => {

})
``
req = request object; whenever we type localhost 3000, there is a request coming to web server from the browser.
Then the code do some processing, and it needs to return some response to the browser (res = result second parameter).

**Note** : To install a package globally (so you can use in any projects) -g.
**Note** : you dont need to shut down the server if u use nodemon package.

**Another way of generating html; pug file;**
- pug files doesnt have any closing tags
- you can put variables in it

## Axios
An external library we used for our project to post data to the dtabase. we usually post data through forms but for this project we use axios bcs we dont have a front end yet.
Syntax is like; 
``axios.post('/person', {name: 'pupu'}).then(console.log)``

in order to reach that request that we made on browser we use ``req.body`` and parse it by using aother library called ``body-parser``