const grandfather = document.querySelector(".grand-father")
const son = document.querySelector(".son")
const grandson = document.querySelector(".grand-son")

grandfather.addEventListener("click", onGrandClick)
son.addEventListener("click", onSonClick)
grandson.addEventListener("click", onGrandsonClick)

function onGrandClick(event) {
    console.log("event.target", event.target);
    console.log("event.currentTarget", event.currentTarget);
    
}

function onSonClick(event) {
    console.log("event.target", event.target);
    console.log("event.currentTarget", event.currentTarget);
    
}

function onGrandsonClick(event) {
    console.log("event.target", event.target);
    console.log("event.currentTarget", event.currentTarget);
}