var button = document.querySelector(".search-button");
var form = document.querySelector(".search-form");

button.addEventListener("click", function (event) {
	if (form.classList.contains("search-form-show")) {
		event.preventDefault();
		form.classList.remove("search-form-show");
	} else {
		event.preventDefault();
		form.classList.add("search-form-show");
	}
})