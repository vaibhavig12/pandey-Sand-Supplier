// popup form to appear
// Get the form and the close button
const formPopup = document.getElementById('enquiryFormPopup');
const closeButton = document.getElementById('closeBtn');

// Get all "Enquire Now" buttons
const enquireButtons = document.querySelectorAll('.btn-outline-secondary');

// Function to show the form
function showForm() {
  formPopup.style.display = 'block';
}

// Function to hide the form
function hideForm() {
  formPopup.style.display = 'none';
}

// Add event listeners to each "Enquire Now" button
enquireButtons.forEach(button => {
  button.addEventListener('click', showForm);
});

// Add event listener to the close button
closeButton.addEventListener('click', hideForm);
// popup form to appear

// on submit form data to sent back to google StyleSheetList

// Add event listener to the form submission
function popUpSubmitForm() 

{
    var startTime = performance.now();

    var popupFormData = {
    "FullName": document.getElementById("PopupFullName").value,
    "Email": document.getElementById("PopupEmail").value,
    "MobileNumber": document.getElementById("PopupMobileNumber").value,
    "Message": document.getElementById("Popupmessage").value
};

fetch('https://script.google.com/macros/s/AKfycbwn4ImON6egkT2hdPE7moz_DIfUjxlQjksNI3dVyfdj39DDZWcL0HMhaq2qsCUNUOKwIw/exec',{
    method :'POST',
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(popupFormData)
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
})
.then(data => {
    var endTime = performance.now();
        var timeTaken = (endTime - startTime)/1000;
        console.log("Response time (milliseconds):", timeTaken);

    alert("Enquiry submitted successfully!");
    document.getElementById("PopupFullName").value = "";
    document.getElementById("PopupEmail").value = "";
    document.getElementById("PopupMobileNumber").value = "";
    document.getElementById("Popupmessage").value = "";
    formPopup.style.display = 'none';
})
.catch(error => {
    alert('Request failed: ' + error);
});
}

function submitForm(    ) {
    
    var formData = {
        "FullName": document.getElementById("FullName").value,
        "Email": document.getElementById("Email").value,
        "MobileNumber": document.getElementById("MobileNumber").value,
        "Message": document.getElementById("message").value
    };

    fetch('https://script.google.com/macros/s/AKfycbwn4ImON6egkT2hdPE7moz_DIfUjxlQjksNI3dVyfdj39DDZWcL0HMhaq2qsCUNUOKwIw/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
    })
    .then(data => {
        alert("Enquiry submitted successfully!");
        document.getElementById("FullName").value="",
        document.getElementById("Email").value="",
        document.getElementById("MobileNumber").value="",
        document.getElementById("message").value=""
    })
    .catch(error => {
        alert('Request failed: ' + error);
    })
    ;
}