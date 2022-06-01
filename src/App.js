import { Routes, Route } from "react-router-dom";
import { Home, UserHall } from "./pages";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/user-hall" element={<UserHall />} />
		</Routes>
	);
}

export default App;
