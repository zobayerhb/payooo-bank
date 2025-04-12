document
  .getElementById("payoo-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const mobileNumber = document.getElementById("payoo-mobile").value;
    const pinNumber = document.getElementById("payoo-pin").value;

    if (mobileNumber === "12" && pinNumber === "1234") {
      console.log("you are loggin");
      window.location.href = "home.html";
    } else {
      alert("Your mobile number or pin worng");
    }
    // console.log(mobileNumber, pinNumber);
  });
