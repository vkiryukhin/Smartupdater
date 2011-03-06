<?php 
	$callback = (date(s)<40) ? "foo" : "bar";
	$xheader = '{"callback":"'.$callback.'"}';
	header("X-Smartupdater:$xheader");
	echo  date('h:i:s');
?>
