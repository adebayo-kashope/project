const plus =document.querySelector(".plus"),
minus=document.querySelector(".minus"),
number=document.querySelector(".number");

let a=1

plus.addEventListener("click",()=>{
    a++;
    a =(a < 10) ? "0" + a : a;
    console.log(a);
    number.innerTest  = a
});

minus.addEventListener("click" , ()=>{
    if(a > 1);
    a--;
    a =(a < 10) ? "0" +a : a;
    number.innerTest =a;
});