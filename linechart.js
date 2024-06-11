google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Premium', 'Medium', 'Luar Kualitas'],
    ['Jan', 11345, 10802, 10228],
    ['Feb', 11818, 11301, 10468],
    ['Mar', 11681, 11122, 10476],
    ['Apr', 11672, 11050, 10565],
    ['Mei', 11642, 11006, 10429],
    ['Jun', 11525, 11080, 10315],
    ['Jul', 11537, 11121, 10303],
    ['Agt', 11754, 11475, 10525],
    ['Sep', 12900, 12685, 11746],
    ['Okt', 13372, 13012, 12381],
    ['Nov', 13250, 12960, 12535],
    ['Des', 13348, 13071, 12530]
  ]);

  var options = {
    title: 'Rata-Rata Harga Beras per Kualitas (2023)',
    curveType: 'function',
    legend: { position: 'bottom' },
    pointSize: 5,
    hAxis: {
      title: 'Bulan'
    },
    vAxis: {
      title: 'Harga (Rp/kg)'
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}
