
var allProducts = document.querySelectorAll(".card1  span")
var content = document.querySelector("#content")
var button = document.getElementById("cart")
var detail = document.getElementById("detail")
var text = document.getElementById("text")
// var mybtn = document.getElementById("myBtn")
// var mymodal = document.getElementById("myModal")

var totalPrice = 0
allProducts.forEach(function (item) {
    item.onclick = function () {

        totalPrice += +(item.getAttribute("price"))

        content.innerHTML += item.textContent + " | "

        if (content.innerHTML != "") {
            button.style.display = "block"
            button.style.width = "200px"
            button.style.height = "45px"
            button.style.background = "#241202"
            button.style.color = "white"
            button.style.outline = "0"
            detail.style.display = "block"
        }
    }
})
button.onclick = function () {
    console.log(totalPrice)
    detail.innerHTML = "EGP " + totalPrice
}

//  /////////////////////////////////////////////////////////////////////

// document.ready(function () {
//     mybtn.onclick = function () {
//         mymodal.modal();
//     }});
