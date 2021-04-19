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

	const handleReset = (setDscto) => {
		setCounter([]);
		setDscto(0);
	};

	return { counter, handleAdd, handleSubtract, handleReset };
};
