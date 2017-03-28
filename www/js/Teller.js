function Teller(tellerAfgelopenFunctie){
  document.getElementById("Teller").innerHTML = "0:00"
  this.aftellen = function() {
    var seconden = 30;
    function tik() {
        var afteller = document.getElementById("Teller");
        seconden--;
        afteller.innerHTML = "0:" + (seconden < 10 ? "0" : "") + String(seconden);
        if( seconden > 0 ) {
            setTimeout(tik, 1000);
        } else {
            tellerAfgelopenFunctie();
        }
    }
    tik();
  }
  this.aftellen();
}
