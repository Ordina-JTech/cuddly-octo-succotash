function KnopPositieDienst(){
	this.bovenRand = 5;
	this.radius = 3;
	this.x = 0;
	this.y = 0
	this.evenX = 0;
	this.evenY = 0;

	this.buttonId = "Knop";

	this.krijgWillekeurigeX = function(){
		do{
			this.evenX = Math.random() * 100;
			this.evenX = this.evenX.toFixed(1);
		}while(this.evenX < this.radius || this.evenX > (100 - this.radius)) // getal is te ver links of rechts
		this.x = this.evenX;
		return this.x + "%";
	}

	this.krijgWillekeurigeY = function(){
		do{
			this.evenY = Math.random() * 100;
			this.evenY = this.evenY.toFixed(1);
		}while(this.evenY < (this.bovenRand) + this.radius || this.evenY > (100 - this.radius)) //getal is te hoog of te laag
		this.y = this.evenY;
		return this.y + "%";
	}

	this.toonKnop = function(knop){
		document.getElementById(this.buttonId).className = knop.klasse;
		document.getElementById(this.buttonId).width = knop.formaat;
		document.getElementById(this.buttonId).height = knop.formaat;
		// document.getElementById("b1").src = knop.plaatjePad;
		document.getElementById(this.buttonId).style.top = this.krijgWillekeurigeY();
		document.getElementById(this.buttonId).style.left = this.krijgWillekeurigeX();
	}
}
