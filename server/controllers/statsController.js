import { wow } from "blizzard.js";

const getUserStats = async (req, res) => {
	const { region, realm, name } = req.query;

	const blizzard = await wow.createInstance({
		key: process.env.BLIZZARD_CLIENT_ID,
		secret: process.env.BLIZZARD_CLIENT_SECRET,
	});

	const stats = await blizzard.characterStatistics({
		origin: region,
		realm: realm,
		name: name,
	});

	const { data } = stats;
	res.status(200).send(data);
};

export { getUserStats };
