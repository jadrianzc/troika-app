import { useEffect, useState } from 'react';
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

	const { codigo } = tableState;

	const handleChange = ({ target }) => {
		setTableState({
			...tableState,
			[target.name]: target.value,
		});
	};

	const handleFocus = ({ target }) => {
		target.select();
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

	// useEffect(() => {

	// 	setTableState((tableState) => ({
	// 		...tableState,
	// 		precioUnitario: [
	// 			valorPU === 'NaN' || valorPU === 'Infinity' ? '0.0000' : valorPU,
	// 		],
	// 		precio: [
	// 			valorPrecio === 'NaN' || valorPrecio === 'Infinity'
	// 				? '0.0000'
	// 				: valorPrecio,
	// 		],
	// 	}));
	// }, [codigo, totalParcial]);

	return { tableState, setTableState, handleChange, handleFocus, handleBlur };
};
