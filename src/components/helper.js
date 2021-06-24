
const pauseIt = async () => {
  let time = document.getElementById('time').value;
  if (time === "1x") {
    time = Number(1000);
  }
  if (time === "2x") {
    time = Number(700);
  }
  if (time === "3x") {
    time = Number(400);
  }
  if (time === "4x") {
    time = Number(100);
  }
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

const swapDiv = async (id1, id2) => {
  const elem1 = document.getElementById(id1);
  const elem2 = document.getElementById(id2);
  const style1 = elem1.getAttribute("style");
  const style2 = elem2.getAttribute("style");

  const temp = elem1.innerHTML;
  elem1.innerHTML = elem2.innerHTML;
  elem2.innerHTML = temp;

  elem1.setAttribute("style", style2);
  elem2.setAttribute("style", style1);

}

const markActive = async (element) => {
  document.getElementById(element).setAttribute("class", "bar rounded-top shadow-lg active-bar");
  await pauseIt();
}

const unmarkActive = async (element) => {
  // await pauseIt(500);
  document.getElementById(element).setAttribute("class", "bar rounded-top shadow-lg");
}

const markSorted = (element) => {
  document.getElementById(element).setAttribute("class", "bar rounded-top shadow-lg sorted");
}

const markChecking = async (element) => {
  document.getElementById(element).setAttribute("class", "bar rounded-top shadow-lg check");
  await pauseIt();
}

const helperFunctions = {
  swapDiv,
  markActive,
  unmarkActive,
  markSorted,
  markChecking
};

export default helperFunctions;