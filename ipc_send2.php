<?php

//$top = explode(",",shell_exec("top -n 1 -b | fgrep '%id'"));
//$idalCPU = floor((int)preg_replace("/\D{0,}/","",$top[3])/100);

$idalCPU = 5;

define("CPU_TEST", 1);
define("MEM_KEY", 7);

$CPU_usage_level = 10-$idalCPU;

$shm_id = shm_attach(MEM_KEY,10);//,0666);

if ($shm_id === false) {
	echo "Fail to attach shared memory.\n";
}

if (!shm_put_var($shm_id, CPU_TEST, $CPU_usage_level)) {
	echo "Failed to put in shared memory $shm_id.\n";
}

?>