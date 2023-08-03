
import barChart from './modules/chart.js'
import createAnottation from './modules/Annotations/createAnnotations.js'
import generateAlreadyCreatedTextBox from './modules/Annotations/annotations.js'
import saveAnnotations from './modules/Annotations/saveAnnotations.js';
import deleteAnnotation from './modules/Annotations/deleteAnnotation.js';



//=====================================================================


class VisualizationStorage {
  choose;
  nameofcountriescolumn;
  namefirstcolumn;
  namesecondcolumn;
  namethirdcolumn;
  namefourthcolumn;
  namefifthcolumn;
  namesixthcolumn;
  nameseventhcolumn;
  numberofcolumns;
  urlcsv;
  generateInputs;
  annotationInput;
  boolAnnotation;
  deleteList;
  buttonToDelete;
  listToDeleteSize;
  numberToDynamicId;

  constructor(choose, nameofcountriescolumn, namefirstcolumn, namesecondcolumn, namethirdcolumn, namefourthcolumn, namefifthcolumn, namesixthcolumn, nameseventhcolumn, numberofcolumns, urlcsv, boolAnnotation) {
    this.choose = choose;
    this.nameofcountriescolumn = nameofcountriescolumn;
    this.namefirstcolumn = namefirstcolumn;
    this.namesecondcolumn = namesecondcolumn;
    this.namethirdcolumn = namethirdcolumn;
    this.namefourthcolumn = namefourthcolumn;
    this.namefifthcolumn = namefifthcolumn;
    this.namesixthcolumn = namesixthcolumn;
    this.nameseventhcolumn = nameseventhcolumn;
    this.numberofcolumns = numberofcolumns;
    this.urlcsv = urlcsv;
    this.generateInputs = new Array();
    this.annotationInput = new Array();
    this.deleteList = new Array();
    this.boolAnnotation = boolAnnotation;
    this.listToDeleteSize=0;
    this.buttonToDelete =  new Array();
    this.numberToDynamicId=0;
  }
}


let AnnotatedChart;

//object to storage the section info;
inicialization();


function inicialization() {
  //getting number of data type saved in localstorage
  AnnotatedChart = localStorage.getItem("chartSession")
  console.log(AnnotatedChart + " annotatedChart")
  AnnotatedChart = JSON.parse(AnnotatedChart)
  console.log(AnnotatedChart + " annotatedChart")
  if (AnnotatedChart == null) {
    AnnotatedChart = new VisualizationStorage(0, "paises", "populacao", "densidadepopulacional", "taxamortalidade",
      "taxanatalidade", "taxaalfabetizacao", "taxacrescimento", "taxademigracao", 7, "https://raw.githubusercontent.com/dubernardon/Partitioned-poster-of-south-america-data/main/data", false);
  } else {
    AnnotatedChart.listToDeleteSize = 0;
    AnnotatedChart.deleteList = new Array();
    if(AnnotatedChart.annotationInput==0){
      AnnotatedChart.numberToDynamicId=0;
    }
  }
}

console.log(AnnotatedChart.choose + "choose")

document.getElementById("btnChoose0").addEventListener('click', () => {
  AnnotatedChart.choose = 0;
})
document.getElementById("btnChoose1").addEventListener('click', () => {
  AnnotatedChart.choose = 1;
})
document.getElementById("btnChoose2").addEventListener('click', () => {
  AnnotatedChart.choose = 2;
})
document.getElementById("btnChoose3").addEventListener('click', () => {
  AnnotatedChart.choose = 3;
})
document.getElementById("btnChoose4").addEventListener('click', () => {
  AnnotatedChart.choose = 4;
})
document.getElementById("btnChoose5").addEventListener('click', () => {
  AnnotatedChart.choose = 5;
})
document.getElementById("btnChoose6").addEventListener('click', () => {
  AnnotatedChart.choose = 6;
})

document.getElementById('saveAnottationButton').addEventListener('click', () => {
  AnnotatedChart = saveAnnotations(AnnotatedChart);
});


//reload page and save info
document.getElementById('btnReloadPage').addEventListener('click', () => {
  AnnotatedChart.generateInputs = new Array();
  localStorage.chartSession = JSON.stringify(AnnotatedChart);
  location.reload();
})



//chart:
barChart(AnnotatedChart)
//generating the created annotations
generateAlreadyCreatedTextBox(AnnotatedChart);
AnnotatedChart = saveAnnotations(AnnotatedChart);




//CREATE ANNOTATION:
let annotationPermission = false;

document.getElementById('createAnottationButton').addEventListener('click', () => {
  annotationPermission = true;
  AnnotatedChart = createAnottation(annotationPermission, AnnotatedChart);
})



//buttons explanation:

//save annotation:

var divExplanation = document.createElement('div');
divExplanation.style.zIndex = '10';
divExplanation.style.width = '200px';
divExplanation.style.height = '100px';
divExplanation.style.color = 'black';
divExplanation.style.backgroundColor = 'var(--explanationBackgroudColor)';
divExplanation.style.borderRadius = '20px'
divExplanation.style.marginLeft = '245px'
divExplanation.style.marginTop = '280px'
divExplanation.style.textAlign = 'center';
divExplanation.style.display = 'none'
divExplanation.style.position = 'absolute';
divExplanation.id = 'explanationSaveAnnotation'
var textToExplanation = document.createTextNode('Save annotations (annotations are automatically saved when switching data to the chart also)')
divExplanation.appendChild(textToExplanation);
document.getElementById('functionsAnnotations').append(divExplanation);



document.getElementById('saveAnottationButton').addEventListener('mouseover', () => {
  document.getElementById('explanationSaveAnnotation').style.display = 'block';
})
document.getElementById('saveAnottationButton').addEventListener('mouseout', () => {
  document.getElementById('explanationSaveAnnotation').style.display = 'none';
})


//create annotation:

var divExplanation = document.createElement('div');
divExplanation.style.zIndex = '10';
divExplanation.style.width = '300px';
divExplanation.style.height = '100px';
divExplanation.style.color = 'black';
divExplanation.style.backgroundColor = 'var(--explanationBackgroudColor)';
divExplanation.style.borderRadius = '20px'
divExplanation.style.marginLeft = '160px'
divExplanation.style.marginTop = '280px'
divExplanation.style.textAlign = 'center';
divExplanation.style.display = 'none'
divExplanation.style.position = 'absolute'
divExplanation.id = 'explanationCreateAnnotation'
var textToExplanation = document.createTextNode('Create annotations (annotations are created by dragging and dropping the mouse across the screen, forming a rectangle)')
divExplanation.appendChild(textToExplanation);


document.getElementById('functionsAnnotations').append(divExplanation);

document.getElementById('createAnottationButton').addEventListener('mouseover', () => {
  document.getElementById('explanationCreateAnnotation').style.display = 'block';
})
document.getElementById('createAnottationButton').addEventListener('mouseout', () => {
  document.getElementById('explanationCreateAnnotation').style.display = 'none';
})

document.getElementById('deleteAnnotationButton').addEventListener('click', () => {
  AnnotatedChart = deleteAnnotation(AnnotatedChart);
  AnnotatedChart.generateInputs = new Array();
  localStorage.chartSession = JSON.stringify(AnnotatedChart);
  location.reload();
})

//select data:

var divExplanation = document.createElement('div');
divExplanation.style.zIndex = '10';
divExplanation.style.width = '200px';
divExplanation.style.height = '100px';
divExplanation.style.color = 'black';
divExplanation.style.backgroundColor = 'var(--explanationBackgroudColor)';
divExplanation.style.borderRadius = '20px'
divExplanation.style.marginLeft = '265px'
divExplanation.style.marginTop = '395px'
divExplanation.style.textAlign = 'center';
divExplanation.style.display = 'none'
divExplanation.style.position = 'absolute'
divExplanation.id = 'explanationConfirmData'
var textToExplanation = document.createTextNode('Select an annotated chart data type and click here to change chart.')
divExplanation.appendChild(textToExplanation);


document.getElementById('functionsAnnotations').append(divExplanation);

document.getElementById('btnReloadPage').addEventListener('mouseover', () => {
  document.getElementById('explanationConfirmData').style.display = 'block';
})
document.getElementById('btnReloadPage').addEventListener('mouseout', () => {
  document.getElementById('explanationConfirmData').style.display = 'none';
})

//delete annotation:

var divExplanation = document.createElement('div');
divExplanation.style.zIndex = '10';
divExplanation.style.width = '200px';
divExplanation.style.height = '100px';
divExplanation.style.color = 'black';
divExplanation.style.backgroundColor = 'var(--explanationBackgroudColor)';
divExplanation.style.borderRadius = '20px'
divExplanation.style.marginLeft = '255px'
divExplanation.style.marginTop = '550px'
divExplanation.style.textAlign = 'center';
divExplanation.style.display = 'none'
divExplanation.style.position = 'absolute'
divExplanation.id = 'explanationDeleteAnnotation'

var textToExplanation = document.createTextNode('Select the annotation you want to delete and click here.')
divExplanation.appendChild(textToExplanation);


document.getElementById('functionsAnnotations').append(divExplanation);

document.getElementById('deleteAnnotationButton').addEventListener('mouseover', () => {
  document.getElementById('explanationDeleteAnnotation').style.display = 'block';
})
document.getElementById('deleteAnnotationButton').addEventListener('mouseout', () => {
  document.getElementById('explanationDeleteAnnotation').style.display = 'none';
})



var circleBlue = document.getElementById('colorBlue').getContext("2d");
circleBlue.fillStyle = '#8dc3e8'
circleBlue.beginPath();
circleBlue.arc(35, 35, 30, 0, Math.PI * 2, true);
circleBlue.closePath();
circleBlue.fill();




var circleRed = document.getElementById('colorRed').getContext("2d");
circleRed.fillStyle = 'red';
circleRed.beginPath();
circleRed.arc(35, 35, 30, 0, Math.PI * 2, true);
circleRed.closePath();
circleRed.fill();


var circleGreen = document.getElementById('colorGreen').getContext("2d");
circleGreen.fillStyle = 'green';
circleGreen.beginPath();
circleGreen.arc(35, 35, 30, 0, Math.PI * 2, true);
circleGreen.closePath();
circleGreen.fill();



var circleYellow = document.getElementById('colorYellow').getContext("2d");
circleYellow.fillStyle = 'yellow';
circleYellow.beginPath();
circleYellow.arc(35, 35, 30, 0, Math.PI * 2, true);
circleYellow.closePath();
circleYellow.fill();


var circlePink = document.getElementById('colorPink').getContext("2d");
circlePink.fillStyle = 'pink';
circlePink.beginPath();
circlePink.arc(35, 35, 30, 0, Math.PI * 2, true);
circlePink.closePath();
circlePink.fill();


var circleOrange = document.getElementById('colorOrange').getContext("2d");
circleOrange.fillStyle = 'orange'
circleOrange.beginPath();
circleOrange.arc(35, 35, 30, 0, Math.PI * 2, true);
circleOrange.closePath();
circleOrange.fill();
