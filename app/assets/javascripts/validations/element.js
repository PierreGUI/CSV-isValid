window.ClientSideValidations.callbacks.element.pass = function($element, callback) {
  // Allow clientSideValidations to do it's thing.
  callback();
  console.log("validation success for", $element)
  // Add a success message to give the user an ego lift.
  $element.parent().addClass('is-valid');
};

window.ClientSideValidations.callbacks.element.fail = function($element, message, callback) {
  callback();
  console.warn("validation failure for", $element)
  // Remove valid class
  $element.parent().removeClass('is-valid');
}
