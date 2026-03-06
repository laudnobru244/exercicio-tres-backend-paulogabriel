// json-exercicios.js

// 1. Crie um objeto chamado pessoa
const pessoa = {
    nome: "João Silva",
    idade: 17,
    email: "joao@email.com",
    endereco: {
        rua: "Rua das Flores",
        numero: 123,
        cidade: "São Paulo"
    },
    hobbies: ["futebol", "videogame", "leitura"]
};

// 2. Converter o objeto pessoa em uma string JSON
console.log("=== OBJETO PARA JSON ===");
const jsonPessoa = JSON.stringify(pessoa);
console.log("Tipo:", typeof jsonPessoa);
console.log("Conteúdo:", jsonPessoa);
console.log(""); // Linha em branco para organização

// 3. JSON.stringify() com formatação bonita (indentação de 2 espaços)
console.log("=== JSON FORMATADO ===");
const jsonFormatado = JSON.stringify(pessoa, null, 2);
console.log(jsonFormatado);
console.log("");

// 4. Converter string JSON em um objeto JavaScript
console.log("=== JSON PARA OBJETO ===");
const jsonRecebido = '{"nome":"Maria","idade":16,"turma":"3A"}';
const objetoRecebido = JSON.parse(jsonRecebido);
console.log("Tipo:", typeof objetoRecebido);
console.log(`Nome: ${objetoRecebido.nome}, Idade: ${objetoRecebido.idade}`);
console.log("");

// 5. Crie um array chamado filmes
const filmes = [
    { id: 1, titulo: "Matrix", ano: 1999, genero: "Ficção" },
    { id: 2, titulo: "Titanic", ano: 1997, genero: "Romance" },
    { id: 3, titulo: "Toy Story", ano: 1995, genero: "Animação" }
];

// 6. Manipulação do array de filmes
console.log("=== CATÁLOGO DE FILMES ===");

// Converter o array filmes para JSON formatado
const filmesJSON = JSON.stringify(filmes, null, 2);
console.log("Filmes em JSON:");
console.log(filmesJSON);

// Simular recebimento: parsing de volta para um array
const filmesRecebidos = JSON.parse(filmesJSON);
console.log("\nFilmes carregados novamente:");

// Percorrer o array filmesRecebidos e exibir no formato especificado
filmesRecebidos.forEach(filme => {
    console.log(`${filme.id}. ${filme.titulo} (${filme.ano}) - ${filme.genero}`);
});
