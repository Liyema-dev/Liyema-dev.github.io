function loginUser(){
    
    email = document.getElementById('loginEmail').value;
    password = document.getElementById('loginPassword').value;

    fetch('https://b7dc-41-246-129-247.ngrok-free.app/profile',{
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
