const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const audio = document.getElementById("audio");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const titulo = document.getElementById("titulo");
const artista = document.getElementById("artista");
const cover = document.getElementById("cover");
const playerContainer = document.getElementById("player-container");
const tracksContainer = document.getElementById("tracks-container");
const playlistContainer = document.getElementById("playlist-container");

window.onload = () => {
  obtenerPlaylist();
  //obtenerListadoPlaylist();
};

/*obtenerListadoPlaylist = () => {
  try {
    fetch("./playlist.json")
      .then((respuesta) => respuesta.json())
      .then((resultado) => {
        mostrarListadoPlaylist(resultado.playlist);
      });
  } catch (error) {
    console.log(error);
  }
};*/

/*mostrarListadoPlaylist = (listado) => {
  for (playlist of listado) {
    console.log(playlist.nombre);
    console.log(playlist.index);
    console.log(playlist.imagen);

    playlistContainer.innerHTML += `
        <div class="playlist mb-3">
            <a href="#" id="playlist${playlist.index}><img src="./img/${playlist.imagen}.jpg" alt="playlist" class="playlist-img"></a>
        </div>`;
  }
};*/

obtenerPlaylist = () => {
  try {
    fetch("./playlist.json")
      .then((respuesta) => respuesta.json())
      .then((resultado) => {
        mostrarPlaylist(resultado.playlist);
      });
  } catch (error) {
    console.log(error);
  }
};

mostrarPlaylist = (listado) => {
  let playlistTracks = [];
  playlistTracks = listado.shift();

  playlistTracks.canciones.map((track) => {
    const { id, titulo, artista } = track;
    tracksContainer.innerHTML += `
            <div class="track-container">
                <i class="fas fa-play"></i>
                <h6 class="mt-1">${id}</h6>
                <img src="./img/${titulo}.jpg" alt="album">
                <h5 class="mt-1">${titulo}</h5>
                <h6 class="mt-1">${artista}</h6>
            </div>`;
  });
};
