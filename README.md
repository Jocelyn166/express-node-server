# express-node-server
main features in this repo:
1. built-in middleware: 
   built-in middleware to handle urlencoded data - express.urlencoded()
   built-in middleware for json - express.json
   built-in middleware for serve static files - express.static

2. custom middleware:
   create a logger custom middleware to log the http request and log the err

3. create routers with express to serve files in root directory, in the subdir directory, in the employees directory, and handle 404, in the employees directory, create 
   getAllEmployees, createNewEmployee, updateEmployee, deleteEmployee, getEmployee methods with get, put, delete, and post methods to work on the data

4. organize the node.js and express api server with the model view controller design pattern
