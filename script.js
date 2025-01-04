// Selecting the varibales with ElementById
const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
// Adding the Event Listener
convertBtn.addEventListener("click", ()=>{
  convertor(number.value);
});
/*
  Table of Roman Numeral:
  M - 1000
  CM - 900
  D - 500
  CD - 400
  C - 100
  XC - 90
  L - 50
  XL - 40
  X - 10
  IX - 9
  V - 5
  IV - 4
  I - 1
*/ 



function convertor(num){
// If Logics with return so the next code won't run
  if(num === ""){
    output.innerHTML = `<p id="output" style= "color: red"; margin: 20px; padding: 5px; font-size: 40px;">
      Please enter a valid number
    </p>`;
    return;
  }
  
  if(num === "-1"){
    output.innerHTML = `<p id="output" style= "color: red"; margin: 20px; padding: 5px; font-size: 40px;">
      Please enter a number greater than or equal to 1
    </p>`;
    return;
  }
  
  if(num === "4000" || number.value > 4000){
    output.innerHTML = `<p id="output" style= "color: red"; margin: 20px; padding: 5px; font-size: 40px;">
      Please enter a number less than or equal to 3999
    </p>`;
    return;
  }
  const romanNumbers = [
    {id: 'M', val:1000},
    {id: 'CM', val:900},
    {id: 'D', val:500},
    {id: 'CD', val:400},
    {id: 'C', val:100},
    {id: 'XC', val:90},
    {id: 'L', val:50},
    {id: 'XL', val:40},
    {id: 'X', val:10},
    {id: 'IX', val:9},
    {id: 'V', val:5},
    {id: 'IV', val:4},
    {id: 'I', val:1}
  ];
  let number2 = ""; 
  for(const numbers of romanNumbers){
    while(num >= numbers.val) {
      number2 += numbers.id;
      num -= numbers.val;
    }
  }
  output.innerHTML = `<p id="output" style= "color: black"; margin: 20px; padding: 5px; font-size: 40px;">${number2}</p>`;
}

