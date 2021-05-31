import printMessage from "./printmessgae.js"
const multipleBars = () => {
  const element = document.getElementById('bar-container');
  // console.log(element.length);
  while(element.lastChild ){
      element.removeChild(element.lastChild);
  }
}

const oneBar = () => {
  const element = document.getElementById('bar-container');
  // console.log(element.length);
  if(element.lastChild ){
      element.removeChild(element.lastChild);
  }
  else{
      printMessage("Add some numbers to sort");
  }
}

const remove = {
  multipleBars,
  oneBar,
};

export default remove ;