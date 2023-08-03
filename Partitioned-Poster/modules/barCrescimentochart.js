export default function barCrescimentochart(dataCresimentoChart,columnNameCSV,urlcsv,numberofcountry, lengthCSV,selectedcountry,nameofcountriescolumn){

     // 3° bar chart -> vertical bar chart

       //reading csv with d3.js
d3.csv(urlcsv, function (data){

     var comment3barchart;


     //set data
     dataCresimentoChart = data[numberofcountry][columnNameCSV];
 
     //set comment of bar chart
     if (dataCresimentoChart == 0) {
       comment3barchart =" is one of the countries of South America that doesn't grow"
     }
     if (dataCresimentoChart > 0) {
       comment3barchart = " is one of the countries of South America that grow"
     }
 
     const textCrescimentoChart = document.getElementById("textCrescimentoChart"); // change comment 
     textCrescimentoChart.innerHTML = selectedcountry + comment3barchart ;
 
    document.getElementById('barCrescimentoChartTitle').innerHTML=(selectedcountry + " growth")
 
     //bar chart:
     var options = {
      series: [{
      name: "Growth",
      data: [{
        x: [dataCresimentoChart],
        y: [dataCresimentoChart]
      }]
    }],
      chart: {
      type: 'bar',
      height: 380
    },
    fill:{
      colors:[getComputedStyle(document.documentElement).getPropertyValue('--principalColor')],
    },
    xaxis: {
      type: 'category',
      labels: {
        formatter: function(val) {
          return [dataCresimentoChart] + "%"
        }
      },
      
      group: {
        style: {
          fontSize: '10px',
          color:[getComputedStyle(document.documentElement).getPropertyValue('--principalColor')],
          fontWeight: 700,
        },
        groups: [
          { title: 'Growth', cols: 1 },
        ]
      }
    },
    tooltip: {
      x: {
        formatter: function(val) {
          return [dataCresimentoChart] + "%"
        }  
      }
    },
    };

    var chart = new ApexCharts(document.querySelector("#barCrescimentochart"), options);
    chart.render();
/*

     var options = {
      
       series: [{
         name: '',
         data: [dataCresimentoChart]
       }],
       chart: {
         height: 350,
         type: 'bar',
       },
       
       colors: [getComputedStyle(document.documentElement).getPropertyValue('--principalColor')],
       plotOptions: {
         bar: {
           borderRadius: 10,
           dataLabels: {
             position: 'top', // top, center, bottom
           },
         }
       },
       dataLabels: {
         enabled: true,
         formatter: function (val) {
           return val + "%"; // comment of mouseover event
         },
         offsetY: -20,
         style: {
           fontSize: '15px',
           colors: [getComputedStyle(document.documentElement).getPropertyValue('--principalColor')]
         }
       },
 
       xaxis: {
         categories: ["growth",], //label name
         position: 'top',
         axisBorder: {
           show: false
         },
         axisTicks: {
           show: false
         },
         crosshairs: {
           fill: {
             type: 'gradient',
             gradient: {
               colorFrom: [getComputedStyle(document.documentElement).getPropertyValue('--principalColor')],
               colorTo: [getComputedStyle(document.documentElement).getPropertyValue('--principalColor')],
               stops: [0, 100],
               opacityFrom: 0.4,
               opacityTo: 0.5,
             }
           }
         },
         tooltip: {
           enabled: true,
         }
       },
       yaxis: {
         axisBorder: {
           show: false
         },
         axisTicks: {
           show: false,
         },
         labels: {
           show: false,
           formatter: function (val) {
             return val + "%";// comment of mouseover event
           }
         }
 
       },
       title: {
 
         floating: true,
         offsetY: 330,
         align: 'center',
         style: {
           color: '#444'
         }
       }
     };
 
     var chart = new ApexCharts(document.querySelector("#barCrescimentochart"), options);
     chart.render();
 */
})

     //=========================================================================================
}