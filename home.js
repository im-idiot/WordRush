const startGame=function(){
  window.location.href="./src/main.html"
}
const addClickListenerOnButton=function(){
  let button=document.getElementById('startGame');
  button.onclick=startGame;
}
const start = function(){
  addClickListenerOnButton();
}
window.onload=start;
