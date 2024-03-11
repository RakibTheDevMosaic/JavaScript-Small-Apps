let progressnumber = document.getElementById('progressnumber');
let counter = 0;

setInterval(()=>{
    if (counter == 65) {
        clearInterval();
    } else {
        counter +=1;
        progressnumber.innerHTML = counter + "%";
    }
},44)