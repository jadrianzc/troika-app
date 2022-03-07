import { useState } from 'react';

export const useCounter = (initialValue) => {
	const [counter, setCounter] = useState(initialValue);

	const handleAdd = () => {
		setCounter([...counter, counter.length + 1]);
	};

	const handleSubtract = () => {
		let newCounter = [...counter];
		newCounter.pop();
		newCounter.length >= 1 && setCounter(newCounter);
	};

	const handleReset = () => {
		setCounter([1]);
	};

	return { counter, handleAdd, handleSubtract, handleReset };
};
