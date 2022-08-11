const express = require ('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'appwebreactbd',
})

app.get("/",(req,res)=>{
    const sqlInsert = "INSERT INTO utilisateurs (nomUtilisateur,nom,prenom,email,mdp,service1) VALUES ('medChaabouni','Chaabouni','Mohamed','mohamed.chaa33@gmail.com','haha','chauffeur');"
    db.query(sqlInsert,(err,result)=>{
        res.send("hiefvervr")
    })
})

app.listen(3001,() => {
    console.log("running on port 3001")
})