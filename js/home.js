// add money to the account

/**  step by step
 * add event handler
 * prevent page reload after form submit
 * get money to be added to the account balance
 * get the pin number
 * verify the pin number
 * 
 */


// add an event handler to the add money button inside the form
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault(); //(prevent reloading browser on form submit)

    // get money to be added to the account balance
    const addMoneyInput = document.getElementById('input-add-money').value ;

    document.getElementById('input-add-money').value = '';

    // get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value ;

    document.getElementById('input-pin-number').value = '';
    
    
    // verify the pin number
    // wrong way to validate pin number. should not use in future
    if(pinNumberInput === '1234'){
        // get the current balance
        const balance = document.getElementById('account-balance').innerText ;
        
        // add addMoneyInput with balance
        // convert string to number
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        
        // update the balance in the UI
        document.getElementById('account-balance').innerText = newBalance ;

    }
    else{
        alert('Failed to add money!')
    }
})