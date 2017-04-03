$(document).ready(function(){
    window.addEventListener("load", toonHighscores());

    function toonHighscores(){
      var xmlData = document.getElementById("tempScores");
      var entries = xmlData.getElementsByTagName("entry"); //returns array of all entries children

      var tabel = document.getElementById("tabel");

      // for each entry, loop over its tags and create a new <div> to
      // each card along with the information for all the fields
      for (var i=0; i < entries.length; i++) {
          var huidigeEntry = entries[i]; // store a reference to the current <BusinessCard>

          //verkrijg naam en score uit XML
          var naam = huidigeEntry.getElementsByTagName("name")[0].firstChild.data;
          var score = huidigeEntry.getElementsByTagName("score")[0].firstChild.data;
          //creëer nieuw TR element
          var eTR = document.createElement("TR");
          //creëer nieuwe TD elementen voor naam en score
          var naamTD = document.createElement("TD");
          var scoreTD = document.createElement("TD");
          //voeg text naam en score uit XML toe aan relatieve TD elementen
          naamTD.appendChild(document.createTextNode(naam));
          scoreTD.appendChild(document.createTextNode(score));
          //voeg TD elementen toe aan het TR element
          eTR.appendChild(naamTD);
          eTR.appendChild(scoreTD);
          //voeg het TR element toe aan de tabel
          tabel.appendChild(eTR);
      }
    }
});
