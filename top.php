<?php
$top = explode(",",shell_exec("top -n 1 -b | fgrep '%id'"));
$idleCPU = floor((int)preg_replace("/\D{0,}/","",$top[3])/100);
$CPU_usage_level = 10 - $idleCPU;

$fp = fopen("cpu_usage.dat", "w");
fwrite($fp, $CPU_usage_level);
fclose($fp);

echo $top;
echo "<br/>";
echo $CPU_usage_level;
?>