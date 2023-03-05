/* 
Names: Cole Biglang-awa (100825831) & Nathan Mcquaid (100841457)
Date: 2023-03-01
*/

// User Class (part g of Lab 2)
class User {
    // Constructor
    constructor(firstName, lastName, username, email, password, confirmPassword) {
        this.FirstName = firstName
        this.LastName = lastName
        this.Username = username
        this.Email = email
        this.Password = password
        this.ConfirmPassword = confirmPassword
    }

    // Accessors and Mutators
    get FirstName() {
        return this.m_firstName
    }
    set FirstName(firstName) {
        this.m_firstName = firstName
    }

    get LastName() {
        return this.m_lastName
    }
    set LastName(lastName) {
        this.m_lastName = lastName
    }

    get Username() {
        return this.m_username
    }
    set Username(username) {
        this.m_username = username
    }

    get Email() {
        return this.m_email
    }
    set Email(email) {
        this.m_email = email
    }

    get Password() {
        return this.m_password
    }
    set Password(password) {
        this.m_password = password
    }

    get ConfirmPassword() {
        return this.m_confirmPassword
    }
    set ConfirmPassword(confirmPassword) {
        this.m_confirmPassword = confirmPassword
    }

    toString() {
        return `First Name is ${ this.FirstName } \n Last Name is ${ this.LastName } \n Email Address is ${ this.Email } \nPassword is ${ this.Password }`
    }
}

(function () {

    // Displays home page
    function DisplayHome() {
        
        let mainContent = document.getElementsByTagName("main")[0]
        mainContent.setAttribute("class", "container")

        // bottom navbar (implemented for every other display function as well)
        
        // this is to change the html text for 'Products' in the navbar
        document.getElementById("projects").innerHTML = "Projects";
        
        // another way to access body
        documentBody = document.body

        // injects main paragraph for the homepage
        let mainParagraph = document.createElement("h3")
        mainParagraph.setAttribute("id", "MainParagraph")
        mainParagraph.setAttribute("class", "mt-3 container")

        let firstString = "Welcome to our Lab 2 Website for WEBD6201-01! The content of this lab will touch upon jQuery and Form Validation"

        mainParagraph.textContent = firstString
        



        // add after(append)
        mainContent.appendChild(mainParagraph)
    }

    // displays projects page
    function DisplayProjects() {

        let mainContent = document.getElementsByTagName("main")[0]
        mainContent.setAttribute("class", "container")
        
        // changes products to projects
        document.getElementById("projects").innerHTML = "Projects";
        
        // another way to access body
        documentBody = document.body

        

        let mainParagraph = document.createElement("h4")
        mainParagraph.setAttribute("id", "MainParagraph")
        mainParagraph.setAttribute("class", "mt-3 container")

        let secondaryParagraph = document.createElement("h5")
        secondaryParagraph.setAttribute("id", "SecondaryParagraph")
        secondaryParagraph.setAttribute("class", "mt-3 container")

        let tertiaryParagraph = document.createElement("h5")
        secondaryParagraph.setAttribute("id", "TertiaryParagraph")
        secondaryParagraph.setAttribute("class", "mt-3 container")

        let quaternaryParagraph = document.createElement("h5")
        secondaryParagraph.setAttribute("id", "QuaternaryParagraph")
        secondaryParagraph.setAttribute("class", "mt-3 container")

 
        let firstString = "Three Favorite Projects: "
        let secondString = "1. JavaFX BMI Calculator"
        let thirdString = "2. C++ Text Prompt Checker"
        let fourthString = "3. C++ OOP Deck of Cards"

        mainParagraph.textContent = firstString
        secondaryParagraph.textContent = secondString
        tertiaryParagraph.textContent = thirdString
        quaternaryParagraph.textContent = fourthString
        

        // add after(append)
        mainContent.appendChild(mainParagraph)
        mainContent.appendChild(secondaryParagraph)
        mainContent.appendChild(tertiaryParagraph)
        mainContent.appendChild(quaternaryParagraph)
    }

    // displays services page
    function DisplayServices() {
        let mainContent = document.getElementsByTagName("main")[0]
        mainContent.setAttribute("class", "container")
        
        document.getElementById("projects").innerHTML = "Projects";
        
        // another way to access body
        documentBody = document.body


        let mainParagraph = document.createElement("h4")
        mainParagraph.setAttribute("id", "MainParagraph")
        mainParagraph.setAttribute("class", "mt-3 container")

        let secondaryParagraph = document.createElement("h5")
        secondaryParagraph.setAttribute("id", "SecondaryParagraph")
        secondaryParagraph.setAttribute("class", "mt-3 container")

        let tertiaryParagraph = document.createElement("h5")
        tertiaryParagraph.setAttribute("id", "TertiaryParagraph")
        tertiaryParagraph.setAttribute("class", "mt-3 container")

        let quaternaryParagraph = document.createElement("h5")
        quaternaryParagraph.setAttribute("id", "QuaternaryParagraph")
        quaternaryParagraph.setAttribute("class", "mt-3 container")

 
        let firstString = "Three Skills we offer to our clients: "
        let secondString = "1. Web Development"
        let thirdString = "2. Front End Design"
        let fourthString = "3. Back End Programming"

        mainParagraph.textContent = firstString
        secondaryParagraph.textContent = secondString
        tertiaryParagraph.textContent = thirdString
        quaternaryParagraph.textContent = fourthString
        

        // add after(append)
        mainContent.appendChild(mainParagraph)
        mainContent.appendChild(secondaryParagraph)
        mainContent.appendChild(tertiaryParagraph)
        mainContent.appendChild(quaternaryParagraph)
    }

    // Displays about us page
    function DisplayAboutUs() {
        let mainContent = document.getElementsByTagName("main")[0]
        mainContent.setAttribute("class", "container")
        
        document.getElementById("projects").innerHTML = "Projects";
        
        // another way to access body
        documentBody = document.body

        

        let mainParagraph = document.createElement("h4")
        mainParagraph.setAttribute("id", "MainParagraph")
        mainParagraph.setAttribute("class", "mt-3 container")

        let secondaryParagraph = document.createElement("h4")
        secondaryParagraph.setAttribute("id", "SecondaryParagraph")
        secondaryParagraph.setAttribute("class", "mt-3 container")

        let firstString = "Cole Biglang-awa (Computer Programming and Analysis: Second Year)"
        let secondString = "Nathan Mcquaid (Computer Programming: Second Year)"

        mainParagraph.textContent = firstString
        secondaryParagraph.textContent = secondString
        

        // add after(append)
        mainContent.appendChild(mainParagraph)
        mainContent.appendChild(secondaryParagraph)
    }

    // Displays contact us page
    function DisplayContactUs() {
        document.getElementById("projects").innerHTML = "Projects";
    }

    function DisplayLogin() {
        document.getElementById("projects").innerHTML = "Projects";
    }

    let messageArea = $('#messageArea')
    function DisplayRegister() {
        document.getElementById("projects").innerHTML = "Projects";

        $('form').submit(function(event) {
            event.preventDefault()
          
            // Get the values of the form elements
            var firstname = $('input[name="firstName"]').val()
            var lastname = $('input[name="lastName"]').val()
            var email = $('input[name="emailAddress"]').val()
            var password = $('input[name="password"]').val()
            var confirmPassword = $('input[name="confirmPassword"]').val()
            var user = new User(firstname, lastname, email, email, password, confirmPassword)
            console.log(user.toString())
            RegisterValidate()
            ValidatePassword(password, confirmPassword, event)
            
            // Clear the form
            $('input[name="firstName"]').val('')
            $('input[name="lastName"]').val('')
            $('input[name="emailAddress"]').val('')
            $('input[name="password"]').val('')
            $('input[name="confirmPassword"]').val('')
          })
    }

    function RegisterValidate() {
        let emailAddressPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/i

        ValidateInput("emailAddress", emailAddressPattern, "Email Error")
    }

    function ValidateInput(inputFieldID, regularExpression, exception) {

        $('#' + inputFieldID).on("blur", function() {
            let inputText = $(this).val()

            if (!regularExpression.test(inputText)) {
                console.log("email validation failed")
                $(this).trigger("focus").trigger("select")

                messageArea.addClass("div").text(exception).show()               
            } else {
                messageArea.removeAttr("class").hide()
            }
        })
    }
    
    function ValidatePassword(pass1, pass2){
        $('#password').on("blur", function() {

            if (pass1 !== pass2 || pass1.length < 6){
                alert("passwords do not match")
                $(this).trigger("focus").trigger("select")
                messageArea.addClass("div").text("Password Error").show()               
            } else {
                messageArea.removeAttr("class").hide()
            }
        })
    }
    

    // Runs all these functions
    function Start() {
        console.log("App Started Successfully!")

        switch (document.title) {
            case "Home - WEBD6201 Lab 2":
                DisplayHome()
                break
            case "Products - WEBD6201 Lab 1":
                DisplayProjects()
                break
            case "Services - WEBD6201 Lab 1":
                DisplayServices()
                break
            case "About Us - WEBD6201 Lab 1":
                DisplayAboutUs()
                break
            case "Contact Us - WEBD6201 Lab 1":
                DisplayContactUs()
                break
            case "Login - WEBD6201 Lab 2":
                DisplayLogin()
                break
            case "Register - WEBD6201 Lab 2":
                DisplayRegister()
                break
        }

   
        
        // bottom navbar
        let bottomBar = document.createElement('nav')

        bottomBar.innerHTML = '&copy CopyRight 2023'
    }
    window.addEventListener("load", Start)
})()