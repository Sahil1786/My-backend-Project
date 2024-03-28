import { Router } from "express";
import { loginUser, logoutUser, registerUser ,refreshAcessToken} from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { changeCurrentPassword, getCurrentUser, getUserChannelProfie, getWtchHistory, updateAccountDetails, updateUserAvatar, updateUserCoverImage } from "../controllers/user.controler.js";


const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }, 
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
    )

router.route("/login").post(loginUser)


//secured routes
router.route("/logout").post(verifyJWT,  logoutUser)
router.route("/refresh-token").post(refreshAcessToken)
router.route("/change-Password").post(verifyJWT,changeCurrentPassword)
router.route("/current-user").get(verifyJWT,getCurrentUser)
router.route('/update-account').patch(verifyJWT,updateAccountDetails)
router.route("/avtar").patch(verifyJWT,upload.single("avatar"),updateUserAvatar)
router.route("cover-immage").patch(verifyJWT,upload.single("/coverImage"),updateUserCoverImage)
router.route("/c/:username").get(verifyJWT,getUserChannelProfie)
router.route("/history").get(verifyJWT,getWtchHistory)

export default router