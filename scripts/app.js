/* 
Names: Cole Biglang-awa (100825831) & Nathan Mcquaid (100841457)
Date: 2023-02-12
*/

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

        let firstString = "Welcome to our Lab 1 Website for WEBD6201-01! The content of this lab will touch upon DOM Manipulation."

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
        secondaryParagraph.setAttribute("id", "TertiaryParagraph")
        secondaryParagraph.setAttribute("class", "mt-3 container")

        let quaternaryParagraph = document.createElement("h5")
        secondaryParagraph.setAttribute("id", "QuaternaryParagraph")
        secondaryParagraph.setAttribute("class", "mt-3 container")

 
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
        let secondString = "Nathan Mcquaid (Computer Programming and Analysis: Second Year)"

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

    

    // Runs all these functions
    function Start() {
        console.log("App Started Successfully!")

        switch (document.title) {
            case "Home - WEBD6201 Lab 1":
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
        }

        // Adds human resources in between about us and contact us
        // You never said it had to look good
        let navMenu = document.getElementsByClassName( "navbar-nav" )[0]
        let contactUs = document.createElement("LI")
        let humanResources = document.getElementsByClassName("nav-link")[4]
        contactUs.innerHTML = '<a class="nav-link" href="./contact.html"><i class="fa-solid fa-person"></i> Contact Us</a>'
        humanResources.innerHTML = '<a class="nav-link" href="./humanResources.html"><i class="fa-solid fa-person"></i> Human Resources</a>'
        navMenu.append(contactUs)

        let bottomBar = document.createElement('nav')

        bottomBar.innerHTML = '&copy CopyRight 2023'
    }
    window.addEventListener("load", Start)
})()