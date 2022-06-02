import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";
import { FETCH_REALMS, SET_REALM, SET_REGION } from "./actions";

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
		const token = process.env.REACT_APP_ACCESS_TOKEN;
		const { region } = state;
		const url = `https://${region}.api.blizzard.com/data/wow/realm/index?namespace=dynamic-${region}&locale=fr_FR&access_token=${token}`;
		const { data } = await axios.get(url);
		dispatch({
			type: FETCH_REALMS,
			payload: data.realms,
		});
	};

	const setRealm = (realm, slug) => {
		dispatch({ type: SET_REALM, payload: { realm, slug } });
	};

	const getUser = async () => {
		console.log("hello");
	};

	return (
		<AppContext.Provider
			value={{ ...state, toggleRegion, getUser, fetchRealmsList, setRealm }}
		>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => {
	return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
