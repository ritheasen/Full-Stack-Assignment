function formValidation(){

    let memNum = parseInt(document.getElementById("memNumber").value);
    let passW = document.getElementById("pasS").value;

    // if ((!isNaN(memNum)) && (passW.length > 4)) {
    //         alert("All validation is correct");
    //         return true;
    // }
    
    // if (passW.length < 4){
    //     alert("Password must be longer than 4 characters !");
    //     passW.focus();
    //     return false;
    //     }

    
    // if (isNaN(memNum)){
    //     alert("Member number must be a number !");
    //     memNum.focus();
    //     return false;
    // }

    if (!isNaN(memNum)){
        if (passW.length > 4){
            alert("All validation is correct");
            return true;
        }
        else{
            alert("Password must be longer than 4 characters !");
            memNum.focus();
            return false;
            
        }
    }
    else{
        
        alert("Member number must be a number !");
        passW.focus();
        return false;
    }

}
