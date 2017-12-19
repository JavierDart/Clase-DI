onload = function(){
  function mute(){
          var sonido = document.getElementById('player').muted;
          if (sonido === true){
            document.getElementById('player').muted = false;
          }else{
            document.getElementById('player').muted = true;
          }
        }
        
}
