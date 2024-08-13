
class MaquinaDeVendas {
    constructor(itens, precos) {
       
        this.itens = itens;  
        this.precos = precos;  
        this.saldo = 0;  
    }


    inserirDinheiro(valor) {
        this.saldo += valor;
        console.log(`Você inseriu ${valor}. Saldo atual: ${this.saldo}.`);
    }


    selecionarItem(nomeItem) {
        if (this.itens.hasOwnProperty(nomeItem)) { 
            if (this.saldo >= this.precos[nomeItem]) {  
                this.saldo -= this.precos[nomeItem];
                console.log(`Você comprou ${nomeItem}. Saldo restante: ${this.saldo}.`);
            } else {
                console.log(`Saldo insuficiente. O ${nomeItem} custa ${this.precos[nomeItem]}.`);
            }
        } else {
            console.log('Item não disponível.');
        }
    }
    
    devolverTroco() {
        console.log(`Troco devolvido: ${this.saldo}.`);
        this.saldo = 0;
    }
}

const itensDisponiveis = { 'Refrigerante': 5, 'Chips': 3, 'Chocolate': 4 };
const precos = { 'Refrigerante': 5, 'Chips': 3, 'Chocolate': 4 };
const maquina = new MaquinaDeVendas(itensDisponiveis, precos);


maquina.inserirDinheiro(10);  
maquina.selecionarItem('Chocolate'); 
maquina.devolverTroco();  
