document.addEventListener("DOMContentLoaded", function() {

    function getBlocks() {
        fetch('https://api.are.na/v2/channels/website-upload/contents?page=1&amp;per=50;sort=position&direction=desc')
        .then(function(resp) { return resp.json() })
        .then(function(data) {
            console.log(data);
            addImages(data);
        })
        
        .catch(function() {

        })
    }

    getBlocks();

    var blocks = [];
    function addImages( d ) {
        for(var i = 0; i < d.contents.length; i++){
            if (d.contents[i].class === "Image"){
                var imgBlock = new Object();

                var img = document.createElement('img');
                img.src = d.contents[i].image.display.url;
                img.setAttribute('class', 'image block');

                var imgDateRaw = d.contents[i].connected_at;
                var imgDate = Date.parse(imgDateRaw);

                imgBlock.DOM = img;
                imgBlock.date = imgDate;

                blocks.push(imgBlock);

            } else if(d.contents[i].class === "Text") {
                var txtBlock = new Object();

                var txt = document.createElement('p');
                txt.innerHTML = d.contents[i].content;
                txt.setAttribute('class', 'text block');

                var txtDateRaw = d.contents[i].connected_at;
                var txtDate = Date.parse(txtDateRaw);

                txtBlock.DOM = txt;
                txtBlock.date = txtDate;

                blocks.push(txtBlock);

            } else if (d.contents[i].class === "Link") {
                var linkObject = new Object();

                var linkThumb = document.createElement('img')
                linkThumb.src = d.contents[i].image.display.url
                var linkTag = document.createElement('a')
                linkTag.setAttribute('href', d.contents[i].source.url)
                linkTag.appendChild(linkThumb)
                
                linkTag.setAttribute('class', 'link block');

                var linkDateRaw = d.contents[i].connected_at;
                var linkDate = Date.parse(linkDateRaw);

                linkObject.DOM = linkTag;
                linkObject.date = linkDate;
                
                blocks.push(linkObject);

            } else if (d.contents[i].class === "Attachment") {
                var attachmentObject = new Object();

                var attachmentImg = document.createElement('img')
                attachmentImg.src = d.contents[i].image.display.url
                var attachmentLink = document.createElement('a')
                attachmentLink.setAttribute('href', d.contents[i].attachment.url)
                attachmentLink.appendChild(attachmentImg)
            
                attachmentLink.setAttribute('class', 'attachment block')

                var attachmentDateRaw = d.contents[i].connected_at;
                var attachmentDate = Date.parse(attachmentDateRaw);

                attachmentObject.DOM = attachmentLink;
                attachmentObject.date = attachmentDate;

                blocks.push(attachmentObject)

            } else if (d.contents[i].class === "Media") {
                var mediaObject = new Object();

                var embedSrc = d.contents[i].embed.html
                var parsedEmbed = new DOMParser().parseFromString(embedSrc, "text/html")
                
                var mediaEmbed = []
                mediaEmbed.push(parsedEmbed)
                
                var mediaSrc = mediaEmbed[0].all[3].attributes[1].nodeValue

                var mediaDateRaw = d.contents[i].connected_at;
                var mediaDate = Date.parse(mediaDateRaw);
                
                function prepareIframe() {
                    var finalIframe = document.createElement("iframe");
                    finalIframe.setAttribute("src", mediaSrc)
                    finalIframe.setAttribute("class", "media-iframe block")

                    mediaObject.DOM = finalIframe;
                    mediaObject.date = mediaDate;

                }

                prepareIframe()
                
                blocks.push(mediaObject)                   
            }
        }

        for(var n = 1; n < blocks.length ; n++) {
            diff = blocks[n-1].date - blocks[n].date;
           
            if(diff < 100000) {
                padding = diff / 1000
            } else if(diff < 1000000) {
                padding = diff / 10000
            } else if(diff < 10000000) {
                padding =  diff / 100000
            } else if(diff < 100000000) {
                padding = diff / 10000000
            } else {
                padding = diff / 1000000
            }
            
            blocks[n].difference = padding;
        }

        var container = document.getElementById("container");

        blocks.forEach(function(object) {

            var htmlEl = object.DOM;

            // if(htmlEl.classList.contains("attachment")){
            //     var imageChange = htmlEl.getElementsByTagName('img')
            //     imageChange.setAttribute(`style`, `margin-top: ${object.difference}px`)
            // } else

            htmlEl.setAttribute(`style`, `margin-top: ${object.difference}px`)

            container.appendChild(htmlEl)  
        });

    }
})
