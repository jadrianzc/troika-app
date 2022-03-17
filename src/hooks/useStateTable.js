import { useState, useEffect } from 'react';
import axios from 'axios';

export const useStateTable = () => {
	const [tableState, setTableState] = useState({
		codigo: '',
		descripcion: '',
		costo: 0,
		cantidad: 0,
		precio: 0,
		comisionCesar: 0,
		ganancia: 0,
		comisionMecanico: 0,
	});

	const { codigo, costo, cantidad, precio, comisionCesar } = tableState;

	useEffect(() => {
		const precioTotalSinIva = (precio * cantidad - comisionCesar) / 1.12;
		const gananciaTotal = Math.round(
			parseFloat((precioTotalSinIva - parseFloat(costo)).toFixed(2))
		);

		setTableState((tableState) => ({
			...tableState,
			ganancia: gananciaTotal,
			comisionMecanico:
				gananciaTotal >= 1 && gananciaTotal <= 5
					? 0.5
					: gananciaTotal >= 6 && gananciaTotal <= 10
					? 1.0
					: gananciaTotal >= 11 && gananciaTotal <= 25
					? 1.5
					: gananciaTotal >= 26
					? 2.0
					: 0,
		}));
	}, [cantidad, precio, comisionCesar, costo]);

	const handleChange = ({ target }) => {
		setTableState({
			...tableState,
			[target.name]: target.value,
		});
	};

	const handleBlur = async () => {
		try {
			const data = await axios.get(
				'http://localhost:4000/api/v1/repuestos/' + codigo
			);
			handleData(data.data[0]);
		} catch (error) {
			console.log(error);
		}
	};

	const handleData = (data) => {
		setTableState({
			...tableState,
			descripcion: data.descripcion,
			costo: data.costo,
		});
	};

	return { tableState, setTableState, handleChange, handleBlur };
};
