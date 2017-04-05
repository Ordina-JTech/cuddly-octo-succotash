//start als pagina klaar is


$(document).ready(function(){
    var spelBeheerder = new SpelBeheerder();
    spelBeheerder.start();
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
      console.log(navigator.notification);

    }

    function openHighscores(){
      window.open("highscores.html");
    }

});
