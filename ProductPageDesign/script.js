let productImg = document.getElementById('productImg');
let btn = document.getElementsByClassName('btn');

btn[0].onclick = function(){
    productImg.src = 'images/image1.png';
    // btn[0].classList.add('active');
    // btn[1].classList.remove('active');
    // btn[2].classList.remove('active');
    for(bt of btn){
        bt.classList.remove('active');
    }
    this.classList.add("active")
}

btn[1].onclick = function(){
    productImg.src = 'images/image2.png';
    // btn[1].classList.add('active');
    // btn[0].classList.remove('active');
    // btn[2].classList.remove('active');
    for(bt of btn){
        bt.classList.remove('active');
    }
    this.classList.add("active")
}

btn[2].onclick = function(){
    productImg.src = 'images/image3.png';
    // btn[2].classList.add('active');
    // btn[1].classList.remove('active');
    // btn[0].classList.remove('active');
    for(bt of btn){
        bt.classList.remove('active');
    }
    this.classList.add("active")
}