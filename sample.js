function showAlert(){
    alert("You are click the button");
}
function showMessage(){
    const mes = document.getElementById('message')
    mes.textContent=('Welcome all')
}
function change(){
    const val = document.getElementById("course").value;
    document.getElementById("out").innerHTML = "You have selected  "  +val +" course";
}
