window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
      
      console.log ("you just submitted the form");
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }

}

//A fx to set up the default amounts of 100,000, 10 years, at 2.5% rate
// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const defaultValues = {amount:100000, years: 10, rate: 2.5};
  const inputAmount = document.getElementById("loan-amount");
  
  inputAmount.value = defaultValues.amount;

  const years =  document.getElementById ('loan-years');
  
  years.value= defaultValues.years;
  
  const rate = document.getElementById("loan-rate");
  rate.value = defaultValues.rate;
}
function calculatePayment (){

}


// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIvalues = getCurrentUIValues();
  console.log (currentUIvalues);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
