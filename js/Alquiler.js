const peliculas = [
    {"titulo": "Dune: Parte 1", "imagen": "https://es.web.img3.acsta.net/c_300_300/pictures/21/10/05/16/34/3730759.jpg", "id": 1},
    {"titulo": "Godzilla x Kong", "imagen": "https://es.web.img2.acsta.net/pictures/21/03/15/18/35/3097205.jpg", "id": 2},
    {"titulo": "Kung Fu Panda 1", "imagen": "https://es.web.img3.acsta.net/pictures/16/03/04/13/44/418557.jpg", "id": 3},
    {"titulo": "The Batman", "imagen": "https://pics.filmaffinity.com/The_Batman-543465953-large.jpg", "id": 4},
    {"titulo": "John Wick 1", "imagen": "https://m.media-amazon.com/images/S/pv-target-images/6257f5fb6fd1e528e53c9f39a5743fd544a9ff64eb4bda9f0c47b7621810ca68.jpg", "id": 5},
    {"titulo": "Spider-Man: No Way Home", "imagen": "https://images.cdn2.buscalibre.com/fit-in/360x360/1d/0b/1d0bd605d43308f3421d4a3f1cda034b.jpg", "id": 6},
    {"titulo": "Avatar 1", "imagen": "https://es.web.img3.acsta.net/medias/nmedia/18/92/13/82/20182449.jpg", "id": 7},
    {"titulo": "Doctor Strange 2", "imagen": "https://es.web.img3.acsta.net/pictures/22/04/07/11/43/1839314.jpg", "id": 8},
    {"titulo": "Oppenheimer", "imagen": "https://m.media-amazon.com/images/M/MV5BNTFlZDI1YWQtMTVjNy00YWU1LTg2YjktMTlhYmRiYzQ3NTVhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "id": 9},
    {"titulo": "Barbie", "imagen": "https://es.web.img2.acsta.net/pictures/23/07/20/11/29/5479684.jpg", "id": 10},
    {"titulo": "Elemental", "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Gb8MOcPLvO8bj81cgidvaIy16AoL5kCy8g&s", "id": 11},
    {"titulo": "The Marvels", "imagen": "https://m.media-amazon.com/images/S/pv-target-images/ceeb96f4b7ea3ad13ecc842bcc2803e3298ee94c419a9cc68ff8f41e873db1cc.jpg", "id": 12},
    {"titulo": "Top Gun: Maverick", "imagen": "https://es.web.img2.acsta.net/pictures/22/03/29/15/57/1533124.jpg", "id": 13},
    {"titulo": "El Gato con Botas 2", "imagen": "https://es.web.img3.acsta.net/pictures/22/06/16/12/54/0504030.jpg", "id": 14},
    {"titulo": "Black Adam", "imagen": "https://pics.filmaffinity.com/Black_Adam-333825779-large.jpg", "id": 15},
    {"titulo": "Venom 2", "imagen": "https://es.web.img2.acsta.net/pictures/21/08/31/16/41/4145554.jpg", "id": 16},
    {"titulo": "Scream VI", "imagen": "https://m.media-amazon.com/images/M/MV5BMTk5OTcxNTUyNF5BMl5BanBnXkFtZTcwMDczMzE0NA@@._V1_.jpg", "id": 17},
    {"titulo": "Inception", "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSst4d8lj72xNuuGSbj7e_UVZi2lQ86RC2FqQ&s", "id": 18},
    {"titulo": "Everything Everywhere All at Once", "imagen": "https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "id": 19},
    {"titulo": "Frozen II", "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbug2KDoye0iB3nyfDTT_kD6IyT3rZ1sWM-Q&s", "id": 20}
  ];

  const peliculasGrid = document.getElementById("peliculasGrid");

  function mostrarPeliculas(peliculas) {
    peliculasGrid.innerHTML = "";
    peliculas.forEach(pelicula => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${pelicula.imagen}" alt="${pelicula.titulo}">
      <div class="card-body">
          <div class="card-title">${pelicula.titulo}</div>
          <a href="../PgPeliculas/detalle${pelicula.id}.html">Saber más</a>
      </div>
      `;
      peliculasGrid.appendChild(card);
    });
  }

  function filtrarPeliculas() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const peliculasFiltradas = peliculas.filter(pelicula => pelicula.titulo.toLowerCase().includes(searchTerm));
    mostrarPeliculas(peliculasFiltradas);
  }

  mostrarPeliculas(peliculas);

  var c=0;

function carrusel()
{
    document.getElementById("ban").src=imgs[c];
    document.getElementById("titulo-carrusel").innerText = titulos[c];
    document.getElementById("texto-carrusel").innerText = textos[c];
    c++;
    if(c>=imgs.length) c=0;
    setTimeout(carrusel,5000);
}

document.body.setAttribute("onload","carrusel()");