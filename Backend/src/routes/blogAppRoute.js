import { Router } from "express";
import createPost from "../controllers/createPost.js";
import deletePost from "../controllers/deletePost.js";
import { getPost,getPostById } from "../controllers/getPost.js";
import  updatePost  from "../controllers/updatePost.js";
import commentPost from "../controllers/commentPost.js";
import {likePost, unlikePost} from "../controllers/likePost.js";

const router = Router();

router.post("/createpost", createPost);

router.get("/getpost", getPost);
router.get("/getpost/:id", getPostById);

router.put("/updatepost", updatePost);

router.delete("/deletepost/:id", deletePost);

router.post("/comments/create", commentPost);

router.post("/likepost/like", likePost);

router.post("/unlikePost/unlike", unlikePost);



export default router;