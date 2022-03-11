import React, { useState } from 'react';
import { useCounter } from '../../../hooks/useCounter';
import { FacturaData } from '../FacturaData/FacturaData';
import { Items } from '../Items/Items';
import './main.css';

export const Main = () => {
	const [repuestoItem, setRepuestoItem] = useState({});
	const [repuestoItems, setRepuestoItems] = useState([]);
	const { counter, handleAdd, handleSubtract, handleReset } = useCounter([{}]);
	// console.log(Object.keys(counter[0]).length === 0);
	console.log(repuestoItem);
	console.log(repuestoItems);

	const handleAddItemRepuestos = (repuestoItem) => {
		// if (repuestoItems.length === 0) {
		// 	setRepuestoItems([repuestoItem]);
		// } else {
		// 	// for (const item of repuestoItems) {
		// 	// 	if (item.codigo === repuestoItem.codigo) {
		// 	// 		setRepuestoItems([...repuestoItems, repuestoItem]);
		// 	// 		break;
		// 	// 	}
		// 	// }
		// 	const itemsN = repuestoItems.filter(
		// 		(item) => item.codigo !== repuestoItem.codigo
		// 	);
		// 	console.log(itemsN);
		// }
		setRepuestoItems([...repuestoItems, repuestoItem]);
		const itemsN = repuestoItems.filter(
			(item) => item.codigo !== repuestoItem.codigo
		);
		console.log(itemsN);
	};

	return (
		<div id="id-table" className="table">
			<FacturaData />

			<div className="table-icon-container">
				<button
					onClick={() => {
						handleAdd();
						handleAddItemRepuestos(repuestoItem);
					}}
				>
					<i className="fas fa-plus-circle"></i>
				</button>
				<button onClick={handleSubtract}>
					<i className="fas fa-minus-circle"></i>
				</button>
				<button onClick={() => handleReset()}>
					<i className="fas fa-eraser"></i>
				</button>
			</div>

			<div className="table-header-container">
				<label className="table-header">Código</label>
				<label className="table-header">Descripción</label>
				<label className="table-header">Costo</label>
				<label className="table-header">Cantidad</label>
				<label className="table-header">Precio</label>
				<label className="table-header">C. César</label>
				<label className="table-header">Ganancia</label>
				<label className="table-header">C. Mecánico</label>
			</div>

			{counter.map((count) => (
				<Items key={count} setRepuestoItem={setRepuestoItem} />
			))}
		</div>
	);
};
