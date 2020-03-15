google.charts.setOnLoadCallback(drawChart);
function drawChart() {
var oldData = google.visualization.arrayToDataTable([
  ['Name', 'Popularity','marks'],
  ['Jan', 1800,1600],
  ['Feb', 1200,500],
  ['Mar', 700,1150],
  ['Apr', 1300,1100],
  ['May', 2200,500],
  ['Jun', 1700,1000]
]);

var colChartBefore = new google.visualization.ColumnChart(document.getElementById('colchart_before'));

var options = {
  title: 'Opportunities & Win Rate',
  legend: { position: 'bottom' } };

colChartBefore.draw(oldData, options);
}