import { wow } from "blizzard.js";

const getUserPvp = async (req, res) => {
	const { region, realm, name } = req.query;

	const blizzard = await wow.createInstance({
		key: process.env.BLIZZARD_CLIENT_ID,
		secret: process.env.BLIZZARD_CLIENT_SECRET,
	});

	const pvp = await blizzard.characterPVP({
		origin: region,
		realm: realm,
		name: name,
	});

	const { data } = pvp;
	res.status(200).send(data);
};

export { getUserPvp };
