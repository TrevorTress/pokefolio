import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

const GameLogic: React.FC<{ className?: string }> = ({ className }) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		// reference html canvas
		const canvas = canvasRef.current;
		if (!canvas) return;

		// reference canvas context
		const c = canvas.getContext('2d');
		if (!c) return;

		// assign canvas properties
		canvas.width = 1024;
		canvas.height = 576;
		c.fillStyle = 'lightblue';
		c.fillRect(0, 0, canvas.width, canvas.height);

		const img = new Image();
		img.src = '/game-map-v1.png';
		img.onload = () => {
			c.drawImage(img, 0, 0);
		};
	}, []);

	return <canvas ref={canvasRef} className={className}></canvas>;
};

const Game = styled(GameLogic)``;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter>
		<Game />
	</BrowserRouter>
);
