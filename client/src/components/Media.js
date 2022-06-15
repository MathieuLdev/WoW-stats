import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { Loading } from "../components";
import Wrapper from "../assets/wrappers/Media";

const Media = () => {
	const { getUserMedia, media, isLoading } = useAppContext();
	useEffect(() => {
		getUserMedia();
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Wrapper>
			<div className="media">
				<img className="avatar" src={media[1]?.value} alt="avatar-image" />
				<div>
					<p>Faction</p>
					<p>Race</p>
					<p>Covenant</p>
				</div>
			</div>
		</Wrapper>
	);
};

export default Media;
