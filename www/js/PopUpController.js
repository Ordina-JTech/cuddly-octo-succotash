function PopUpController(spel){
  this.vraagNaam = function(spel){
    navigator.notification.prompt(("Jouw score is " + spel.score.score + "\nGeef naam op om score op te nemen in highscores."),
                                  alsPrompt,
                                  "De tijd is om!", //titel
                                  ["OK", "Annuleren"] //text op de knoppen
                                );
  }
  function alsConfirm(buttonIndex) {
    switch(buttonIndex){
      default:
        window.history.go(-1);
        break;
      case 1:
        window.history.go(-1);
        break;
      case 2:
        window.location.reload(true);
        break;
    }
  }
  function alsPrompt(results) {
    switch(results.buttonIndex){
      case 0:
        spel.popUpController.vraagNaam(spel);
        break;
      case 1:
        spel.speler = results.input1;
        navigator.notification.confirm("Je score is geregistreerd!" +
                                      "\nBekijk alle highscores op de highscores pagina." +
                                      "\nWil je opnieuw spelen?",
                                      alsConfirm,
                                      "Hoi " + spel.speler,
                                      ["Home","Opnieuw spelen"]);
        break;
      case 2:
        navigator.notification.confirm("Je score is niet geregistreerd! \nWil je opnieuw spelen?",
                                      alsConfirm,
                                      "Geannuleerd",
                                      ["Home","Opnieuw spelen"]);
        break;
      }
  }
}
