var selectField = document.getElementById('selectField');
var selectedMedia = document.getElementById('selectedMedia');

var options = document.getElementsByClassName('options');
var list = document.getElementById('list');
var arrow = document.getElementById('arrow');

selectField.addEventListener('click',()=>{
    list.classList.toggle('hide');
    arrow.classList.toggle('rotate');
})

for(option of options){
    option.onclick = function(){
        selectedMedia.innerHTML = this.textContent;
        list.classList.toggle('hide');
        arrow.classList.toggle('rotate');
    }
}