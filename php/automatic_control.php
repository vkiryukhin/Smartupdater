<?php 
/* get client's feedback */
	$aSmartupdater = json_decode($_SERVER['HTTP_X_SMARTUPDATER'], true);
	
	$xheader = false;
	if ( (int)$aSmartupdater["timeout"] < 5000) {
		$xheader = '{"timeout":"5000"}';
	} 
	if ((int)$aSmartupdater["timeout"] > 15000 ) {
		$xheader = '{"timeout":"15000"}';
	}
	
	if($xheader) {
		header("X-Smartupdater:$xheader");
	}
	echo  date('h:i:s');

?>
