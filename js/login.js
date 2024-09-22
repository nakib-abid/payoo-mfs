// step -1 --> set event handler
document.getElementById('button-login')
.addEventListener('click', function(event){
    // step -2 --> prevent default behavior (prevent reloading browser)
    event.preventDefault();  // important, remember it
    // step - 3 --> get the phone number
    const phoneNumber = document.getElementById('Phone-number').value;
    console.log(phoneNumber);
})