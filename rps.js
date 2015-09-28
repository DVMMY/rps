$(document).ready(function() {
	var $user, $computer, $result;
	var resultPosition = $("#result").offset().top + 1000;

	// event that takes place when image clicked
	$("img").on("click", function(){
		$user = this.id;

		// the computer creates a random number which dictates which option it chooses
		$computer = Math.random();

		if ($computer < 0.33) {
	    	$computer = "rock";
		} else if($computer < 0.67) {
	    	$computer = "paper";
	    } else {
	    	$computer = "scissors";
	    }

	    // what happens if user selects "rock"
	    if ($user === "rock"){
		    if  ($computer === "paper"){
		        $result = "The computer wins";
		        $("#compScore").html(function(i, currentval) { 
		        	return + currentval + 1;
		        });
		   	} else if ($computer === "scissors") {
		        $result = "Congrats, You win!!";
		        $("#userScore").html(function(i, currentval) { 
		        	return + currentval + 1;
		        });
		   	} else {
		    	$result = "It's a tie.";
		    }
		}

		// what happens if user selects "paper"
		if ($user === "paper"){
		    if ($computer === "scissors"){
		        $result = "The computer wins!";
		        $("#compScore").html(function(i, currentval) { 
		        	return + currentval + 1;
		        });
		    } else if ($computer === "rock"){
		        $result = "Congrats, You win!!";
		        $("#userScore").html(function(i, currentval) { 
		        	return + currentval + 1;
		        });
		    } else {
		    	$result = "It's a tie.";
		    }
		}

		// what happens if user selects "scissors"
		if ($user === "scissors"){
		    if ($computer === "rock"){
		        $result = "The computer wins!";
		        $("#compScore").html(function(i, currentval) { 
		        	return + currentval + 1;
		        });
		    } else if ($computer === "paper"){
			   	$result = "Congrats, You win!!";
			   	$("#userScore").html(function(i, currentval) { 
		        	return + currentval + 1;
		        });
		    } else {
		    	$result = "It's a tie.";
		    }
		}

		// Results calculated above printed onto screen
	    $("#event").html("You chose " + $user + ", the computer chose " + $computer + ".");
	    $("#result").html($result);
	    $("html, body").animate({scrollTop:resultPosition}, 'slow');
	});

	// reset the score counter to 0 
	$("#reset").on("click", function() {
		$(".scoreToZero").html("0");
	});

});
