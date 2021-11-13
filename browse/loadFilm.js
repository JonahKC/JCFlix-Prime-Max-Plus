function loadFilm(filmIndex) {
  sessionStorage.setItem("film", filmIndex);
  location.replace("/watch");
}