  
  export default function barMortalidadechart(barMortalidadeChart,columnNameCSV,urlcsv, numberofcountry, lengthCSV,selectedcountry,nameofcountriescolumn){

    d3.csv(urlcsv, function (data) {
 // 1° bar chart: 

 var maxdatanumber1barchart = 0, maxbarMortalidadeChart = 0, maxdataname1barchart, minimunbarMortalidadeChart = 100, comment1barchart;

 //max and minimun bar chart data

 for (var v = 0; v <= lengthCSV; v++) {
   if (data[v][columnNameCSV] > maxbarMortalidadeChart) {
     maxbarMortalidadeChart = data[v][columnNameCSV];
     maxdataname1barchart = data[maxdatanumber1barchart][nameofcountriescolumn];
   }
   if (data[v][columnNameCSV] < minimunbarMortalidadeChart) {
     minimunbarMortalidadeChart = data[v][columnNameCSV];
   }
 }

 var datarange1barchart = maxbarMortalidadeChart - minimunbarMortalidadeChart;

 barMortalidadeChart = data[numberofcountry][columnNameCSV];

 //comments of bar chart:

 if (barMortalidadeChart < (minimunbarMortalidadeChart + (datarange1barchart / 2))) { // lowest values comment
   comment1barchart = "has one of the lowest South America mortality rates"
 }
 if (barMortalidadeChart > (minimunbarMortalidadeChart + (datarange1barchart / 2))) {
   comment1barchart = "has one of the highest South America mortality rates"  // highest values comment
 }
 if (barMortalidadeChart == maxbarMortalidadeChart) {
   comment1barchart = "has the highest South America mortality rate" // highest value comment
 }
 if (barMortalidadeChart == minimunbarMortalidadeChart) {
   comment1barchart = "has the lowest South America mortality rate" //lowest value comment
 }



 const textMortalidadeChart = document.getElementById("textMortalidadeChart");
 textMortalidadeChart.innerHTML =selectedcountry + " " + comment1barchart; //change bar chart comment

 document.getElementById('barMortalidadeChartTitle').innerHTML=(selectedcountry + " mortality rate")


 //bar chart:

 var options = {
   series: [{
     name: selectedcountry,
     data: [barMortalidadeChart]
   }, {
     name: maxdataname1barchart + ': Country with the highest mortality', //labels
     data: [maxbarMortalidadeChart]
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
     categories: ['1000/inhabitant'], //categories
     labels: {
       formatter: function (val) {
         return val + " inhabit." //name in the mouseover event
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
         return val + " inhabitant" //name in the mouseover event
       }
     }
   }
   ,
   fill: {
     opacity: 1
   },
   legend: {
     position: 'top',
     horizontalAlign: 'left',
     offsetX: 40
   }
 };

 var chart = new ApexCharts(document.querySelector("#barMortalidadechart"), options);
 chart.render();
  }
    )}


  //=========================================================================================