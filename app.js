function update_text(){
    var user_text =document.getElementById("user_text");
    var meme_text = document.getElementById("meme_text");
    meme_text.innerHTML = user_text.value;
}
function update_image(){
var img = document.querySelector('img');
var file =document.querySelector('input[type=file]').files[0];
img.src = window.URL.createObjectURL(file);
}