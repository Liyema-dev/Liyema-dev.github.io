function loginUser(){
    
    email = document.getElementById('loginEmail').value;
    password = document.getElementById('loginPassword').value;

    fetch('https://42d3-41-246-139-29.ngrok-free.app/loginMember',{
        method: 'POST',
        body: {
            'email':email,
            'password':password
        }
    })
    .then(response => {
        console.log(response)
    })

}
