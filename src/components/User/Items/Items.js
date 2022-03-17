import React, { useEffect } from 'react';
import { useStateTable } from '../../../hooks/useStateTable';

export function Items({ repuestoItems, setRepuestoItems }) {
	const { tableState, handleChange, handleBlur } = useStateTable();
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

	useEffect(() => {
		handleTableData();
	}, [ganancia]);

	const handleTableData = () => {
		setRepuestoItems((item) => {
			const dataFiltrada = item.filter(
				(ite) => ite.codigo !== tableState.codigo && ite.codigo !== ''
			);
			return dataFiltrada.concat(tableState);
		});
	};

	const handleFocus = ({ target }) => {
		console.log(target.value);
		console.log(repuestoItems);
	};

	return (
		<div className="table-item-container">
			<input
				type="text"
				name="codigo"
				value={codigo}
				className="table-item"
				onChange={handleChange}
				onBlur={(e) => {
					handleFocus(e);
					handleBlur();
				}}
			/>
			<input
				type="text"
				name="descripcion"
				value={descripcion}
				className="table-item table-item--off"
				// onFocus={handleFocus}
				readOnly={true}
			/>
			<input
				type="text"
				name="costo"
				value={costo}
				className="table-item"
				// onFocus={handleFocus}
				readOnly={true}
			/>
			<input
				type="number"
				name="cantidad"
				value={cantidad}
				className="table-item table-item-precio"
				onChange={handleChange}
				// onFocus={handleFocus}
			/>
			<input
				type="number"
				name="precio"
				value={precio}
				className="table-item"
				onChange={handleChange}
				// onFocus={handleFocus}
			/>
			<input
				type="number"
				name="comisionCesar"
				value={comisionCesar}
				className="table-item"
				onChange={handleChange}
				// onFocus={handleFocus}
				// onBlur={handleItems}
			/>
			<input
				type="number"
				name="ganancia"
				value={ganancia}
				className="table-item"
				// onFocus={handleFocus}
				readOnly={true}
			/>
			<input
				type="number"
				name="comisionMecanico"
				value={comisionMecanico}
				className="table-item"
				// onFocus={handleFocus}
				readOnly={true}
			/>
		</div>
	);
}
