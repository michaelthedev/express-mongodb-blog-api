const { Router } = require('express');
const router = Router()
const { getAllBlogs, addBlog, updateBlog ,getSingleBlog, deleteBlog} = require('../controllers/blogControllers');


router.get('/', getAllBlogs)
router.post('/new-blog', addBlog)
router.patch('/edit-blog/:id', updateBlog)
router.get('/:id', getSingleBlog)
router.delete('/delete/:id', deleteBlog)

module.exports = router;