import React from "react";
import UserSearch from "../components/UserSearch";
import Wrapper from "../assets/wrappers/Home";
import wowLogo from "../assets/img/World_of_Warcraft_Logo.png";
import { ToggleBg } from "../components";

const Home = () => {
	return (
		<Wrapper>
			<section className="home-container">
				<ToggleBg />
				<img className="wow-logo" src={wowLogo} alt="wow-logo" />
				<div className="title-container">
					<h1 className="title">Welcome to WoW User Stats</h1>
					<div className="title-underline"></div>
				</div>
				<UserSearch />
			</section>
		</Wrapper>
	);
};

export default Home;
