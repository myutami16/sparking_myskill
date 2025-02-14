import { createPool } from "mysql2";

const connection = createPool({
	host: "localhost",
	user: "root",
	database: "sparking",
	password: "zainul09",
	port: 3306,
});

export default connection;
