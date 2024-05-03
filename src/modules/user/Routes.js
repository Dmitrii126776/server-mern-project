import {Router} from "express";
import userRegistration from "./userRegistration";
import userLogin from "./userLogin";
import userLogout from "./userLogout";
import getUserByID from "./getUserByID";
import getAllUsers from "./getAllUsers";
import refreshToken from "./refreshToken";

const userRouter = Router();

userRouter.post('/registration', userRegistration)
userRouter.post('/login', userLogin)
userRouter.post('/logout', userLogout)
userRouter.get('/refresh', refreshToken)
userRouter.get('/users/:userId', getUserByID)
userRouter.get('/users', getAllUsers)

export default userRouter;
