
import { Router } from "express";
import { registerUser } from "../controllers/user.controler.js";
import { upload } from "../middlewares/multer.middileware.js";




const router=Router()

router.route("/register").post(
    upload.fields([
{

    name:"avater",
    maxCount:1
},
{
    name:"coverImage",
    maxCount:1
}
    ]),
    registerUser)

export default router