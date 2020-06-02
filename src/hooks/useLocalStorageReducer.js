import { useReducer, useEffect } from 'react';

const useLocalStorageReducer = (key, defaultVal, reducer) => {
	// make piece of state, based off of value in localstorage
	const [state, dispatach] = useReducer(reducer, defaultVal, () => {
		let val;
		try {
			val = JSON.parse(
				window.localStorage.getItem(key) || String(defaultVal)
			);
		} catch (e) {
			val = defaultVal;
		}
		return val;
	});

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(state));
	}, [state]);

	// useEffect to update localstorage when state changes
	useEffect(() => {}, [state]);

	return [state, dispatach];
};

export default useLocalStorageReducer;
