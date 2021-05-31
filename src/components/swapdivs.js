
const pauseIt = async(time) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

async function swapDiv( id1, id2)
{
  const elem1 = document.getElementById(id1);
  const elem2 = document.getElementById(id2);
  const style1 = elem1.getAttribute("style");
  const style2 = elem2.getAttribute("style");
  
  await pauseIt(300);

  const temp = elem1.innerHTML;
  elem1.innerHTML = elem2.innerHTML;
  elem2.innerHTML = temp;

  elem1.setAttribute("style", style2);
  elem2.setAttribute("style", style1);

}

export default swapDiv;