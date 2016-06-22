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

});
