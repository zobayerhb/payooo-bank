// ADD MONEY FUNCTIONALITY
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addAmountPin = document.getElementById("add-money-pin").value;
    const addAmountNumber = document.getElementById("add-money-number").value;

    // pin validate
    if (addAmountPin === "1234") {
      console.log("Add money success");
      const currentAmount = document.getElementById("current-amount").innerText;

      // convert string to number
      const convertAddNumber = parseFloat(addAmountNumber);
      const convertCurrentAmount = parseFloat(currentAmount);

      //   Add money to current balance in UI
      const updateUIBalance = convertCurrentAmount + convertAddNumber;
      //   console.log(updateUIBalance);

      //   update UI/DOM
      document.getElementById("current-amount").innerText = updateUIBalance;

      console.log(convertAddNumber, convertCurrentAmount);
    } else {
      alert("Enter your validate information");
    }

    console.log(addAmountNumber, addAmountPin);
  });

//   CASH OUT FUNCTIONALITY
document
  .getElementById("cashOut-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const cashoutAmount = document.getElementById("cashout-money-number").value;
    const cashoutPin = document.getElementById("cashout-money-pin").value;

    if (cashoutPin === "1234") {
      const currentBalance =
        document.getElementById("current-amount").innerText;

      const convertCashoutNum = parseFloat(cashoutAmount);
      const convertCurrentBalance = parseFloat(currentBalance);

      const updateCurrentBalance = convertCurrentBalance - convertCashoutNum;

      document.getElementById("current-amount").innerText =
        updateCurrentBalance;
    } else {
      alert("your information not valid");
    }
  });
