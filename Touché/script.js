//start als pagina klaar is
$(document).ready(function(){
    
    function SpelBeheerder(){
		
		var knopFabriek = new KnopFabriek();
		var knop = knopFabriek.krijgWillekeurigeKnop();
		
        // start functie, wordt uitgevoerd bij begin spel
        function start(){
            var score = new Score;
            score = $(".Knop").click(function punten(id){
            });
        }  
        
		
		
        // toont nieuwe knop
        function toonNieuweKnop(){
            var knop = new Knop;
            var x = knop.blablafunctie();
            var y = knop.blablafunctie();
        }
    }
    
});