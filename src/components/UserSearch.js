import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/UserSearch";

const UserSearch = () => {
	const { toggleRegion, region, fetchRealmsList, setRealm, realmsList } =
		useAppContext();

	const getReamlsInfos = (e) => {
		const selectBox = document.getElementById("realmsList");
		const selectedValue = selectBox.options[selectBox.selectedIndex].id;
		setRealm(e.target.value, selectedValue);
	};

	useEffect(() => {
		if (region !== "") {
			fetchRealmsList();
		}
		// eslint-disable-next-line
	}, [region]);

	return (
		<Wrapper>
			<form className="form" noValidate>
				<select
					className="realm"
					required
					onChange={(e) => toggleRegion(e.target.value)}
				>
					<option value="select" defaultValue>
						Select a region
					</option>
					<option value="eu">EU</option>
					<option value="us">US</option>
				</select>
				{region ? (
					<select
						id="realmsList"
						className="realmsList"
						required
						onChange={getReamlsInfos}
					>
						<option value="select">Select a realm</option>
						{realmsList
							.sort((a, b) => a.name.localeCompare(b.name))
							.map((realm) => {
								const { id, slug, name } = realm;
								return (
									<option key={id} id={slug}>
										{name}
									</option>
								);
							})}
					</select>
				) : (
					<select id="realm">
						<option>Select a realm</option>
					</select>
				)}
				<input
					type="text"
					required
					placeholder="Character name"
					// onChange={(e) => setCharacterName(e.target.value.toLowerCase())}
				/>
				<input type="submit" value="Valider" className="test" />
			</form>
		</Wrapper>
	);
};

export default UserSearch;
