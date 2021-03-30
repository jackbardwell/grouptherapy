document.addEventListener("DOMContentLoaded", function() {

    function getBlocks() {
        fetch('https://api.are.na/v2/channels/defining-place/contents?page=1&amp;per=50;sort=position&direction=desc')
        .then(function(resp) { return resp.json() })
        .then(function(data) {
            addImages(data)
        })
        
        .catch(function() {

        })
    }

    getBlocks()

    var blocks = [];
    function addImages ( d ) {
        for(var i = 0; i < d.contents.length; i++){
            if (d.contents[i].class === "Image"){
                var img = document.createElement('img')
                img.src = d.contents[i].image.display.url
                img.setAttribute('class', 'image block')
                blocks.push(img)
            } else if (d.contents[i].class === "Text") {
                var txt = document.createElement('p')
                txt.innerHTML = d.contents[i].content
                txt.setAttribute('class', 'text block')
                blocks.push(txt)
            } else if (d.contents[i].class === "Link") {
                var link = document.createElement('a')
                link.setAttribute('href', d.contents[i].source.url)
                link.textContent = '🔗 ' + d.contents[i].generated_title
                link.setAttribute('class', 'link block')
                blocks.push(link)
            } else if(d.contents[i].class === "Attachment") {
                var attachmentImg = document.createElement('img')
                attachmentImg.src = d.contents[i].image.display.url
                var attachmentLink = document.createElement('a')
                attachmentLink.setAttribute('href', d.contents[i].attachment.url)
                attachmentLink.appendChild(attachmentImg)
                attachmentLink.setAttribute('class', 'attachment block')
                blocks.push(attachmentLink)
            } 
            else if (d.contents[i].class === "Media") {
                var embedSrc = d.contents[i].embed.html
                var parsedEmbed = new DOMParser().parseFromString(embedSrc, "text/html")

                var mediaEmbed = []
                mediaEmbed.push(parsedEmbed)

                var mediaSrc = mediaEmbed[0].all[3].attributes[1].nodeValue

                function prepareIframe() {
                    var finalIframe = document.createElement("iframe");
                    finalIframe.setAttribute("src", mediaSrc)
                    finalIframe.setAttribute("class", "media-iframe block")
                    blocks.push(finalIframe)
                }

                prepareIframe()
                

            }
        }

        var container = document.getElementById("container")

        blocks.forEach(function(element) {                  
            container.appendChild(element)         
          });
    }

})
