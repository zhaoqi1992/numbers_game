$(document).ready(function() {
    function changeTime() {
        var text = $('#timer span').text() - 1;
        var $newText = $('<span>' + text + '</span>');
        $('#timer span').replaceWith($newText);
        if (text == 0) {
            clearInterval(time);
            window.location.href = "play.html";
        }
    }

    function createNumbers(n) {
        for (var i = 0; i < n; i++) {
            var newNumber = Math.floor(Math.random() * 10);
            numbers += newNumber;
        }
        $('#numbers span').replaceWith($('<span>' + numbers + '</span>'));
        sessionStorage.setItem("theNumbers",numbers);
    }
    var level = sessionStorage.getItem('level');
    if (level == null) {
        level = '5';
    }
    var numbers = "";
    // var num;
    // switch (level) {
    //     case "1":
    //         num = 5;
    //         break;
    //     case "2":
    //         num = 10;
    //         break;
    //     case "3":
    //         num = 15;
    //         break;
    //     case "4":
    //         num = 20;
    //         break;
    //     case "5":
    //         num = 30;
    //         break;
    // }
    // if (href[href.length - 1] == "givenumbers.html") {
        createNumbers(level);
        var time = setInterval(changeTime, 1000);
        $("#numbers span").fadeOut(6000);
    // }
});
