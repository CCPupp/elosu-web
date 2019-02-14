$(document).ready(function() {
    $("#top").on('click', function() {
        var tops = $("#tops").val();
        $.ajax({
            url: "/top",
            method: "GET",
            contentType: "application/x-www-form-urlencoded",
            data: {
                tops: tops
            },
            success: function(data) {
                $("#response").html(data);
            },
        });
    });
    $("#calc").on('click', function() {
        var P1 = $("#P1").val();
        var P2 = $("#P2").val();
        $.ajax({
            url: "/calc",
            method: "GET",
            contentType: "application/x-www-form-urlencoded",
            data: {
                P1: P1,
                P2: P2
            },
            success: function(data) {
                $("#response").html(data);
            },
        });
    });
    $("#clear").on('click', function() {
        $.ajax({
            url: "https://pupper.moe/clear",
            method: "GET",
            success: function(data) {
                $("#response").html(data);
            },
        });
    });
});
// Collapseable Script
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}