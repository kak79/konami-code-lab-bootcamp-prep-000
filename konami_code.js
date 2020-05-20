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
  
  const input = document.querySelector('input');
  const log = document.getElementById('log');
  
  document.body.addEventListener("keydown",(event));{
     
    input.addEventListener('keydown', logKey);

   function logKey(e) {
     log.textContent += ` ${e.code}`;
    }
  


  
  
  }
}


