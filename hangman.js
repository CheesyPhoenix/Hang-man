function formSubmit(){
    var data = Object.fromEntries(new FormData(document.querySelector("form")).entries());
    document.getElementById("main").innerHTML = data.inputField;
    console.log(data)
    document.form.reset();
    return false;
}


