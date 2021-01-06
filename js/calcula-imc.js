//Titulo da página
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


//Selecionando o primeiro paciente da tabela
var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i< pacientes.length; i++){
    
    var paciente = pacientes[i];

    //Pegando o conteúdo dentro da tag de class = info-peso
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    //Pegando o conteúdo dentro da tag de class = info-altura
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    //Selecionando info.imc para mudar o valor dentro da classe
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    //Se o peso for inválido
    if (!pesoEhValido) {

        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        
        //Mudando a classe do paciente para troca da cor no css
        paciente.classList.add("paciente-invalido")
    }
    
    //Se a altura for inválida
    if (!alturaEhValida) {

        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";       
        paciente.classList.add("paciente-invalido")

    }
    
    //Caso os dois sejam válidos irá imprimir na tela o IMC
    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    
    if(peso >=0 && peso<1000){
        return true;
    }
    else{
        return false;
    }
}

function validaAltura(altura){

    if(altura >=0 && altura <=3.0){
        return true;
    }
    else{
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);

    //Casas decimais
    return imc.toFixed(2);
}

