const form = document.getElementById("btn")
const nome = document.getElementById("name")
const email = document.getElementById("email")
const tel = document.getElementById("phone")
const mensagem = document.getElementById("message")

form.addEventListener('click', (e) => {
    e.preventDefault()

    validacao()
})

function validacao(){
    const valorNome = nome.value
    const valorEmail = email.value
    const valorTel = tel.value
    const valorMensagem = mensagem.value

    const msgErro = "Campo Obrigatório*"
    const campoVazio = ""

    if(valorNome === ""){
        camposNaoPreenchidos(nome, msgErro)
    }else{
        camposPreenchidos(nome, campoVazio)
    }

    if(valorEmail === ""){
        camposNaoPreenchidos(email, msgErro)
    }else{
        camposPreenchidos(email, campoVazio)
    }

    if(valorTel === ""){
        camposNaoPreenchidos(tel, msgErro)
    }else{
        camposPreenchidos(tel, campoVazio)
    }

    if(valorMensagem === ""){
        camposNaoPreenchidos(mensagem, msgErro)
    }else{
        camposPreenchidos(mensagem, campoVazio)
    }

}

function camposNaoPreenchidos(valorInput, msg){
    const controle = valorInput.parentElement;
    const p = controle.querySelector("p");

    p.innerText = msg
    

    controle.classList.add("erro")
}

function camposPreenchidos(valorInput, msg){
    const controle = valorInput.parentElement
    const mensagemDeErro = controle.querySelector("p")

    mensagemDeErro.innerText = msg

    controle.classList.add("sucesso")
}

