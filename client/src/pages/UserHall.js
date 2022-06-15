import Wrapper from "../assets/wrappers/UserHall";
import { Media, Menu, ToggleBg } from "../components";
import { useAppContext } from "../context/appContext";

const UserHall = () => {
	const { characterName } = useAppContext();
	return (
		<Wrapper>
			<ToggleBg />
			<h1>{characterName}</h1>
			<div className="user-hall">
				<Media />
				<Menu />
			</div>
		</Wrapper>
	);
};

export default UserHall;
