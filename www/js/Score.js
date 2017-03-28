function Score(){
    this.naam;
    this.score = 0;
    this.toonScore = function(){
      document.getElementById("Score").innerHTML = "Score: "+ this.score;
    }
};
