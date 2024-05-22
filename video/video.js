const playBtn = document.querySelector('.play-button');
const pauseBtn = document.querySelector('.pause-button')
const video = document.querySelector('.video');

playBtn.addEventListener('click', function () {
    video.play();
});

pauseBtn.addEventListener('click', function () {
    video.pause();
})