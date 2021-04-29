document.addEventListener("DOMContentLoaded", function() {

    var aboutButton =  document.getElementById("about-button")
    var introLetter = document.getElementById("introduction")

    aboutButton.addEventListener('click', triggerLetter);

    function triggerLetter(){
        if(introLetter.style.left === "200%"){
            introLetter.style.left = "50%"
        } else if (introLetter.style.left === "50%"){
            introLetter.style.left = "200%"
        }
    }

})