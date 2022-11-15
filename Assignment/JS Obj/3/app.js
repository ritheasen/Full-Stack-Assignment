function remove(){

    let paraText = document.getElementById("paraText").value;
    let paraNum = document.getElementById("paraNum").value;

    let cut = paraText.substr(paraNum);

    para.innerHTML = cut;

}

document.getElementById("paraNum").addEventListener("blur", remove)