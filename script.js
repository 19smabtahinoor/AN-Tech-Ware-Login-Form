
//play button 
document.querySelector(".playButtonImage").addEventListener("click",function(){
    document.querySelector("video").play();
    document.querySelector(".playButtonImage").src="pause.png";
});

//pause button
document.querySelector(".playButtonImage").addEventListener("dblclick",function(){
    document.querySelector("video").pause();
    document.querySelector(".playButtonImage").src="play.png";
})
//show password 
document.querySelector(".eye").addEventListener("click",function(){
     document.querySelector(".passwordInput").type="text";
     document.querySelector(".eye").src="hidepassword.png";

});


//hide password
document.querySelector(".eye").addEventListener("dblclick",function(){
    document.querySelector(".passwordInput").type="password";
    document.querySelector(".eye").src="showpassword.png";
});
