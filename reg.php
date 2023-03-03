<?php
$conn=mysqli_connect('localhost','root','','thetrianglekitchens');
if($_SERVER['REQUEST_METHOD']=='POST'){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $number=$_POST['number'];
    $password=$_POST['password'];
    $sql="select * from thetrianglekit where email='$email' and number='$number'";
    $query=mysqli_query($conn,$sql);
    if(mysqli_num_rows($query)>0){
        header('Location:Register.php#DuplicateEntry');
    } else{
        $sql="insert into thetrianglekit (name,email,number,password) values ('$name','$email',$number,'$password')";
        $query=mysqli_query($conn,$sql);
    }
}
?>