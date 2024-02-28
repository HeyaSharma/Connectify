let music = document.getElementById("music");
let icon = document.getElementById("icon");
let prev = document.getElementById("prev");
let next = document.getElementById("next");


icon.onclick = function (){
    if(music.paused)
    {
         music.play();
         icon.src="pause.png";
      
    }

    else
    {
         music.pause();
         icon.src="play.png";
    }

};
