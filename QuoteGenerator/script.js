const apiUrl = 'https://api.quotable.io/random';
const Quote = document.getElementById('quote')
const Author = document.getElementById('author')
async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    // console.log(data)
    Quote.innerHTML = data.content
    Author.innerHTML = data.author
}
getQuote(apiUrl);

function tweet(){
    window.open('https://twitter.com/intent/tweet?text='+Quote.innerHTML,'Tweet Window','widdth=600','height=300')
}