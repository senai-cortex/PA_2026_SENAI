const sessaoAtiva = localStorage.getItem("sessao");

if (sessaoAtiva !== null) {
  mostrarAreaLogado(sessaoAtiva);
}

function cadastrar () {
    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value; 

    if(usuario === "" || senha === "") {
        exibirMensagem("Preencha o usuáiro e senha", "erro");
        return;
    }
    if (senha.length < 4) {
        exibirMensagem ("A senha deve ter ao menos 4 caracteres.", "erro");
        return;
    }

    const usuarioExistente = localStorage.getItem("usuario_" + usuario);

    if (usuarioExistente !== nuss) {
        exibirMensagem("esse usuário ja está cadastrado", "erro");
        return;
    }
    localStorage.setItem("usuario_" + uauario, senha);
    exibirmensagem("conta criada com sucesso! Faça login.", "ok");
    
    function entrar(){
const usuario= document.getElementById("usuario").value.trim();
const senha= document.getElementById("senha").value;

if (usuario === ""|| senha === ""){
    exibirMensagem("Preencha usuário e senha.", "erro");
    return;
}

const senhaSalva = localStorage.getItem("usuario_" + usuario);

if (senhaSalva === null){
    exibirMensagem("Usuário não encontrado.", "erro");
    return;
}

if (senhaSalva !== senha){
    exibirMensagem("Senha incorreta.", "erro");
    return;
}

localStorage.setItem("sessao", usuario);
mostarAreaLogado(usuario);
    }

    function sair(){
        localStorage.removeItem("sessao");
        mostarAreaLogin();
    }
    
    function exibirMensagem(texto, tipo) {
        const mensagem = document.getElementById("mensagem");

    mensagem.textContent = texto
    mensagem.className = "mensagem" + tipo;
    mensagem.style.display = "block";
    
    }
    function mostarAreaLogado(usuario){
        document.getElementById("area-login").style.display = "nome";
        document.getElementById("area-logado").style.display= "block";
        document.getElementById("texto-bem-vindo").textContent= "Olá" + usuario + ";";
    }

     function mostarAreaLogin(usuario){
        document.getElementById("area-login").style.display = "block";
        document.getElementById("area-logado").style.display= "none";
     }
}