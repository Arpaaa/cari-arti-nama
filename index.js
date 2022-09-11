const axios = require("axios");
const cheerio = require("cheerio");
const { baseUrl, error_message } = require("./config.json");

module.exports = (nama) => {
   if (!nama) throw new Error("masukan nama minimal 1 kata");

   try {
      return new Promise((resolve, reject) => {
         const n = nama.trim().split(" ");
         
         axios.get(baseUrl+n.join("-")+".html").then((response) => {
           if (response.status !== 200) return reject(error_message);
           
           const data = response.data.replace(/[\n\t]/g, "");
           const $ = cheerio.load(data);
           
           let result = [];
           
           const table = ".table_wrap table tbody tr";
           const resNama = $(table + " td:nth-child(2)").each((index, element) => {
              const res = {
                nama: $(element).text()
              };
              result.push(res);
           })
           const resKelamin = $(table + " td:nth-child(3)").each((index, element) => {
             result[index].kelamin = $(element).text();
           })
           const resAsalNama = $(table + " td:nth-child(4)").each((index, element) => {
             result[index].asal = $(element).text();
           })
           const resArtiNama = $(table + " td:nth-child(5)").each((index, element) => {
             result[index].arti_nama = $(element).text();
           })
           
           result[0].nama = result[result.length-1].nama;
           result[0].kelamin = result[result.length-1].kelamin;
           result.pop();
           
           return resolve(result)
         });
    
      });
   } catch(err) {
     console.log(err)
   }
}
