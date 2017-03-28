function SpelBeheerder(){

    this.knopFabriek;
    this.knop;
    this.knopPositieDienst;
    this.score;
    this.teller;

    // start functie, wordt uitgevoerd bij begin spel
    this.start = function(){
        this.knopFabriek = new KnopFabriek();
        this.knopPositieDienst = new KnopPositieDienst();
        this.score = new Score();
        this.teller = new Teller();
        this.toonNieuweKnop();
        this.score.toonScore();

    }

    this.toonNieuweKnop = function(){
        this.knop = this.knopFabriek.krijgWillekeurigeKnop();
        this.knop.klikLuisteraar = this.erIsOpEenKnopGeklikt;
        this.knopPositieDienst.toonKnop(this.knop);
    }

    this.erIsOpEenKnopGeklikt = function() {
      this.score.score += this.knop.waarde;
      this.score.toonScore();
      this.toonNieuweKnop();
    }
    
    this.eindeSpel = function(){
      window.open("../www/highscores.html","_self");
      alert("De tijd is om! \nJou score: " + this.score.score + " punten!");
    }
}
