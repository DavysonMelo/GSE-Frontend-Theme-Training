import React from 'react';

import ButtonPalette from './components/ButtonPalette';
import ColorPallete from './components/ColorPallete';
import Typography from "./components/Typography";

export default function AppComponent(props) {
	return (
		<div>
			<ColorPallete />
			<Typography />
			<ButtonPalette />
		</div>
	);
}
