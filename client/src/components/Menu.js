import { NavLink } from "react-router-dom";

const Menu = () => {
	return (
		<div>
			<NavLink to="/user-hall/stats">Stats</NavLink>
			<NavLink to="/user-hall/raid">Raid</NavLink>
			<NavLink to="/user-hall/mythic">Mythic +</NavLink>
			<NavLink to="/user-hall/pvp">PVP</NavLink>
		</div>
	);
};

export default Menu;
