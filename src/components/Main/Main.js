import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Items } from '../Items/Items';
import { Total } from '../Total/Total';
import './main.css';

export const Main = ({ dscto }) => {
	const { counter, handleAdd, handleSubtract } = useCounter([1]);

	return (
		<div id="id-table" className="table">
			<div className="table-icon-container">
				<button onClick={handleAdd}>
					<i className="fas fa-plus-circle"></i>
				</button>
				<button onClick={handleSubtract}>
					<i className="fas fa-minus-circle"></i>
				</button>
			</div>
			<div className="table-header-container">
				<label className="table-header">CANTIDAD</label>
				<label className="table-header">TOTAL PARCIAL</label>
				<label className="table-header">DESCUENTO</label>
				<label className="table-header">PRECIO UNITARIO</label>
				<label className="table-header">PRECIO</label>
			</div>

			{counter.map((count) => (
				<Items key={count} dscto={dscto} />
			))}

			<Total dscto={dscto} />
		</div>
	);
};
