console.log("Portfolio website loaded successfully");


// Show a message when a navigation link is clicked

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("Opening " + link.textContent);

    });

});