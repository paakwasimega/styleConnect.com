/*This is script for registration page*/
function addRegistration(){
    var name = document.getElementById('username').value.trim();
    var email = document.getElementById('email').value.trim();
    var pwd = document.getElementById('password').value.trim();

    localStorage.setItem('Username', name);
    localStorage.setItem('Useremail', email);
    localStorage.setItem('Userpassword', pwd);

    alert('Registration successful');
}