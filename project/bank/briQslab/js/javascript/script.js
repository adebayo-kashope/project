console.log("hello");

function submitForm(event){
   event.preventDefaut();
    console.log(event);
    event.preventDefaut();
    firstName =document.getElementById("first");
    let year =document.getElementById("age")

    console.log(firstName,value);
    console.log(age , value);
    var age = 2025-year.value;
    console.log(year.value);
    let content=document.getElementById("content")
}if (age <=18){
        content.innerHTML=`you are not qualify to visit this site`
        content.style.color = "#fb0404";
    } else  if(18>=1){
    content.innerHTML = `my name is ${firstName.value}and i am ${age}years old`;
}
if(age <=1){
    content.innerHTML =`you are a baby`;
    content.style.color = "#fb0404"
}


function totalClick(clicks){
    const totalClicks = document.getElementById("totalClick");
    const sumvalue = parseInt(totalClicks.innerText)+("value");
    console.log(sumvalue +clicks);
    totalClicks.innerText = sumvalue;
}