
let listaDeTarefas = [];


listaDeTarefas.push("Lavar o carro", "Fazer compras", "Estudar para a prova");


console.log("Lista de tarefas:", listaDeTarefas);

const indiceRealizada = 1;

if (indiceRealizada >= 0 && indiceRealizada < listaDeTarefas.length) {
    listaDeTarefas.splice(indiceRealizada, 1);
} else {
    console.log("Índice inválido.");
}

console.log("Lista de tarefas após remoção:", listaDeTarefas);
