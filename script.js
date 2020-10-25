const c = (e)=> document.querySelector(e);
var acertos = 0;
let indexVerificacao = 0;

function botaoIniciar() {
    c('.botao--iniciar').style.display = 'none';
    c('.item--perguntas').innerHTML = dadosJson.perguntas[indexVerificacao];
    c('.corpo--perguntas').style.display = 'flex';
}
function reiniciarTeste() {
    c('.corpo--resultado').style.display = 'none';
    acertos = 0;
    indexVerificacao = 0;
    botaoIniciar();
}
function confirmaQuest(name) {
    let respostaAtual = dadosJson.respostas[indexVerificacao];
    if (name === respostaAtual) {
        acertos ++;
    }
    indexVerificacao ++;
    console.log(acertos);
    console.log(indexVerificacao);
    
    if (indexVerificacao === 20) {
        c('.corpo--perguntas').style.display = 'none';
        c('.resultado--pontuacao').innerHTML = `Você fez ${acertos} pontos.`;
        if (acertos < 14) {
            c('.resultado--dica').innerHTML = dadosJson.dicas[2];
            console.log('amor');
        }
        else{
            if (acertos >= 14 & acertos <= 16) {
                c('.resultado--dica').innerHTML = dadosJson.dicas[1];
            }
            else{
                c('.resultado--dica').innerHTML = dadosJson.dicas[0];
            }
        }
        c('.corpo--resultado').style.display = 'flex'; 
    }
    else{
        c('.item--perguntas').innerHTML = dadosJson.perguntas[indexVerificacao];
    }
}