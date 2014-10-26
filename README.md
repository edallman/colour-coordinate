# Usage
Colour Coordinate provides an interactive experience for your visitors. They click on a background colour they like, and the body background will change to a *lighter* tint of that colour. 

#Getting Started 
Simply include `colour.js` in your scripts folder, and call the function in your `main.js` :

```$(function() {
	$('.colourMe').click(function() {
		$(this).colourCoord();
	});
});  
```

Now, add a class of `.colourMe` to the HTML element you would like to apply the colour coordination to, 

###Example:
```	<div id="box1" class="colourMe">
		<p>click me</p>
	</div>
```

#How it Works
Colour Coordinate finds the RGB values of each element with the `.colourMe` applied, parses out each value (R, G and B) and subtracts 100 from each. These three values are joined back into an RGB value to be applied to the body background. 

#Customization
Colour Coordinate works with any assigned CSS colour, whether a HEX code `#000000`, color name `black`, or RGB value `rgb(255,0,0)`

###Please Note
Colour Coordinate can be used with **`background-color` only**, not text, borders or photos. 

