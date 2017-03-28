function GebeurtenisLuisteraar(){

  this.luisteraars = new Map();

  this.init = function() {
    document.addEventListener("click", function(event) {
      event.stopPropagation();
      var target = event.target || event.srcElement;

      for (var[element, luisteraar] of this.luisteraars) {
        if (target === element) {
          luisteraar(element);
        }
      }
    }.bind(this), false);
  }

  this.voegLuisteraarToe = function(element, functie) {
    this.luisteraars.set(element, functie);
  }
}
