import postSchema from "../models/postSchema.js";

export default async function createPost(req, res) {
  try {
    //extract from req.body/schema
    const { title, content } = req.body;

    //create a schema obj & insert it into db
    const response = postSchema.create({ title, content });

    res.status(200).json({
      success: true,
      data: response,
      message: `created post successfully`,
    });
  } catch (err) {
    console.error(err, "Error in creating post");
    res.status(500).json({
      success: false,
      data: "error in creating post",
      message: err,
    });
  }
}
