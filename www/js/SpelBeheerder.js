function SpelBeheerder(){

    this.knopFabriek;
    this.knop;
    this.knopPositieDienst;
    this.score;
    this.gebeurtenisLuisteraar;

    // start functie, wordt uitgevoerd bij begin spel
    this.start = function(){
        this.knopFabriek = new KnopFabriek();
        this.knopPositieDienst = new KnopPositieDienst();
        this.score = new Score();
        this.gebeurtenisLuisteraar = new GebeurtenisLuisteraar();
        this.gebeurtenisLuisteraar.init();

        this.toonNieuweKnop();
    }

    this.toonNieuweKnop = function(){
        this.knop = this.knopFabriek.krijgWillekeurigeKnop();

        this.knop.klikLuisteraar = this.erIsOpEenKnopGeklikt;
        var knopElement = this.knopPositieDienst.toonKnop(this.knop);
        this.gebeurtenisLuisteraar.voegLuisteraarToe(knopElement, function(element) {
          this.erIsOpEenKnopGeklikt(element);
        }.bind(this));
    }

    this.erIsOpEenKnopGeklikt = function(element) {
        this.score.score += this.knop.waarde;
        document.getElementById("Score").innerHTML = this.score.score;
        this.toonNieuweKnop();
    }

    this.erIsNaastGeklikt = function(target, buttonElement){
      if(target !== buttonElement){
      this.score.score -= this.knop.waarde;
      document.getElementById("Score").innerHTML = this.score.score;
      this.toonNieuweKnop();
      }
    }
}
