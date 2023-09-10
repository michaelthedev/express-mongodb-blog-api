# Blog API created with Express and MongoDB

####  Forked from [original repo](https://github.com/Omokhefue/Social-Media-Backend-REST-API) by [@Omokhefue](https://github.com/Omokhefue)

Uses Express as NodeJs framework. Uses MongoDB and it's ODM library Mongoose.

View a list of all Blogs. 
Add new Blogs.
Edit Blogs.
Delete a single Blog.
Link a Blog to a User using the database Model.

## Installation
- This ReadMe doesn't include instructions for installing MongoDB. Please refer to the official MongoDB documentation for installation instructions (https://www.mongodb.com/languages/javascript/mongodb-and-npm-tutorial).
- Set up your cluster on mongodb and get your database uri before continuing.
- Clone the repository.
- Run `npm install` to install all dependencies.
- Paste your database uri in .env file
    ```dotenv
    MONGO_URI=<your database uri>
    ```
- Run `npm start` to start the server on port 3000 (default)
- If you want to run the server on a different port, edit .env file and change the value of PORT variable.
- You should be able to access the server on `http://localhost:3000` or `http://localhost:<PORT>`

## Updates:
- Added authRoutes for /auth/* routes
- Added authController to handle /auth/* route requests
- Separation of concern: Removed login and signup logic from userController and added it to authController
- Added getSingleUser method to userController