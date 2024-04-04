function playAudio(audioFileName) {
    var audio = new Audio(audioFileName);
audio.play();
}
function toggleBackgroundColor() {
var body = document.body;
var text = document.label;
var currentColor = window.getComputedStyle(body).getPropertyValue('background-color');

if (currentColor === 'rgb(240, 240, 240)') {
body.style.backgroundColor = 'rgb(34, 34, 30)';
body.style.color = 'rgb(240, 240, 240)';
} else {
body.style.backgroundColor = 'rgb(240, 240, 240)';
body.style.color = 'black'
}
}
// Function to save form data to local storage
function saveFormData() {
var formData = {
fullName: document.getElementById('fullName').value,
dob: document.getElementById('dob').value,
email: document.getElementById('email').value,
phone: document.getElementById('phone').value,
address: document.getElementById('address').value,
city: document.getElementById('city').value,
state: document.getElementById('state').value,
zip: document.getElementById('zip').value,
burialMethod: document.querySelector('input[name="burialMethod"]:checked').value,
graveMarker: document.querySelector('input[name="graveMarker"]:checked').value,
enscript: document.getElementById('enscript').value,
graveLocation: document.querySelector('input[name="graveLocation"]:checked').value,
plotSize: document.getElementById('plotSize').value,
additionalInfo: document.getElementById('additionalInfo').value
};

var formDataJson = JSON.stringify(formData);
localStorage.setItem('formData', formDataJson);
}