function capText(){
    let paraText = document.getElementById("paraText");
    paraText.value = paraText.value.toUpperCase();

    para.innerHTML = paraText.value;
}

document.getElementById("paraText").addEventListener("blur",capText);
