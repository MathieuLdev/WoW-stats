import { wow } from "blizzard.js";

const postRealmVar = (req, res) => {
	res.status(200).send(req.body.region);
};

const getRealms = async (req, res) => {
	const blizzard = await wow.createInstance({
		key: process.env.BLIZZARD_CLIENT_ID,
		secret: process.env.BLIZZARD_CLIENT_SECRET,
	});

	const { data } = await blizzard.realm({ origin: "eu" });
	const realmsList = data.realms;
	res.status(200).send(realmsList);
};

export { getRealms, postRealmVar };
