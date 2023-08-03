
export default function pieDensidadePopchart(pieDensidadeChart,columnNameCSV,urlcsv,numberofcountry, lengthCSV,selectedcountry,nameofcountriescolumn){

//reading csv with d3.js
d3.csv(urlcsv, function (data) {

    console.log(selectedcountry)

//1° pie chart 
var data1piechartsouthamerica = 0, maxdataname1piechart, maxdata1piechart = 0, minimumdata1piechart = data[0][columnNameCSV];

pieDensidadeChart = data[numberofcountry][columnNameCSV];
//max and minimum data of pie chart

for (v = 0; v <= lengthCSV; v++) {
  if (data[v][columnNameCSV] > maxdata1piechart) {
    maxdata1piechart = data[v][columnNameCSV]
    maxdataname1piechart = data[v][nameofcountriescolumn];
  }
  if (data[v][columnNameCSV] < minimumdata1piechart) {
    minimumdata1piechart = data[v][columnNameCSV];
  }
}

//data sum
for (var v = 0; v <= lengthCSV; v++) {
  data1piechartsouthamerica += parseFloat(data[v][columnNameCSV]);
}

//porcentage of selected data

var porcentdata1piechart = (pieDensidadeChart * 100) / data1piechartsouthamerica;

var porcentdata1piechart = Number(porcentdata1piechart);
var porcentdata1piechart = porcentdata1piechart.toFixed(2);
const textDensidadeChart = document.getElementById("textDensidadeChart");
textDensidadeChart.innerHTML = selectedcountry + " has " + porcentdata1piechart + "% of the South America population density"; // change the comment of pie chart

document.getElementById('pieDensidadeChartTitle').innerHTML=(selectedcountry + " population density")

var dom = document.getElementById('pieDensidadechart');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

option = {
  legend: {
    top: 'bottom'
  },
  tooltip: {
    trigger: 'item'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: false, readOnly: false },
      restore: { show: false },
      saveAsImage: { show: false }
    }
  },
  color:[
    getComputedStyle(document.documentElement).getPropertyValue('--principalColor'),
      getComputedStyle(document.documentElement).getPropertyValue('--secondaryColor')
  ],
  series: [
    {
      name: 'Population density(%)',
      type: 'pie',
      radius: [20, 80],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: pieDensidadeChart, name: data[numberofcountry][nameofcountriescolumn] }, //pieces of pie chart
        { value: maxdata1piechart, name: maxdataname1piechart + ":  higher population density" },

      ]
    }
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
}
)}

//=========================================================================================