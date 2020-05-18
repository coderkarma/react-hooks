import { useState } from 'react';

const useToggle = (initialValue = false) => {
	// call useStae, reserve piece of state

	const [state, setState] = useState(initialValue);

	const toggle = () => setState(!state);
	// return piece of state aand a function toggle
	return [state, toggle];
};

export default useToggle;
