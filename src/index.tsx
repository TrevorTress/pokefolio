import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

const GameLogic: React.FC<{ className?: string }> = ({ className }) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const c = canvas.getContext('2d');
		if (!c) return;

		canvas.width = 1024;
		canvas.height = 576;

		c.fillRect(0, 0, canvas.width, canvas.height);
	}, []);

	return <canvas ref={canvasRef} className={className}></canvas>;
};

const Game = styled(GameLogic)`
	background: lightblue;
`;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter>
		<Game />
	</BrowserRouter>
);
