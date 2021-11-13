const films = [
	{ // first film, so film is film 0, next one is film 1
		"id": "wet-leaves",
		//"embed": '<video class="videoPlayer" controls><source src="https://drive.google.com/uc?export=download&id=16w_VWktjeV2vTSrqZxLVd9qGlw4Rv_u-" type="video/mp4">Oops! Your browser isn\'t capable of running our ultra-high-quality content!</video>',
		"embed": '<video class="videoPlayer" controls><source src="https://onedrive.live.com/download?cid=39AB676A0E8C097A&resid=39AB676A0E8C097A%21498631" type="video/mp4">Oops! Your browser isn\'t capable of running our ultra-high-quality content!</video>',
		"author": "Jonah",
		"title": "Wet Leaves",
		"description": `Made to compliment the 'Great Leaf Migration' saga on Jonah's YouTube channel, Wet Leaves is a short documentary about wet leaves.<br><br>Music Credits:<br>An Epic Story by MaxKoMusic | <a target="_blank" href="https://maxkomusic.com">https://maxkomusic.com</a><br>Music promoted by <a target="_blank" href="https://www.free-stock-music.com">https://www.free-stock-music.com</a><br>Creative Commons<br>Attribution-ShareAlike 3.0 Unported
    <a target="_blank" href="https://creativecommons.org/licenses/by-sa/3.0/deed.en_US">https://creativecommons.org/licenses/by-sa/3.0/deed.en_US</a>`
	}
]

window.addEventListener('load', 
  function() {
		if(location.href.split("/").slice(-1) == "watch.html") {
			let film = sessionStorage.getItem("film");
			document.getElementById("film-title").innerText = films[film].title;
			document.getElementById("film-description").innerHTML = "<p>" + films[film].description + "</p>";
			document.getElementById("film-author").innerText = "By " + films[film].author;
			document.getElementById("film-embed-container").innerHTML = films[film].embed;
		}
  }, false);