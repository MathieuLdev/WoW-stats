import { Routes, Route } from "react-router-dom";
import { Home, UserHall, Stats } from "./pages";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/user-hall" element={<UserHall />} />
			<Route path="/user-hall/stats" element={<Stats />} />
		</Routes>
	);
}

export default App;
