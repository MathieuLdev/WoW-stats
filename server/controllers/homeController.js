import { wow } from "blizzard.js";

const getRealms = async (req, res) => {
	const region = req.query.region;
	const blizzard = await wow.createInstance({
		key: process.env.BLIZZARD_CLIENT_ID,
		secret: process.env.BLIZZARD_CLIENT_SECRET,
	});

	const { data } = await blizzard.realm({ origin: region });
	const realmsList = data.realms;
	res.status(200).send(realmsList);
};

export { getRealms };
