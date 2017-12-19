onload = function{
  function camb(){
    var cancion = document.getElementsByTagName('source');
    if(cancion[0].src="audio/SOUNDPROOF.ogg" && cancion[1].src="audio/SOUNDPROOF.mp3"){
      document.getElementsByTagName('source')[0].src = "audio/VORTTEX.ogg";
      document.getElementsByTagName('source')[1].src = "audio/VORTTEX.mp3";
    }
    if(cancion[0].src="audio/VORTTEX.ogg" && cancion[1].src="audio/VORTTEX.mp3"){
      document.getElementsByTagName('source')[0].src = "audio/SOUNDPROOF.ogg";
      document.getElementsByTagName('source')[1].src = "audio/SOUNDPROOF.mp3";
    }
    else {

    }
  }

}
