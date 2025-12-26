const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const song = document.getElementById('audio');
const play = document.getElementById('play');
const cover = document.getElementById('cover');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const currestProgress = document.getElementById('currest-progress');
const progressContainer = document.getElementById('progress-Container');

let isPlaying = false;
let index = 0;

// Estrutura centralizada e reutilizável da playlist
const Playlist = [
    { songName: "Amanhecer", artist: "Calcinha Preta", File: 'Amanhecer' },
    { songName: "Longe", artist: "Calcinha Preta", File: 'Longe' },
    { songName: "Tem Mais Alguém", artist: "Calcinha Preta", File: 'Tem Mais Alguém' },
    { songName: "Baby Doll", artist: "Calcinha Preta", File: 'Baby Doll' },
    { songName: "Faço Chover", artist: "Calcinha Preta", File: 'Faço Chover' },
    { songName: "Agora Estou Sofrendo", artist: "Calcinha Preta", File: 'Agora Estou Sofrendo' },
    { songName: "Bandido do Amor", artist: "Calcinha Preta", File: 'Bandido do Amor' },
    { songName: "Saideira Em Mil Pedaços", artist: "Calcinha Preta", File: 'Saideira - Em Mil Pedaços' },
    { songName: "Armadilha", artist: "Calcinha Preta", File: 'Armadilha' },
    { songName: "Morrendo de Desejo", artist: "Calcinha Preta", File: 'Morrendo de Desejo' },
    { songName: "Adão e Eva Romeu e Julieta", artist: "Calcinha Preta", File: 'Adão e Eva Romeu e Julieta' },
    { songName: "Mágica", artist: "Calcinha Preta", File: 'Mágica' },
    { songName: "Por Amor", artist: "Calcinha Preta", File: 'Por Amor' },
    { songName: "A Encruzilhada", artist: "Calcinha Preta", File: 'A Encruzilhada' },
    { songName: "Refém Cobertor", artist: "Calcinha Preta", File: 'Refém - Cobertor' },
    { songName: "Declaração de Amor", artist: "Calcinha Preta", File: 'Declaração de Amor' },
    { songName: "Ainda Te Amo", artist: "Calcinha Preta", File: 'Ainda Te Amo' },
    { songName: "Amor da Minha Vida", artist: "Calcinha Preta", File: 'Amor da Minha Vida' },
    { songName: "Verdadeiro Amor", artist: "Calcinha Preta", File: 'Verdadeiro Amor' },
    { songName: "É Linda Nossa História", artist: "Calcinha Preta", File: 'É Linda Nossa História' }
]

function playSong() {
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}

function pauseSong() {
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;
}

function playPauseDecider(){
    if (isPlaying === true) {
        pauseSong();
    } else {
        playSong();
    }
}

function previousSong(){
    if (index === 0) {
        index = Playlist.length - 1;
    } else {
        index -= 1;
    }
    initializeSong();
    playSong();
}

function nextSong(){
    if (index === Playlist.length - 1) {
        index = 0;
    } else {
        index += 1;
    }
    initializeSong();
    playSong();
}

function initializeSong(){
    cover.src = `Img/${Playlist[index].File}.jpg`;
    song.src = `Audio/${Playlist[index].File}.mp3`;
    songName.innerText = Playlist[index].songName;
    bandName.innerText = Playlist[index].artist;
}

function updateProgressBar(){
    const barWidth = (song.currentTime / song.duration) * 100;
    currestProgress.style.setProperty('--progress', `${barWidth}%` );
}

function jumpTo(event){
    
}

initializeSong();

play.addEventListener('click', playPauseDecider); 
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);
song.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', jumpTo);