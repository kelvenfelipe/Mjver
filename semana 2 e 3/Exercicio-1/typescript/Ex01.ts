/* Exercicio 1 */

interface Pessoa {
    nome: string;
    profissao: string;
    idade: number;
    informacoes: string[];
};

/* Exercicio 2 */

const pessoa: Pessoa = {
    nome: "Kelven",
    profissao: "Dev",
    idade: 30,
    informacoes: ["programacao", "series", "livros"],
};

console.log(pessoa);

/* Exercicio 3 */

function pegarInformacoes(pessoa: Pessoa){
    return pessoa.informacoes;
};

console.log(pegarInformacoes(pessoa));

/* Exercicio 4 */

function pegarInformacoes2(pessoa: Pessoa) : string[]{
    return pessoa.informacoes;
};

console.log(pegarInformacoes2(pessoa));

/* Exercicio 5 */

enum MateriaCurso {
    Angular = "Angular",
    Typescript = "Typescript",
    Git = "Git"
};

console.log(MateriaCurso);

/* Execicio 6 */

interface Professores{
    nome: string;
    materias: MateriaCurso[];
};

/* Exercicio 7 */

const Nathan: Professores = {
    nome: "Nathan",
    materias: [MateriaCurso.Angular, MateriaCurso.Git]
};

const Alan: Professores = {
    nome: "Alan",
    materias: [MateriaCurso.Angular, MateriaCurso.Git, MateriaCurso.Typescript]
};

console.log(Alan, Nathan);

/* Exercicio 8 */

const novoarray: Professores[] = [Alan, Nathan];

console.log(novoarray);

/* Exercicio 9 */

function arrayProfessor(novoarray: Professores[]) : string[] {
    return novoarray.map((prof) => prof.nome);
}

console.log(arrayProfessor(novoarray));

/* Exercicio 10 */

function arrayMaterias( novoarray: Professores[] ) : MateriaCurso[]  {
    return novoarray.reduce((add: MateriaCurso[], professor: Professores) => {
        return add.concat(professor.materias);
    },[]);
}

console.log(arrayMaterias(novoarray))