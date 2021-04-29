document.addEventListener("DOMContentLoaded", function() {

    var container = document.getElementById('info-container')

    aboutContent = "<p>Group Therapy is a inter-master’s project support group that takes place at the Royal Academy of Art, The Hague. It is an attempt to form a space to experiment with learning methods and form connections between students from the different master’s courses at the academy. Ultimately it aims to be a format that can establish itself amongst the current courses and be passed down from one generation to the next.</p>"

    exerciseContent = '<p>Exercise: 01<br>In this exercise we played with the physics of space and time to make a floobootooboo</p>'

    var aboutBtn = document.getElementById('about-button')

    aboutBtn.addEventListener("click", function(){
        if(container.style.display === "none") {
            container.style.display = "block"
        } else {
            container.style.display ="none"
        }
        
        container.innerHTML = aboutContent;
    })
    

})