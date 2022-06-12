document.getElementById('submit').onclick  = function(){
    let temp;

    if(document.getElementById('cbtn').checked){
        temp = document.getElementById('textBox').value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById('tempLabel').innerHTML = temp + ' °C';

    }else if(document.getElementById('fbtn').checked){
        temp = document.getElementById('textBox').value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById('tempLabel').innerHTML = temp + 'F';

    }else{
        document.getElementById('tempLabel').innerHTML = "Select a unit";
    }
}


let temp = 0;

function toCelsius(temp){

    return (temp - 32) * (5/9);
}

function toFahrenheit(temp){

    return temp * 9 / 5 + 32;

}