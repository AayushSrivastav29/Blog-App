import mongoose from "mongoose";
//like schema

const likeSchema = mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "postSchema", // Reference to the postschema model
  },
  user: {
    type: String,
    required: true,
    maxLength: 50,
  },
});

export default mongoose.model("likeSchema", likeSchema);
