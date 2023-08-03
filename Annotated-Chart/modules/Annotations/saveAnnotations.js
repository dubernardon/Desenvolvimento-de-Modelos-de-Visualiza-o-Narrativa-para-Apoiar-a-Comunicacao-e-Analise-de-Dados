export default function saveAnnotations(AnnotatedChart){
      //save all input values in the inputs objects

    //save all comments text
  
    for (let i = 0; i < AnnotatedChart.generateInputs.length; i++) {
      let text = AnnotatedChart.generateInputs[i].value;
      console.log(text + " text")
      console.log("aqui")
      //setting to the correct annotation box
      AnnotatedChart.annotationInput[(AnnotatedChart.annotationInput.length - AnnotatedChart.generateInputs.length) + i ].text = text;
    }
  

 //generating a dynamic list of setted inputs to delete

console.log(AnnotatedChart.deleteList.length);
console.log(AnnotatedChart.annotationInput.length);
var listAppend = document.getElementById('dropdown-delete');


  for (let i = AnnotatedChart.listToDeleteSize; i < AnnotatedChart.annotationInput.length; i++) {
    var list = document.createElement('li');
    var text = document.createTextNode(AnnotatedChart.annotationInput[i].text + " ");
    var buttonDelete = document.createElement('button');
    buttonDelete.style.width = "25px";
    buttonDelete.style.height = "25px";
    buttonDelete.style.color = "black";
    buttonDelete.style.textAlign = "center";
    buttonDelete.innerHTML = "X";
    buttonDelete.className = 'buttonDelete';
    buttonDelete.id = 'button' + AnnotatedChart.numberToDynamicId;
    AnnotatedChart.numberToDynamicId++;
    AnnotatedChart.deleteList.push(buttonDelete.id)
    console.log(AnnotatedChart.deleteList)
    buttonDelete.onclick = function returnButtonId() {
      AnnotatedChart.buttonToDelete.push(this.id);
     console.log(this.id);
     console.log(AnnotatedChart.buttonToDelete.length)
      this.style.color = "red"
     }
    list.appendChild(text);
    list.appendChild(buttonDelete);
    listAppend.append(list);
    AnnotatedChart.listToDeleteSize++;
  }
 
return AnnotatedChart;
}