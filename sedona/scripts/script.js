var button = document.querySelector(".search-button");
var form = document.querySelector(".search-form");
var buttonLink = document.querySelector(".search-button a");

button.addEventListener("click", function (event) {
	event.preventDefault();
	form.classList.toggle("search-form-show");
});

var plusElAdult = document.querySelector('.count-adult .icon-plus');
var minusElAdult = document.querySelector('.count-adult .icon-minus');
var plusChild = document.querySelector('.count-child .plus');
var minusChild = document.querySelector('.count-child .minus');
var adultValue = document.querySelector('#adult');
var childValue = document.querySelector('#child');
var adultContainer = document.querySelector('.count-adult');
var childContainer = document.querySelector('.count-child');

adultContainer.addEventListener("click", function (e) {
	if (e.target == plusElAdult) {
		e.preventDefault();
		if (adultValue.value < 10) {
			adultValue.value++ ;
		}
	}
	if (e.target == minusElAdult) {
		e.preventDefault();
		if (adultValue.value > 0) {
			adultValue.value-- ;
		}
	}
});

childContainer.addEventListener("click", function (e) {
	if (e.target == plusChild) {
		e.preventDefault();
		if (childValue.value < 5) {
			childValue.value++ ;
		}
	}
	if (e.target == minusChild) {
		e.preventDefault();
		if (childValue.value > 0) {
			childValue.value-- ;
		}
	}
});