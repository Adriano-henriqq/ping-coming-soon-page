const botao = document.querySelector("[data-botao]");
var formEmail = document.getElementById("form__email-id");

botao.addEventListener("click", (e)=>{
    e.preventDefault();
    var valorEmail = formEmail.value;
    validaEmail(valorEmail);
})

function validaEmail(email){
    let erro = document.querySelector("[data-mensagem-erro]")
    var input = document.querySelector(".form__email");
    var re = /^[a-z0-9_.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    if(re.test(email)){
        erro.innerHTML = ''
        input.classList.remove("erro__email");
    }else{
        erro.classList.add("mensagem-erro");
        input.classList.add("erro__email");
        erro.innerHTML = "Please a provide a valid email adress";

    }
       
}