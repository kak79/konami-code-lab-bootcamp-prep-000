const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  
let index = 0;  
  
  document.body.addEventListener("keydown",(event) => {
     
    
  if (key === codes[index]) {
    index++;
 
    if (index === codes.length) {
      alert("Sorry!");
 
      index = 0;
    }
  } else {
    alert("Hurray!");
    index = 9;
  }
 
     
  });
  

}


