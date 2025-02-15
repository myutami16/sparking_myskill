// Connection Database
// const create = (username, email, password) => {
// 	const query = `INSERT INTO user (username, email, password) VALUES ('${username}', '${email}', '${password}')`;

// 	connection.query(query, (err, result) => {
// 		if (err) {
// 			console.error("Error executing query:", err);
// 			return;
// 		}
// 		console.log("User  created:", result);
// 	});
// };

// const username = "Uut";
// const email = "uut@email.com";
// const password = bcrypt.hashSync("utami16", 8);

// create(username, email, password);

// Fungsi CRUD
// import User from "./user.js";
// import bcrypt from "bcrypt";
// const create = async () => {
// 	const username = "Uutbaru";
// 	const email = "uutbarubikin@email.com";
// 	const password = bcrypt.hashSync("secret", 8);

// 	const user = await User.create({
// 		username,
// 		email,
// 		password,
// 	});
// 	console.log(user);
// };

// const read = async () => {
// 	const users = await User.findAll();
// 	console.log(users);
// };

// const update = async () => {
// 	const username = "UutbaruUpdate";
// 	const email = "uutbaruUpdate@email.com";
// 	const password = bcrypt.hashSync("secret", 8);

// 	const user = await User.update(
// 		{
// 			username,
// 			email,
// 			password,
// 		},
// 		{ where: { id: 2 } }
// 	);
// 	console.log(user);
// };

// const delete_ = async () => {
// 	const delete_ = await User.destroy({ where: { id: 2 } });
// 	console.log(delete_);
// };

// create();
// read();
// update();
// delete_();

// API Express
import express from "express";
import router from "./router.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(router);

const port = 3002;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
