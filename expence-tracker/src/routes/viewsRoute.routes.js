import { Router } from "express";
import {ifAlReadyLogin, isLogin} from "../middlewares/auth.middlewares.js"
import { changeUserPasswordPage, loginUserPage, registerUserPage, resetUserPasswordPage, updateUserPage, userDetails, userProfile} from "../controllers/views.controllers.js";
const viewRouter = Router()

viewRouter.route("/register").get(ifAlReadyLogin, registerUserPage)
viewRouter.route("/login").get(ifAlReadyLogin, loginUserPage)
viewRouter.route("/resetUserPassword").get(ifAlReadyLogin, resetUserPasswordPage)
viewRouter.route("/updatedUser").get(isLogin, updateUserPage)
viewRouter.route("/changeUserPassword").get(isLogin, changeUserPasswordPage)

viewRouter.route("/profile").get(isLogin, userProfile)
viewRouter.route("/userDetails").get(isLogin, userDetails)


export default viewRouter