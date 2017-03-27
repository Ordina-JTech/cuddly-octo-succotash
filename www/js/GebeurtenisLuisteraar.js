function GebeurtenisLuisteraar(){
  var buttonElement = document.getElementById("Knop");
  document.addEventListener("click", function(e) {
    var target = e.target || e.srcElement;
    spelBeheerder.erIsOpEenKnopGeklikt(target, buttonElement);
    spelBeheerder.erIsNaastGeklikt(target, buttonElement);
  }, false);
}
