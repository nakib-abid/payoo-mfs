// step -1 --> set event handler
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {

    // step -2 --> prevent default behavior (prevent reloading browser)
    event.preventDefault(); // important, remember it

    // step - 3 --> get the phone number and pin number
    const phoneNumber = document.getElementById("Phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    
    // step - 4 --> validate phone and pin
    // wrong way to check, this is temporary, should not do like this
    if (phoneNumber === "5" && pinNumber === "1234") {
      console.log("you are logged in");
      window.location.href = '/home.html';
    //   step - 5 --> allow user to use the website

    } 
    else {
      alert("wrong phone number or pin");
    }
  });
