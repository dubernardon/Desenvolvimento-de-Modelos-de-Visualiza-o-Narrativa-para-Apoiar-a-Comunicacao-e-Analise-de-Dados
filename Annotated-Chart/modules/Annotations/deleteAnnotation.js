export default function deleteAnnotation(AnnotatedChart) {


  //delete of inputs objects each selected input
  var confirmation = confirm("Confirmar exclusão:");

  if (confirmation == true) {
    console.log(AnnotatedChart.annotationInput);
    for (let j = 0; j < AnnotatedChart.buttonToDelete.length; j++) {
      console.log("POS buttonTodelete: " + AnnotatedChart.buttonToDelete[j])
      searchTodelete(AnnotatedChart.buttonToDelete[j]);
    }
  }


  function searchTodelete(toDelete) {

    for (let i = 0; i < AnnotatedChart.deleteList.length; i++) {

      console.log('Annot: ' + AnnotatedChart.annotationInput)
        console.log('Gen: ' + AnnotatedChart.generateInputs)
      console.log(toDelete + " todelete");
     // console.log(AnnotatedChart.deleteList[i] + " array")
      if (toDelete == AnnotatedChart.deleteList[i]) {
        console.log("tirei id: " + toDelete);
        console.log("Posição: " + i);
        AnnotatedChart.annotationInput.splice(i, 1);
        AnnotatedChart.generateInputs.splice(i, 1);
      }
    }
  }



  console.log(AnnotatedChart.deleteList);
  console.log(AnnotatedChart.annotationInput);
  AnnotatedChart.buttonToDelete = new Array()
  var confirmation = confirm("Confirmar exclusão:");
  return AnnotatedChart;

}