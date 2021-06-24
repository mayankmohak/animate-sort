import printMessage from "./printmessgae.js"
import helperFunctions from './helper.js'

let stop = true;

const makeArray = () => {
  const element = document.getElementById('bar-container').childNodes;
  let array = [];
  for (let i = 0; i < element.length; i++) {
    element[i].setAttribute("id", i);
    let val = element[i].getAttribute("style").split(" ");
    val = val[1].split("p");
    array.push(Number(val[0]));
  }
  return array;
}

const sort = async () => {
  let array = makeArray();

  const algo = document.getElementById("algo").value;

  document.getElementById('sort-button').innerHTML = "Stop";

  //disable all other buttons
  const buttons = document.getElementsByTagName("Button");
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].id !== "sort-button") {
      buttons[i].setAttribute("style", "pointer-events: none");
    }
  }

  if (algo === "Bubble Sort") {
    await bubbleSort(array);
  }
  else if (algo === "Insertion Sort")
    insertionSort(array);

  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].id !== "sort-button") {
      buttons[i].setAttribute("style", "");
    }
  }
}


const bubbleSort = async (array) => {
  stop = !stop;

  printMessage("Bubble Sort Runninig...");
  let i, j;
  for (i = 0; i < array.length - 1; i++) {
    for (j = 0; j < array.length - i - 1; j++) {
      if (stop === true) {
        document.getElementById('sort-button').innerHTML = "Sort";
        printMessage("Stopped Bubble Sort !!")
        return;
      }

      await helperFunctions.markChecking(j);
      await helperFunctions.markChecking(j + 1);
      if (array[j] > array[j + 1]) {
        await helperFunctions.markActive(j);
        await helperFunctions.markActive(j + 1);

        helperFunctions.swapDiv(j, j + 1);
        let t = array[j];
        array[j] = array[j + 1];
        array[j + 1] = t;
      }
      helperFunctions.unmarkActive(j);
      helperFunctions.unmarkActive(j + 1);
    }
    helperFunctions.markSorted(array.length - i - 1);
  }
  /* forcing mark sorted at 1st element as loop runs till array.length-2 */
  helperFunctions.markSorted('0');

  printMessage("Sorted By Bubble Sort !!");

  document.getElementById('sort-button').innerHTML = "Sorted";

  stop = !stop;

}

// INSERTION SORT
const insertionSort = async (array) => {
  stop = !stop;
  console.log(array);
  printMessage("Insertion Sort Runninig...");
  for (let i = 0; i < array.length - 1; ++i) {
    let j = i;
    while (j >= 0 && array[j] > array[j + 1]) {
      await helperFunctions.markActive(j);
      await helperFunctions.markActive(j + 1);
      // await helperFunctions.pauseIt();
      let t = array[j];
      array[j] = array[j + 1];
      array[j + 1] = t;

      await helperFunctions.swapDiv(j, j + 1);
      await helperFunctions.unmarkActive(j);
      await helperFunctions.unmarkActive(j + 1);
      j--;
    }
  }
  for (let counter = 0; counter < array.length; ++counter) {
    helperFunctions.markSorted(counter);
  }
}

const algos = {
  sort
};

export default algos;