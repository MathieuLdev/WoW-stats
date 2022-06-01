import React from "react";
import UserSearch from "../components/UserSearch";
import Wrapper from "../assets/wrappers/Home";
import wowLogo from "../assets/img/World_of_Warcraft_Logo.png";

const Home = () => {
	return (
		<Wrapper>
			<div className="home-container">
				<img className="wow-logo" src={wowLogo} alt="wow-logo" />
				<h1 className="title">Welcome to WoW User Stats</h1>
				<div className="title-underline"></div>
				<UserSearch />
			</div>
		</Wrapper>
	);
};

export default Home;
