function createVideoElement(src, muted, customclass, type, errorMessage) {
	return `<video class="${customclass}" controls muted="${muted}"><source src="${src}" type="video/mp4">${errorMessage}</video>`
}
function returnHTMLcode(id, src, muted, customclass, type, errorMessage) {
	document.getElementById(id).innerText = createVideoElement(src, muted, customclass, type, errorMessage)
	console.log(createVideoElement(src, muted, customclass, type, errorMessage))
}
document.getElementById('video-creator').onclick = () => {
	var data = {
		"src": document.getElementById('video-source').value,
		"muted": document.getElementById('video-muted').value,
		"type": document.getElementById('video-type').value,
		"customclass": document.getElementById('video-customclass').value,
		"error": document.getElementById('video-errormessage').value
	}
	if(data.src == "") data.src = "https://github.com/Abdisalan/blog-code-examples/raw/master/http-video-stream/bigbuck.mp4"
	if(data.muted == "") data.muted = "muted"
	if(data.type == "") data.type = "video/mp4"
	if(data.customclass == "") data.customclass = "videoPlayer"
	if(data.error == "") data.error = "Oops! Your browser isn't capable of running our ultra-high-quality content!"

	returnHTMLcode('video-element', data.src, data.muted, data.customclass, data.type, data.error);
}