import removeBar  from "./deletebars.js"
import printMessage from "./printmessgae.js"

function oneBar( size ){
  let inputheight = document.getElementById('bar-size').value;

  if(size>0 && size <= 100){
    inputheight  = size;
  }
  if(!inputheight){
    printMessage("cannot add null !!");
    return;
  }
  if(inputheight < 0 || inputheight > 100){
    printMessage("cannot add height > 100 or height < 0 !!");
    return;
  }
  
  inputheight = inputheight >= 100 ? 100 : inputheight;
  let storedheight = inputheight*5;//height is 5 times of the input value

  const element = document.createElement('div');
  element.setAttribute("class", "bar rounded-top shadow-lg");
  element.setAttribute("style", "height: "+storedheight+"px;");
  element.innerHTML = inputheight;
  document.getElementById('bar-container').appendChild(element);
}
function multipleBars(){
  let num_bar = Number(document.getElementById('num-bar').value);
  if(num_bar<6){
    printMessage("add minimum 6 elements to view clearly !!");
    return ;
  }
  if(num_bar>=5){
    removeBar.multipleBars();
  }
  else{
    printMessage("Give some length to generate !!");
    return ;
  }

  for(let i=0;i<num_bar;i++){
    let randomNumber = Number(Math.floor(Math.random() * (100)));
    randomNumber = randomNumber < 5 ? 5 : randomNumber;
    oneBar(randomNumber);
  }
}

const divscreator = {
  multipleBars,
  oneBar
};
export default divscreator;