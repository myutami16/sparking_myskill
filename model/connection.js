// import { Sequelize } from "sequelize";

// const connection = new Sequelize("sparking", "root", "zainul09", {
// 	host: "localhost",
// 	dialect: "mysql",
// 	port: 3306,
// });

// import { createPool } from "mysql2";
// const connection = createPool({
// 	host: "localhost",
// 	user: "root",
// 	database: "sparking",
// 	password: "zainul09",
// 	port: 3306,
// });

// export default connection;

import { Sequelize } from "sequelize";

const connection = new Sequelize("sparking", "root", "zainul09", {
	host: "localhost",
	dialect: "mysql",
});

export default connection;
