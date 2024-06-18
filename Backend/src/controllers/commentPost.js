import commentSchema from "../models/commentSchema.js";
import postSchema from "../models/postSchema.js";

export default async function commentPost(req, res) {
  try {
    //fetch it
    const { post, user, content } = req.body;
    //create commschema obj
    const comment = new commentSchema({ post, user, content });
    //save the obj into the db
    const savedComment = await comment.save();

    const updatedPost = await postSchema
      .findByIdAndUpdate(
        post,
        { $push: { comments: savedComment._id } },
        { new: true }
      )
      .populate("comments")
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    console.error(err, "Error in commenting post");
    res.status(500).json({
      success: false,
      data: "error in commenting post",
      message: err,
    });
  }
}
