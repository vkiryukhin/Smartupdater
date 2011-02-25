<?php 
session_start();
ini_set("display_errors",1);
$timeout = (isset($_SESSION['smartupdater']))? $_SESSION['smartupdater'] : 10000;
$servertime = date('h:i:s');
$result = '{"servertime":"'.$servertime.'"}';
$result = '{"servertime":"'.$servertime.'","smartupdater":"'.$timeout.'"}';
echo $result;
?>