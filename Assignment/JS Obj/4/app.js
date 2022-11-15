

function sum1(){

    let x = parseInt(document.getElementById("aa").value);
    let y = parseInt(document.getElementById("bb").value);

    alert("Total of sum is " + parseInt(x + y));
    
}

document.getElementById("bb").addEventListener("blur", sum1);