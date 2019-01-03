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