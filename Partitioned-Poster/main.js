document.title = "Partitioned Poster - A social comparison of South America"

  //COMPLETE!!!

  var nameofcountriescolumn = "paises";
  var nameof2piechartcolumndata = "populacao";
  var nameof1piechartcolumndata = "densidadepopulacional";
  var nameof1barchartcolumndata = "taxamortalidade";
  var nameof2barchartcolumndata = "taxanatalidade";
  var nameof3piechartcolumndata = "taxaalfabetizacao";
  var nameof3barchartcolumndata = "taxacrescimento";
  var nameof4barchartcolumndata = "taxademigracao"
  var urlcsv = "./data.txt"


   //=====================================================================

  class countriesTosave{

    selectedcountry;
    idSVG;
    data2pichartcountry;
    data1piechartcountry;
    data1barchart;
    data2barchart;
    data3piechart;
    data3barchart;
    data4barchart;
    lengthCSV;

    constructor(selectedcountry, idSVG){
      this.selectedcountry=selectedcountry;
      this.idSVG=idSVG;
    }
  }

  //=========================================================================================
    import piePopulacaochart from './modules/piePopulacaochart.js';
    import pieDensidadePopchart from './modules/pieDensidadePopchart.js';
    import barMortalidadechart from './modules/barMortalidadechart.js';
    import barNatalidadechart from './modules/barNatalidadechart.js';
import pieAlfabetizacaochart from './modules/pieAlfabetizacaochart.js';
import barCrescimentochart from './modules/barCrescimentochart.js';
import barMigracaochart from './modules/barMigracaochart.js';


  //==========================================================================================

   //Saves selected country and updates all charts when the page reloads.
   var selectpaiss;
   var countryToCharts;
   var idSVG;
   var idTagSVG
 
   if (localStorage.getItem('pais') == undefined) {
    countryToCharts= new countriesTosave("Brasil",'br');
   } else {
    selectpaiss = localStorage.getItem('pais');
    idTagSVG = localStorage.getItem('SVGIDCountry')
    console.log(selectpaiss)
    console.log(JSON.parse(selectpaiss))
    countryToCharts=new countriesTosave(JSON.parse(selectpaiss),JSON.parse(idTagSVG));
   }

      //select all project and reload the page to update data and styles

      var tudo = document.querySelector("#project");
      function reloadpage() {
        tudo.addEventListener("click", function () {
         localStorage.pais = JSON.stringify(selectpaiss)
         localStorage.SVGIDCountry = JSON.stringify(idSVG);
          location.reload();
        });
      }
  
      //set opacity to the selected country on map
   document.getElementById(countryToCharts.idSVG).style.opacity=0.5


   //select the country with the interactive map:

  document.getElementById('br').addEventListener('click', ()=>{
    console.log("Brasil")
    selectpaiss="Brasil";
    idSVG='br'
    reloadpage();
  })
  document.getElementById('pe').addEventListener('click', ()=>{
    selectpaiss="Peru";
    console.log("Peru")
    idSVG='pe'
    reloadpage();
  })
  document.getElementById('ve').addEventListener('click', ()=>{
    selectpaiss="Venezuela";
    console.log("Venezuela")
    idSVG='ve';
    reloadpage();
  })
  document.getElementById('bo').addEventListener('click', ()=>{
    selectpaiss="Bolivia";
    console.log("Bolivia")
    idSVG='bo'
    reloadpage();
  })
  document.getElementById('co').addEventListener('click', ()=>{
    selectpaiss="Colombia";
    console.log("Colombia")
    idSVG='co'
    reloadpage();
  })
  document.getElementById('sr').addEventListener('click', ()=>{
    selectpaiss="Suriname";
    console.log("Suriname")
    idSVG='sr'
    reloadpage();
  })
  document.getElementById('ar').addEventListener('click', ()=>{
    selectpaiss="Argentina";
    console.log("Argentina")
    idSVG='ar'
    reloadpage();
  })
  document.getElementById('py').addEventListener('click', ()=>{
    selectpaiss="Paraguai";
    console.log("Paraguai")
    idSVG='py'
    reloadpage();
  })
  document.getElementById('uy').addEventListener('click', ()=>{
    selectpaiss="Uruguai";
    console.log("Uruguai")
    idSVG='uy'
    reloadpage();
  })
  document.getElementById('cl').addEventListener('click', ()=>{
    selectpaiss="Chile";
    console.log("Chile")
    idSVG='cl'
    reloadpage();
  })
  document.getElementById('ec').addEventListener('click', ()=>{
    selectpaiss="Equador";
    console.log("Equador")
    idSVG='ec'
    reloadpage();
  })
  document.getElementById('gy').addEventListener('click', ()=>{
    selectpaiss="Guiana";
    console.log("Guiana")
    idSVG='gy'
    reloadpage();
  })

  
  //length of csv
  d3.csv(urlcsv, rows => countryToCharts.lengthCSV = (rows.length - 1))

  //reading csv with d3.js
  d3.csv(urlcsv, function (data) {
    var numberofcountry = 0;


    //find the number of selected country to get data of csv;
    for (numberofcountry = 0; numberofcountry <= countryToCharts.lengthCSV; numberofcountry++) {
      if (data[numberofcountry][nameofcountriescolumn] == countryToCharts.selectedcountry) {
        break;
      }
    }

   // generateMap();

    piePopulacaochart(countryToCharts.data2pichartcountry,nameof2piechartcolumndata,urlcsv,numberofcountry, countryToCharts.lengthCSV,countryToCharts.selectedcountry);
  pieDensidadePopchart(countryToCharts.data1pichartcountry,nameof1piechartcolumndata,urlcsv,numberofcountry, countryToCharts.lengthCSV,countryToCharts.selectedcountry,nameofcountriescolumn);
  barMortalidadechart(countryToCharts.data1barchart,nameof1barchartcolumndata,urlcsv,numberofcountry, countryToCharts.lengthCSV,countryToCharts.selectedcountry,nameofcountriescolumn);
  barNatalidadechart(countryToCharts.data2barchart,nameof2barchartcolumndata,urlcsv,numberofcountry, countryToCharts.lengthCSV,countryToCharts.selectedcountry,nameofcountriescolumn);
  pieAlfabetizacaochart(countryToCharts.data3piechart,nameof3piechartcolumndata,urlcsv,numberofcountry, countryToCharts.lengthCSV,countryToCharts.selectedcountry,nameofcountriescolumn);
  barCrescimentochart(countryToCharts.data3barchart,nameof3barchartcolumndata,urlcsv,numberofcountry, countryToCharts.lengthCSV,countryToCharts.selectedcountry,nameofcountriescolumn);
  barMigracaochart(countryToCharts.data4barchart,nameof4barchartcolumndata,urlcsv,numberofcountry, countryToCharts.lengthCSV,countryToCharts.selectedcountry,nameofcountriescolumn);

    //=========================================================================================

  })