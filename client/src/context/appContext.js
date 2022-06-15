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
	GET_MEDIA_BEGIN,
	GET_MEDIA_SUCCESS,
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
	media: [],
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

	const getUserMedia = async () => {
		dispatch({ type: GET_MEDIA_BEGIN });
		// try {
		const { data } = await axios.get(
			`/api/media?region=${state.region}&realm=${state.realmSlug}&name=${state.characterName}`,
		);
		dispatch({
			type: GET_MEDIA_SUCCESS,
			payload: data,
		});
		// } catch (error) {
		// 	console.log("error during fetch");
		// }
	};

	return (
		<AppContext.Provider
			value={{
				...state,
				toggleRegion,
				getUserMedia,
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
