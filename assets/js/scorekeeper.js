var playerOne = document.getElementById("playerone");
var playerTwo = document.getElementById("playertwo");
var resetButton = document.getElementById("reset");
var leftNumber = document.getElementById("numl");
var rightNumber = document.getElementById("numr");
var gameOver = false;
var winningNum = 7;
var playToNum = document.getElementById("inputnum");
var winCondition = document.getElementById("wincondition");
var countLeft = 0;
var countRight = 0;

    
    playerOne.addEventListener("click",function(){
	   if (!gameOver){
	        countLeft++; 
	      if (countLeft === winningNum){
	   	    gameOver = true;
	   	    leftNumber.style.color = "green";
	   	}
	   	leftNumber.textContent = countLeft;
	   }  
   });
    playerTwo.addEventListener("click",function(){
	   if(!gameOver){
	     countRight++
	      rightNumber.textContent = countRight;
	       if (countRight == winningNum){
	         gameOver = true;
	         rightNumber.style.color = "green";
	   }
	   rightNumber.textContent = countRight;
}
    });
    winCondition.addEventListener("change",function(){
         playToNum.textContent = winCondition.value;
         winningNum = Number(winCondition.value);
         reset();
    });
     resetButton.addEventListener("click",function(){
     	reset();	
    });
    function reset(){
    	countLeft= 0;
     	countRight = 0;
	   leftNumber.textContent = 0;
	   rightNumber.textContent= 0;
	   leftNumber.style.color = "black";
	   rightNumber.style.color = "black";
	   gameOver = false;
    }
    

    //  else if(countRight == 7){
	   // document.getElementById("numr").style.color = "green";
    

