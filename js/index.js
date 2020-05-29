const refs = {
	startBtn: document.querySelector('button[data-action="start"'),
	stopBtn: document.querySelector('button[data-action="stop"'),
};

let interval = null;
let isActive = false;

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
const randomIntegerFromInterval = (max) => {
	return Math.floor(Math.random() * (max + 1));
};
const setRandomColor = () => {
	const color = colors[randomIntegerFromInterval(colors.length - 1)];
	console.log(color);
	document.body.style.backgroundColor = color;
};

refs.startBtn.addEventListener('click', () => {
	if (isActive) {
		return;
	}
	isActive = true;
	interval = setInterval(() => {
		setRandomColor();
	}, 1000);
});
refs.stopBtn.addEventListener('click', () => {
	clearInterval(interval);
	isActive = false;
});
