const firePixelsArray = []
const fireWidth = 10
const fireHeight = 10

function start(){
    createFireDataStructure()
    renderFire()
}

function createFireDataStructure(){
    const numberOfPixels = fireWidth * fireHeight
    for (let i = 0; i < numberOfPixels; i++) {
        firePixelsArray[i] = 0
    }
}

function calculateFirePropagation(){

}

function renderFire(){
    let html = '<table cellpadding=0 cellspacing=0'
    for(let row = 0; row < fireHeight; row++){
        html += '<tr>'

        for(let column = 0; column < fireWidth; column++){
            let pixelIndice = row*fireWidth + column
            let fireIntensity = firePixelsArray[pixelIndice]
            html += `
            <td>
            ${fireIntensity}
            <div class="pixel-index">${pixelIndice}</div>
            </td>`
        }

        html += '</tr>'
    }
    html += '</table>'
    const fireCanvas = document.querySelector('#fireCanvas')
    console.log(fireCanvas)
    document.querySelector('#fireCanvas').innerHTML = html 
}
start()

