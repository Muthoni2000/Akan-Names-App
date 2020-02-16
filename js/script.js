//Initialize Days of Week Array
var days=["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];

//Initialize Months Array
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];

//Day of week function
function compute(form){
    var val1=parseInt(form.day.value,10);
    if((val1<=0)||(val1>31)){
        alert("Invalid day! Kindly input the correct day")
    }
    var val2=parseInt(form.month.value,10);
    if ((val2<=0)||(val2>12)){
        alert("Invalid month! Kindly input the correct month")
    }
    var val2x=parseInt(form.month.value,10);
    var val3=parseInt(form.year.value,10);
    if (val3<1900){
        alert("Are you that old?!")
    }
}