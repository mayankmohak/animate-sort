import printMessage from "./printmessgae.js"
import helperFunctions from './helper.js'

const makeArray = () => {
  const element = document.getElementById('bar-container').childNodes;
  let arr = [];
  for(let i = 0 ;i<element.length;i++){
    element[i].setAttribute("id",i);
    let val = element[i].getAttribute("style").split(" ");
    val = val[1].split("p");
    arr.push(Number(val[0]));
  }
  return arr;
}

let stop = true;
const bubbleSort = async () =>{
  stop = !stop;

  document.getElementById('sort-button').innerHTML="stop";

  let arr = makeArray();
  
  printMessage("Bubble sort Runninig...");
  var i, j;
  for (i = 0; i < arr.length-1; i++)
  {
    for (j = 0; j < arr.length-i-1; j++)
    {
      if(stop===true){
        document.getElementById('sort-button').innerHTML="Sort";
        printMessage("Stopped bubble sort !!")
        return;
      }

      await helperFunctions.markChecking(j);
      await helperFunctions.markChecking(j+1);
      if (arr[j] > arr[j+1])
      {

        await helperFunctions.markActive(j);
        await helperFunctions.markActive(j+1);

        helperFunctions.swapDiv(j,j+1);
        var t = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = t;
      }
      helperFunctions.unmarkActive(j);
      helperFunctions.unmarkActive(j+1);
    }
    helperFunctions.markSorted(arr.length-i-1);
  }
  /* forcing mark sorted at 1st element as loop runs till arr.length-2 */
  helperFunctions.markSorted('0');

  printMessage("Sorted by bubble sort !!");
  
  document.getElementById('sort-button').innerHTML="Sorted";

  stop = !stop;
}

const algos = {
  bubbleSort
};

export default algos;