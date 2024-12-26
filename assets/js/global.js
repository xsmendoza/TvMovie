"use strict";

/*----- Add event on multiple elements ------*/
const addEventOnElements = function (elements, eventType, callback) {
  for (const elem of elements) {
    elem.addEventListener(eventType, callback);
  }
};

/*----- Toggle search box in mobile device ------*/
const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", function () {
  searchBox.classList.toggle("active");
});

/*
Store MovieId in Local Storage when I click any movie card
.*/
/*const getMovieDetail = function (movieId) {
  window.localStorage.setItem("movieId", String(movieId));
}; */
// index 
const getMovieDetail = function (event, movieId, movieTitle) {
  // Evitar que el enlace navegue automáticamente
  event.preventDefault();

  // Guardar el ID de la película en localStorage
  window.localStorage.setItem("movieId", String(movieId));

  // Formatear el título de la película para usarlo en la URL
  let formattedTitle = movieTitle.toLowerCase().replace(/\s+/g, '-');

  // Actualizar la URL en la barra de direcciones sin recargar la página
  window.history.pushState({}, '', `detail.html?title=${formattedTitle}`);

  // Opción adicional: Si quieres redirigir a la página de detalles con el título en la URL:
  // window.location.href = `detail.html?title=${formattedTitle}`;
};
// finish 

const getMovieList = function (urlParam, genreName) {
  window.localStorage.setItem("urlParam", urlParam);
  window.localStorage.setItem("genreName", genreName);
};
