window.onload = () => {
	Array.from(document.getElementsByClassName('profile-username')).forEach(function(item, index) {item.innerText = localStorage.getItem('profile-username')});
	Array.from(document.getElementsByClassName('profile-email')).forEach(function(item, index) {item.innerText = localStorage.getItem('profile-email')});
	Array.from(document.getElementsByClassName('profile-icon')).forEach(function(item, index) {item.src = localStorage.getItem('profile-icon')});
}