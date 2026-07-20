const btnAgendarLuthier = document.querySelector("#btn-agendar-header");
const btnVerServicos = document.querySelector("#btn-ver-servicos");
const destinoBtnVerServicos = document.querySelector("#catalogo");
const btnFaleConosco = document.querySelector("#btn-fale-conosco");
const btnAgendarServicos = document.querySelector("#btn-agendar-servicos");
const destinoAgendar = document.querySelector("#form-container");
const btnEmBreve = document.querySelectorAll(".btn-em-breve");

// botãoes que levam a outras seções

btnAgendarLuthier.addEventListener('click', function() {
    destinoAgendar.scrollIntoView({ behavior: 'smooth'});
})

btnVerServicos.addEventListener('click', function() {
    destinoBtnVerServicos.scrollIntoView({ behavior: 'smooth' });
})

btnFaleConosco.addEventListener('click', function() {
    destinoAgendar.scrollIntoView({ behavior: 'smooth'});
})

btnAgendarServicos.addEventListener('click', () => {
    destinoAgendar.scrollIntoView({ behavior: 'smooth'});
})

// botões em breve

function textoAlerta() {
    alert("Ainda estamos em desenvolvimento!");
}

btnEmBreve.forEach((btnIndividual) => {
    btnIndividual.addEventListener("click", textoAlerta)
})

// api ViaCep

const btnCep = document.querySelector("#btn-cep");

btnCep.addEventListener('click', async () => { // async
    let cep = document.querySelector("#cep").value; // pegando o valor do input, no caso o cep
    console.log(cep);
    let url = `https://viacep.com.br/ws/${cep}/json/`; // manda a url com o cep para a api
    let resposta = await fetch(url); // await para esperar a resposta
    console.log(resposta);
    let dados = await resposta.json();
    console.log(dados);
    
    if (dados.erro) {
        alert("Não encontrado, digite um CEP válido!");
    } else if (dados.localidade !== "Araras") {
        alert("Infelizmente ainda não cobrimos essa região. Estamos trabalhando para expandir!");
    } else {
        alert("Perfeito! Vamos para o WhatsApp combinar o horário.");
        let meuNumero = '5519992139999';
        let mensagem = `Olá! Gostaria de agendar o Leva e Traz para o meu instrumento. Estou no bairro ${dados.bairro} (CEP: ${dados.cep}).`
        let textoCodificado = encodeURIComponent(mensagem);
        let wpp = `https://wa.me/${meuNumero}?text=${textoCodificado}`;
        window.open(wpp, "_blank");
    }
})