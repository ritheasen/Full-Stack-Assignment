function capEach(stringInput){

    // var stringInput = document.getElementById("stringInputt").value;
    var splitString = stringInput.split(" ");

    for (let i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substr(1);
    }
    
    // document.getElementById("output").innerHTML = splitString.join(" ");
    return splitString.join(" ");
}

// document.write(titleCase("I'm a little tea pot"));
// document.getElementById("stringSubmit").addEventListener("click", capEach(document.getElementById("stringInputt").value));
document.getElementById("test").innerHTML = capEach("i love you so much.");