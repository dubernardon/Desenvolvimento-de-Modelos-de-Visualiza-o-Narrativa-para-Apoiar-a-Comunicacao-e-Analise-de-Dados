export default function barNatalidadechart(barNatalidadeChart, columnNameCSV, urlcsv, numberofcountry, lengthCSV, selectedcountry, nameofcountriescolumn){

    //reading csv with d3.js
d3.csv(urlcsv, function (data){
    //2° bar chart
var maxdatanumber2barchart = 0, maxbarNatalidadeChart = 0, maxdataname2barchart;


barNatalidadeChart = data[numberofcountry][columnNameCSV];

//max and minimun data of bar chart

var maxbarNatalidadeChart = 0, minimumbarNatalidadeChart = data[0][columnNameCSV], comment2barchart;

for (var v = 0; v <= lengthCSV; v++) {
  if (data[v][columnNameCSV] > maxbarNatalidadeChart) {
    maxbarNatalidadeChart = data[v][columnNameCSV];
    maxdataname2barchart = data[maxdatanumber2barchart][nameofcountriescolumn];
  }
  if (data[v][columnNameCSV] < minimumbarNatalidadeChart) {
    minimumbarNatalidadeChart = data[v][columnNameCSV];
  }
}

var datarange2barchart = maxbarNatalidadeChart - minimumbarNatalidadeChart;

//comments of bar chart:

if (barNatalidadeChart < (minimumbarNatalidadeChart + (datarange2barchart / 2))) { //lowest values:
  comment2barchart = "has one of the South America lowest birth rates"
}
if (barNatalidadeChart > (minimumbarNatalidadeChart + (datarange2barchart / 2))) { //highest values:
  comment2barchart = "has one of the South America highest birth rates"
}
if (barNatalidadeChart == maxbarNatalidadeChart) { //highest value:
  comment2barchart = "has the highest South America birth rate"
}
if (barNatalidadeChart == minimumbarNatalidadeChart) { //lowest value:
  comment2barchart = 
  "has the lowest South America birth rate"
}



const textNatalidadeChart = document.getElementById("textNatalidadeChart");
textNatalidadeChart.innerHTML =  selectedcountry + " " + comment2barchart;

document.getElementById('barNatalidadeChartTitle').innerHTML=(selectedcountry + " birth rate")

//bar chart:

var options = {
  series: [{
    name: selectedcountry,
    data: [barNatalidadeChart]
  }, {
    name: maxdataname2barchart + ': country with highest birth rate',
    data: [maxbarNatalidadeChart]
  },],
  chart: {
    type: 'bar',
    height: 150,
    stacked: false,
  },
  colors: [getComputedStyle(document.documentElement).getPropertyValue('--secondaryColor'),getComputedStyle(document.documentElement).getPropertyValue('--principalColor')],  
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  stroke: {
    width: 1,
    colors: [getComputedStyle(document.documentElement).getPropertyValue('--secondaryColor')]
  },
  xaxis: {
    
    categories: ['1000/inhabitant'],
    labels: {
      formatter: function (val) {
        return val + " inhabit"
      }
    }
  },
  yaxis: {
    title: {
      text: undefined
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " inhabitants"
      }
    }
  }
  ,
  fill: {
    opacity: 1,
    colors: [getComputedStyle(document.documentElement).getPropertyValue('--primaryColor'),getComputedStyle(document.documentElement).getPropertyValue('--secondaryColor')],
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    offsetX: 40
  }
};

var chart = new ApexCharts(document.querySelector("#barNatalidadechart"), options);
chart.render();
}
)}