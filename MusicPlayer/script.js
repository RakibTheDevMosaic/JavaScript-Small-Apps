let progress = document.getElementById('progress');
let song = document.getElementById('song');
let cntrlIcon = document.getElementById('cnrtlIcon');


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime; 
}

function playpause() {
    if(cntrlIcon.classList.contains("fa-pause")){
        song.pause();
        cntrlIcon.classList.remove("fa-pause");
        cntrlIcon.classList.add("fa-play");
    }else { 
        song.play();
        cntrlIcon.classList.add("fa-pause");
        cntrlIcon.classList.remove("fa-play");
    }
}


if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500)
}

progress.addEventListener('change', function() {
    song.play();
    song.currentTime = progress.value;
    cntrlIcon.classList.add("fa-pause");
    cntrlIcon.classList.remove("fa-play");
});




// let progress = document.getElementById('progress');
// let song = document.getElementById('song');
// let cntrlIcon = document.getElementById('cnrtlIcon');

// song.onloadedmetadata = function(){
//     progress.max = song.duration;
//     progress.value = song.currentTime; 
// }

// function playpause() {
//     if(cntrlIcon.classList.contains('fa-pause')){
//         song.pause();
//         cntrlIcon.classList.remove('fa-pause');
//         cntrlIcon.classList.add('fa-play');
//     }else { 
//         song.play();
//         cntrlIcon.classList.add('fa-pause');
//         cntrlIcon.classList.remove('fa-play');
//     }
// }

// if(song.play()){
//     setInterval(()=>{
//         progress.value = song.currentTime;
//     },500)
// }

// progress.addEventListener('input', function() {
//     song.currentTime = progress.value;
//     if (song.paused) {
//         cntrlIcon.classList.add('fa-pause');
//         cntrlIcon.classList.remove('fa-play');
//     }
// });

// song.addEventListener('play', function() {
//     cntrlIcon.classList.add('fa-pause');
//     cntrlIcon.classList.remove('fa-play');
// });

// song.addEventListener('pause', function() {
//     cntrlIcon.classList.add('fa-play');
//     cntrlIcon.classList.remove('fa-pause');
// });