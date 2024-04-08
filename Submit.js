function showPopup() {
    if (formDataJSON) {
        var formDataJSON = localStorage.getItem("formData");
        // Convert JSON string back to an object
        var formData = JSON.parse(formDataJSON);
    // Display your popup message here
    document.getElementById()
    alert("Thank you for submitting the form!");
    document.getElementById('myForm').reset();
}
}