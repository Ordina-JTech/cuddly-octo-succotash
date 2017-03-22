function KnopFabriek() {
	this.krijgWillekeurigeKnop = function(){
		switch (this.krijgWillekeurigeCase()){
			case "0":
			   return new Knop("plaatjes/plaatje0.jpg","driehoek",1500,5);
			case "1":
				return new Knop("plaatjes/plaatje1.jpg","vierkant",50,10);
			case "2":
				return new Knop("plaatjes/plaatje2.jpg","ster",50,20);
			case "3":
				return new Knop("plaatjes/plaatje3.jpg","octagon",50,40);
			case "4":
				return new Knop("plaatjes/plaatje4.jpg","rondje",50,80);
			case "5":
				return new Knop("plaatjes/plaatje5.jpg","rabbet",50,160);
			case "6":
				return new Knop("plaatjes/plaatje6.jpg","kruis",50,320);
			case "7":
				return new Knop("plaatjes/plaatje7.jpg","pentagon",50,640);
			case "8":
				return new Knop("plaatjes/plaatje8.jpg","rabbet",50,1280);

			}

		};
		this.krijgWillekeurigeCase = function(){
			var zaak = Math.random()*3;
			return zaak.toFixed(0);
		};
	}
