import React, { useEffect, useState } from 'react';
import './total.css';

export const Total = ({ dscto }) => {
	const [subtotal, setSubtotal] = useState(0);
	const [descuento, setDescuento] = useState(0);
	const [iva, setIva] = useState(0);
	const [total, setTotal] = useState(0);

	// useEffect(() => {
	// 	const items = document.querySelectorAll('.table-item-dsct');
	// 	const newArray = [...items];
	// 	const arrayDscto = newArray.map((div) => div.value);

	// 	arrayDscto.forEach((value) => {
	// 		console.log(value);
	// 		const valor = value;
	// 		const totalDscto = parseFloat(value) + parseFloat(valor);

	// 		setSubtotal(totalDscto);
	// 		console.log(subtotal);
	// 	});
	// });

	return (
		<div className="table-footer-container">
			<div className="table-footer-container-title">
				<label className="table-footer">SUBTOTAL:</label>
				<label className="table-footer">DESCUENTO:</label>
				<label className="table-footer">IVA 12%:</label>
				<label className="table-footer">TOTAL:</label>
			</div>

			<div className="table-footer-container-body">
				<input type="number" name="subtotal" value={subtotal} className="table-item" readOnly={true} />
				<input type="number" name="descuento" value={descuento} className="table-item" readOnly={true} />
				<input type="number" name="iva" value={iva} className="table-item" readOnly={true} />
				<input type="number" name="total" value={total} className="table-item" readOnly={true} />
			</div>
		</div>
	);
};
