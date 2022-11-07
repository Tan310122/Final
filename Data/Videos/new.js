// function showlightbox(img_src){
//     document.querySelector(".lightbox>.large_img").src = img_src;

//     document.querySelector(".lightbox").style.display = "block";
// }

images = document.querySelectorAll(".galary>img");
for(var i = 0; i < images.length; i++){
    images[i].onclick = function(){
        document.querySelector(".lightbox>.large_img").src = this.src;

        document.querySelector(".lightbox").style.display = "block";
    }
}

document.querySelector(".lightbox>.bg").onclick = function() {
        document.querySelector(".lightbox").style.display = "none";
    }

function open_chatbox() {
    document.querySelector(".chatbox").style.display = "block";
  }

function close_chatbox() {
    document.querySelector(".chatbox").style.display = "none";
  }