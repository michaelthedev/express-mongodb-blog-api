# Social-Media-Backend-REST-API

Backend of a Social Media Application.

Uses Express as NodeJs framework. Uses MongoDB and it's ODM library Mongoose.

View a list of all Blogs. 
Add new Blogs.
Edit Blogs.
Delete a single Blog.
Link a Blog to a User using the database Model.

## Updates:
- Added authRoutes for /auth/* routes
- Added authController to handle /auth/* route requests
- Separation of concern: Removed login and signup logic from userController and added it to authController
- Added getSingleUser method to userController