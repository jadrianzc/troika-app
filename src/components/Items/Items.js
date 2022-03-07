import React from 'react';
import { useStateTable } from '../../hooks/useStateTable';

export function Items() {
	const { tableState, handleChange, handleFocus, handleBlur } = useStateTable();
	const {
		codigo,
		descripcion,
		costo,
		cantidad,
		precio,
		comisionCesar,
		ganancia,
		comisionMecanico,
	} = tableState;

	return (
		<div className="table-item-container">
			<input
				type="text"
				name="codigo"
				value={codigo}
				className="table-item"
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
			<input
				type="text"
				name="descripcion"
				value={descripcion}
				className="table-item table-item--off"
				onFocus={handleFocus}
				readOnly={true}
			/>
			<input
				type="text"
				name="costo"
				value={costo}
				className="table-item"
				onFocus={handleFocus}
				readOnly={true}
			/>
			<input
				type="number"
				name="cantidad"
				value={cantidad}
				className="table-item table-item-precio"
				onChange={handleChange}
				onFocus={handleFocus}
			/>
			<input
				type="number"
				name="precio"
				value={precio}
				className="table-item"
				onChange={handleChange}
				onFocus={handleFocus}
			/>
			<input
				type="number"
				name="comisionCesar"
				value={comisionCesar}
				className="table-item"
				onChange={handleChange}
				onFocus={handleFocus}
			/>
			<input
				type="text"
				name="ganancia"
				value={ganancia}
				className="table-item"
				onFocus={handleFocus}
				readOnly={true}
			/>
			<input
				type="text"
				name="comisionMecanico"
				value={comisionMecanico}
				className="table-item"
				onFocus={handleFocus}
				readOnly={true}
			/>
		</div>
	);
}
