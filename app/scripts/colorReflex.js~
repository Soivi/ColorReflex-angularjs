$(function () {
		var url;
		$.getJSON('config.json', function(data) {
			url = data.url;
        });
		
		$('#infoBar').hide();
		$('#highScoresBar').hide();
		var infobarhidden = true;
		var highscorebarhidden = true;
		var timeLeft = 360;
		var gameTime = 0;
		var yourRecordHard = 0;
		var yourRecordMedium = 0;
		var yourRecordEasy = 0;
		var hard = 3.5;
		var medium = 2.5;
		var easy = 1.5;
		var difficulty = easy;
		var rightAnswers = 0;
		var totalAnswers = 20;
		var colorList = finalColorList.slice();
		var gameOn = false;
		$('#rightPoints').text(rightAnswers + '/' + totalAnswers);
		$('#gameTimeText').text(gameTime);
		$('#yourRecordText').text(yourRecordEasy);
		var timeBarInterval;
		var plname = "";
		
		// Random first Quess
		for (i = colorList.length; i > 9; i--) {
			var number = Math.floor(Math.random() * colorList.length);
			colorList.splice(number, 1);
		}
		var wantedColorIndex = Math.floor(Math.random() * colorList.length)
		var rightAnswer = colorList[wantedColorIndex].rgb;
		$('#wantedColor').text(colorList[wantedColorIndex].color);
		$('#wantedColor').css('color', colorList[Math.floor(Math.random() * colorList.length)].color);
		
		// Create table
        var table = $('<table></table>').addClass('gameTable');
		for (j = 0; j < 3; j++) {
					row = $('<tr></tr>');
					for (i = 0; i < 3; i++) {
						var number = Math.floor(Math.random() * colorList.length);
						var row1 = $('<td></td>').addClass('bar');
						var button = $('<button></button>').css('background-color', colorList[number].rgb);
						button.disabled = true;
						button.addClass('colorButton');
						button.attr('id', j + '' + i );
						colorList.splice(number, 1);
						table.append(row);
						row.append(row1);
						row1.append(button);
					}

			if ($('.gameTable').length) {
				 $(".gameTable tr:first").after(row);
			}
			else {
				$('#gameArea').append(table);
			}
		}
		// Disable buttons because game isn't on
		$('.colorButton').attr("disabled", true);
		
		// Check if quess is right.
		$('.colorButton').on('click', function() {
			if($(this).css("background-color") == rightAnswer) {
				rightAnswers++;
				if(rightAnswers >= totalAnswers) {
					gameFinished();
				}
			} else {
				gameTime = gameTime + 5;
			}
			newQuestion();
		});
			
		// Create new quess and update gameAreaButtons
		function newQuestion() {
			timeLeft = 360;
						
		$('#rightPoints').text(rightAnswers + '/' + totalAnswers);

			colorList = finalColorList.slice();
			for (i = colorList.length; i > 9; i--) {
				var number = Math.floor(Math.random() * colorList.length);
				colorList.splice(number, 1);
			}
			
			wantedColorIndex = Math.floor(Math.random() * colorList.length)
			rightAnswer = colorList[wantedColorIndex].rgb;
			$('#wantedColor').text(colorList[wantedColorIndex].color);
			$('#wantedColor').css('color', colorList[Math.floor(Math.random() * colorList.length)].color);
			
			for (j = 0; j < 3; j++) {
						for (i = 0; i < 3; i++) {
							var number = Math.floor(Math.random() * colorList.length);
							var colorButtonIDtemp = j + '' + i ;
							$('#'+colorButtonIDtemp).css('background-color', colorList[number].rgb);
							colorList.splice(number, 1);
						}
			}
		};
		
		// Start and stop function
		$('#startStopButton').on('click', function() {
			if(gameOn) {
				stopGame();
				gameOn = false;
			} else {
				startGame();
				gameOn = true;
			}
		});
		
		// Game is starting function. Reset variables to new game
		function startGame() {
			$('#rightPoints').css('color', 'black').css('font-weight', 'normal');
			$('#yourRecordText').css('color', 'black').css('font-weight', 'normal');
			$('.difficultyLevel').attr("disabled", "disabled");

			// how long take to start game
			var time = 5;
			rightAnswers = 0;
			gameTime = 0;
			var interval = window.setInterval(function(){
				$('#startStopButton').text('Starting ' + time);
				if(time == 0) {
					clearInterval(interval);
					$('#startStopButton').text('Stop');
					newQuestion();
					$('.colorButton').attr("disabled", false);
					gameIsOn();
					$('.difficultyLevel').removeAttr("disabled");

				}
				time--;
			}, 1000);
		}
		
		// When game is on. Add more gametime and take time off from timebar
		function gameIsOn() {
			timeBarInterval = window.setInterval(function(){
				gameTime = gameTime + 0.01;
				$('#gameTimeText').text(gameTime.toFixed(2));
				timeLeft = timeLeft - difficulty;
				$('#timeBarLeft').css('width', timeLeft);
				if (timeLeft <= 0) {
					gameTime = gameTime + 5;
					newQuestion()
				} else if (timeLeft < 100) {
					$('#timeBarLeft').css('background-color', 'red');
				} else if (timeLeft < 200) {
					$('#timeBarLeft').css('background-color', 'yellow');
				} else {
					$('#timeBarLeft').css('background-color', 'rgb(120,240,30)');
				}
			}, 10);
		}
		
		// Stops game. Stops timebar and gametime.
		function stopGame() {
			$('#startStopButton').text('Start');
			clearInterval(timeBarInterval);
			$('.colorButton').attr("disabled", true);
			gameOn = false;
		}
		
		// When game is over send highscores to database if you play difficulty hard and save highscore records.
		function gameFinished() {
			$('#rightPoints').css('color', '#7A991A').css('font-weight', 'bold');
			stopGame();

			if(difficulty == hard && (gameTime < yourRecordHard || yourRecordHard == 0)) {
				$('#yourRecordText').css('color', '#7A991A').css('font-weight', 'bold');
				yourRecordHard = gameTime.toFixed(2);
				$('#yourRecordText').text(yourRecordHard);
				
				if (!plname) {
					plname=prompt("Please enter your name to highscores", "");
				}
				
				if (plname) {
					plname = plname.substr( 0, 25 );
					$.getJSON( url + '?callback=?',{highscorelist:'Insert', name:plname, time:yourRecordHard});
				}

			} else if (difficulty == medium && (gameTime < yourRecordMedium || yourRecordMedium == 0)) {
				$('#yourRecordText').css('color', '#7A991A').css('font-weight', 'bold');
				yourRecordMedium = gameTime.toFixed(2);
				$('#yourRecordText').text(yourRecordMedium);
			} else if (difficulty == easy && (gameTime < yourRecordEasy || yourRecordEasy == 0)) {
				$('#yourRecordText').css('color', '#7A991A').css('font-weight', 'bold');
				yourRecordEasy = gameTime.toFixed(2);
				$('#yourRecordText').text(yourRecordEasy);
			}
		}
		
		// Changes difficulty level
		$('.difficultyLevel').click(function(){
			$('#yourRecordText').css('color', 'black').css('font-weight', 'normal');
			document.getElementById("easy").className = "difficultyLevel";
			document.getElementById("medium").className = "difficultyLevel";
			document.getElementById("hard").className = "difficultyLevel";
			
			document.getElementById(this.id).className = "difficultyLevel activeDifficulty";
			
			stopGame();
			if(this.id == "hard") {
				$('#yourRecordText').text(yourRecordHard);
				difficulty = hard;
			} else if (this.id == "medium") {
				$('#yourRecordText').text(yourRecordMedium);
				difficulty = medium;
			} else {
				$('#yourRecordText').text(yourRecordEasy);
				difficulty = easy;
			}
		});
		
		// Infobar is visible or hidden.
		$('#info').on('click', function() {
			if(infobarhidden) {
				document.getElementById(this.id).className = "naviSecondRow activeDifficulty";
				infobarhidden = false;
			} else {
				document.getElementById(this.id).className = "naviSecondRow";
				infobarhidden = true;
			}
			$('#infoBar').fadeToggle(1500);
		});
		
		// Highscores are visible or hidden. When Highscores comes to visible reset highscores and get newest highscores from database.
		$('#highscores').on('click', function() {
			if(highscorebarhidden) {
				$('#highScoreTable tr.highscoreRow').remove();
				
				$.getJSON( url + '?callback=?','highscorelist=All',function(res){
					var forLoopSize = 9;
					if (res.length <= forLoopSize) {
						forLoopSize = res.length - 1; 
					}
					for (j = forLoopSize; j >= 0; j--) {
							row = $('<tr></tr>').addClass('highscoreRow');
							var place = $('<td></td>').text(j+1);
							var name = $('<td></td>').text(res[j].name);
							var time = $('<td></td>').text(res[j].time);
							$("#highScoreTable").append(row);
							row.append(place);
							row.append(name);
							row.append(time);
						 $("#highScoreTable tr:first").after(row);
				}
				});
				document.getElementById(this.id).className = "naviSecondRow activeDifficulty";
				highscorebarhidden = false;
			} else {
				document.getElementById(this.id).className = "naviSecondRow";
				highscorebarhidden = true;
			}
			$('#highScoresBar').fadeToggle(1500);
		});
});