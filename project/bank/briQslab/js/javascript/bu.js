
function totalClick(value){
    const totalClicks = document.getElementById("totalClicks");
    const sumvalue = parseInt(totalClicks.innerText) + value;
    console.log(sumvalue + value);
    totalClicks.innerText =sumvalue;
}