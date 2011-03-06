<?php 
	$timeout = (date(i)%2) ? 5000 : 20000;
	$xheader = '{"timeout":"'.$timeout.'"}';
	header("X-Smartupdater:$xheader");
	echo  date('h:i');
 ?>
