var student = {
    name: "",
    type: "student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event){
    document.getElementById("name").addEventListener("keyup", keyup);
}

function keyup(event){
    calculateNumericOutput();
}

function calculateNumericOutput(){
    student.name = document.getElementById("name").value;

    var totalNameValue = 0;

    for (let index = 0; index < student.name.length; index++) {
        totalNameValue += student.name.charCodeAt(index);
    }

    //result
    var output = "Total numeric value of person's name is " + totalNameValue;
    document.getElementById("output").innerText = output; 
}