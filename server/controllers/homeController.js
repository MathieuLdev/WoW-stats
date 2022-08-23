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
	const { region, name, realm } = req.query;
	const blizzard = await wow.createInstance({
		key: process.env.BLIZZARD_CLIENT_ID,
		secret: process.env.BLIZZARD_CLIENT_SECRET,
	});
	// console.log(req.query);
	const media = await blizzard.characterMedia({
		origin: "eu",
		realm: "ysondre",
		name: "nemoo",
	});
	const {
		data: { assets },
	} = media;

	const profile = await blizzard.characterProfile({
		origin: "eu",
		realm: "ysondre",
		name: "nemoo",
	});

	const {
		data: { faction, race, guild, character_class, covenant_progress },
	} = profile;
	const characterInfos = {
		faction: faction.name,
		class: character_class.name,
		race: race.name,
		covenant: covenant_progress.chosen_covenant.name,
		guild: guild.name,
	};

	res.status(200).send({ assets: assets, characterInfos: characterInfos });
};

export { getRealms, getUserMedia };
