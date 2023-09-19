function addData(){
    var name = document.getElementById('name').value;
    var contactemail = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    localStorage.setItem('username', JSON.stringify(name));
    localStorage.setItem('useremail', JSON.stringify(contactemail));
    localStorage.setItem('usermessage', JSON.stringify(message));
    
    alert('Message was submitted successfully');
}