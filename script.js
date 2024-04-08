function play() {
    const audio1 = document.getElementById("audio1");
    const audio2 = document.getElementById("audio2");

    audio1.play();
    audio1.onended = function() {
        audio2.play();
    };
}
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

    window.onscroll = function() {
        var footer = document.getElementById("footer");
        var windowHeight = window.innerHeight;
        var scrollPosition = window.scrollY;
        var bodyHeight = document.body.offsetHeight;
        
        // Check if the user has scrolled to the bottom of the page
        if (scrollPosition + windowHeight >= bodyHeight) {
            footer.style.display = "block"; // Display the footer
        } else {
            footer.style.display = "none"; // Hide the footer
        }
    };

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
        if (formDataJSON) {
            // Convert JSON string back to an object
            var formData = JSON.parse(formDataJSON);
            alert("Welcome back, " + formData.fullName + "! Your email is: " + formData.email);
            
        }
    };

    // Check if form data exists in
        
        function showPopup() {
    if (formDataJSON) {
        var formDataJSON = localStorage.getItem("formData");
        // Convert JSON string back to an object
        var formData = JSON.parse(formDataJSON);
    // Display your popup message here
    var div = document.createElement('div');
        div.innerHTML = '<pre>' + JSON.stringify(formData, null, 2) + '</pre>';

        // Add the new HTML element to the body of the HTML document
        document.getElementById('formDataDisplay').appendChild(div);;
}
};
    
