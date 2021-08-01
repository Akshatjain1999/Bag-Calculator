document.addEventListener("DOMContentLoaded",()=>{
  document
    .getElementById("Calculator")
    .addEventListener("submit",handleForm)
});

function handleForm(ev){
  ev.preventDefault();
  let myForm = ev.target;
  let fd = new FormData(myForm);
  var width = Number(fd.get("Width"));
  var BagWeight = Number(fd.get("BagWeight"));
  var height = Number(fd.get("height"));
  var ThreadWeight = Number(fd.get("ThreadWeight")); 
  var BasePrice = Number(fd.get("BasePrice"));
  var LabourRate = Number(fd.get("LabourRate"));

  var widthCalcualtion = (width * BagWeight) / 39.4;

  var heightCalculation = (widthCalcualtion * height) + ThreadWeight;

  var price = heightCalculation * BasePrice;

  price += LabourRate;
  // console.log(price)
  document.getElementById("ans").value = "Rs :" + price;


}