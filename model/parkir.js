import connection from "./connection.js";
import { DataTypes } from "sequelize";

const Parkir = connection.define(
	"Parkir",
	{
		user_id: {
			type: DataTypes.INTEGER,
			references: "user",
			key: "id",
		},
		duration: DataTypes.INTEGER,
		total: DataTypes.INTEGER,
		nopol: DataTypes.STRING,
	},
	{
		timestamps: false,
		tableName: "parkir",
	}
);
Parkir.belongsTo(UserActivation, { targetKey: "id", foreignKey: "user_id" });

export default Parkir;
