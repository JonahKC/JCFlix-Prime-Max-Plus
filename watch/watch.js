const films = [
	{ // first film, so film is film 0, next one is film 1
		"id": "mrbones-movie",
		"embed": '<video class="videoPlayer" controls><source src="https://onedrive.live.com/download?cid=39AB676A0E8C097A&resid=39AB676A0E8C097A%21498631" type="video/mp4">Oops! Your browser isn\'t capable of running our ultra-high-quality content!</video>',
		"author": "Jonah",
		"title": "Mr. Bones: The Movie",
		"description": "Mr. Bones goes on an epic space saga."
	}
]

window.addEventListener('load', 
  function() {
    let film = sessionStorage.getItem("film");
    document.getElementById("film-title").innerText = films[film].title;
    document.getElementById("film-description").innerHTML = "<p>" + films[film].description + "</p>";
    document.getElementById("film-author").innerText = "By " + films[film].author;
    document.getElementById("film-embed-container").innerHTML = films[film].embed;
  }, false);