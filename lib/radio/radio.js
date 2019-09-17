function radioValidate() {
    let rad=document.getElementsByName("gender");

    if(rad[0].checked==true){
        alert("Male")
    }
    else if(rad[1].checked==true){
        alert("Female")
    }
    else{
        alert("Select Anything!")
        return false;
    }
    return true;
}