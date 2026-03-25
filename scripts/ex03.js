function balancoFinanceiro(){
    let ganhoBruto = 0;
    let gasto = 0;
    let somaGanhoBruto = 0;
    let somaGasto = 0;
    let saldoFinanceiro = 0;
    for(let i = 1; i < 13; i++){
        ganhoBruto = parseFloat(prompt("Digite o ganho bruto do mês "+ i + ":"));
        gasto = parseFloat(prompt("Digite o gasto do mês "+ i + ":"));
        somaGanhoBruto += ganhoBruto;
        somaGasto += gasto;
    }
    saldoFinanceiro = somaGanhoBruto - somaGasto;
    if(saldoFinanceiro < 0){
        alert("Saldo financeiro anual insuficiente, a empresa está com um prejuízo! R$ " + saldoFinanceiro);
    } else {
        alert("Saldo financeiro anual suficiente, a empresa tem lucro! R$ " + saldoFinanceiro);
    }
}