function displayAlert(elemento_a){
    console.log(elemento_a);
    var location = elemento_a.innerText;

    alert("Cargando informe meteorológico de "+ location)
}
function dismissCokie(){
    var cookieElement = document.querySelector('.cookie');
    cookieElement.remove()
}
function changeTemp(elemento_select){
    var foc = elemento_select.value;

    for(var i= 1; i<= 8; i++ ){
        var elemento_temp = document.querySelector('#temp'+i);
        var temperatura = elemento_temp.innerText;
        temperatura = parseInt(temperatura)
        var new_temp = 0;
        if(foc === "C"){
            new_temp = Math.round((temperatura - 32) * 5 /9)
        }else{
            new_temp = Math.round((temperatura * 9 /5) + 32)
        }
        elemento_temp.innerText = new_temp
    }
}