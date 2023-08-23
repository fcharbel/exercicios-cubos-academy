const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
}

function corrigirProva(prova) {
    let acertos = 0;
    let nota = 0;
    for (let questao of prova.questoes) {
        if (questao.resposta === questao.correta) {
            acertos++
            nota += 2
        }
    }

    let resultado = acertos === 1 ? `O aluno(a) ${prova.aluno} acertou ${acertos} questão e obteve nota ${nota}.` : `O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${nota}.`
    console.log(resultado)

}

corrigirProva(prova);

