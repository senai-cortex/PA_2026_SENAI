class calcular{
    constructor () {
        this.display = document.getElementById("display");
        this.botoes = document.querySelectorAll(".botao");
    
    this.iniciar();
}
 
    Iniciar(){
    this.atualizarDisplay("0");
    this.configurarCliques();
}

atualizarDisplay(valor) {
    this.display.value = valor || "0";
}
limpar(){
    this.expressao = "";
    this.atualizarDisplay("0");
}

adicionarValor(valor){
    if(this.display.value === "0" && valor !=="."){
        this.expressao = valor;
    }else{
        this.expressao += valor;
    }
    this.atualizarDisplay(this.expressao);
    }
    calcular(){
        try{
            const resultado = eval(this.expressao);

            if (resultado === undefined || isNaN (resultado)){
                this.atualizarDisplay("Erro");
                this.expressao = "";
                return;
            }
            this.expressao = String(resultado);

            this.atualizarDisplay(this.expressao);
        }catch(erro){
            this.atualizarDisplay("Erro");
            this.expressao = "";

        }
    }

    configurarCliques(){
        this.botoes.forEach((botao) => {
            botao.addEventListener("click", (evento)=>{
                const valor = evento.target.dataset.valor;

                if(valor){
                    this.tratarEntrada(valor);

                }
            });
        });
    }
}