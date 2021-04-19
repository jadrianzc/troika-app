import React, { useEffect, useState } from 'react';

export function Items({ dscto }) {
	const [tableState, setTableState] = useState({
		cantidad: 1,
		totalParcial: 0,
		descuento: 0,
		precioUnitario: 0,
		precio: 0,
	});

	const { cantidad, totalParcial, descuento, precioUnitario, precio } = tableState;

	const handleCantidad = ({ target }) => {
		setTableState({
			...tableState,
			[target.name]: target.value,
		});
	};

	const handleFocus = ({ target }) => {
		target.select();
	};

	const handleBlur = ({ target }) => {
		if (target.value === '') {
			setTableState({
				...tableState,
				[target.name]: 0,
			});
		}
	};

	useEffect(() => {
		const valorDsct = ((totalParcial / 1.12) * (dscto / 100)).toFixed(4);
		const valorPU = ((totalParcial / 1.12 - valorDsct) / cantidad).toFixed(4);
		const valorPrecio = (valorPU * cantidad).toFixed(4);

		setTableState((tableState) => ({
			...tableState,
			descuento: valorDsct,
			precioUnitario: [valorPU === 'NaN' || valorPU === 'Infinity' ? '0.0000' : valorPU],
			precio: [valorPrecio === 'NaN' || valorPrecio === 'Infinity' ? '0.0000' : valorPrecio],
		}));
	}, [cantidad, totalParcial, dscto]);

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
			<input type="number" name="precio" value={precio} className="table-item" onFocus={handleFocus} readOnly={true} />
		</div>
	);
}
