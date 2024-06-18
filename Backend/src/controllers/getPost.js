import postSchema from "../models/postSchema.js";

export async function getPost(req, res) {
  try {
    const response = await postSchema
      .find({})
      .populate("likes")
      .populate("comments")
      .exec();

    res.status(200).json({
      success: true,
      data: response,
      message: `get post successfully`,
    });
  } catch (err) {
    console.error(err, "Error in get post");
    res.status(500).json({
      success: false,
      data: "error in get post",
      message: err,
    });
  }
}

export async function getPostById(req, res) {
  try {
    const { id } = req.params;
    const response = await postSchema.findById(id);

    res.status(200).json({
      success: true,
      data: response,
      message: `get post by id successfully`,
    });
  } catch (err) {
    console.error(err, "Error in get post by id");
    res.status(500).json({
      success: false,
      data: "error in get post by id",
      message: err,
    });
  }
}
