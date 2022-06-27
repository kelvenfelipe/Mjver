"use strict";
/* Exercicio 1 */
;
/* Exercicio 2 */
const pessoa = {
    nome: "Kelven",
    profissao: "Dev",
    idade: 30,
    informacoes: ["programacao", "series", "livros"],
};
console.log(pessoa);
/* Exercicio 3 */
function pegarInformacoes(pessoa) {
    return pessoa.informacoes;
}
;
console.log(pegarInformacoes(pessoa));
/* Exercicio 4 */
function pegarInformacoes2(pessoa) {
    return pessoa.informacoes;
}
;
console.log(pegarInformacoes2(pessoa));
/* Exercicio 5 */
var MateriaCurso;
(function (MateriaCurso) {
    MateriaCurso["Angular"] = "Angular";
    MateriaCurso["Typescript"] = "Typescript";
    MateriaCurso["Git"] = "Git";
})(MateriaCurso || (MateriaCurso = {}));
;
console.log(MateriaCurso);
;
/* Exercicio 7 */
const Nathan = {
    nome: "Nathan",
    materias: [MateriaCurso.Angular, MateriaCurso.Git]
};
const Alan = {
    nome: "Alan",
    materias: [MateriaCurso.Angular, MateriaCurso.Git, MateriaCurso.Typescript]
};
console.log(Alan, Nathan);
/* Exercicio 8 */
const novoarray = [Alan, Nathan];
console.log(novoarray);
/* Exercicio 9 */
function arrayProfessor(novoarray) {
    return novoarray.map((prof) => prof.nome);
}
console.log(arrayProfessor(novoarray));
/* Exercicio 10 */
function arrayMaterias(novoarray) {
    return novoarray.reduce((add, professor) => {
        return add.concat(professor.materias);
    }, []);
}
console.log(arrayMaterias(novoarray));
