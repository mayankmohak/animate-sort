
const markActive = (element) => {
  document.getElementById(element).setAttribute("class","bar rounded-top shadow-lg active-bar");
}
const unmarkActive = (element) => {
  document.getElementById(element).setAttribute("class","bar rounded-top shadow-lg");
}
const markSorted = (element) => {
  document.getElementById(element).setAttribute("class","bar rounded-top shadow-lg sorted");
}

const helperFunctions = {
  markActive,
  unmarkActive,
  markSorted
};

export default helperFunctions;