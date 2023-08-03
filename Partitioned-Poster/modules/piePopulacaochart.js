 //2° pie chart:

 export default function piePopulacaochart(piePopulacaoChart,columnNameCSV,urlcsv,numberofcountry, maxline, selectedcountry){


  console.log(columnNameCSV + "ok");
     //reading csv with d3.js
  d3.csv(urlcsv, function (data) {
    var data2pichartsouthamerica = 0;

 // set data of selected country
 piePopulacaoChart = data[numberofcountry][columnNameCSV];

 //set the sum of alldata
 var porcent2piechart;

 settotal(piePopulacaoChart);
 function settotal(piePopulacaoChart) {
   for (var v = 0; v <= maxline; v++) {
     data2pichartsouthamerica += parseFloat(data[v][columnNameCSV]);
   }
   porcent2piechart = (piePopulacaoChart * 100) / data2pichartsouthamerica;
   data2pichartsouthamerica -= piePopulacaoChart;
 }
 //percentage of the total with two numbers after the comma;
 porcent2piechart = Number(porcent2piechart);
 porcent2piechart = porcent2piechart.toFixed();

 //pie:

 //set to pie chart: title and comment to pie chart

 const textPopulacaoChart = document.getElementById("textPopulacaoChart");
 textPopulacaoChart.innerHTML = selectedcountry + " has " + porcent2piechart + "% of the South America population "; // Change pie chart comment*/

//set a integer value
 piePopulacaoChart=Math.ceil(piePopulacaoChart);
 data2pichartsouthamerica=Math.ceil(data2pichartsouthamerica);

 console.log(piePopulacaoChart);

 document.getElementById('piePopulacaoChartTitle').innerHTML=(selectedcountry + " population")

 var dom = document.getElementById('piePopulacaochart');
 var myChart = echarts.init(dom, null, {
   renderer: 'canvas',
   useDirtyRect: false
 });
 var app = {};

 var option;

 option = {
   tooltip: {
     trigger: 'item'
   },
   legend: {
     orient: 'vertical',
     bottom: 'bottom'
   },
   color:[
    getComputedStyle(document.documentElement).getPropertyValue('--secondaryColor'),
    getComputedStyle(document.documentElement).getPropertyValue('--principalColor')
  ],
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " inhabitants"
      }
    }
  }
  ,
   series: [
     {
       name: "Population(%)",
       type: 'pie',
       radius: '50%',
       data: [
         { value: data2pichartsouthamerica, name: 'rest of South America' }, //name of pie chart pieces -> here you can add more pieces
         { value: piePopulacaoChart, name: selectedcountry },
       ],
       emphasis: {
         itemStyle: {
           shadowBlur: 10,
           shadowOffsetX: 0,
           shadowColor: 'rgba(0, 0, 0, 0.5)'
         }
       }
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