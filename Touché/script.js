//start als pagina klaar is
$(document).ready(function(){
 
    // button constructor
    function Knop(plaatje,vorm,formaat,waarde){
        this.plaatje = plaatje;
        this.vorm = vorm;
        this.formaat = formaat;
        this.waarde = waarde;
        
        // functie voor weergeven/teruggeven waarde
        function getValue(){
            return value;
        }
    }
    
    // score constructor
    function Score(name,score){
        this.name = name;
        this.score = score;
    }
    
    
    // start functie, wordt uitgevoerd bij begin spel
    function start(){
        var score = new Score;
        score = $(".Knop").click(function punten(id){
        });
    }
    
    //  on click listener fadeout(verdwijn)
    $(".Knop").click(function(){
        $(".Knop").fadeOut(200);
    });
    
});