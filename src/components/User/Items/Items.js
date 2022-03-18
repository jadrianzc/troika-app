import React, { useEffect } from 'react';
import { useStateTable } from '../../../hooks/useStateTable';

export function Items({ handleSubtract, setRepuestoItems }) {
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
		setRepuestoItems(tableState);
	}, [tableState, setRepuestoItems]);

	// const handleTableData = () => {
	// 	setRepuestoItems((item) => {
	// 		const dataFiltrada = item.filter(
	// 			(ite) => ite.codigo !== tableState.codigo && ite.codigo !== ''
	// 		);
	// 		return dataFiltrada.concat(tableState);
	// 	});
	// };

	return (
		<tr>
			<td>
				<button onClick={handleSubtract} className="btn btn-danger">
					<i className="fas fa-minus-circle"></i>
				</button>
			</td>
			<td>
				<input
					type="text"
					name="codigo"
					value={codigo}
					className="table-item"
					onChange={handleChange}
					onBlur={() => {
						// handleFocus(e);
						handleBlur();
					}}
				/>
			</td>
			<td>
				<input
					type="text"
					name="descripcion"
					value={descripcion}
					className="table-item table-item--off"
					// onFocus={handleFocus}
					readOnly={true}
				/>
			</td>
			<td>
				<input
					type="text"
					name="costo"
					value={costo}
					className="table-item"
					// onFocus={handleFocus}
					readOnly={true}
				/>
			</td>
			<td>
				<input
					type="number"
					name="cantidad"
					value={cantidad}
					className="table-item table-item-precio"
					onChange={handleChange}
					// onFocus={handleFocus}
				/>
			</td>
			<td>
				<input
					type="number"
					name="precio"
					value={precio}
					className="table-item"
					onChange={handleChange}
					// onFocus={handleFocus}
				/>
			</td>
			<td>
				<input
					type="number"
					name="comisionCesar"
					value={comisionCesar}
					className="table-item"
					onChange={handleChange}
					// onFocus={handleFocus}
					// onBlur={handleItems}
				/>
			</td>
			<td>
				<input
					type="number"
					name="ganancia"
					value={ganancia}
					className="table-item"
					// onFocus={handleFocus}
					readOnly={true}
				/>
			</td>
			<td>
				<input
					type="number"
					name="comisionMecanico"
					value={comisionMecanico}
					className="table-item"
					// onFocus={handleFocus}
					readOnly={true}
				/>
			</td>
		</tr>
	);
}
