$(document).ready(function () {
	$('form#favoriteThings').submit(function (event) {
		event.preventDefault();

		let food = $('input#food').val();
		let superhero = $('input#superhero').val();
		let place = $('input#place').val();
		let country = $('input#country').val();
		let restaurant = $('input#restaurant').val();
		let favoriteThings = [];

		favoriteThings.push(food, superhero, place, country, restaurant);

		let newArray = [];
		newArray.push(favoriteThings[1], favoriteThings[0], favoriteThings[2]);

		console.log(newArray);
		$('.favoriteResults').append('<li>' + newArray[0] + '</li>');
		$('.favoriteResults').append('<li>' + newArray[1] + '</li>');
		$('.favoriteResults').append('<li>' + newArray[2] + '</li>');
		$('.favoriteResults').show();
	});
});
