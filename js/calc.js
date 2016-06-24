	document.addEventListener("DOMContentLoaded", function () {

		//Kalulator ceny:

		var dropChair = document.getElementById("dropChair");
		var dropColor = document.getElementById("dropColor");
		var dropTissue = document.getElementById("dropTissue");
		var deliver = document.querySelector("input.transport");
		var sumChair = document.getElementById("title");
		var sumColor = document.querySelector("span.color");
		var sumTissue = document.querySelector("span.pattern");
		var sumDeliver = document.querySelector("span.transport");
		var sumTotal = document.querySelector(".sum strong");
		var dropSpan = document.querySelectorAll(".dropdown-content");
		var dropBtn = document.querySelectorAll('.dropbtn');


		//Ukrywanie menu po wyborze
		var hideMe = function (e) {
			for (var i = 0; i < dropBtn.length; i++) {
				dropBtn[i].nextElementSibling.classList.remove("show");
			}
			return;
		};

		var sumMe = function () {
			var sum = 0;
			sum += parseInt(document.querySelector(".title.value").innerText);
			sum += parseInt(document.querySelector(".color.value").innerText);
			sum += parseInt(document.querySelector(".pattern.value").innerText);

			return sumTotal.innerText = sum;
		}

		var addMe = function (e) {
			if (this.parentElement == dropChair) {
				sumChair.innerText = this.innerText;
				sumChair.innerText = this.innerText;
				switch (sumChair.innerText) {
					case "Chair Clair":
						document.querySelector(".title.value").innerText = 1200
						break;
					case "Chair Margarita":
						document.querySelector(".title.value").innerText = 999
						break;
					case "Chair Selena":
						document.querySelector(".title.value").innerText = 1050
						break;
				}
			} else if (this.parentElement == dropColor) {
				sumColor.innerText = this.innerText;
				switch (sumColor.innerText) {
					case "pomarańczowy":
						document.querySelector(".color.value").innerText = 0
						break;
					case "czarny":
						document.querySelector(".color.value").innerText = 100
						break;
					case "czerwony":
						document.querySelector(".color.value").innerText = 39
						break;
				}
			} else {
				sumTissue.innerText = this.innerText;
				if (sumTissue.innerText == "skóra") {
					document.querySelector(".pattern.value").innerText = 199;

				} else {
					document.querySelector(".pattern.value").innerText = 0;
				}
				}
			return sumMe();
		};
		var checked = function(e) {
			if (this.checked) {
				sumDeliver.innerText = "Transport";
				document.querySelector(".transport.value").innerText = "Gratis!";
			} else {
				sumDeliver.innerText = "bez transportu";
				document.querySelector(".transport.value").innerText = 0;
			}
			return sumMe();
		};
		for (var i = 0; i < dropSpan.length; i++) {
			for (var j = 0; j < dropSpan[i].children.length; j++) {
				dropSpan[i].children[j].addEventListener("click", addMe);
				dropSpan[i].children[j].addEventListener("click", hideMe);
			}
		};
		deliver.addEventListener("click", checked);

	});
