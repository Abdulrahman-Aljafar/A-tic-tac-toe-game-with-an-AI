
	  var oss = 0;
	  var xss = 0;
    var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var huPlayer = "P";
    var huco = "X";
    var aiPlayer = "C";
    var aico = "O";

   

	$(".game-grid .game-cell").click(function () {
		if ($(this).text() == "" ) {
            move(this, huPlayer, huco);
            console.log("clicked");
            


		}
    });
    
    function move(element, player, XorO) {
        console.log("element"+ element.id);

         
          $(element).append(XorO);
          $(element).css('color', "rgb(0, 25, 134)");
          $(element).css("font-size", "150px");

          board[element.id] = player;
          console.log(board);
      
          if (checkForWinner(board, player)) {
              $(".status").html("<div style = 'color:white; background-color : rgb(0, 25, 134)'>YOU WIN</div>");
              parseInt(xss++);
              $("#xw").text(xss)
            return;
          }
            
           else {
            var index = minimax(board, aiPlayer).index;
            console.log(index)
            var selector = "#" + index;
            $(selector).append(aico);
            $(selector).css('color', "rgb(153, 2, 2)");
            $(selector).css("font-size", "150px");
            board[index] = aiPlayer;
            console.log(board);
            console.log(index);
            if (checkForWinner(board, aiPlayer)) {
                $(".status").html("<div style = 'color:white; background-color : red'>YOU LOSE :(</div>");
                parseInt(oss++);
                $("#ow").text(oss)
            } 
          }
        
    }


        function minimax(reboard, player) {

            let array = avail(reboard);
            if (checkForWinner(reboard, huPlayer)) {
              return {
                score: -10
              };
            } else if (checkForWinner(reboard, aiPlayer)) {
              return {
                score: 10
              };
            } else if (array.length === 0) {
              return {
                score: 0
              };
            }

            
            
               
            var moves = [];
            for (var i = 0; i < array.length; i++) {
              var move = {};
              move.index = reboard[array[i]];
              reboard[array[i]] = player;
          
              if (player == aiPlayer) {
                var g = minimax(reboard, huPlayer);
                move.score = g.score;
                
              } else {
                var g = minimax(reboard, aiPlayer);
                move.score = g.score;
                
              }
              reboard[array[i]] = move.index;
              moves.push(move);
            }

            
           
            var bestMove;
            if (player === aiPlayer) {
              var bestScore = -100000;
              for (var i = 0; i < moves.length; i++) {
                if (moves[i].score > bestScore) {
                  bestScore = moves[i].score;
                  bestMove = i;
                }
              }
            } else {
              var bestScore = 100000;
              for (var i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                  bestScore = moves[i].score;
                  bestMove = i;
                }
              }
            }
            
            return moves[bestMove];
          }

          function avail(reboard) {
            var ava= reboard.filter(s => s != "P" && s != "C");
            return ava;

          }


      




    	function checkForWinner(board,player) {
        var space1 = $(".s1").text();
        var space2 = $(".s2").text();
        var space3 = $(".s3").text();
        var space4 = $(".s4").text();
        var space5 = $(".s5").text();
        var space6 = $(".s6").text();
        var space7 = $(".s7").text();
        var space8 = $(".s8").text();
        var space9 = $(".s9").text();
            if (
                (board[0] == player && board[1] == player && board[2] == player) ||
                (board[3] == player && board[4] == player && board[5] == player) ||
                (board[6] == player && board[7] == player && board[8] == player) ||
                (board[0] == player && board[3] == player && board[6] == player) ||
                (board[1] == player && board[4] == player && board[7] == player) ||
                (board[2] == player && board[5] == player && board[8] == player) ||
                (board[0] == player && board[4] == player && board[8] == player) ||
                (board[2] == player && board[4] == player && board[6] == player)
              ) {
                return true;
              } 
              else if (space1 && space2 && space3 && space4 && space5 && space6 && space7 && space8 && space9) {
                $(".status").html("<div style = 'color: white; background-color: rgb(153, 2, 2)'>Game is tied!</div>")
            }
              else {
                return false;
              }
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
          board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      };

      $(".reset").on("click",handleReset)

