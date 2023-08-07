import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

const GameLogic: React.FC<{ className?: string }> = ({ className }) => {
	const canvas: HTMLCanvasElement | null = document.querySelector('canvas');
	if (canvas) {
		canvas.width = 1024;
		canvas.height = 576;
	}

	return <canvas className={className}></canvas>;
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
