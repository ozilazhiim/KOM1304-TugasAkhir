google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawTitleSubtitle);

function drawTitleSubtitle() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Bulan');
  data.addColumn('number', 'Luas Panen Padi (jt hektare)');
  data.addColumn('number', 'Produksi Padi (juta ton GKG)');
  data.addColumn('number', 'Produksi Beras (juta ton beras)');

  data.addRows([
    ['Jan',  0.45, 2.33, 1.34],
    ['Feb',  0.94, 4.95, 2.85],
    ['Mar',  1.65, 8.92, 5.13],
    ['Apr',  1.17, 6.35, 3.66],
    ['Mei',  0.97, 4.96, 2.86],
    ['Jun',  0.95, 4.84, 2.79],
    ['Jul',  0.83, 4.31, 2.48],
    ['Agu',  0.86, 4.38, 2.52],
    ['Sep',  0.84, 4.29, 2.47],
    ['Okt',  0.67, 3.58, 2.06],
    ['Nov',  0.51, 2.80, 2.80],
    ['Des',  0.35, 1.93, 1.61]
  ]);

  var options = {
    chart: {
      title: 'Luas Panen dan Produksi Padi di Indonesia (2023)',
      subtitle: 'Luas panen dalam juta hektare dan produksi dalam juta ton GKG'
    },
    hAxis: {
      title: 'Bulan',
    },
    vAxes: {
      0: {
        title: 'Luas Panen Padi (jt hektare)',
        viewWindow: {
          min: 0,
          max: 2
        },
        ticks: [0, 0.5, 1, 1.5, 2]
      },
      1: {
        title: 'Produksi Padi (juta ton GKG)',
        viewWindow: {
          min: 0,
          max: 10
        }
      }

    },
    series: {
      0: {targetAxisIndex: 0, type: 'bars'},
      1: {targetAxisIndex: 1, type: 'bars'},
      2: {targetAxisIndex: 1, type: 'line', pointSize: 5} 
    }
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
