function hideAll(){
    contents = document.querySelectorAll(".contents>div");
    for(var j=0 ; j <contents.length ; j++) {
        contents[j].style.display = "none";
    }
}

hideAll();
document.querySelectorAll(".contents>div")[0].style.display = "block"

tabs = document.querySelectorAll(".tabs>a");

for ( var i =0; i < tabs.length ; i++) {
    tabs[i].onclick = function(){
            hideAll();

            document.querySelector(".contents>.tab-" + this.id).style.display="block";
        }
    }
