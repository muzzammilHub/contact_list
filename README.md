![ui](https://user-images.githubusercontent.com/127538327/236254959-96e1cfad-6648-4d6e-9f86-633b0d35acff.png)

# Creating Basic Contact List using express js framework.

# express js
- fast
- unopinionated
- minimalist

# MVC is a way of structuring the directory.

- types of request?
1. get => fetching data which already present in server.
2. post => posting data into server and as a result of posting data server responds with some data.
3. put 
4. patch 
5. delete
- The last three one works only on asynchronous or ajax
- synchronous request


- whatever the kind of request is sending, the functions at server side written accordingly.


- Middleware is a software layer that is resposible for processing incomming request and outgoing response.

1. logging
2. authentication
3. error handling
4. parsing request data

next() function is used to pass control to the next middle ware function in the stack.

# Two types of middle ware
1. Global Middle ware
2. Local Middle ware

- Global 
- app.use((req, res, next)=>{
    /* statement */
    next();
})

- local
- app.get("/user" , (req, res, next)=>{
    /* statment */
    next();
}, (req, res)=>{
    /* statement */
})

- middleware function can manipulate the request and response objects and then call the next() function to pass control to the next middleware function in the chain.

- The process continues until the last middleware function is called, which then hands off control to the route handler. 

- The route handler is resposible for processing the request and sending a respose back to the client.


- function myMiddleware(req, res, next){
    // Do something with the req or res object
    console.log("Middleware function called");
    // Call the next middleware function in the stack
    next();
}



# database

- mongoose.connect() is used to connect with databse who name is contact_list_db

- db = mongoose.connection gives us access to use database or through this we could check that, is database connected properly or not.


- schema tells that what fields would be their in one document.

- mongoose.model() provides an interface for querying and manipulating the data.

- populating the database mean to fill the table with table.


