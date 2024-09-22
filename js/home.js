// add money to the account

/**  step by step
 * add event handler
 * prevent page reload after form submit
 * get money to be added to the account balance
 * 
 */


// add an event handler to the add money button inside the form
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault(); //(prevent reloading browser on form submit)

    // get money to be added to the account balance
    const addMoneyInput = document.getElementById('input-add-money').value ;

    // get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value ;
    console.log(addMoneyInput, pinNumberInput)
    
    
})