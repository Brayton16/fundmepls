import {Router} from "express"
import {activeUserCount,  addUserMoney,  changeUserState, createUser, donationsCount, getAllDonations, getUserDonations, login, makeDonation, readUser, readUsers, updateUser} from "../models/users.models.js"

const router = Router(); 

router.post("/users", createUser);
router.put("/users", updateUser);  
router.get("/users", readUsers);
router.get("/users/id", readUser);

router.put("/users/activate", changeUserState);
router.get("/users/activate/count", activeUserCount);

router.put("/users/money", addUserMoney);

router.post("/users/donation", makeDonation);
router.get("/users/donation", getUserDonations);
router.get("/users/donation/all", getAllDonations);
router.get("/users/donation/count", donationsCount);

router.get("/users/login", login);

export default router 