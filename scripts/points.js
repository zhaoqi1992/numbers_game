$(document).ready(function($) {
	FastClick.attach(document.body);
    var level = sessionStorage.getItem('level');
    $('#final span').replaceWith($('<span>' + level + '</span>'));
    $('#retry').click(function(event) {
        sessionStorage.setItem('level', 5);
        window.location.href = "givenumbers.html";
    });
});
