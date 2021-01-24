function msg(){
 alert("Hello Javatpoint");
}}

function pull() {
  var coinInfo = "https://api.coingecko.com/api/v3/exchange_rates";
  $.getJSON( coinInfo, function(json){
    data = json;
  }
)}

function log() {
  console.log(data)
}
