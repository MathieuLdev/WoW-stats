import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/UserSearch";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

const UserSearch = () => {
	const navigate = useNavigate();
	const {
		toggleRegion,
		region,
		fetchRealmsList,
		setRealm,
		realmsList,
		setCharacterName,
		realm,
		characterName,
		displayAlert,
		showAlert,
	} = useAppContext();

	const getRealmsInfos = (e) => {
		const selectedSlug = realmsList.find(
			(realmsList) => (realmsList.slug = e.target.value),
		);
		setRealm({ realm: e.target.value, slug: selectedSlug });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!region || !realm || !characterName) {
			displayAlert();
			return;
		}
		navigate("/user-hall");
	};

	useEffect(() => {
		if (region !== "") {
			fetchRealmsList();
		}
		// eslint-disable-next-line
	}, [region]);

	return (
		<Wrapper>
			<form className="form" noValidate onSubmit={handleSubmit}>
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
						className="realmsList"
						id="realmsList"
						required
						onChange={getRealmsInfos}
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
					onChange={(e) => setCharacterName(e.target.value.toLowerCase())}
				/>
				<button type="submit">Valider</button>
				{showAlert && <Alert />}
			</form>
		</Wrapper>
	);
};

export default UserSearch;
