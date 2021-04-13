document.addEventListener("DOMContentLoaded", function() {

    var drawButton = document.getElementById('drawBtn')

    drawButton.addEventListener('mousedown', startDrawing)

    function startDrawing() {

        
        const canvas = document.getElementById('canvas')

        if(canvas.style.display === 'none'){
            canvas.style.display = 'block'
            drawButton.innerHTML = 'Erase'
            drawButton.style.backgroundColor = 'red'
            drawButton.style.color = 'white'
        } else {
            canvas.style.display = 'none'
            drawButton.innerHTML = 'Draw'
            drawButton.style.backgroundColor = 'yellow'
            drawButton.style.color = 'black'
        }

        const ctx = canvas.getContext('2d')
        let coord = { x: 0, y: 0 }

        document.addEventListener('mousedown', start)
        document.addEventListener('mouseup', stop)
        window.addEventListener('resize', resize)

        function resize() {
            ctx.canvas.width = document.body.clientWidth
            ctx.canvas.height = document.body.clientHeight
        }

        resize()

        function start(event) {
            document.addEventListener('mousemove', draw)
            reposition(event)
        }

        function reposition(event) {
            coord.x = event.clientX - canvas.offsetLeft
            coord.y = event.clientY - canvas.offsetTop
        }

        function stop() {
            document.removeEventListener('mousemove',draw)
        }

        function draw(event) {
            ctx.beginPath()
            ctx.lineWidth = 4
            ctx.lineCap = 'round'
            ctx.strokeStyle = 'blue'
            ctx.moveTo(coord.x, coord.y)
            reposition(event)
            ctx.lineTo(coord.x, coord.y)
            ctx.stroke()
        }

    }
})