function msg(){
 alert("Hello Javatpoint");
}

function pull() {
  $.getJSON('http://time.jsontest.com', function(data) {

     var text = `Date: ${data.date}<br>
                 Time: ${data.time}<br>
                 Unix time: ${data.milliseconds_since_epoch}`


     $(".mypanel").html(text);
  });
}
