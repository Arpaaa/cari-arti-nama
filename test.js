const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const cariArtiNama = require("./index.js");

rl.question("Arti nama apa yang ingin anda cari? : ", async(name) => {
   await cariArtiNama(name).then((res) => console.log(res));
})
rl.on("close", () => console.log("BYEE"))