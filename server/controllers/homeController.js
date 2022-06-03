// import { wow } from "blizzard.js";
import { BlizzAPI } from "blizzapi";

const getRealms = async (req, res) => {
	// const wowClient = await wow.createInstance({
	// 	key: process.env.BLIZZARD_CLIENT_ID,
	// 	secret: process.env.BLIZZARD_CLIENT_SECRET,
	// 	origin: "us", // optional
	// 	locale: "en_US", // optional
	// 	token: "", // optional
	// });
	// const headers = await wowClient.defaults;
	// const response = await wow.realm(null, headers);
	// const test = await realm(null, headers);

	const BnetApi = new BlizzAPI({
		region: "eu",
		clientId: process.env.BLIZZARD_CLIENT_ID,
		clientSecret: process.env.BLIZZARD_CLIENT_SECRET,
	});
	await BnetApi.getAccessToken();
	const realmsList = await BnetApi.query(
		"/data/wow/realm/index?namespace=dynamic-eu&locale=fr_FR",
	);
	const { realms } = realmsList;

	console.log("hello");
	res.status(200).send(realms);
};

export { getRealms };
