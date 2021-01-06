
//Adcionar novo paciente 

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    //Não edixa a página recarregar e enviar o formulário quando apertar o botão
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    // Chamando função que contem o objeto paciente
    var paciente = obtemPacienteDoFormulario(form);

    // Função que cria a tr e a td do paciente
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    // Adicionado o paciente a tabela 
    var tabela = document.querySelector("#tabela-pacientes");

    // Vai colocar na tabela de pacientes, o novo paciente

    tabela.appendChild(pacienteTr);

    //Apaga campos do 
    form.reset();
    
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");

    // Controlar o html interno de um elemento
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

//Função paciente
function obtemPacienteDoFormulario(form){

    var paciente = {
        //Pega as inforrmações dentro do form e salva em seus respectivos lugares
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

//Monta Tr de paciente
function montaTr(paciente) {
    // Cria Tr
    var pacienteTr = document.createElement("tr");
    // Monta a classe
    pacienteTr.classList.add("paciente");

    // Chama 5x o montaTd, um pra cada um dos td
    // Adiciona cada um dos td
    pacienteTr.appendChild( montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild( montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild( montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild( montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild( montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    
    return td;
} 
 
function validaPaciente(paciente){

    var erros = [];
    
    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }
    return erros;
}