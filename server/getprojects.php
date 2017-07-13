<?php 
	header("Content-type:application/json;charset=utf-8");
	$link = mysqli_connect('mysql.rdsm2ntalmdzv5t.rds.gz.baidubce.com','mirbilu','chenlin123','resume',3306);
	if ($link) {
		$sql='SELECT * FROM projects';
		mysqli_query($link,"SET NAMES utf8");
		$result=mysqli_query($link,$sql);
		$senddata=array();
		while($row=mysqli_fetch_assoc($result)){
			array_push($senddata, array(
				'name'=>$row['name'],
				'picurl'=>$row['picurl'],
				'link'=>$row['link']
			));
		};
		echo json_encode($senddata);
	}
 ?>