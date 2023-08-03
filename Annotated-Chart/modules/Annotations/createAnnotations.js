
class annotationInputObject {
    backgroundColor;
    id;
    opacity;
    width;
    height;
    position;
    marginLeft;
    marginTop;
    zIndex;
    typedata;
    text;

constructor(backgroundColor,id,opacity,width,height,position,marginLeft,marginTop,zIndex,typedata,text){
    this.backgroundColor=backgroundColor;
    this.id=id;
    this.opacity=opacity;
    this.width=width;
    this.height=height;
    this.position=position;
    this.marginLeft=marginLeft;
    this.marginTop=marginTop;
    this.zIndex=zIndex;
    this.typedata=typedata;
    this.text=text;
}

  }



let divToAppedAnnotation = document.querySelector('#appendUserAnnotations');
let colorToAnnotation='#8dc3e8';
 //Annotations color:

 function removeSelectedColor(){

    var SelectedColors=[...document.querySelectorAll(".selectedColor")]
    SelectedColors.map((e) => {
      console.log("removendo");
      e.classList.remove(".selectedColor");
    })
  }

  document.getElementById('colorBlue').addEventListener('click', () => {
    colorToAnnotation='#8dc3e8';
    document.getElementById('colorBlue').classList.toggle('selectedColor');
  })

  document.getElementById('colorRed').addEventListener('click', () => {
    colorToAnnotation='red';
    removeSelectedColor();
    document.getElementById('colorRed').classList.toggle('selectedColor');
  })

  document.getElementById('colorGreen').addEventListener('click', () => {
    colorToAnnotation='green';
    removeSelectedColor();
    document.getElementById('colorGreen').classList.toggle('selectedColor');
  })

  document.getElementById('colorYellow').addEventListener('click', () => {
    colorToAnnotation='yellow';
    removeSelectedColor();
    document.getElementById('colorYellow').classList.toggle('selectedColor');
  })

  document.getElementById('colorPink').addEventListener('click', () => {
    colorToAnnotation='pink';
    removeSelectedColor();
    document.getElementById('colorPink').classList.toggle('selectedColor');
  })

  document.getElementById('colorOrange').addEventListener('click', () => {
    colorToAnnotation='orange';
    removeSelectedColor();
    document.getElementById('colorOrange').classList.toggle('selectedColor');
  })


  document.getElementById('saveAnottationButton').addEventListener('click', ()=> {

  })

  let generateInputs = new Array();
let annotatedChartToSaveText;

export default function createAnottation(annotationPermission,AnnotatedChart){


    var div = document.getElementById('div'), x1 = 0, y1 = 0, x2 = 0, y2 = 0, x3, x4, y3, y4;

    function reCalc() { //This will restyle the div
      x3 = Math.min(x1, x2); //Smaller X
      x4 = Math.max(x1, x2); //Larger X
      y3 = Math.min(y1, y2); //Smaller Y
      y4 = Math.max(y1, y2); //Larger Y
      div.style.left = x3 + 'px';
      div.style.top = y3 + 'px';
      div.style.width = x4 - x3 + 'px';
      div.style.height = y4 - y3 + 'px';
    };
    
    onmousedown = function (e) {
      div.hidden = 0; //Unhide the div
      x1 = e.clientX; //Set the initial X
      y1 = e.clientY; //Set the initial Y
      if (annotationPermission) {
        reCalc();
      }
    };
    onmousemove = function (e) {
      x2 = e.clientX; //Update the current position X
      y2 = e.clientY; //Update the current position Y
      if (annotationPermission) {
        reCalc();
      }
    };
    onmouseup = function (e) {
      div.hidden = 1; //Hide the div
    
      if (annotationPermission) {
        getSquare(x3, y3, x4, y4);
      }
    
    }
    
    //Creating a annotation space:
    
    function getSquare(x3, y3, x4, y4) {
      var colorBackground, opacityvalue, marginLeftValue, marginTopValue, zIndexValue, positionValue;
      var widthValue = x4 - x3;
      var heightValue = y4 - y3;
    
    
      //creating a input with recalc() numbers
      var newInput = document.createElement('input');
      newInput.id = "dynamic" + AnnotatedChart.numberToDynamicId;
      AnnotatedChart.numberToDynamicId++;
      divToAppedAnnotation.append(newInput);
      newInput.style.backgroundColor = colorToAnnotation;
      colorBackground = colorToAnnotation;
      newInput.style.opacity = '0.5';
      opacityvalue = '0.5';
      newInput.style.width = widthValue + 'px';
      newInput.style.height = heightValue + 'px';
      newInput.style.position = 'absolute';
      positionValue = 'absolute';
      newInput.style.marginLeft = x1 + 'px';
      marginLeftValue = x1 + 'px';
      newInput.style.marginTop = y1 + 'px';
      marginTopValue = y1 + 'px';
      newInput.style.textAlign = 'center';
      newInput.style.color = 'black';
      newInput.addEventListener('input',()=>{
        console.log("input change")
      })
      newInput.style.zIndex = '7';
      newInput.disabled = false;
      newInput.value = "adicionar anotação";
      zIndexValue = '7';
      annotationPermission = false;

      //setting values in annotationInputObject;

      let Annotation = new annotationInputObject(colorBackground,"dynamic",opacityvalue,widthValue,heightValue,positionValue,marginLeftValue,marginTopValue,zIndexValue, AnnotatedChart.choose,"adicionar anotação")
    
      AnnotatedChart.generateInputs.push(newInput);
      console.log(generateInputs)
      AnnotatedChart.annotationInput.push(Annotation);

      console.log(newInput.value + "value no create");

    };

  return AnnotatedChart;
}




//vai dar errado pq precisa salvar ttodos os inputs que podem ser alterados
