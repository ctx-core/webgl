/**
 * @param {import('./index.d.ts').gl_resize__gl_T}gl
 */
export function gl_resize(gl) {
	const { devicePixelRatio } = window
	// Lookup the size the browser is displaying the canvas in CSS pixels
	// and compute a size needed to make our drawingbuffer match it in
	// device pixels.
	const displayWidth = Math.floor(gl.canvas.clientWidth * devicePixelRatio)
	const displayHeight = Math.floor(gl.canvas.clientHeight * devicePixelRatio)
	// Check if the canvas is not the same size.
	if (gl.canvas.width !== displayWidth || gl.canvas.height !== displayHeight) {
		// Make the canvas the same size
		gl.canvas.width = displayWidth
		gl.canvas.height = displayHeight
	}
}
export { gl_resize as resize__gl }
