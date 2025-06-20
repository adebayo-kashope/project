function even(event) {
    event.preventDefault();
    let evennumber = document.getElementById('evennumber').value;
    let output = document.getElementById('number');
    console.log(evennumber);
    let value;
    if (evennumber % 2 === 0) {
        value = 'True'
    } else {
        value = 'false'
    }
    output.innerHTML =value


}

function leapYear(event) {
    event.preventDefault();
    let year = document.getElementById('year').value;
    let output = document.getElementById('number2');
    let value;
     if (year % 4 === 0){ 
         value = `${year} is a leap year`
     }else {
         value ='not leap year'
     }
     output.innerHTML=value
 
     
 }

function calValue(event){
    event.preventDefault()

    let firstNum = document.getElementById('number'); 
    let operator = document.getElementById('signs');
    let thirdNum = document.getElementById('number2');
    let result = document.getElementById('out');
    

    


}
function primenumber(event){
    event.preventDefault();

    let value;

    for(i =2; i=document.getElementById(prime); i++ ){
        if (prime.value %`i = 0`){
        
        }
    }

}

function formular(event){
 event.preventDefault();


 let firstNum = document.getElementById('shape');
 let secondNum = document.getElementById('radius');
 let thirdNum = document.getElementById('length');
 let fouthNum = document.getElementById('breath');
 let height = document.getElementById('height');
 let result = document.getElementById('answer');

 length = parseInt('thirdNum.value')

 radius = parseInt('secondNum.value')

 Breath = parseInt('fouthNum.value')

 height = parseInt('height.value')

 Shape = parseInt('firstNum.value')

  console.log(firstNum)

 
 let pi = 3.142;

 if(Shape.value === 'circle' ){

    answer = pi * (secondNum.value ** 2);
 }

 else if(Shape.value === 'parallelogram'){
    answer = length.value * height.value;
 }
 else if (Shape.value === 'square'){
    answer = length.value ** 2; 
 }

 console.log (result)

 output.innerHTML = value
 
}

    

// for (let i =1; i<=5; i++){
//     console.log(i);
//     for(let j =10; j<=15; j++){
      
//         console.log(j);

//     }
// }



// for(let i=1; i<= 5; i ++){
//     return i * i ;
//     console.log(i)

// }