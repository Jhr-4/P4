function displayMessage(){
    if(localStorage.getItem("Sent") !== 'undefined' && localStorage.getItem("Sent") !== null){
        console.log("test");
        let success = document.getElementById("Success");
        success.textContent += "You're form has been successfuly sent.";
        localStorage.removeItem("Sent");
    }
}

function validate(form) {
    let name = form.name.value;
    let email = form.email.value;
    let subject = form.subject.value;
    let description = form.description.value;

    let error = document.getElementById("Error");

    error.innerHTML = ""; //Resets the message so it doesn't stack each submit
    let errorCounter = 0;

    if (name === "") {
        error.innerHTML += "Name must be provided. <br>";
        errorCounter++;
    }
    if (email === "") {
        error.innerHTML += "An email must be provided. <br>";
        errorCounter++;
    }
    if (email !== "" && !/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(email)){
        error.innerHTML += "Please provide a valid email. <br>"
        errorCounter++;
    }
    if (subject === "") {
        error.innerHTML += "Subject line must be provided. <br>";
        errorCounter++;
    }
    if (description === "") {
        error.innerHTML += "A description/body must be provided. <br>";
        errorCounter++;
    }


    if(errorCounter > 0) {
        return false;
    } else if (errorCounter === 0){
        localStorage.setItem("Sent", true);
        return true;
    }
}
