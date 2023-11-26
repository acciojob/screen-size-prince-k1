//your JS code here. If required.
const h = document.querySelector('#sizeInfo');

function updateSize() {
	let width = window.innerWidth;
	let height = window.innerHeight;
	h.innerText = `Width: ${width} and Height: ${height}`;
}
updateSize();
window.addEventListener('resize', updateSize);