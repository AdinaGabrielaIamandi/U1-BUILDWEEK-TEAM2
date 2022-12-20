const checkbox = document.getElementById("checkbox");
const button = document.getElementById("button");
button.addEventListener("clicked", function() {
    if (checkbox.checked == 1) {
        //proceed();
        alert("checkbox");
    }
});

function proceed() {
    document.getElementById("button").innerHTML =
        "<a href='../../question_page.html'here to visit example.com</a>";
    alert("Hai cliccato");
}
/* aggiungere javascript della prima pagina */