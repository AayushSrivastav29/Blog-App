import mongoose from "mongoose";

//comment schema

const commentSchema = mongoose.Schema({
  Post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "postSchema",
  },
  user: {
    type: String,
    required: true,
    maxLength: 50,
  },
  content: {
    type: String,
    maxLength: 100,
  },
});

export default mongoose.model("commentSchema", commentSchema);
