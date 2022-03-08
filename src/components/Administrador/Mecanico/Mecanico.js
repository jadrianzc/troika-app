import React from 'react';
import axios from 'axios';

const Mecanico = () => {
	const handleSubmit = async (e) => {
		e.preventDefault();

		let nombre = e.target.nombre;
		let apellido = e.target.apellido;

		const data = {
			[nombre.name]: nombre.value,
			[apellido.name]: apellido.value,
		};

		console.log(data);

		try {
			await axios.post('http://localhost:4000/api/v1/mecanicos', data);
			e.target.reset();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<h2 className="text-center">CREACIÓN DE MECÁNICO</h2>
			<form method="post" onSubmit={handleSubmit}>
				<div className="mb-3">
					<label for="name" className="form-label">
						Nombres
					</label>
					<input type="text" className="form-control" id="name" name="nombre" />
				</div>
				<div className="mb-3">
					<label for="lastname" className="form-label">
						Apellidos
					</label>
					<input type="text" className="form-control" id="lastname" name="apellido" />
				</div>
				<button type="submit" className="btn btn-primary">
					Guardar
				</button>
			</form>
		</>
	);
};

export default Mecanico;
