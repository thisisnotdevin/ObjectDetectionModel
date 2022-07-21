export const drawRect = (detections, ctx) =>{
    detections.forEach(prediction=>{
        // Get prediction results
        const [x,y,width,height] = prediction['bbox'];
        const text = prediction['class'];

        // set styling

        const color = 'white'
        // white works for a darker enviroment, generally recomend the version below for cool rainbow effect
        // '#' + Math.floor(Math.random()*16777215).toString(16);
        ctx.strokeStyle = color
        ctx.font = '22px Verdana'
        ctx.fillStyle = color

        // Draw rectangle and text
        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()
    })
}
