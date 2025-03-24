document.addEventListener("mousemove", function(event) {
    let salmon = document.getElementById("salmon-no-background.png");
    salmon.style.left = event.pageX + "px";
    salmon.style.top = event.pageY + "px";
});