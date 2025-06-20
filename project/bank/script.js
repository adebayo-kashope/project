let name="My name";
console.log("My name is "+name);
console.log(`My name is ${name}`);
//window.alert(`my name is${name}`)
function changeBackground(){
    document.body.style.backgroundColor="yellow";
}

function changeMyName(){
    const Newname=document.getElementById("name");
    Newname.innerHTML="Peter";
    Newname.style.color="silver";
    Newname.style.fontSize="50px";
    Newname.style.fontFamily="sanserif";
    Newname.style.textDecoration="line-through";
}