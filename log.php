<?php
session_start();
$email=$_POST['email'];
$password=$_POST['password'];
$conn=mysqli_connect('localhost','root','','thetrianglekitchens');
$sql="select * from thetrianglekit where email='$email' and password='$password'";
$result=mysqli_query($conn,$sql);
if(mysqli_num_rows($result)===1){
    $row=mysqli_fetch_assoc($result);
    $_SESSION['email']=$email;
    $_SESSION['name']=$row['name'];
    header('Location: dashboard.php');
} else{
    header('Location: login.html#InvalidCredentials');
}
?>