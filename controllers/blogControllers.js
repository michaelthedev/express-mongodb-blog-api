const Blog = require("../models/blogModel");
const User = require("../models/userModel");

const getAllBlogs = async (req, res) => {
  try {
    let blogs = await Blog.find();
    if (!blogs) {
      return res.status(404).json({ message: "Couldn't get Blogs" });
    }
    return res.status(200).json({ blogs });
  } catch (error) {
    console.log(error.message);
  }
};
const addBlog = async (req, res) => {
  const { title, description, image, user } = req.body;
  let existingUser;
  try {
    existingUser = await User.findById({ user });
    if (!existingUser) {
      return res.status(201).json({ message: " Unabe to find User By his Id" });
    }
    return res.status(201).json({ blog });
  } catch (error) {
    console.log(error.message);
  }
};
const updateBlog = async (req, res) => {
  const { title, description } = req.body;
  const id = req.params.id;
  try {
    const blog = await Blog.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
      }
    );
    return res.status(200).json({ blog });
  } catch (error) {
    return res.status(400).json({ error: " could not update blog" });
  }
};
const deleteBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await Blog.findByIdAndRemove(id);
    if (!blog) {
      return res.status(404).json({ error: "could not delete blog" });
    }
    return res.status(200).json({ success: "deleted" });
  } catch (error) {
    return res.status(404).json({ message: "That blog does not exist" });
  }
};
const getSingleBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res
        .status(404)
        .json({ message: "sorry,that blog does not exist" });
    }
    return res.status(200).json({ blog });
  } catch (error) {
    return res.status(404).json({ error: "error getting blog" });
  }
};
module.exports = {
  getAllBlogs,
  addBlog,
  updateBlog,
  deleteBlog,
  getSingleBlog,
};
