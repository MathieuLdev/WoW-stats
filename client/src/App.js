import { Routes, Route } from "react-router-dom";
import { Home, UserHall, Stats, Pvp } from "./pages";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/user-hall" element={<UserHall />} />
			<Route path="/user-hall/stats" element={<Stats />} />
			<Route path="/user-hall/pvp" element={<Pvp />} />
		</Routes>
	);
}

export default App;
