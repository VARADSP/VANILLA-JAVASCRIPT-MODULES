<?php
echo 'Processing...';


//connect to a database 
$conn = mysqli_connect('localhost','root','varadsp123','vsp');



//Check for a get variable

if(isset($_GET['name'])){

	echo 'Get Your Name is '.$_GET['name'];

}
//Check for a POST variable

if(isset($_POST['name'])){
	$name = mysqli_real_escape_string($conn,$_POST['name']);

	echo 'POST Your Name is '.$_POST['name'];


	$query = "INSERT INTO emp(ename) values('$name')";

	if(mysqli_query($conn,$query)){
		echo 'User Added...';

	}
	else{
		echo 'Error :'.mysqli_error($conn);
	}
	
}



?>