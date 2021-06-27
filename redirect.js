window.addEventListener('load', 
  function() {
		var isSignedIn = localStorage.getItem("profile-email") == undefined ? false : true;
		var hasVideo = sessionStorage.getItem("film") == undefined ? false : true;
		switch(location.pathname) {
			case "/signup.html":
				if(isSignedIn) {
					location.replace("/browse.html");
				}
				break;
			case "/login.html":
				if(isSignedIn) {
					location.replace("/browse.html");
				}
				break;
			case "/watch.html":
				if(!isSignedIn) {
					location.replace("/login.html");
				} else if(!hasVideo) {
					location.replace("/browse.html");
				}
				break;
		}
  }, false);