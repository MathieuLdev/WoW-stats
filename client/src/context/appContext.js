import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";
import {
	FETCH_REALMS,
	SET_CHARACTER_NAME,
	SET_REALM,
	SET_REGION,
	DISPLAY_ALERT,
	CLEAR_ALERT,
} from "./actions";

const initialState = {
	isLoading: false,
	showAlert: false,
	alertText: "",
	region: "",
	realmsList: [],
	realm: "",
	realmSlug: "",
	characterName: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const displayAlert = () => {
		dispatch({ type: DISPLAY_ALERT });
		clearAlert();
	};

	const clearAlert = () => {
		setTimeout(() => {
			dispatch({ type: CLEAR_ALERT });
		}, 3000);
	};

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
				displayAlert,
				clearAlert,
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
