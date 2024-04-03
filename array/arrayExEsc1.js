const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite seu nome: ", function(nomeDoUsuario) {
  rl.question("Digite seu e-mail: ", function(emailDoUsuario) {
    console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`);

    rl.close();
  });
});
