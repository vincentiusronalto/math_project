// "use strict"

  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

  var firstNumber = getRandomInt(1, 100);
  var secondNumber = getRandomInt(1, 100);
  var items = getRandomInt(1, 5);
  var total;
  var answer;
  

	switch(items) {
	    case 1:
	        total = firstNumber + secondNumber;
	        document.getElementById("operator").innerHTML="+";
	        break;
	    case 2:
	        total = firstNumber - secondNumber;
	        document.getElementById("operator").innerHTML="-";
	        break;
	    case 3:
	        total = firstNumber * secondNumber;
	        document.getElementById("operator").innerHTML="*";
	        break;
	    case 4:
	        total = firstNumber / secondNumber;
	        document.getElementById("operator").innerHTML="/";
	        break;
	    default:
    		console.log('Sorry, we are on problem now');
	}

	function check(){
	answer = parseInt(document.getElementById("myNumber").value); 
	if(answer === total){
	  document.getElementById("checker").innerHTML="You are right!";
	}else{
	  document.getElementById("checker").innerHTML="Sorry, You are wrong :P";
	}
}


document.getElementById ("button").addEventListener ("click", check, false);
document.getElementById("first-number").innerHTML= firstNumber;
document.getElementById("second-number").innerHTML= secondNumber;


