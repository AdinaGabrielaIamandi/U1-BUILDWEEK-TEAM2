window.onload = function() {};

let numeroSuccessi = 1;

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


// collegare risultato alla pagina







// devo inserire url
let url= window.location.search
console.log(url)


const parametro= new URLSearchParams (url)


console.log(parametro.get("result"))
const score= parametro.get("result")


document.querySelector("").innerHTML=`<p class="firstP">Wrong <span class="percentage2"> ${score} </span> </p>`

//
//let params = new URLSearchParams(url.search);
//console.log(params)
// tra parentesi mi dice querystring vado ad inserire il valore da cercare
/*
//score is not definito
var urlParams = new URLSearchParams("score");

console.log(urlParams)

let prendiScore = urlParams.get('let score= 0')
console.log(prendiScore);
//mi esce null

//Come controlliamo se nella query è presente un parametro? Utilizziamo URLSearchParams.has() che ci restituirà true oppure false:
console.log(prendiScore.has('let score= 0'))



document.querySelector(".percentage1").innerHTML=` <p class="firstP">Wrong <span class="percentage2"> ${score}  </span></p>`
*/