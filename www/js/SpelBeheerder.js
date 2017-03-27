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

        var buttonElement = document.getElementById("Knop");
        document.addEventListener("click", function(e) {
    		  var target = e.target || e.srcElement;
    		  if (target !== buttonElement) {
            spelBeheerder.score.score -= spelBeheerder.knop.waarde;
    		  } else {
    				spelBeheerder.score.score += spelBeheerder.knop.waarde;
          }
    			document.getElementById("Score").innerHTML = spelBeheerder.score.score;
          spelBeheerder.toonNieuweKnop();
    		}, false);

        this.toonNieuweKnop();
    }

    this.toonNieuweKnop = function(){
        this.knop = this.knopFabriek.krijgWillekeurigeKnop();

        this.knop.klikLuisteraar = this.erIsOpEenKnopGeklikt;
        this.knopPositieDienst.toonKnop(this.knop);
    }

//onderstaande methodes worden nu niet gebruikt, omdat niet via klikLuisteraar
//en deze methodes de klik word verwerkt.
    this.erIsOpEenKnopGeklikt = function() {
      this.score.score += this.knop.waarde;
      document.getElementById("Score").innerHTML = this.score.score;
      this.toonNieuweKnop();
    }

    this.erIsNaastGeklikt = function(){
      this.score.score -= this.knop.waarde;
      document.getElementById("Score").innerHTML = this.score.score;
      this.toonNieuweKnop();
    }
}
