import mongoose from "mongoose";

//post schema

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 100,
  },
  content: {
    type: String,
    required: true,
    maxLength: 1000,
  },
  createdAt: {
    type: Date,
    requied: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    requied: true,
    default: Date.now(),
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "likeSchema",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "commentSchema",
    },
  ],
});

export default mongoose.model("postSchema", postSchema);
