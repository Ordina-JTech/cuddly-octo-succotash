function SpelBeheerder(){

    this.knopFabriek;
    this.knop;
    this.knopPositieDienst;
    this.score;
    this.gebeurtenisLuisteraar;
    this.teller;

    // start functie, wordt uitgevoerd bij begin spel
    this.start = function(){
        this.knopFabriek = new KnopFabriek();
        this.knopPositieDienst = new KnopPositieDienst();
        this.score = new Score();
        this.teller = new Teller(this.eindeSpel);

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
      this.score.score -= this.knop.waarde;
      this.score.toonScore();
      this.toonNieuweKnop();
    }

    this.eindeSpel = function(){
      alert("De tijd is om! \nJouw score: " + this.score.score + " punten!");
      window.open("../www/highscores.html","_self");
    }
}
