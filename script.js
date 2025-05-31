
function treeClick() {
    const body = document.getElementById("bodyid")

    const rando1= Math.random()*window.innerWidth
    const rando2= Math.random()*window.innerHeight

    body.innerHTML += `<img src="birg.png" style="position:absolute;left:${rando1}px; top:${rando2}px;"/>`
}
