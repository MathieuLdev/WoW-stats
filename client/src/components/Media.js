import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { Loading } from "../components";
import Wrapper from "../assets/wrappers/Media";

const Media = () => {
	const { getUserMedia, media, isLoading, characterInfos } = useAppContext();
	useEffect(() => {
		if (media.length === 0) {
			getUserMedia();
		}
	}, [characterInfos]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Wrapper>
			<div className="media">
				<img className="avatar" src={media[1]?.value} alt="avatar" />
				<div className="infos">
					<p>Faction : {characterInfos.faction}</p>
					<p>Class : {characterInfos.class}</p>
					<p>Race : {characterInfos.race}</p>
					<p>Covenant : {characterInfos.covenant}</p>
					<p>Guild : {characterInfos.guild}</p>
				</div>
			</div>
		</Wrapper>
	);
};

export default Media;
