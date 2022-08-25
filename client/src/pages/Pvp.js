import React, { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { Loading } from "../components";
import Wrapper from "../assets/wrappers/Pvp";

const Pvp = () => {
	const { getUserPvp, pvp } = useAppContext();

	useEffect(() => {
		if (pvp.length === 0) {
			getUserPvp();
		}
	}, []);

	return (
		<Wrapper>
			<h1>PVP</h1>
			<h2>Honor level : {pvp.honor_level}</h2>
			{pvp.length !== 0 ? (
				<div className="battleground-container">
					{pvp.pvp_map_statistics.map((bg) => {
						const {
							world_map: { id, name },
							match_statistics: { played, won },
						} = bg;
						return (
							<div key={id} className={`battleground id${id}`}>
								<p>{name}</p>
								<p>Played : {played}</p>
								<p>Won : {won}</p>
							</div>
						);
					})}
				</div>
			) : (
				<Loading />
			)}
		</Wrapper>
	);
};

export default Pvp;
