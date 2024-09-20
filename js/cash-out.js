document.getElementById('cash-out-btn').addEventListener('click', function(events){
    events.preventDefault();

    const cashOut = document.getElementById("cash-out-input").value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById("cash-out-pin-login").value;

    if(pinNumber === '1234'){
        const currentBalance = document.getElementById("current-money").innerText;
        const balanceUpdate = parseFloat(currentBalance);

        const newBalance = balanceUpdate - cashOutNumber;
        document.getElementById("current-money").innerText = newBalance;
    }else{
        alert('cash out failed')
    }

})