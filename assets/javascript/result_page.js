// devo inserire url
let url = window.location.search;

// creo con urlsearch per il collegamento url del risultato del quiz
const parametro = new URLSearchParams(url);

// mi prendo dall'url il vaore result
const score = parametro.get("result");

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
    labels: ["Correct", "Wrong"],
    datasets: [{
        data: [percentualeFallimento, percentualeSuccesso],
        backgroundColor: ["#c2128d", "#00ffff"],
        borderColor: ["#c2128d", "#00ffff"],
        borderWidth: 1,
    }, ],
};

var data = {
    labels: ["Wrong", "Correct"],
    datasets: [{
        data: [percentualeFallimento, percentualeSuccesso],
        backgroundColor: ["#c2128d", "#00ffff"],
        borderColor: ["#c2128d", "#00ffff"],
        borderWidth: 1,
    }, ],
};

var ctx = document.getElementById("pieChart").getContext("2d");
ctx.canvas.width = 270;
ctx.canvas.height = 270;
ctx.canvas.border = 1;

var pieChart = new Chart(ctx, {
    type: "doughnut",
    data: data,
    options: {
        responsive: false,
        cutoutPercentage: 72,
        maintainAspectRatio: false,
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    var index = tooltipItem.index;
                    return data.labels[index] + ": " + dataset.data[index] + "%";
                },
            },
        },
        legend: {
            display: false, // hide the legend
        },
    },
});

window.onload = function() {};

if (numeroSuccessi > 5) {
    document.getElementById(
        "inside_canvas"
    ).innerHTML = `<p class="p1">Congratulations!</p>
    <p class="p2correct">You passed the exam.</p>
    <p class="p3">We'll send you the certificate in few minutes. Check your email (including promotions / spam folder)</p>`;
} else {
    document.getElementById(
        "inside_canvas"
    ).innerHTML = `<p class="p1">We are sorry!</p>
      <p class="p2wrong">You didn't passed the exam.</p>
      <p class="p3">We'll send you the certificate of death in few minutes. Check your heaven mail (including promotions / spam folder)</p>`;
}