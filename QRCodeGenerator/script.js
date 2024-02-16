const QRCodeApiUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let inputText = document.getElementById('inputText');

function QrGenerator(){
    if (inputText.value.length > 0) {
        qrImage.src = QRCodeApiUrl + inputText.value;
        imgBox.classList.add('show-img');
        inputText.style.borderColor = '#494eea';
    } else {
        inputText.classList.add('error');
        inputText.style.borderColor = 'red'
        setTimeout(()=>{
            inputText.classList.remove('error')
        },1500)
        // alert('Please , give any text or URL')
    }
}