$(document).ready(function () {
	$('form#favoriteThings').submit(function (event) {
		event.preventDefault();

		let food = $('input#food').val();
		let superhero = $('input#superhero').val();
		let place = $('input#place').val();
		let favoriteThings = [];

		favoriteThings.push(food, superhero, place);
		console.log(favoriteThings);
	});
});
