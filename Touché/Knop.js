//start als pagina klaar is


    // button constructor
    function Knop(plaatje,vorm,formaat,waarde){
        this.plaatje = plaatje;
        this.vorm = vorm;
        this.formaat = formaat;
        this.waarde = waarde;

        // functie voor weergeven/teruggeven waarde
        function getWaarde(){
            return waarde;
        }
    };