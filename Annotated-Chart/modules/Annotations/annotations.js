export default function generateAlreadyCreatedTextBox(AnnotatedChart){

  let divToAppedAnnotation = document.querySelector('#appendUserAnnotations');
  
  //generating inputs of other sessions to the page;
     for (let i = 0; i < AnnotatedChart.annotationInput.length; i++) {
     let newInput = document.createElement('input');
       newInput.style.backgroundColor = AnnotatedChart.annotationInput[i].backgroundColor;
       newInput.style.id = AnnotatedChart.annotationInput[i].id;
       newInput.style.opacity = AnnotatedChart.annotationInput[i].opacity;
       newInput.style.width = AnnotatedChart.annotationInput[i].width + "px";
       newInput.style.height = AnnotatedChart.annotationInput[i].height + "px";
       newInput.style.position = AnnotatedChart.annotationInput[i].position;
       newInput.style.marginLeft = AnnotatedChart.annotationInput[i].marginLeft;
       newInput.style.marginTop = AnnotatedChart.annotationInput[i].marginTop;
       newInput.style.zIndex = AnnotatedChart.annotationInput[i].zIndex;
       newInput.value = AnnotatedChart.annotationInput[i].text;
       newInput.style.display = "none"
       console.log(AnnotatedChart.annotationInput[i].text + "no already")
       newInput.value = AnnotatedChart.annotationInput[i].text;
       newInput.style.textAlign = 'center';
       newInput.style.color = 'black';
       divToAppedAnnotation.append(newInput);  
       //only generate inputs of the correct page
       if (AnnotatedChart.annotationInput[i].typedata == AnnotatedChart.choose) {
         newInput.style.display = "block"
       }

       AnnotatedChart.generateInputs.push(newInput);
     }
  

   return AnnotatedChart;
  }



