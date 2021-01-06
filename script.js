const song = new Audio('lacrimosa.mp3');
const box = document.getElementById('box_item');

box.addEventListener('mousedown', (e) =>{
    song.play();
})