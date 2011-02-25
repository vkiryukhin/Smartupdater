<?php 
	$servertime = date('h:i');
	$checksum = md5($servertime);
	if($checksum != $_SERVER['HTTP_IF_NONE_MATCH']) {
		header("Content-MD5:$checksum");
		header('Cache-Control: public');
		echo $servertime;
	} else {
		header("HTTP/1.1 304 Not Modified");
		exit;
	}
?>
