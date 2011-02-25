<?php 
	$servertime = date('h:i');
	$checksum = md5($servertime);
	if($checksum != $_SERVER['HTTP_IF_NONE_MATCH']) {
		header("Content-MD5:$checksum");
		header('Cache-Control: public');
		//header('X-Smartupdater:{"callback":"test","timeout":"2000"}');
		//header('X-Smartupdater:{"callback":"test","timeout":"2000"}');
		
		//header('X-Smartupdater-callback:test');
		
		header('X-Smartupdater-timeout:5000');
		echo $servertime;
	} else {
		header("HTTP/1.1 304 Not Modified");
		exit;
	}
	
	
?>
