<?php 
	$servertime = date('h:i');
	$checksum = md5($servertime);
	header("ETag:$checksum");
	if($checksum != $_SERVER['HTTP_IF_NONE_MATCH']) {
		echo $servertime;
	} 
?>
