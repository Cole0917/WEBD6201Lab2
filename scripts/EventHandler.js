    var nameDisplay = document.getElementById("nameDisplay");
    var contactDisplay = document.getElementById("contactDisplay");
    var emailDisplay = document.getElementById("emailDisplay");
    function returnForm() {
        let a = document.forms["myForm"]["name"].value;
        let b = document.forms["myForm"]["contactnumber"].value;
        let c = document.forms["myForm"]["email"].value;
            console.log("Name: ${ a } \n Contact Number: ${ b } \n Email Address: { c }")
            nameDisplay.textContent = a;
            contactDisplay.textContent = b;
            emailDisplay.textContent = c;

            setTimeout(redirectURL, 3000);
            return false;
    }

    function redirectURL() {
        document.location.href = './index.html'
    }