 /*This is script for login page*/
 function checkRegistration(){
    var username2 = document.getElementById('username2').value.trim();
    var pwd2 = document.getElementById('password2').value.trim();

    var getusername = localStorage.getItem('Username');
    var getpassword = localStorage.getItem('Userpassword');

    if(username2 === getusername && pwd2 === getpassword){
        alert('log in successful');
    }
    else{
        alert('username or password is incorrect');
    }
}