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

const getUserMedia = async (req, res) => {
	const { region, realm, name } = req.query;
	const blizzard = await wow.createInstance({
		key: process.env.BLIZZARD_CLIENT_ID,
		secret: process.env.BLIZZARD_CLIENT_SECRET,
	});

	const media = await blizzard.characterMedia({
		origin: region,
		realm: realm,
		name: name,
	});
	const {
		data: { assets },
	} = media;

	const profile = await blizzard.characterProfile({
		origin: region,
		realm: realm,
		name: name,
	});

	const {
		data: { faction, race, character_class },
	} = profile;
	const characterInfos = {
		faction: faction.name,
		class: character_class.name,
		race: race.name,
		covenant: profile.data?.covenant_progress?.chosen_covenant?.name,
		guild: profile.data?.guild?.name,
	};

	res.status(200).send({ assets, characterInfos });
};

export { getRealms, getUserMedia };
