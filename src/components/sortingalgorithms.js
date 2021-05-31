import printMessage from "./printmessgae.js"
import swapDiv from "./swapdivs.js"
import helperFunctions from './helper.js'

function makeArray(){
  const element = document.getElementById('bar-container').childNodes;
  // console.log(element);
  let arr = [0];
  for(let i = 0 ;i<element.length;i++){
      element[i].setAttribute("id",i+1);
      let val = element[i].getAttribute("style").split(" ");
      val = val[1].split("p");
      arr.push(Number(val[0]));
  }
  return arr;
}

async function bubbleSort(){
  let arr = makeArray();
  // disableButtons();
  // console.log(arr);
  printMessage("Bubble sort Runninig...");
  var i, j;
  for (i = 0; i < arr.length-1; i++)
  {
    for (j = 0; j < arr.length-i-1; j++)
    {
      if (arr[j] > arr[j+1])
      {
        helperFunctions.markActive(j);
        helperFunctions.markActive(j+1);

        await swapDiv(j,j+1);
        var t = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = t;

        helperFunctions.unmarkActive(j);
        helperFunctions.unmarkActive(j+1);
      }
    }
    helperFunctions.markSorted(arr.length-i-1);
  }
  printMessage("Sorted by bubble sort !!")
}

const algos = {
  bubbleSort
};

export default algos;