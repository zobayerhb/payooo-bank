// console.log("index added")
document.getElementById("login-btn").addEventListener('click', function(event){
    // console.log("clicked the button");
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    
    if(phoneNumber === '77' && pinNumber === '1234'){
        alert('You are logged in');
        window.location.href = '/home.html'
    }else{
        alert("Enter Your valid information");
    }

})