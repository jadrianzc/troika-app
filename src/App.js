import React from 'react';
import { Main } from './components/Main/Main';
import './App.css';

export const App = () => {
	return (
		<div className="main">
			<div className="main-container-header">
				<h1>Troika Cía. Ltda.</h1>
			</div>

			<Main />
		</div>
	);
};
