import postSchema from "../models/postSchema.js";

export default async function deletePost(req, res) {
  try {
    const id = req.params.id;

    await postSchema.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: `deleted post successfully`,
    });
  } catch (err) {
    console.error(err, "Error in deleting post");
    res.status(500).json({
      success: false,
      data: "error in deleting post",
      message: err,
    });
  }
}
