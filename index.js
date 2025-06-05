let empresaNome = "Asas de Altaria";
let slogan = "Descubra seu próximo destino conosco !";
let tituloSecaoDestinos = "Nossos Destinos Favoritos:";
let separador = "----------------------------------------";
const prompt = require('prompt-sync');
const entrada = prompt();

let destino1Nome = " Johto, Japão  ";
let destino2Nome = " Unova, EUA ";
let destino3Nome = " Kalos, França ";
let destino4Nome = " Paldea, Península Ibérica ";
let destino5Nome = " Galar, Reino Unido ";

let mensagemFinal = "Deixe " + empresaNome + " guiar você. Permita-se ser transportado para lugares incríveis, sentindo a brisa suave e a alegria de uma nova descoberta. Sua próxima grande aventura está à sua espera!";
let instrucaoContato = "Entre em contato para mais informações e pacotes personalizados. ✨";

console.log("✈️  Bem-vindo à " + empresaNome + "! ✈️");
console.log();
console.log(slogan);
console.log();
let nome = entrada("Digite seu nome: ");
console.log ("O nome digitado foi: " + nome);
let idade = entrada("Digite sua idade: ");
idade = parseInt(idade);
console.log("A idade digitada foi: %d", idade)
console.log();
let loginCerto ="Admin";
let senhaCerta = 12345;
let login = entrada("Entre com seu login: ");
console.log();
let senha = entrada("Digite sua senha: ");
if(senha == senhaCerta){
  console.log("A senha está correta!");
  console.log("Bem vindo Administrador");
}

console.log();
console.log(separador);
console.log();
console.log("🌎 " + tituloSecaoDestinos + " 🌎");
console.log();
console.log(separador);
console.log();

console.log("1.⛩️ " + destino1Nome);
console.log();
console.log(separador);
console.log();

console.log("2.🗽 " + destino2Nome);
console.log();
console.log(separador);
console.log();

console.log("3.🗼" + destino3Nome);
console.log();
console.log(separador);
console.log();

console.log("4.⛰️ " + destino4Nome);
console.log();
console.log(separador);
console.log();

console.log("5.👑 " + destino5Nome);
console.log();
console.log(separador);
console.log();

console.log("✨ " + mensagemFinal);
console.log();
console.log(separador);
console.log();
console.log(instrucaoContato);
console.log();
console.log(separador);