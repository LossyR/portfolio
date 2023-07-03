const camposDoFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[formulario]");



camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault())
})

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    assunto: {
        valueMissing: "O campo de assunto não pode estar vazio."
    },
    mensagem: {
        valueMissing: "O campo de mensagem não pode estar vazio",
    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'tooShort',
    'customError'
]

function verificaCampo(campo) {
    let mensagem = "";

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);
        }
    });
    
    const mensagemErro = campo.parentNode.querySelector(".mensagem-erro");
    const validador = campo.checkValidity();

    if(!validador) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}

