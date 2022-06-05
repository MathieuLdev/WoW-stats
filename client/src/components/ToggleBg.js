import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/ToggleBg";

const getStorageTheme = () => {
	let theme = "horde";
	if (localStorage.getItem("theme")) {
		theme = localStorage.getItem("theme");
	}
	return theme;
};

const ToggleBg = () => {
	const [theme, setTheme] = useState(getStorageTheme());
	const toggleBg = () => {
		if (theme === "horde") {
			setTheme("alliance");
		} else {
			setTheme("horde");
		}
	};

	useEffect(() => {
		document.body.className = theme;
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<Wrapper>
			<button className="btn" onClick={toggleBg}>
				Switch faction
			</button>
		</Wrapper>
	);
};

export default ToggleBg;
