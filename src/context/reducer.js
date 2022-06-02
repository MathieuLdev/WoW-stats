import { FETCH_REALMS, SET_REALM, SET_REGION } from "./actions";

const reducer = (state, action) => {
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
	throw new Error(`No such action: ${action.type}`);
};

export default reducer;
