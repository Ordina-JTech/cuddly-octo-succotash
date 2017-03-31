function SpelBeheerder(){

    this.knopFabriek;
    this.knop;
    this.knopPositieDienst;
    this.score;
    this.gebeurtenisLuisteraar;
    this.teller;
    this.speler;

    // start functie, wordt uitgevoerd bij begin spel
    this.start = function(){
        this.knopFabriek = new KnopFabriek();
        this.knopPositieDienst = new KnopPositieDienst();
        this.score = new Score();
        this.teller = new Teller(this.eindeSpel, this);

        //Creëeren en vullen van gebeurtenisLuisteraar:
        var knopElement = document.getElementById("Knop");
        var bodyElement = document.getElementById("Html");
        this.gebeurtenisLuisteraar = new GebeurtenisLuisteraar();
        this.gebeurtenisLuisteraar.init();
        this.gebeurtenisLuisteraar.voegLuisteraarToe(knopElement, function(element) {
          this.erIsOpEenKnopGeklikt(element);
        }.bind(this));
        this.gebeurtenisLuisteraar.voegLuisteraarToe(bodyElement, function(element) {
          this.erIsNaastGeklikt(element);
        }.bind(this));


        this.toonNieuweKnop();
        this.score.toonScore();

    }

    this.toonNieuweKnop = function(){
        this.knop = this.knopFabriek.krijgWillekeurigeKnop();
        this.knopPositieDienst.toonKnop(this.knop);
    }

    this.erIsOpEenKnopGeklikt = function() {
      this.score.score += this.knop.waarde;
      this.score.toonScore();
      this.toonNieuweKnop();
    }

    this.erIsNaastGeklikt = function(element){
      this.score.score -= this.knop.strafpunten;
      this.score.toonScore();
      this.toonNieuweKnop();
    }

    this.eindeSpel = function(spel){
      spel.gebeurtenisLuisteraar.stopLuisteraar();
      document.getElementById("Teller").innerHTML = "Tijd is om!"
      spel.speler = prompt("De tijd is om!\nJou score is "+spel.score.score + "\nWat is je naam?");
      setTimeout(function(){window.open("../www/highscores.html","_self")}, 5000);
    }
}
