document.addEventListener("DOMContentLoaded", function() {

    var container = document.getElementById('info-container')
    var containerBg = document.getElementById('info-background')
    var arenaContent = document.getElementById('container')

    // A B O U T  C O N T E N T
    aboutContent = "<p>Dear Visitor,<br><br>Welcome to the website of Group Therapy, the inter-master’s project support group for the master’s departments of the Royal Academy of Art, The Hague (KABK). Set up in 2019 it is an attempt to form a space to experiment with learning methods and form connections between students from the different master’s courses at the academy. Ultimately it aims to be a format that can establish itself amongst the current courses and be passed down from one generation of graduating students to the next.<br> <br>The sessions started as physical meetups over dinner and drinks. This informal and caring environment set the tone for the discussions and although the meetings had to go temporarily (hopefully) online it is this context that we strive for in all the sessions. This website was imagined as a sort of digital table cloth displaying the residue of ideas, research and connections made during the evenings sharing.<br><br>All the best,<br><br>Jack Bardwell</p>"

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
    exerciseContent = '<p><u>The dinner party as a peer to peer learning</u><br>Group Therapy was created as a more official child project of The School within the School. The aim of this larger project was to make space for the essential but increasingly sidelined conditions for learning outside of the curriculum. The metaphor that I think describes best Group Therapy is that of the dinner party where first comes the act of gathering and sharing food, second the role of a host who is giving the space for the party but once at the table is just as involved in the conversation. After eating and discussing the host or guests may suggest games to play. These games are ways of further exploring or disrupting the usual dynamics of the group and allow new conversations and knowledge to be produced. I think that’s as far as I’ll push that metaphor for now, the following are some of the games or methods that we tested but first and foremost it’s a place to come and support each other.<br><br><u>Call me by your name</u><br>Split up into pairs.<br>In pairs present your project to each other for 30mins.<br><br>Back in the whole group one of the pairs is to present to the group but with a twist.<br><br>Person A presents the project of Person B as if it was their own.<br>Questions from the group follow and should be answered by the presenter.<br>Person B then presents the project of person A.<br>Questions from the group follow and should be answered by the presenter.<br><br>Notes:<br>You must address the presenter by their new name.<br>The project ‘owner’ can ask questions to their new self if they do so they must call them by their name<br><br><u>Three’s a crowd</u><br>More common at big parties than dinner parties splitting the group up into smaller groups to allow for longer discussion periods became an essential way of doing the sessions. This was particularly evident online. It does however limit the groups total understanding of the work that is being produced and the ability to learn from a larger pool of people. Doing both small group chats and some sort of full group presentation/discussion allowed for some continuity between sessions.<br><br><u>Guests and Broadcasting</u><br>Broadcasting our guest appearances on the radio quickly became a different thing. It was not just the same group discussion with a mic on the table. So we made them two distinct parts of the session. A broadcast as a presentation/interview with a guest and then an off-air discussion with the guest in our usual format.<br><br><u>The Interview as Research</u><br>Guests are invited after suggestions from the group. Then whoever shared the most affinity with that guest would become the interviewer for the broadcast. Off-air they would also be the person to present their work to the group that included the new guest. The formulation of questions for an interview here becomes a part of a research process and a way of formulating questions for your own practice.</p>'

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
    
      colophonContent = '<p>Dearest Collaborators,<br><br>Thank you for putting energy into this project and helping to make it happen, doing things alone sucks, which is kind of the whole message behind this thing.<br><br><a href="https://www.bnjmnearl.eu/">Benjamin Earl</a>, thank you for making this website and for putting up with its twists and turns. I’m really excited that it has a future to be used as a tool for the sessions as well as a place to reflect on what went on thanks to the clever use of <a href="https://www.are.na/">are.na</a> as it’s API.<br><br><a href="http://kirstenspruit.com/">Kirsten Spruit</a>, thank you for designing the first GT publication. It looks sick and has been the basis for the aesthetic of the project since.<br><br><a href="https://guglielmogiomi.xyz/">Guglielmo Giomi</a>, thanks for your mad energy and enthusiasm and help with running, ideas for how the project can progress and help with its graphic development.<br><br>Thank you to the <a href="https://www.kabk.nl/en/">KABK</a> for supporting this financially and vocally recognising its value. That’s all the Ma Department heads but specifically <a href="https://www.kabk.nl/docenten/hans-venhuizen">Hans Venhuizen</a>, <a href="https://www.kabk.nl/nieuws/fenna-hup-adjunct-directeur-onderwijs">Fenna Hup</a>, Mariam Bestebreurtje, Ina Hollman and <a href="https://www.kabk.nl/docenten/alice-twemlow">Alice Twemlow</a>.<br><br>Thanks again,<br><br><a href="https://jackbardwell.com/">Jack Bardwell</a><br>Founder of Group Therapy and Writer of this site.</p>'

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
    
      contactContent = '<p>Dear Student, Teacher, Faculty member, Passing person interested in pedagogy,<br><br>If you’d like to keep updated on the goings on of Group Therapy then you can subscribe to the <a href="https://grouptherapykabk.substack.com/">newsletter</a> that goes out every fortnight, here you can also have a peek at what went on in the previous sessions based on the newsletters that went out.<br><br>If you’re a student that you’d like to get in touch about joining future sessions or you’re just interested in having a chat about the project then please send an email to: jack@jackbardwell.com.<br><br>Speak soon,<br><br>Jack</p>'

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