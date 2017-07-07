var login = $('#email2');
var password = $('#password2');

$(document).ready(function() {

	sectionShow(window.location.hash);

	$('form').validator();

	$.getJSON( "//www.json-generator.com/api/json/get/bZTcBnsIgO", function( json ) {

		$.each(json, function( index ) {
	  		$('table tbody').append('<tr><td>' + json[index].title +
	  	 	'</td><td><img src="' + json[index].cover + '" /></td><td>' +
	  	 	json[index].description + '</td><td>' + json[index].link + '</td></tr>');
		});
		$('table').DataTable({
			searching: false,
			info: false,
			lengthChange: false
		});

	});

});

$(window).on('hashchange', function() {
	sectionShow(window.location.hash);
});

function sectionShow(id) {
	$('.section').addClass('hidden');
	$(id).toggleClass('hidden');
	if ( id == '#shops' && localStorage.getItem('loggedIn') != 'logged') {
		showLogin();
	}
}

function showLogin() {
	sectionShow('#login');
}

function userRegister() {
	localStorage.setItem('login', login.val());
	localStorage.setItem('password', password.val());
}

function userLogin() {
	var regLogin = localStorage.getItem('login');
	var regPassword = localStorage.getItem('password');
	var enteredLogin = $('#email');
	var enteredPassword = $('#password');

	if ( enteredLogin.val() == regLogin && enteredPassword.val() == regPassword ) {
		var loggedIn = localStorage.setItem('loggedIn', 'logged');
		sectionShow('#shops');
		window.location.hash = '#shops';
	} else {
		var loggedIn = localStorage.setItem('loggedIn', false);
		alert('Wrong username or password! Please try again.');
	}
}