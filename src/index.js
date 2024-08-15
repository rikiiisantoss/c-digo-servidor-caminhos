const express = require("express");
//estar importando a bibliotema ou modulo "express para variável: express"
const path = require("path");//biblioteca
//trabalhar com caminhos

const app = express();
//ele vai ser um servidor para retornar paginas html. criaremos uma pasta: pages

const router = express.Router();
//----------------rotas--------------------
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/pages/home.html"))
})

router.get("/contato",(req,res)=>{
    res.sendFile(path.join(__dirname+"/pages/contato.html"))
})

app.use(router);
//as rotas foram colocadas dentro da minha aplicação "APP", ela irá usar as rotas

app.listen(3333, ()=>{
console.log("servidor rodando")
})
//as minhas aplicações vai ouvir

