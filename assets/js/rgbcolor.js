var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var rgbspan = document.getElementById("rgbspan");
var clickedColor;
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var newColors = document.getElementById("playagain");
var easyButton = document.getElementById("easybtn");
var hardButton = document.getElementById("hardbtn");


newColors.addEventListener("click",function(){
     // generate all new colors
     colors = generateRandomColors(numSquares);
     // get random color from array
     pickedColor = pickColor();
     // display to match picked color
     rgbspan.textContent = pickedColor;
     // change colors of squares
     for (var i=0;i<squares.length;i++){
     	squares[i].style.background = colors[i];
     }
     h1.style.background = "black";
     newColors.textContent = "New Colors";
     messageDisplay.textContent = "";

});
hardButton.addEventListener("click",function(){
	this.classList.add("selected");
	easyButton.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	rgbspan.textContent = pickedColor;
	for(var i = 0; i<squares.length;i++){
		// checks to see if theres a color in the first index and if there is
		// changes the top three colors
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
	}
    
});
easyButton.addEventListener("click",function(){
	this.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	rgbspan.textContent = pickedColor;
	for(var i = 0; i<squares.length;i++){
		// checks to see if theres a color in the first index and if there is
		// changes the top three colors
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});
rgbspan.textContent = pickedColor;
for (var i =0; i<squares.length;i++){
	// This loops through squares divs then uses "i" in colors as well to access its indexes
	squares[i].style.background = colors[i];
	// add event listeners click to squares
	squares[i].addEventListener("click",function(){
        // grab color of picked square
        clickedColor = this.style.background;
        // compare color of picked square
          if(clickedColor === pickedColor){
          	messageDisplay.textContent="Correct!";
          	oneColor(clickedColor);
          	h1.style.background = clickedColor;
          	newColors.textContent = "Play again";
          }
          else{
            this.style.background = "white";
          	messageDisplay.textContent="Try again";
          }
	});
}
// making a function to pass in
 function oneColor(color){
  	for (var i =0; i<squares.length;i++){
  		squares[i].style.background = color;
  	}
  }

  // random number generator from 0 to 1 so if we multiply by 6 we can almost get 6 numbers
  	// math.floor cuts off all the decimals after the whole numbers
  //now we return colors array of index random so we can ge the random number
  function pickColor(){
  	 var random = Math.floor(Math.random()*colors.length);
  	 return colors[random];
  }

  function generateRandomColors(number){
  	// make an array
  	var list = [];
  	// add num random colors to the array
  	for (var i=0;i<number;i++){
  		list.push(randomColor());

  	}
  	// return array
  	return list;
  }
  function randomColor(){
  	// pick red from 0 - 255
  	var red = Math.floor(Math.random()*256);
  	// pick green from 0 - 255
  	var green =Math.floor(Math.random()*256);
  	// pick blue from 0 - 255
  	var blue =Math.floor(Math.random()*256);
  	// need to add spaces after the commas so that the dom can match the results
  	return "rgb("+ red + ", " + green + ", " + blue + ")";

  }