document.addEventListener("DOMContentLoaded", function () {

 //Menu wysuwane

	var li = document.querySelector('.menu');
	var ul = document.querySelector('#menu')
	//Menu jako <ul><li>

	var showMe = function (e) {
		if (this.children) {
			for (var i = 0; i < this.children.length; i++) {
			this.children[i].style.display = "block";
			}
				}
			};
	var hideMenu = function (e) {
		if (li.children) {
			for (var i = 0; i < li.children.length; i++) {
			li.children[i].style.display = "none";
			}
				}
			};

	li.addEventListener("mouseover", showMe);
	ul.addEventListener("mouseout", hideMenu);

	//Krzesła-obrazki

	var toggleMe = function (e) {
		if (this.querySelector("p").style.display == "none") {
			this.querySelector("p").style.display = "block"
		} else {
			this.querySelector("p").style.display = "none"
			}
		};
	var divImg = document.querySelectorAll('.main-img');
	for (var i = 0; i < divImg.length; i++) {
		divImg[i].addEventListener("mouseover", toggleMe);
		divImg[i].addEventListener("mouseout", toggleMe);
	};

});
