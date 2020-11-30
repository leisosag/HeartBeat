const playlist1 = document.getElementById("playlist1");
const playlist2 = document.getElementById("playlist2");
const playlist3 = document.getElementById("playlist3");
const tracksContainer = document.getElementById("tracks-container");
const playlistContainer = document.getElementById("playlist-container");

let filtro = "";

window.onload = () => {
  obtenerPlaylist();
  playlistContainer.addEventListener("click", filtrarPlaylist);
};

const filtrarPlaylist = (e) => {
  e.preventDefault();
  filtro = e.target.id;
  obtenerPlaylist(filtro);
};

const obtenerPlaylist = (filtro) => {
  try {
    fetch("./playlist.json")
      .then((res) => res.json())
      .then((data) => {
        mostrarPlaylist(data.playlist, filtro);
        tracksContainer.addEventListener("click", (e) =>
          mostrarTrack(data.playlist, e.target.id)
        );
      });
  } catch (error) {
    console.log(error);
  }
};

const limpiarHTML = () => {
  while (tracksContainer.firstChild) {
    tracksContainer.removeChild(tracksContainer.firstChild);
  }
};

const mostrarPlaylist = (listado, filtro) => {
  limpiarHTML();

  const scripting = (track) => {
    tracksContainer.innerHTML += `
            <div class="track-container">
                <i class="fas fa-play" id="${track.id}"></i>
                <h6 class="mt-1">0${track.index}</h6>
                <img src="./img/${track.titulo}.jpg" alt="album">
                <h5 class="mt-1">${track.titulo}</h5>
                <h6 class="mt-1">${track.artista}</h6>
            </div>`;
  };

  listado.map((track) => {
    const { categoria } = track;
    if (filtro === track.categoria) {
      scripting(track);
    }
  });
};

const mostrarTrack = (listado, trackId) => {
  console.log(trackId);
};
