window.addEventListener('load', 
  function() {
		let isSignedIn = localStorage.getItem("profile-auth") == 'bXJib25lczEw';
		let hasVideo = sessionStorage.getItem("film") != undefined;
		switch(location.pathname) {
      case "/browse/":
        if(!isSignedIn) {
          location.replace("/login");
        }
        break;
			case "/signup/":
				if(isSignedIn) {
					location.replace("/browse");
				}
				break;
			case "/login/":
				if(isSignedIn) {
					location.replace("/browse");
				}
				break;
			case "/watch/":
				if(!isSignedIn) {
					location.replace("/login");
				} else if(!hasVideo) {
					location.replace("/browse");
				}
				break;
		}
  }, false);