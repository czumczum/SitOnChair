document.addEventListener("DOMContentLoaded", function () {

	//Menu wysuwane

	var menu = document.querySelector('#menu-helper');
		//Menu jako <ul><li>

	var showMenu = function (e) {
		var showMe = function (arg) {
			if (arg.children) {
				for (var i = 0; i < arg.children.length; i++) {
					arg.children[i].style.display = "block";
				}
			}
		};
		var hideMe = function (e) {
			if (this.children) {
				for (var i = 0; i < this.firstElementChild.children.length; i++) {
					this.firstElementChild.children[i].style.display = "none";
				}
			}
		};
//	var echoMe = function(arg) {
//		var mouseOn = function(arg) {
//			var mouse = false;
//			var tmp = function(e) {
//				mouse = true;
//			};
//			arg.addEventListener("mouseover", tmp);
//			for (var i = 0; i < arg.children.length; i++) {
//				arg.children[i].addEventListener("mouseover", tmp);
//				}
//			return mouse
//		};
//		if (!mouseOn(arg)){
//			hideMe(arg);
//			return clearInterval(mouseId);
//		}
//		console.log('interwał');
//	};
		showMe(this.firstElementChild);
//		var tmp = function() {
//			li.addEventListener("mouseout", hideMe)
//		};
//		window.setTimeout(tmp, 3000);
//		var mouseId = setInterval(echoMe(this), 2000);
			menu.addEventListener("mouseout", hideMe);
	};

	menu.addEventListener("mouseover", showMenu);

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

	//Slider

	var imgs = document.querySelectorAll('.image');
	var text = document.querySelectorAll('main p');
	var prev = document.querySelector('#slider-left');
	var next = document.querySelector('#slider-right');
	var index = 0;
	imgs[index].classList.add('visible');
	text[index].classList.add('visible');
	var change = function (e) {
		imgs[index].classList.remove('visible');
		text[index].classList.remove('visible');
		if (this == prev) {
			index -= 1;
		} else if (this == next) {
			index += 1;
		};
	if (index == imgs.length) {
	index = 0;
	} else if (index < 0) {
	index = imgs.length - 1;
	}
	imgs[index].classList.add('visible');
	text[index].classList.add('visible');
	};
	prev.addEventListener("click", change);
	next.addEventListener("click", change);

});
