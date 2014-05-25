<?php	
try {
	$config = parse_ini_file("config.ini", 1);
	$db = new PDO('mysql:host=' . $config['database']['db_host'] . ';dbname=' . $config['database']['db_database'] . ';charset=utf8', $config['database']['db_username'], $config['database']['db_password']);
	
	// Get all highscores
	if($_GET['highscorelist'] == 'All') {		
		$stmt = $db->prepare("SELECT name, time FROM highscores ORDER BY time");
		$stmt->execute();
		$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
		$db = null;
		
		print $_GET['callback']. '(' . json_encode($rows) . ')';
	}
	
	// Add new highscore
	else if($_GET['highscorelist'] == 'Insert') {
		$name = $_GET['name'];
		$time = $_GET['time'];
		
		$stmt = $db->prepare("INSERT INTO highscores (name, time) VALUES (?, ?)");
		$stmt->execute(array($name, $time));
		$db = null;
	}
} catch (PDOException $e) {
    die();
}
?>