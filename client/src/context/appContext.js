import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";
import {
	FETCH_REALMS,
	SET_CHARACTER_NAME,
	SET_REALM,
	SET_REGION,
} from "./actions";

const initialState = {
	isLoading: false,
	region: "",
	realmsList: [],
	realm: "",
	realmSlug: "",
	characterName: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const toggleRegion = (region) => {
		dispatch({ type: SET_REGION, payload: region });
	};

	const fetchRealmsList = async () => {
		const { data } = await axios.get(`/api/home?region=${state.region}`);
		dispatch({
			type: FETCH_REALMS,
			payload: data,
		});
	};

	const setRealm = ({ realm, slug }) => {
		dispatch({ type: SET_REALM, payload: { realm, slug } });
	};

	const setCharacterName = (characterName) => {
		dispatch({ type: SET_CHARACTER_NAME, payload: characterName });
	};

	const getUser = async () => {
		console.log("getUser");
	};

	return (
		<AppContext.Provider
			value={{
				...state,
				toggleRegion,
				getUser,
				fetchRealmsList,
				setRealm,
				setCharacterName,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => {
	return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
