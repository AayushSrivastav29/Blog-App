import likeSchema from "../models/likeSchema.js";
import postSchema from "../models/postSchema.js";

export async function likePost(req, res) {
  try {
    //fetch it
    const { post, user } = req.body;
    //create a schema obj
    const likedPost = new likeSchema({ post, user });
    //insert it in db
    const savelike = await likedPost.save();
    //update the post with the like in the lieks array
    const updatedPost = await postSchema.findByIdAndUpdate(
      post,
      { $push: { likes: savelike._id } },
      { new: true }
    ).populate("likes").exec();

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    console.error(err, "Error in liking post");
    res.status(500).json({
      success: false,
      data: "error in liking post",
      message: err,
    });
  }
}

export async function unlikePost(req,res) {
    try{
    //fetch it will give post id, like id
    const {post,like}= req.body;

    const deletedLike = await likeSchema.findOneAndDelete({post: post, _id:like});

    const updatedPost=await postSchema.findByIdAndUpdate(post, {$pull:{likes:deletedLike._id} },
        {new: true} //updated document
     )
     res.json({
        post: updatedPost
     })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
          data: "error in unliking post"

        })
        return;
    }
} 
 