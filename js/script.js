function calcularIMC(e){

    e.preventDefault();

    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var resposta = document.getElementById('resposta');

    var imc = peso / (altura*altura);
    var classificacao = '';
    
    if(imc < 18.5){
        classificacao = 'Magreza';
    }

    else if(imc < 24.9){
        classificacao = 'Normal';
    }

    else if(imc < 29.9){
        classificacao = 'Sobrepeso';
    }

    else if(imc < 39.9){
        classificacao = 'Obesidade';
    }

    else{
        classificacao = 'Obesidade Grave!';
    }

    resposta.innerHTML = '<h3>Seu IMC é: ' + imc.toFixed(1) + ' - ' + classificacao + '</h3>';

}