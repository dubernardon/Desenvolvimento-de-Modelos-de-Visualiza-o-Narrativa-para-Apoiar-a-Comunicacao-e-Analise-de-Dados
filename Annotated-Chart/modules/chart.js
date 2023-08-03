  //set witch column you want an annotation (array position=datatype number (0-6) / value in array: collumn of chart (1-13) )
  //if wouldn't like a dotted column, set with null;
  var dottedcolumn = new Array(7);
  dottedcolumn[0] = 1;
  dottedcolumn[1] = 1;
  dottedcolumn[2] = 11;
  dottedcolumn[3] = 10;
  dottedcolumn[4] = 5;
  dottedcolumn[5] = 13;
  dottedcolumn[6] = 13;


export default function barChart(AnnotatedChart){


  var maxline;
  d3.csv(AnnotatedChart.urlcsv, rows => maxline = (rows.length - 1))

  //reading data
  d3.csv("data.csv", function (data) {


    //set dotted column position:
    //column: add 38px for each column -> 1°column=100px, 2° column=138px, 3° column=176px...;
    var annotationpositionx;
    var countries = new Array(maxline);
    var columnchoosed;
    var textannottation;
    var chartTitle;
    let titleannotation;

    console.log(AnnotatedChart.choose + " Annot.choose")

    //set the type of data selected to the chart
    switch (AnnotatedChart.choose) {

      case 0: {
        columnchoosed = AnnotatedChart.namefirstcolumn;
        annotationpositionx = 40;
        titleannotation = "Brazil Population"
        textannottation = "Brazil has the largest population in South America, but its population density is the 5th largest";
        chartTitle="Population (millions)"
        break;
      }
      case 1: {
        columnchoosed = AnnotatedChart.namesecondcolumn;
        titleannotation = "Ecuador Density"
        textannottation = "Ecuador has the highest density, but its territory is one of the smallest in South America"
        chartTitle="Population density"
        break;
      }
      case 2: {
        columnchoosed = AnnotatedChart.namethirdcolumn;
        titleannotation = "Uruguayan mortality"
        textannottation = "Uruguay has the highest mortality rate, but it is not the most violent country, which is Ecuador"
        chartTitle="Mortality rate"
        break;
      }
      case 3: {
        columnchoosed = AnnotatedChart.namefourthcolumn;
        titleannotation = "Bolivia birth rate"
        textannottation = "Brazil has the largest population, but Bolivia has the highest birth rate"
        chartTitle="Birth rate"
        break;
      }
      case 4: {
        columnchoosed = AnnotatedChart.namefifthcolumn;
        titleannotation = "Brazil literacy"
        textannottation = "Brazil is one of the best socioeconomically, but the literacy rate is one of the worst";
        chartTitle="Literacy rate"
        break;
      }
      case 5: {
        columnchoosed = AnnotatedChart.namesixthcolumn;
        titleannotation = "Growth in Uruguay"
        textannottation = "Uruguay has the highest mortality and lowest population growth in America"
        chartTitle= "Growth rate"
        break;
      }
      case 6: {
        columnchoosed = AnnotatedChart.nameseventhcolumn;
        titleannotation = "Venezuela migration"
        textannottation = "Venezuela's political and economic condition is the worst in Latin America, thus migration is the most negative"
        chartTitle="Migration rate"
        break;
      }
    }


    var datachoosed = new Array(maxline);
    var datachooseaux = new Array(maxline)
    var countriesaux = new Array(maxline)

    console.log(columnchoosed + " columnchoosed")

    //setting data in an array to the chart
    for (let i = 0; i <= maxline; i++) {
      datachoosed[i] = data[i][columnchoosed];
      datachooseaux[i] = data[i][columnchoosed];
      countriesaux[i] = data[i][AnnotatedChart.nameofcountriescolumn];
    }

    var countriestoselect = new Array(maxline);
    for (let i = 0; i <= maxline; i++) {
      countriestoselect[i] = data[i][AnnotatedChart.nameofcountriescolumn];
    }

    var datachoosedsort = datachoosed;

    var countries = new Array(maxline);

    datachoosedsort.sort((a, b) => b - a);

    //setting data and country correctly (sorting)
let countrieaux
    function searchCountry(i) {
      for (let j = 0; j <= maxline; j++) {
        if (datachoosed[i] == datachooseaux[j]) {
          countrieaux = countriesaux[j];
          countriesaux.splice(j, 1);
          datachooseaux.splice(j, 1);
          return countrieaux;
        }
      }
    }
    for (var v = 0; v <= maxline; v++) {
      countries[v] = searchCountry(v);
    }

    //=================================================================================

    //first position annotation

    var deslocatedpixelslength = datachoosed[0].length;
    var negativevaluestest;
    deslocatedpixelslength--;

    //exceptions:
    
    for (let i = 0; i <= datachoosed.length; i++) {
      if (datachoosed[i] < 0) {
        negativevaluestest = true;
        break;
      } else {
        negativevaluestest = false;
      }
    }

    if (negativevaluestest) {
      deslocatedpixelslength = deslocatedpixelslength - 3;
    }

    if (datachoosed[AnnotatedChart.choose] == undefined) {
      document.getElementById('annotation1').style.opacity = 0;
    }

    //5px for each number

    var annotationxpositionx = 25 + 45 * (dottedcolumn[AnnotatedChart.choose] - 1) + 5 * deslocatedpixelslength;
    var annotationxpositionwritining;

    if (annotationxpositionx > 282.5) {
      annotationxpositionwritining = -270
    }
    else {
      annotationxpositionwritining = 270;
    }

    if (annotationxpositionx < 282.5 + 50 && annotationxpositionx > 282.5 - 50) {
      annotationxpositionwritining = 0;
    }

    //


    const annotations = [
      {
        note: {
          label: textannottation,
          title: titleannotation
        },
        connector: {
          end: "dot",        // Can be none, or arrow or dot
          type: "line",      // ?? don't know what it does
          lineType: "vertical",    // ?? don't know what it does
          endScale: 5     // dot size[]
        },
        color: ["grey"],
        x: annotationxpositionx,
        y: 460,
        dy: -250,
        dx: annotationxpositionwritining
      }
    ]



    // Add annotation to the chart
    const makeAnnotations = d3.annotation()
      .annotations(annotations)
    d3.select("#annotation1")
      .append("g")
      .call(makeAnnotations)


    // ==== CHANGE STYLE ATTRIBUTE ====== //
    d3.select("#annotation1").selectAll(".connector")
      .attr('stroke', "black")
      .style("stroke-dasharray", ("3,3"))
    d3.select("#annotation1").selectAll(".connector-end")
      .attr('stroke', "black")
      .attr('fill', "black")

    //=================================================================================

    //chart

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [countries[0], countries[1], countries[2], countries[3], countries[4], countries[5], countries[6],
        countries[7], countries[8], countries[9], countries[10], countries[11], countries[12]],
        datasets: [{
          label: chartTitle,
          data: [datachoosed[0], datachoosed[1], datachoosed[2], datachoosed[3], datachoosed[4], datachoosed[5], datachoosed[6], datachoosed[7], datachoosed[8], datachoosed[9], datachoosed[10], datachoosed[11], datachoosed[12]],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  })

}
