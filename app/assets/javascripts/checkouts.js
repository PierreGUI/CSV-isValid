// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


// Run validation on form as soon as page charged
function validateForm() {
  console.log("ready")
  $("form#checkout").isValid(ClientSideValidations.validators)
}

$(document).ready(setTimeout(validateForm, 0));
