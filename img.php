<?php
/**
* PHP随机图显示
*/
header('Content-Type: text/html; charset=UTF-8');
$img_array = glob("https://gitcode.net/chuqiuyu/chuqiuyu/-/raw/master/img/*.jpg",GLOB_BRACE);
$img = array_rand($img_array);
header("location:.$img_array[$img]");
?>
