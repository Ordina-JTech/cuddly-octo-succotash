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
		var buttonElement = document.getElementById(this.buttonId);

		buttonElement.className = knop.klasse;
		// buttonElement.style.width = knop.formaat;
		// buttonElement.style.height = knop.formaat;
		// document.getElementById("b1").src = knop.plaatjePad;
		buttonElement.style.top = this.krijgWillekeurigeY();
		buttonElement.style.left = this.krijgWillekeurigeX();
	}
}
