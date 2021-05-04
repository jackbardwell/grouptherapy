document.addEventListener("DOMContentLoaded", function() {

    var container = document.getElementById('info-container')
    var containerBg = document.getElementById('info-background')
    var arenaContent = document.getElementById('container')

    // A B O U T  C O N T E N T
    aboutContent = "<p>Group Therapy is a inter-master’s project support group that takes place at the Royal Academy of Art, The Hague. It is an attempt to form a space to experiment with learning methods and form connections between students from the different master’s courses at the academy. Ultimately it aims to be a format that can establish itself amongst the current courses and be passed down from one generation to the next.</p>"

    var aboutBtn = document.getElementById('about-button')

    aboutBtn.addEventListener("click", function(){
        if(container.style.display === "none") {
            container.style.display = "block"
            containerBg.style.display = 'block'
            containerBg.style.backgroundColor = "blue"
            arenaContent.style.filter = 'blur(4px)'
        } else {
            container.style.display ="none"
            containerBg.style.display ="none"
            arenaContent.style.filter = 'blur(0px)'
        }
        
        container.innerHTML = aboutContent;
    })

    // E X E R C I S E  C O N T E N T
    exerciseContent = '<p>Exercise: 01<br>In this exercise we played with the physics of space and time to make a floobootooboo</p>'

    var exerciseBtn = document.getElementById('exercise-button')

    exerciseBtn.addEventListener("click", function(){
        if(container.style.display === "none") {
            container.style.display = "block"
            containerBg.style.display = 'block'
            containerBg.style.backgroundColor = "red"
            arenaContent.style.filter = 'blur(4px)'
        } else {
            container.style.display ="none"
            containerBg.style.display ="none"
            arenaContent.style.filter = 'blur(0px)'
        }
        
        container.innerHTML = exerciseContent;
    })

      // C O L O P H O N  C O N T E N T
    
      colophonContent = '<p>Dear (name), (name), (name), (name),<br>you have been part of Group Therapy. Thank you for this.</p>'

      var colophonBtn = document.getElementById('colophon-button')
  
      colophonBtn.addEventListener("click", function(){
          if(container.style.display === "none") {
              container.style.display = "block"
              containerBg.style.display = 'block'
              containerBg.style.backgroundColor = "green"
              arenaContent.style.filter = 'blur(4px)'
          } else {
              container.style.display ="none"
              containerBg.style.display ="none"
              arenaContent.style.filter = 'blur(0px)'
          }
          
          container.innerHTML = colophonContent;
      })

        // C O N T A C T  C O N T E N T
    
      contactContent = '<p>Dear Interested Person,<br>If you want to find out more about Group Therapy you can subscribe to our newsletter</p>'

      var contactBtn = document.getElementById('contact-button')
  
      contactBtn.addEventListener("click", function(){
          if(container.style.display === "none") {
              container.style.display = "block"
              containerBg.style.display = 'block'
              containerBg.style.backgroundColor = "yellow"
              arenaContent.style.filter = 'blur(4px)'
          } else {
              container.style.display ="none"
              containerBg.style.display ="none"
              arenaContent.style.filter = 'blur(0px)'
          }
          
          container.innerHTML = contactContent;
      })

})