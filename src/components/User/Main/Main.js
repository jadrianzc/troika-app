import React, { useState } from 'react';
import { useCounter } from '../../../hooks/useCounter';
import { FacturaData } from '../FacturaData/FacturaData';
import { Items } from '../Items/Items';
import './main.css';

export const Main = () => {
	const [repuestoItems, setRepuestoItems] = useState({});
	const { counter, handleAdd, handleSubtract } = useCounter([repuestoItems]);

	console.log(repuestoItems);
	console.log(counter);

	return (
		<div id="id-table" className="table">
			<FacturaData />

			<table className="table">
				<thead className="text-center align-middle">
					<tr>
						<th scope="col">
							<button
								onClick={() => {
									handleAdd(repuestoItems);
								}}
								className="btn btn-success"
							>
								<i className="fas fa-plus-circle"></i>
							</button>
						</th>
						<th scope="col">Código</th>
						<th scope="col">Descripción</th>
						<th scope="col">Costo</th>
						<th scope="col">Cantidad</th>
						<th scope="col">Precio</th>
						<th scope="col">C. César</th>
						<th scope="col">Ganancia</th>
						<th scope="col">C. Mecánico</th>
					</tr>
				</thead>
				<tbody className="text-center align-middle">
					{counter.map((count) => (
						<Items
							key={count.codigo}
							handleSubtract={handleSubtract}
							setRepuestoItems={setRepuestoItems}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};
