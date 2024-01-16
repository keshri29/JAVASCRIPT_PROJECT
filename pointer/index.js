var main = document.querySelector("#main")

var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove", function(dot){
    // crsr.style.top=event.pageY+"px"
     crsr.style.left = dot.x+"px"
     crsr.style.top = dot.y+"px"

})