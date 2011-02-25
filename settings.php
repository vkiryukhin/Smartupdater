<?php 
session_start();

if (!isset($_SESSION['smartupdater'])) {
	$_SESSION['smartupdater'] = '';
}

$smartupdater = $_GET['smartupdater'];

if ($smartupdater) {
	$pattern =  '/\D{0,}/';
	$replacement = "";
	$timeout = preg_replace($pattern,$replacement,$smartupdater);
	if($timeout < 1000) $timeout = 1000;
	$_SESSION['smartupdater'] = $timeout;
} else {
	$timeout = 	$_SESSION['smartupdater'];
}

echo $_SESSION['smartupdater'];

?>