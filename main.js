
	var oss = 0;
	var xss = 0;
	var move = 1;
   
   

	$(".game-grid .game-cell").click(function () {
		if ($(this).text() == "" ) {
			if ((move % 2) == 1) {
                $(this).append("X");
                $(".status").text("O is next")
                $(this).css('color', "rgb(0, 25, 134)");
                $(this).css("font-size", "150px");
				
			} else {
                $(this).append("O");
                $(".status").text("X is next")
                $(this).css('color', "rgb(153, 2, 2)");
                $(this).css("font-size", "150px");
			}
			move++;
			if (checkForWinner() != -1 && checkForWinner() != "") {
				if (checkForWinner() == "X") {
                    $(".status").html("<div style = 'color:white; background-color : rgb(0, 25, 134)'>X is the Winner</div>")
					move = 1
					parseInt(xss++);
                    $("#xw").text(xss)
                
                    

                    
				} else {
                    $(".status").html("<div style = 'color: white; background-color: rgb(153, 2, 2)'>O is the Winner</div>")
					move = 1
				   parseInt(oss++);
				   $("#ow").text(oss)
                    $('.winner').css('background-color', '#e85a4f');
                  
                    
				}
			}
		}
	});

	function checkForWinner() {
		var space1 = $(".s1").text();
		var space2 = $(".s2").text();
		var space3 = $(".s3").text();
		var space4 = $(".s4").text();
		var space5 = $(".s5").text();
		var space6 = $(".s6").text();
		var space7 = $(".s7").text();
		var space8 = $(".s8").text();
		var space9 = $(".s9").text();
		// check rows
		if (space1 && space1 == space2 && space1 == space3) {
            $( ".s1" ).addClass( "win" );
            $( ".s2" ).addClass( "win" );
            $( ".s3" ).addClass( "win" );
            return space3;
		} else if (space4 && space4 == space5 && space4 == space6) {
            $( ".s4" ).addClass( "win" );
            $( ".s5" ).addClass( "win" );
            $( ".s6" ).addClass( "win" );
			return space6;
		} else if ( space7 && space7 == space8 && space7 == space9) {
            $( ".s7" ).addClass( "win" );
            $( ".s8" ).addClass( "win" );
            $( ".s9" ).addClass( "win" );
			return space9;
		}
		// check columns
		else if ( space1 && space1 == space4 && space1 == space7) {
            $( ".s1" ).addClass( "win" );
            $( ".s4" ).addClass( "win" );
            $( ".s7" ).addClass( "win" );
			return space7;
		} else if (space2 && space2 == space5 && space2 == space8) {
            $( ".s2" ).addClass( "win" );
            $( ".s5" ).addClass( "win" );
            $( ".s8" ).addClass( "win" );
			return space8;
		} else if ( space3 && space3 == space6 && space3 == space9) {
            $( ".s3" ).addClass( "win" );
            $( ".s6" ).addClass( "win" );
            $( ".s9" ).addClass( "win" );
			return space9;
		}

		// check diagonals
		else if (space1 && space1 == space5 && space1 == space9) {
            $( ".s1" ).addClass( "win" );
            $( ".s5" ).addClass( "win" );
            $( ".s9" ).addClass( "win" );
			return space9;
		} else if ( space3 && space3 == space5 && space3 == space7) {
            $( ".s3" ).addClass( "win" );
            $( ".s5" ).addClass( "win" );
            $( ".s7" ).addClass( "win" );
			return space7;
        }
        
        // no winner
        else if (space1 && space2 && space3 && space4 && space5 && space6 && space7 && space8 && space9) {
            $(".status").html("<div style = 'color: white; background-color: rgb(153, 2, 2)'>Game is tied!</div>")
        }
		return -1;
    }
    

    const handleReset = () => {
          $(".s1").text("");
		  $(".s2").text("");
		  $(".s3").text("");
	      $(".s4").text("");
		  $(".s5").text("");
		  $(".s6").text("");
		  $(".s7").text("");
		  $(".s8").text("");
          $(".s9").text("");
          $(".status").text("X is next");
          $(".game-cell").removeClass("win");
      };

      $(".reset").on("click",handleReset)

