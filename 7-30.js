alert("its working")

function changeColor() {
  var name = document.getElementbyID("GWC");
  alert("hi");
  name.style.color = "blue";
}
function makebigger(){
  var yourImg = document.getElementById('image1');
if(yourImg && yourImg.style) {
    yourImg.style.height = '600px';
    yourImg.style.width = '600px';
}}
function makesmaller(){
  var yourImg = document.getElementById('image1');
if(yourImg && yourImg.style) {
    yourImg.style.height = '200px';
    yourImg.style.width = '200px';
}}
