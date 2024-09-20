console.log("featured updating...");

// show cash out section 
document.getElementById('cash-out').addEventListener("click", function(){
    // console.log('cash out button click');
    const cashOutSection = document.getElementById("cash-out-section").classList.remove('hidden');

    const addMoneySection = document.getElementById("add-money-section").classList.add('hidden');
})

// show add money section
document.getElementById("add-money").addEventListener('click', function(){
    const moneyAdd = document.getElementById("add-money-section").classList.remove("hidden")

    const cashOutRemove = document.getElementById("cash-out-section").classList.add('hidden')
})