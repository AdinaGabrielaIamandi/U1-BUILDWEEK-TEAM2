// devo inserire url
let url= window.location.search


// creo con urlsearch per il collegamento url del risultato del quiz
const parametro= new URLSearchParams (url)



// mi prendo dall'url il vaore result
const score= parametro.get("result")



window.onload = function() {};

let numeroSuccessi = score;

let numeroTotale = 10;

document.getElementById(
    "numAnswersCorrect"
).innerHTML = `<p>${numeroSuccessi}/${numeroTotale} questions</p>`;

let numeroFallimenti = numeroTotale - numeroSuccessi;
document.getElementById(
    "numAnswersWrong"
).innerHTML = `<p>${numeroFallimenti}/${numeroTotale} questions</p>`;

let percentualeSuccesso = (numeroSuccessi / numeroTotale) * 100;
document.getElementById("success-rate").innerHTML = percentualeSuccesso + "%";

let percentualeFallimento = 100 - percentualeSuccesso;
document.getElementById("failure-rate").innerHTML = percentualeFallimento + "%";

window.onload = function() {};

var data = {
    datasets: [{
        data: [percentualeFallimento, percentualeSuccesso],
        backgroundColor: ["#c2128d", "#00ffff"],
        borderColor: ["#c2128d", "#00ffff"],
        borderWidth: 1,
    }, ],
};

var ctx = document.getElementById("pieChart").getContext("2d");
ctx.canvas.width = 250;
ctx.canvas.height = 250;
ctx.canvas.border = 1;

var pieChart = new Chart(ctx, {
    type: "doughnut",
    data: data,
    options: {
        responsive: true,
        cutoutPercentage: 75,
        maintainAspectRatio: false,
    },
});

