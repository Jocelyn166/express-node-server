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
5. use require('crypto').randomBytes(64).toString('hex') to generate accessToken, and refreshToken secret, put the secret in .env, and .env in .gitignore file
6. crete registerController file and authController file to handle user register and log in with username and password, use bcrypt.hash(pwd, 10) to hash the pwd that user use to register, use bcrypt.compare()to compare the pwd user login input with the password stored in DB
7. after user handleLogin, we issue an accessToken and a refreshToken, we send the accessToken using JSON, we store the refreshToken in db which allow the user to log out, and we send the refreshToken using httpOnly cookie, which is not available to javascript 
8. create a JWT verification middleware, to check for the presence of a valid JWT in the "Authorization" header of the request, then add it to protect routes
9. create register, auth, refresh, logout routes, with JWT authentication
10. add roles for each user, create veirfyRoles middleware to verify if the request is within allowedRoles and grant access to only allowed routes
