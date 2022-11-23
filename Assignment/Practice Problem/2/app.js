color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["st","nd","rd","th"]
texT = "";



for (let i = 0 ; i < 7 ; i++){

    if (i < 4){
        texT += (i+1) + o[i] + " choice is "+ color[i] + ". <br>";
    }else{
        texT += (i+1) + o[3] + " choice is "+ color[i] + ". <br>";
    };

};

document.getElementById("demo").innerHTML = texT;