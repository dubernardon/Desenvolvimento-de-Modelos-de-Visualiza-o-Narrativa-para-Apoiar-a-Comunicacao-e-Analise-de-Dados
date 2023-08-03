export default function pieAlfabetizacaochart(pieAlfabetizacaoChart,columnNameCSV,urlcsv,numberofcountry, lengthCSV,selectedcountry,nameofcountriescolumn){

 //reading csv with d3.js
 d3.csv(urlcsv, function (data) {

    // 3° pie chart:

    var secondpieAlfabetizacaoChart, comment3piechart, maxpieAlfabetizacaoChart = 0, minimumpieAlfabetizacaoChart = data[0][columnNameCSV];

    // setting data
    pieAlfabetizacaoChart = data[numberofcountry][columnNameCSV];
    secondpieAlfabetizacaoChart = 100 - pieAlfabetizacaoChart;


    //max and minimun data
    for (var v = 0; v <= lengthCSV; v++) {
      if (data[v][columnNameCSV] > maxpieAlfabetizacaoChart) {
        maxpieAlfabetizacaoChart = data[v][columnNameCSV];
      }
      if (data[v][columnNameCSV] < minimumpieAlfabetizacaoChart) {
        minimumpieAlfabetizacaoChart = data[v][columnNameCSV];
      }
    }

    var datarange3piechart = maxpieAlfabetizacaoChart - minimumpieAlfabetizacaoChart;

    //pie chart comment:

    if (pieAlfabetizacaoChart < (minimumpieAlfabetizacaoChart + (datarange3piechart / 2))) {
      comment3piechart = "the worse "
    }
    if (pieAlfabetizacaoChart > (minimumpieAlfabetizacaoChart + (datarange3piechart / 2))) {
      comment3piechart = "the best"
    }

    const textAlfabetizacaoChart = document.getElementById("textAlfabetizacaoChart");
    textAlfabetizacaoChart.innerHTML = selectedcountry + " has one of " + comment3piechart + " South America literacy rates"; //change comment

  
document.getElementById('pieAlfabetizacaoCharTitle').innerHTML=(selectedcountry + " literacy");

    //pie chart:

    var dom = document.getElementById('pieAlfabetizacaochart');
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
   series: [
     {
       name: 'Literacy(%)',
       type: 'pie',
       radius: '50%',
       data: [
         { value: secondpieAlfabetizacaoChart, name: 'Illiterate' }, //name of pie chart pieces -> here you can add more pieces
         { value: pieAlfabetizacaoChart, name: selectedcountry },
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

    //=========================================================================================
}
)}