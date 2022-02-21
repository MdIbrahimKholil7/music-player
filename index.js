
const playBtn = document.getElementById('play');
const audio = document.getElementById('audio');
const imageRotar = document.getElementById('img-rotate');
const forwardBtn = document.getElementById('forward-btn');
const backBtn = document.getElementById('backBtn');
const title = document.getElementById('title');
const img = document.getElementById('img')
let isPlay = true;


// for music play 
const playMusic = () => {
    // debugger;
    isPlay = false;
    audio.play()
    imageRotar.classList.add('rotate-img');
    playBtn.classList.replace('fa-play', 'fa-pause');

}
// for pause music 
const pauseMusic = () => {
    // debugger
    isPlay = true;
    audio.pause()
    imageRotar.classList.remove('rotate-img');
    playBtn.classList.replace('fa-pause', 'fa-play');
}
// play music btn 
playBtn.addEventListener('click', () => {
    if (isPlay) {
        playMusic()
    } else {
        pauseMusic()
    }
})
// songs array list 
const songs = [
    {
        name: 'Gojol 1',
        audio: 'audio1',
        img: 'img1'
    },
    {
        name: 'Gojol 2',
        audio: 'audio2',
        img: 'img2'
    },
    {
        name: 'Gojol 3',
        audio: 'audio3',
        img: 'img3'
    }
]

// song load function 
const loadSong = (songs) => {
    title.innerText = songs.name;
    audio.src = 'audio/' + songs.audio + '.mp3';
    img.src = 'images/' + songs.img + '.jpeg'
}

let songCount = 0;
// forwardBtn 
forwardBtn.addEventListener('click', () => {
    songCount = (songCount + 1) % songs.length;
    loadSong(songs[songCount]);
    playMusic()
})
// backward btn decleared 
backBtn.addEventListener('click', () => {
    // debugger
    songCount = (songCount - 1 + songs.length) % songs.length;
    loadSong(songs[songCount]);
    playMusic()
    

})



console.log(songCount)





