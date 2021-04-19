import React from 'react';
import { useStateTable } from '../../hooks/useStateTable';

export function Items({ dscto }) {
	const { tableState, handleCantidad, handleFocus, handleBlur } = useStateTable(
		dscto
	);
	const {
		cantidad,
		totalParcial,
		descuento,
		precioUnitario,
		precio,
	} = tableState;

	return (
		<div className="table-item-container">
			<input
				type="number"
				name="cantidad"
				value={cantidad}
				className="table-item"
				onChange={handleCantidad}
				onFocus={handleFocus}
				onBlur={handleBlur}
				min="1"
			/>
			<input
				type="number"
				name="totalParcial"
				value={totalParcial}
				className="table-item table-item--off"
				onChange={handleCantidad}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
			<input
				type="number"
				name="descuento"
				value={descuento}
				className="table-item table-item-dsct"
				onFocus={handleFocus}
				readOnly={true}
			/>
			<input
				type="number"
				name="precioUnitario"
				value={precioUnitario}
				className="table-item"
				onFocus={handleFocus}
				readOnly={true}
			/>
			<input
				type="number"
				name="precio"
				value={precio}
				className="table-item table-item-precio"
				onFocus={handleFocus}
				readOnly={true}
			/>
		</div>
	);
}
