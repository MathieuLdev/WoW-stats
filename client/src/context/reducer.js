import {
	FETCH_REALMS,
	SET_CHARACTER_NAME,
	SET_REALM,
	SET_REGION,
	DISPLAY_ALERT,
	CLEAR_ALERT,
} from "./actions";

const reducer = (state, action) => {
	if (action.type === DISPLAY_ALERT) {
		return {
			...state,
			showAlert: true,
			alertText: "Please provide all values !",
			characterName: "",
		};
	}

	if (action.type === CLEAR_ALERT) {
		return {
			...state,
			showAlert: false,
			alertText: "",
		};
	}

	if (action.type === SET_REGION) {
		return {
			...state,
			region: action.payload,
		};
	}
	if (action.type === FETCH_REALMS) {
		return {
			...state,
			realmsList: action.payload,
		};
	}
	if (action.type === SET_REALM) {
		return {
			...state,
			realm: action.payload.realm,
			realmSlug: action.payload.slug,
		};
	}
	if (action.type === SET_CHARACTER_NAME) {
		return {
			...state,
			characterName: action.payload,
		};
	}

	throw new Error(`No such action: ${action.type}`);
};

export default reducer;
