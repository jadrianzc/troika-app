import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { FacturaData } from '../FacturaData/FacturaData';
import { Items } from '../Items/Items';
import './main.css';

export const Main = () => {
	const { counter, handleAdd, handleSubtract, handleReset } = useCounter([1]);

	return (
		<div id="id-table" className="table">
			<FacturaData />

			<div className="table-icon-container">
				<button onClick={handleAdd}>
					<i className="fas fa-plus-circle"></i>
				</button>
				<button onClick={handleSubtract}>
					<i className="fas fa-minus-circle"></i>
				</button>
				<button onClick={() => handleReset()}>
					<i class="fas fa-eraser"></i>
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
				<Items key={count} />
			))}
		</div>
	);
};
