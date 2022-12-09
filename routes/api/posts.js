const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();
//Get post
router.get("/", async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({  }).toArray());
});

//Add post

//delete post
async function loadPostsCollection() {
  const client = mongodb.MongoClient.connect(
    "mongodb+srv://maxe:maxe@cluster0.q8jo5fg.mongodb.net/portfolio",
    {
      useNewUrlParser: true,
    }
  );
  return client.db('portfolio').collection('posts');
}
module.exports = router;
