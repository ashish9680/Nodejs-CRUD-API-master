const express = require('express')
const router = express.Router();

// Importing Model
const Post = require('../Model/Posts');

// To get whole post
router.get('/', async (req, res, next) => {
     try {
          const post = await Post.find();
          res.json(post)
     } catch (err) {
          res.json({ message: err });
     }
})

// Submit post
router.post('/', async (req, res, next) => {
     var post = new Post({
          title: req.body.title,
          description: req.body.description
     });
     try {
          const savedPost = await post.save()
          res.json(savedPost);
     } catch (err) {
          res.json({ message: err });
     }
})

// Spacific post
router.get('/:postId', async (req, res, next) => {
     try {
          const post = await Post.findById(req.params.postId);
          res.json(post)
     } catch (err) {
          res.json({ message: err })
     }
})

// Delete Spacific post
router.delete('/:postId', async (req, res, next) => {
     try {
          const deletepost = await Post.remove({ _id: req.params.postId });
          res.json(deletepost)
     } catch (err) {
          res.json({ message: err })
     }
})

// Update spactific post
router.patch('/:postId', async (req, res, next) => {
     try {
          const updatedPost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } });
          res.json(updatedPost);
     } catch (err) {
          res.json({ message: err })
     }
})

module.exports = router