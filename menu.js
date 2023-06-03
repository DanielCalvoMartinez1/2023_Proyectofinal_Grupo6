var movies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    image: "imagenes/VENGADORES.GIF",
    Descripcion: "Una película de superhéroes",
    url: "pelicula.html"
  },
  {
    id: 2,
    title: "Joker",
    image: "imagenes/joker.gif",
    Descripcion: "Un drama psicológico",
    url: "https://www.example.com/joker"
  },
  {
    id: 3,
    title: "Inception",
    image: "imagenes/INCEPTION.gif",
    Descripcion: "Ciencia ficción",
    url: "https://www.example.com/joker"
  },
  {
    id: 4,
    title: "Cars",
    image: "imagenes/cars.gif",
    Descripcion: "Comedia deportiva animada",
    url: "https://www.example.com/joker"
  },
  {
    id: 5,
    title: "Tokyo Race",
    image: "imagenes/tokyorace.gif",
    Descripcion: "Acción",
    url: "https://www.example.com/joker"
  },
  {
    id: 6,
    title: "Los Increibles 2",
    image: "imagenes/LosIncreibles.gif",
    Descripcion: "Pelicula de superheroes",
    url: "https://www.example.com/joker"
  },
  {
    id: 7,
    title: "UP",
    image: "imagenes/UP.gif",
    Descripcion: "Cine de aventuras",
    url: "https://www.example.com/joker"
  },
  {
    id: 8,
    title: "Locos por el surf",
    image: "imagenes/Locosporelsrf.jpg",
    Descripcion: "Comedia cinematografica",
    url: "https://www.example.com/joker"
  },
  {
    id: 9,
    title: "Monstruos S.A",
    image: "imagenes/MONSTRUOS.gif",
    Descripcion: "Comedia cinematografica",
    url: "https://www.example.com/joker"
  },
  {
    id: 10,
    title: "Avatar",
    image: "imagenes/avatar.gif",
    Descripcion: "Acción",
    url: "https://www.example.com/joker"
  },
];

// Obtener el contenedor de las tarjetas
var movieCardsContainer = document.querySelector["pelicula 1"];
console.log("Avengers: Endgame");

var movieCardsContainer = document.querySelector["pelicula 2"];
console.log("Joker");

var movieCardsContainer = document.querySelector["pelicula 3"];
console.log("Inception");

var movieCardsContainer = document.querySelector["pelicula 4"];
console.log("Cars");

var movieCardsContainer = document.querySelector["pelicula 5"];
console.log("Tokyo Race");

var movieCardsContainer = document.querySelector["pelicula 6"];
console.log("Los Increibles 2");

var movieCardsContainer = document.querySelector["pelicula 7"];
console.log("UP");

var movieCardsContainer = document.querySelector["pelicula 8"];
console.log("Locos por el surf");

var movieCardsContainer = document.querySelector["pelicula 9"];
console.log("Monstruos S.A");

var movieCardsContainer = document.querySelector["pelicula 10"];
console.log("Avatar");


// Obtener el contenedor de las tarjetas
var movieCardsContainer = document.getElementById("movie-cards");

// Recorrer las películas y crear las tarjetas
for (var i = 0; i < movies.length; i++) {
  var movie = movies[i];

  // Crear elementos HTML para la tarjeta de la película
  var card = document.createElement("div");
  card.classList.add("card");

  var title = document.createElement("h2");
  title.textContent = movie.title;

  var image = document.createElement("img");
  image.src = movie.image;
  image.alt = movie.title;
  image.style.width = "200px"; // Establecer ancho de la imagen
  image.style.height = "300px"; // Establecer altura de la imagen
  image.style.objectFit = "cover"; // Ajustar la imagen al tamaño del contenedor

  var description = document.createElement("p");
  description.textContent = movie.Descripcion;
  description.style.color = "white";

  // Agregar elementos a la tarjeta
  card.appendChild(title);
  card.appendChild(image);
  card.appendChild(description);

  // Agregar la tarjeta al contenedor
  movieCardsContainer.appendChild(card);
}

function searchMovies(searchTerm) {
  var filteredMovies = movies.filter(function(movie) {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  renderMovies(filteredMovies);
}

var movieSearchInput = document.getElementById("movie-search");
movieSearchInput.addEventListener("input", function(event) {
  var searchTerm = event.target.value;
  searchMovies(searchTerm);
});

function renderMovies(filteredMovies) {
  // Limpiar el contenedor de las tarjetas
  movieCardsContainer.innerHTML = "";

  // Recorrer las películas filtradas y crear las tarjetas
  for (var i = 0; i < filteredMovies.length; i++) {
    var movie = filteredMovies[i];

    // Crear elementos HTML para la tarjeta de la película
    var card = document.createElement("div");
    card.classList.add("card");

    var title = document.createElement("h2");
    title.textContent = movie.title;

    var image = document.createElement("img");
    image.src = movie.image;
    image.alt = movie.title;
    image.style.width = "200px"; // Establecer ancho de la imagen
    image.style.height = "300px"; // Establecer altura de la imagen
    image.style.objectFit = "cover"; // Ajustar la imagen al tamaño del contenedor

    image.addEventListener("click", function() {
      window.location.href = "pelicula.html";
    });

    var description = document.createElement("p");
    description.textContent = movie.Descripcion;
    description.style.color = "white";

    // Agregar elementos a la tarjeta
    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(description);

    // Agregar la tarjeta al contenedor
    movieCardsContainer.appendChild(card);
  }
}

// Renderizar todas las películas inicialmente
renderMovies(movies);