$(function() {
	$.fn.colourCoord = function(){

		function getColor(theElement) {
			return theElement.css('background-color');
		};
		function changeColor(element) {
			var color =  getColor(element);
			console.log(typeof color);
			color = color.substring(4, color.length-1).replace(/ /g, '').split(',');

			var b = color.map(function(item) {
			    return parseInt(item, 10);
			});

			for (var i = 0; i < b.length; i++) {
				b[i] += 100;
			}

			var c = b.join();

			var newrgb = "rgb(" + c + ")";
			$('body').css('transition', 'background-color 1s linear');

			$('body').css('background', newrgb);

		}
		changeColor(this);
	}
});


