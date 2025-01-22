document.addEventListener('DOMContentLoaded', function() {
	const sendViewportSize = () => {
		const width = window.innerWidth;
		const height = window.innerHeight;

		const viewportEvent = new CustomEvent("viewport-resize", {
			detail: { width, height }
		});
		document.dispatchEvent(viewportEvent);
	};

	sendViewportSize();
	window.addEventListener('resize', sendViewportSize);
})