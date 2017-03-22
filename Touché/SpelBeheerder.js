function SpelBeheerder(){

    this.knopFabriek;
    this.knop;
    this.knopPositieDienst;
    this.score;

    this.erIsOpEenKnopGeklikt = function() {
      alert("onclick");
    }

    // start functie, wordt uitgevoerd bij begin spel
    this.start = function(){
        this.knopFabriek = new KnopFabriek();
        this.knopPositieDienst = new KnopPositieDienst();
        this.score = new Score();

        this.toonNieuweKnop();
    }

    this.toonNieuweKnop = function(){
        this.knop = this.knopFabriek.krijgWillekeurigeKnop();
        this.knopPositieDienst.toonKnop(this.knop);
        // this.knop.klikLuisteraar = erIsOpEenKnopGeklikt;

    }
}
