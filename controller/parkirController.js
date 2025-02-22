import Parkir from "../model/parkir.js";
import User from "../model/user.js";
export default class ParkirController {
	static async order(req, res) {
		const { duration, nopol } = req.body;
		const user_id = req.userId;
		const total = duration * 4000;
		const parkir = await Parkir.create({ user_id, duration, total, nopol });
		res.json(parkir);
	}
	static async get(req, res) {
		const user_id = req.userId;
		const parkir = await Parkir.findAll({
			where: { user_id },
			include: [User],
		});
		res.json(parkir);
	}
	static async update(req, res) {
		const { duration, nopol } = req.body;
		const user_id = req.userId;
		const total = duration * 4000;

		const parkir_id = req.params.id;
		const parkir = await Parkir.update(
			{ user_id, duration, total, nopol },
			{
				where: { id: parkir_id },
			}
		);
		res.json(parkir);
	}
	static async cancel(req, res) {
		const parkir_id = req.params.id;
		const parkir = await Parkir.destroy({ where: { id: parkir_id } });
		res.json(parkir);
	}
}
