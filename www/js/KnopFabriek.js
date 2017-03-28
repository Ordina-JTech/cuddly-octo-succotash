function KnopFabriek() {
	this.krijgWillekeurigeKnop = function(){
		switch (this.krijgWillekeurigeCase()){
			case "0":
			   return new Knop("plaatjes/plaatje0.jpg","driehoek","50px",5);
			case "1":
		 		return new Knop("plaatjes/plaatje0.jpg","driehoek","35px",10);
			case "2":
		 		return new Knop("plaatjes/plaatje0.jpg","driehoek","20px",20);
			case "3":
				return new Knop("plaatjes/plaatje1.jpg","vierkant","50px",5);
			case "4":
				return new Knop("plaatjes/plaatje1.jpg","vierkant","35px",10);
			case "5":
				return new Knop("plaatjes/plaatje1.jpg","vierkant","20px",20);
			case "6":
				return new Knop("plaatjes/plaatje2.jpg","ster","50px",5);
			case "7":
				return new Knop("plaatjes/plaatje2.jpg","ster","35px",10);
			case "8":
				return new Knop("plaatjes/plaatje2.jpg","ster","20px",20);
			case "9":
				return new Knop("plaatjes/plaatje3.jpg","octagon","50px",5);
			case "10":
				return new Knop("plaatjes/plaatje3.jpg","octagon","35px",10);
			case "11":
				return new Knop("plaatjes/plaatje3.jpg","octagon","20px",20);
			case "12":
				return new Knop("plaatjes/plaatje4.jpg","rondje","50px",5);
			case "13":
				return new Knop("plaatjes/plaatje4.jpg","rondje","35px",10);
			case "14":
				return new Knop("plaatjes/plaatje4.jpg","rondje","20px",20);
			case "15":
				return new Knop("plaatjes/plaatje5.jpg","rabbet","50px",5);
			case "16":
				return new Knop("plaatjes/plaatje5.jpg","rabbet","35px",10);
			case "17":
				return new Knop("plaatjes/plaatje5.jpg","rabbet","20px",20);
			case "18":
				return new Knop("plaatjes/plaatje6.jpg","kruis","50px",5);
			case "19":
				return new Knop("plaatjes/plaatje6.jpg","kruis","35px",10);
			case "20":
				return new Knop("plaatjes/plaatje6.jpg","kruis","20px",20);
			case "21":
				return new Knop("plaatjes/plaatje7.jpg","pentagon","50px",5);
			case "22":
				return new Knop("plaatjes/plaatje7.jpg","pentagon","35px",10);
			case "23":
				return new Knop("plaatjes/plaatje7.jpg","pentagon","20px",20);
			case "24":
				return new Knop("plaatjes/plaatje8.jpg","rabbet","50px",5);
			case "25":
				return new Knop("plaatjes/plaatje8.jpg","rabbet","35px",10);
			case "26":
				return new Knop("plaatjes/plaatje8.jpg","rabbet","20px",20);
			}

		};
		this.krijgWillekeurigeCase = function(){
			var zaak = Math.random()*26;
			return zaak.toFixed(0);
		};
	}
