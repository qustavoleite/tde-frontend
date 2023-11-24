var modal = document.getElementById("myModal")
var btn = document.getElementById("myBtn")
var span = document.getElementsByClassName("close")[0]
var links = document.querySelectorAll(".menu-link")

btn.onclick = function () {
  modal.style.display = "block"
}

span.onclick = function () {
  modal.style.display = "none"
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

links.forEach(function (link) {
  link.addEventListener("click", function () {
    modal.style.display = "none"
  })
})
