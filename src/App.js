import React, { useRef, useState } from 'react';
import { Main } from './components/Main/Main';
import './App.css';

export const App = () => {
	const inputRef = useRef();
	const [dscto, setDscto] = useState(0);

	const handleDescuento = ({ target }) => {
		setDscto(target.value);
	};

	const handleFocus = () => {
		inputRef.current.select();
	};

	const handleBlur = ({ target }) => {
		if (target.value === '') {
			setDscto(0);
		}
	};

	return (
		<div className="main">
			<div className="main-container-header">
				<h1>Troika Cía. Ltda.</h1>
			</div>
			<div className="main-container-descuento">
				<label htmlFor="descuento">Descuento: </label>
				<input
					type="number"
					ref={inputRef}
					name="descuento"
					onChange={handleDescuento}
					onFocus={handleFocus}
					onBlur={handleBlur}
					value={dscto}
					className="input-descuento"
				/>
				<span>%</span>
			</div>
			<Main dscto={dscto} setDscto={setDscto} />
		</div>
	);
};
