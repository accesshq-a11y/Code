$(document).ready(function() {
var count = 1;
$("#showme").on("click", function(event) {

for(i = 1; i <1000; i++) {
$("body").append("<p>get stuffed</p>");
}

var d1 = Math.floor(Math.random() *500 + 100);
var d2 = Math.floor(Math.random() * 1000 + 100);

window.setTimeout(function() {
$("#indicator").css("display","block");
},d1);
window.setTimeout(function() {
$("#indicator").css("display","none");
},d2);
var x = "duration" + count;
localStorage.setItem(x,d2);
count++;

});
$("#clearme").on("click", function() {
localStorage.clear();
});
});

