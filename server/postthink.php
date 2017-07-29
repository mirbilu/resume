<?php 
	header("Content-type:application/json;charset=utf-8");
	$link = mysqli_connect('mirbilu.cn','mirbilu','chenlin123','resume',3306);
	if ($link) {
		$name= $_POST['newname'];
		$connection = $_POST['newconnection'];
		$advice = $_POST['newadvice'];
		$sql="INSERT INTO `message` (`name`, `connection`, `advice`) VALUES ('{$name}','{$connection}','{$advice}')";
		mysqli_query($link,"SET NAMES utf8");
		$result=mysqli_query($link,$sql);		
		echo json_encode($result);
	}
 ?>