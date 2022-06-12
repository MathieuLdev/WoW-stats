import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/UserSearch";
import { NavLink } from "react-router-dom";

const UserSearch = () => {
	const {
		toggleRegion,
		region,
		fetchRealmsList,
		setRealm,
		realmsList,
		setCharacterName,
	} = useAppContext();

	const getRealmsInfos = (e) => {
		const selectedSlug = realmsList.find(
			(realmsList) => (realmsList.slug = e.target.value),
		);
		setRealm({ realm: e.target.value, slug: selectedSlug });
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
				<NavLink to="/user-hall">Valider</NavLink>
			</form>
		</Wrapper>
	);
};

export default UserSearch;
