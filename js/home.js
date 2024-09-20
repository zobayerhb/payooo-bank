document.getElementById("add-btn").addEventListener("click", function(event){
    event.preventDefault();

    const addMoneyPin = document.getElementById('pin-login').value;
    const amountAdd = document.getElementById('amount-add').value;
    const amountConvert = parseFloat(amountAdd);

    if(addMoneyPin === '1234'){
        const currentMoney = document.getElementById('current-money').innerText;
        const currentMoneyConvert = parseFloat(currentMoney);
        const newMoney = amountConvert + currentMoneyConvert;
        
        document.getElementById("current-money").innerText = newMoney;
    }else{
        alert("something went to wrong");
    }
})