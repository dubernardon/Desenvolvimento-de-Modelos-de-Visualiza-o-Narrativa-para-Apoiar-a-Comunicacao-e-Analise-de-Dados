export default function barMigracaochart( barMigracaoChart,columnNameCSV,urlcsv,numberofcountry,  lengthCSV, selectedcountry,nameofcountriescolumn){
    d3.csv(urlcsv, function (data) { 

        // 4 bar chart -> horizontal bar chart

    var maxbarMigracaoChart = 0, maxdatanumber4barchart = 0, nameof4barchartmaxdata, maxbarMigracaoChart = 0, minimumbarMigracaoChart = data[0][columnNameCSV], comment4barchart, indexOfMaxData;


    barMigracaoChart = data[numberofcountry][columnNameCSV];

    var barMigracaoChartArray=new Array();

    for(var v = 0; v <= lengthCSV; v++){
      barMigracaoChartArray[v]=data[v][columnNameCSV];

      if(barMigracaoChartArray[v]>maxbarMigracaoChart){
        indexOfMaxData=v;
      }
    }

    //max and minimum values

    maxbarMigracaoChart=barMigracaoChartArray[indexOfMaxData];
    nameof4barchartmaxdata=data[indexOfMaxData][nameofcountriescolumn];
    console.log(maxbarMigracaoChart);

    //bar chart comments

    if (barMigracaoChart > 0) {
      comment4barchart = " is one of South America countries that most people migrate a year" //change comments
    }
    if (barMigracaoChart < 0) {
      comment4barchart = " is one of South America countries that less people migrate per year"
    }
    if (barMigracaoChart == 0) {
      comment4barchart = " is one of South America countries where people practically don't migrate every year"
    }

    document.getElementById('barMigracaoChartTitle').innerHTML=(selectedcountry + " immigration");


    const textMigracaoChart = document.getElementById("textMigracaoChart");
    textMigracaoChart.innerHTML = selectedcountry + " " + comment4barchart; //change comments

    //bar chart:

    var dom = document.getElementById('barMigracaochart');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    const labelRight = {
  position: 'right'

};
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  color:[
    getComputedStyle(document.documentElement).getPropertyValue('--principalColor'),
      getComputedStyle(document.documentElement).getPropertyValue('--secondaryColor')
  ],
  grid: {
    top: 70,
    bottom: 70,

  },
  xAxis: {
    type: 'value',
    position: 'top',
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    }
  },
  yAxis: {
    type: 'category',
    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    data: [
      selectedcountry,
      nameof4barchartmaxdata  + "(Major immigration)"
    ]
  },
  series: [
    {
      name: 'Immigration rate:',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        formatter: '{b}'
      },
      data: [
        { value: barMigracaoChart, label: labelRight },
        { value: maxbarMigracaoChart, label: labelRight },
      ]
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);

    
    })
}