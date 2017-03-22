//start als pagina klaar is
$(document).ready(function(){
	
	function KnopPositieDienst(){
		this.bovenRand = 5;
		this.radius = 3;
		this.x = 0;
		this.y = 0
		this.evenX = 0;
		this.evenY = 0;
		
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
			document.getElementById("b1").className = knop.vorm;
			document.getElementById("b1").width = knop.formaat;
			document.getElementById("b1").height = knop.formaat;
			document.getElementById("b1").src = knop.plaatje;
			document.getElementById("b1").style.top = this.krijgWillekeurigeY();
			document.getElementById("b1").style.left = this.krijgWillekeurigeX();
		}
	}

	/* code voor checking methods for X and Y
	for(i = 0; i < 5; i++){
		var knopDienst = new KnopPositieDienst;
		var x = knopDienst.krijgWillekeurigeX();
		var y = knopDienst.krijgWillekeurigeY();
		alert("positie is x: " + x + ", en y: " + y);
	}
	*/

});