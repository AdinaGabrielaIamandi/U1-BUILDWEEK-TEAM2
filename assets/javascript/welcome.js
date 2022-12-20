const checkbox = document.getElementById("checkbox");
const button = document.getElementById("button");
button.addEventListener("clicked", function() {
    if (checkbox.checked == 1) {
        //proceed();
        alert("checkbox");
    }
});

function proceed() {
    button.setAttribute(onclick, "location.href='question_page.html");
}
/* aggiungere javascript della prima pagina */