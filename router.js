import express from "express";
import UserController from "./controller/userController.js";
import authenticate from "./middleware/authenticate.js";
import axios from "axios";

const router = express.Router();

// USER
router.get("/user", UserController.get);
router.get("/user/me", authenticate, UserController.me);
router.get("/user/:id", UserController.detail);
router.post("/user", UserController.store);
router.post("/user/login", UserController.login);
router.put("/user/:id", UserController.update);
router.delete("/user/:id", UserController.delete);

router.get("/bitcoin-price-index", async (req, res) => {
	const response = await axios.get(
		"https://api.coindesk.com/v1/bpi/currentprice.json"
	);
	return res.json(response.data);
});
export default router;
