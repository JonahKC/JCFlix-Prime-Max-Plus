function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
	localStorage.setItem("profile-username", profile.getName());
	localStorage.setItem("profile-icon", profile.getImageUrl());
	localStorage.setItem("profile-email", profile.getEmail());
	window.location.replace("browse.html");
}