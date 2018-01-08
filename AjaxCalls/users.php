<?php
//Create Connection
$conn = mysqli_connect('localhost','root','varadsp123','vsp');

$query = 'SELECT * FROM emp';

//Get Result
$result = mysqli_query($conn,$query);

//Fetch Data
$users = mysqli_fetch_all($result,MYSQLI_ASSOC);

echo json_encode($users);

	

?>