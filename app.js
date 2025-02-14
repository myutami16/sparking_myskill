import connection from "./connection.js";
import bcrypt from "bcrypt";

const create = (username, email, password) => {
	const query = `INSERT INTO user (username, email, password) VALUES ('${username}', '${email}', '${password}')`;

	connection.query(query, (err, result) => {
		if (err) {
			console.error("Error executing query:", err);
			return;
		}
		console.log("User  created:", result);
	});
};

const username = "Uut";
const email = "uut@email.com";
const password = bcrypt.hashSync("utami16", 8);

create(username, email, password);
