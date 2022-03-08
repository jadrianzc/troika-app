import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const FacturaData = () => {
	const [mecanicos, setMecanicos] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const data = await axios.get('http://localhost:4000/api/v1/mecanicos/');
				setMecanicos(data.data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<div className="container">
			{/* Botones */}
			<button type="button" className="btn btn-primary col-6">
				Guardar
			</button>
			<a href="/" className="btn btn-danger col-6">
				Salir
			</a>

			{/* Datos factura */}
			<div className="col-12 d-flex mt-2">
				<div className="col-7 p-3">
					{/* FECHA */}
					<div className="mb-3 d-flex align-items-center col-6">
						<label htmlFor="fecha" className="form-label col-4 m-0">
							Fecha:
						</label>
						<input type="date" className="form-control" id="fecha" />
					</div>
					{/* FACTURA */}
					<div className="mb-3 col-6 d-flex align-items-center">
						<label htmlFor="factura" className="form-label col-4 m-0">
							Factura:
						</label>
						<input type="text" className="form-control" id="factura" />
					</div>
					{/* MECÁNICO */}
					<div className="mb-3 col-6 d-flex align-items-center">
						<label htmlFor="mecanico" className="form-label col-4 m-0">
							Mecánico:
						</label>
						<select className="form-select" id="mecanico" aria-label="Default select example">
							{mecanicos.map((mecanico) => (
								<option key={mecanico._id} value={mecanico.nombre}>{`${mecanico.nombre} ${mecanico.apellido}`}</option>
							))}
						</select>
					</div>
				</div>
				<div className="col-5 p-3">
					{/* BOTÓN */}
					<div className="mb-3 d-flex align-items-center justify-content-center">
						<button type="button" className="btn btn-secondary col-4 m-1">
							Calcular
						</button>
					</div>
					{/* TOTAL COMISIÓN CÉSAR */}
					<div className="mb-3 d-flex align-items-center">
						<label htmlFor="factura" className="form-label col-6 m-0">
							Total Comisión César:
						</label>
						<input type="text" className="form-control" id="factura" readOnly />
					</div>
					{/* TOTAL COMISIÓN MECÁNIC */}
					<div className="mb-3 d-flex align-items-center">
						<label htmlFor="cod" className="form-label col-6 m-0">
							Total Comisión Mecánico:
						</label>
						<input type="text" className="form-control" id="cod" readOnly />
					</div>
				</div>
			</div>
		</div>
	);
};
