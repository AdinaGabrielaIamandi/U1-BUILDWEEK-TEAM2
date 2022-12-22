window.onload = function() {};

var data = {
    datasets: [{
        data: [34, 66],
        backgroundColor: ["#00ffff", "#c2128d"],
        borderColor: ["#00ffff", "#c2128d"],
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