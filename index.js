
for (let i = 0; i < 10; i++) {
    let resultado = i + 2; 
    console.log(`Iteração ${i + 1}: O resultado é ${resultado}`);
    
}



let contador = 0;
while (true) {
    let numeroAleatorio = Math.random(); 
    console.log(`Iteração ${contador}: O número gerado é ${numeroAleatorio}`);
   
    
    if (numeroAleatorio >= 0.8) {
        console.log("Condição atingida. Encerrando o loop."); 
        break; 
    }
}
