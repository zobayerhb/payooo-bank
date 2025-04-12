// CASH OUT FORM SHOW
document.getElementById("cash-out").addEventListener("click", function () {
  document.getElementById("cashout-money-form").classList.remove("hidden");
  document.getElementById("add-money-form").classList.add("hidden");
});

// ADD MONEY FORM SHOW
document.getElementById("add-money").addEventListener("click", function () {
  document.getElementById("cashout-money-form").classList.add("hidden");
  document.getElementById("add-money-form").classList.remove("hidden");
});
