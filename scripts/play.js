$(document).ready(function($) {
    FastClick.attach(document.body);
    var theNumbers = sessionStorage.getItem('theNumbers');
    var inputNumbers = "";
    function onlynumber(){
        inputNumbers += parseInt($(this).text());
        $('#inputNumbers span').replaceWith($('<span>' + inputNumbers + '</span>'));
    }
    function del(){
        var afterDel = inputNumbers.substring(0, inputNumbers.length - 1);
        inputNumbers = afterDel;
        $('#inputNumbers span').replaceWith($('<span>' + inputNumbers + '</span>'));
    }
    function ok(){
        sessionStorage.removeItem('theNumbers');
        if (inputNumbers == theNumbers) {
            window.location.href = "givenumbers.html";
            var level = sessionStorage.getItem('level');
            var newlevel = parseInt(level) + 1;
            sessionStorage.setItem('level', newlevel);
        } else {
            window.location.href = "points.html";
    }
}
    $('.onlyNumber').bind('click dblclick',onlynumber);
    $('#del').bind('click dblclick', del);
    $('#ok').bind('click dblclick',ok);
    // $('.onlyNumber').click(function() {
    //     inputNumbers += parseInt($(this).text());
    //     $('#inputNumbers span').replaceWith($('<span>' + inputNumbers + '</span>'));
    // });
    // $('#del').click(function(event) {
    //     var afterDel = inputNumbers.substring(0, inputNumbers.length - 1);
    //     inputNumbers = afterDel;
    //     $('#inputNumbers span').replaceWith($('<span>' + inputNumbers + '</span>'));
    // });
    // $('#ok').click(function(event) {
    //     sessionStorage.removeItem('theNumbers');
    //     if (inputNumbers == theNumbers) {
    //         window.location.href = "givenumbers.html";
    //         var level = sessionStorage.getItem('level');
    //         var newlevel = parseInt(level) + 1;
    //         sessionStorage.setItem('level', newlevel);
    //     } else {
    //         window.location.href = "points.html";
    //     }
    // });
});
