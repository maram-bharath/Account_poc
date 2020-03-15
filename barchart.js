google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'AC Name');
      data.addColumn('number', 'Amount');

      data.addRows([
        ['', 100000],
        ['', 90000],
        ['', 75000],
        ['', 85000],
        ['', 60000],
        ['', 70000],
        ['', 80000],
        ['', 72000],
        ['', 85000],
        ['', 115000],
        ['', 115000],
        ['', 80000],
        ['', 110000],
      ]);

      var options = {
        title: 'Risky Accounts by Revenue',
        legend: {position: 'none'},
        hAxis: {
          title: 'AC NAME',
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    }