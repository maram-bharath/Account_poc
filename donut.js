google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Legend 1', 60],
    ['Legend 2', 4],
    ['Legend 3', 16],
    ['Legend 4', 20]
]);

var options = {
    title: 'Key Competitors',
    pieHole: 0.4,
    legend: { position: 'bottom' },
    slices: {
      0: { color: '#ACDF87' },
      1: { color: '#CB3C7B' },

    }
};

var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
chart.draw(data, options);
}