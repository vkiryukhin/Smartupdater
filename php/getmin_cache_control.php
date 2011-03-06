<?php 
//ini_set("display_errors",1);
	//$servertime = date('h:i');
	//$checksum = md5($servertime);
	//$checksum = abs(crc32($servertime));
	
	
	$callback = (date(i)%2) ? "foo" : "bar";
	$xheader = '{"callback":"'.$callback.'"}';
	header("X-Smartupdater:$xheader");
	echo  date('h:i:s');
	
/* get client's feedback */
	//$aSmartupdater = json_decode($_SERVER['HTTP_X_SMARTUPDATER'], true);
	//echo $aSmartupdater["timeout"];


/* set timeout and/or callback function */
	//$callback = "bar";
	//$timeout = 5000;

/* build Smartupdater custom header string */
	
	//$xheader = "{\"callback\":\"$callback\",\"timeout\":\"$timeout\"}";
	//$xheader = "X-Smartupdater:{\"callback\":\"{$callback}\"}";
	//$xheader = "X-Smartupdater:{\"timeout\":\"{$timeout}\"}";
	
	//header("ETag:$checksum");
	//header("X-Smartupdater:$xheader");
	
	//if($checksum != $_SERVER['HTTP_IF_NONE_MATCH']) {
	//	echo $servertime;
	//} 
	
?>
