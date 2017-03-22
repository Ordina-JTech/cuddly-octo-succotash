function SpelBeheerder(){

    this.knopFabriek;
    this.knop;
    this.knopPositieDienst;
    this.score;

    // start functie, wordt uitgevoerd bij begin spel
    this.start = function(){
        this.knopFabriek = new KnopFabriek();
        this.knopPositieDienst = new KnopPositieDienst();
        this.score = new Score();

        this.toonNieuweKnop();
    }

    this.toonNieuweKnop = function(){
        this.knop = this.knopFabriek.krijgWillekeurigeKnop();

        this.knop.klikLuisteraar = this.erIsOpEenKnopGeklikt;
        this.knopPositieDienst.toonKnop(this.knop);
    }

    this.erIsOpEenKnopGeklikt = function() {
      this.score.score += this.knop.waarde;
      alert("nieuwe score: " + this.score.score);

      this.toonNieuweKnop();
    }
}
