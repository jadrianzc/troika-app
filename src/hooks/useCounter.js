import { useState } from 'react';

export const useCounter = (initialValue) => {
	const [counter, setCounter] = useState(initialValue);

	const handleAdd = () => {
		setCounter([...counter, counter.length + 1]);
	};

	const handleSubtract = () => {
		let newCounter = [...counter];
		newCounter.pop();
		setCounter(newCounter);
	};

	return { counter, handleAdd, handleSubtract };
};
