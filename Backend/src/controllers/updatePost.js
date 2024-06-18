import postSchema from "../models/postSchema.js";

export default async function updatePost(req, res) {
  try {
    
    // const {id}= req.params;
    const {post,title, content}= req.body;
   const response= await postSchema.findOneAndUpdate({post:post._id},{$push:{title,content,updatedAt:Date.now()}},
    {new:true})
    .populate("likes", "comments").exec();

    res.status(200).json({
      success: true,
      data: response,
      message: `update post successfully`,
    });
  } catch (err) {
    console.error(err, "Error in update post");
    res.status(500).json({
      success: false,
      data: "error in update post",
      message: err,
    });
  }
}