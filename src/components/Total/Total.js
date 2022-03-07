import React from 'react';
import './total.css';

export const Total = () => {
	const dsctoList = document.querySelectorAll('.table-item-dsct');
	const precioList = document.querySelectorAll('.table-item-precio');

	const arrayDsctoList = [...dsctoList];
	const arrayPrecioList = [...precioList];

	const arrayDscto = arrayDsctoList.map((div) => parseFloat(div.value));
	const arrayPrecio = arrayPrecioList.map((div) => parseFloat(div.value));

	const totalDscto = arrayDscto.reduce((a, b) => a + b, 0);
	const totalPrecio = arrayPrecio.reduce((a, b) => a + b, 0);
	const totalIva = totalPrecio * 0.12;

	return (
		<div className="table-footer-container">
			<div className="table-footer-container-title">
				<label className="table-footer">SUBTOTAL:</label>
				<label className="table-footer">DESCUENTO:</label>
				<label className="table-footer">IVA 12%:</label>
				<label className="table-footer">TOTAL:</label>
			</div>

			<div className="table-footer-container-body">
				<input
					type="number"
					name="subtotal"
					value={totalPrecio.toFixed(4)}
					className="table-item table-item--footer"
					readOnly={true}
				/>
				<input
					type="number"
					name="descuento"
					value={totalDscto.toFixed(4)}
					className="table-item table-item--footer"
					readOnly={true}
				/>
				<input
					type="number"
					name="iva"
					value={totalIva.toFixed(4)}
					className="table-item table-item--footer"
					readOnly={true}
				/>
				<input
					type="number"
					name="total"
					value={(totalPrecio + totalIva).toFixed(4)}
					className="table-item table-item--footer"
					readOnly={true}
				/>
			</div>
		</div>
	);
};
