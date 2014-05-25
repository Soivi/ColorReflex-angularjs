ColorReflex-angularjs
=====================

ColorReflex is color game where you pick a right color. ColorReflex is JavaScript and JQuery game.
Server side is using php. Site is builded with AngularJS.

Example can find in here: http://soivi.net/2014/color-reflex/

## Deploy

### Create database
Use database.sql to create table and test data.

### config.ini
Create config.ini under app/ folder for highscore.php.

		[database]
		db_username = username
		db_password = password
		db_host = localhost
		db_database = database
		
### config.json
Create config.json to index.html where url is where is your highscore.php.
config.json path is app/scripts/. Or if you have highscore.php under app/ you can use example.

		{
			"url": "highscores.php"
		}
