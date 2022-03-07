import React from 'react';

export const FacturaData = () => {
	return (
		<div className="container">
			{/* Botones */}
			<div className="btn-group d-flex" role="group" aria-label="Basic example">
				<button type="button" className="btn btn-outline-secondary col-4 m-1">
					Calcular
				</button>
				<button type="button" className="btn btn-outline-primary col-4 m-1">
					Guardar
				</button>
				<a href="/" className="btn btn-outline-danger col-4 m-1">
					Salir
				</a>
			</div>
			{/* Datos factura */}
			<div className="col-12 d-flex">
				<div className="col-7 p-3">
					{/* FECHA */}
					<div className="mb-3 d-flex align-items-center col-6">
						<label for="fecha" className="form-label col-4 m-0">
							Fecha:
						</label>
						<input type="date" className="form-control" id="fecha" />
					</div>
					{/* FACTURA */}
					<div className="mb-3 col-6 d-flex align-items-center">
						<label for="factura" className="form-label col-4 m-0">
							Factura:
						</label>
						<input type="text" className="form-control" id="factura" />
					</div>
					{/* MECÁNICO */}
					<div className="mb-3 col-6 d-flex align-items-center">
						<label for="mecanico" className="form-label col-4 m-0">
							Mecánico:
						</label>
						<select
							className="form-select"
							id="mecanico"
							aria-label="Default select example"
						>
							<option selected></option>
							<option value="1">Juan Delgado</option>
							<option value="2">Carlos Anchundia</option>
							<option value="3">Ricardo Anchundia</option>
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
						<label for="factura" className="form-label col-6 m-0">
							Total Comisión César:
						</label>
						<input type="text" className="form-control" id="factura" readonly />
					</div>
					{/* TOTAL COMISIÓN MECÁNIC */}
					<div className="mb-3 d-flex align-items-center">
						<label for="cod" className="form-label col-6 m-0">
							Total Comisión Mecánico:
						</label>
						<input type="text" className="form-control" id="cod" readonly />
					</div>
				</div>
			</div>
		</div>
	);
};
