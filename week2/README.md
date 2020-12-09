## Node JS

Node JS is an open source, cross platform JS runtime environment that executes JS code outside of a browser.
- Cross platform means that it can run on different architectures. In this case windows, linux, mac and even lightbox 
- Runtime environment means you dont have to do anything beforehand to be able to run the code. It means there is another software that takes your  plain text JS code as an input, interpretes it and outputs it. So **no need to compile**.
- to create a node.js project ``npm init``


#### How to write to a file and how to read from a file
- There is a speacial module ``fs`` which is short for file system module. It's included in all node.js versions so no need to install it additionally. We just need to require it. ``const fs = require('fs')``

- To write in a new file *synchronosly* use ``fs.writeFileSync``. It takes two parameter. First the name of the file you want to write in, second is whatever you want to type in. But data should be in string format bcs file only understand strings, not objects. So we use :
``fs.writeFileSync("data.json", JSON.stringify(data))``

**Note** : "``fs.writeFile(...)`` requires a third (or fourth) parameter which is a callback function to be invoked when the operation completes. Should either provide a callback function or use ``fs.writeFileSync(...)``"

- To read from a file ``fs.readFileSync(filename)`` . But it reads the buffer by default and doesn't know the the type of the data.So we need to add a second parameter 'utf8' to indicate that read the binary code in string format.(Convert with ASCII).

- Now when we add the third parameter, it will give the output as string so we cannot reach the properties of it. ``JSON.parse`` will convert it into JSON format again. 

**NOTE** If you want to write two different data in the file, you can just make them array and JSON.stringify will be able to stingify the array as well. It doesn't have to be an object.