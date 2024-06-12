"use strict";

let btn = document.querySelector("#sendBtn");
let from = document.querySelector("#from");
let to= document.querySelector("#to")

//------------------------------------------------------------------------------
/* Währung konvertieren */
btn.onclick = function(){  
    sendRequest();
}

function sendRequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      if (this.status == 200) {
        document.querySelector("#result").innerHTML = this.responseText;
      }
    };
    xhttp.open("POST", "controller.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("from="+from.value+"&to="+to.value);
}
//-------------------------------------------------------------------------------
/* vorhandenen Währungen holen und in Selectboxen einfügen */
function getCurrencies(){

    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      if (this.status == 200) {        
        let result = JSON.parse(this.response);
        for (let key in result.data){
            from.options.add(new Option(key));
            to.options.add(new Option(key));
        }
      }
    };
    xhttp.open("POST", "controller.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("currencies=1");

}
getCurrencies();
//------------------------------------------------------------------------------