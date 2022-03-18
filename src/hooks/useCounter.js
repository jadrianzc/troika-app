import { useState } from 'react';

export const useCounter = (initialValue) => {
	const [counter, setCounter] = useState(initialValue);

	const handleAdd = (repuestoItems) => {
		// if (counter.length === 1) {
		// 	setCounter([repuestoItems]);
		// 	console.log('SOLO 1');
		// } else {
		// 	setCounter([...counter, repuestoItems]);
		// }
		setCounter((item) => {
			// item.map((ite) => {
			// 	if (ite.codigo === repuestoItems.codigo) {
			// 		return null;
			// 	} else {
			// 		const dataFiltrada = item.filter(
			// 			(ite) => ite.codigo !== repuestoItems.codigo && ite.codigo !== ''
			// 		);
			// 		return dataFiltrada.concat(repuestoItems);
			// 	}
			// });
		});
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
