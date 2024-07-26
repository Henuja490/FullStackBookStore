import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app=express()
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Dulneth@123456",
    database:"test"
    
})

app.use(express.json())
app.use(cors())

app.get('/', (req,res)=>{
    res.json("Hello this is the backend")

})
app.get('/books',(req,res)=>{
    const q = "SELECT * FROM books"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/books',(req,res)=>{
    const q = "INSERT INTO books (`title`, `Description`,  `price`, `cover`) VALUES(?)"
    const values=[req.body.title,req.body.Description,req.body.price,req.body.cover]

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Successs")
    })
})

app.delete("/books/:id",(req,res)=>{
    const bookId = req.params.id;
    const q ="DELETE FROM books WHERE id =?"
    db.query(q,[bookId],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Successs")
    })
})

app.put("/books/:id",(req,res)=>{
    const bookId = req.params.id;
    const values=[req.body.title,req.body.Description,req.body.price,req.body.cover]
    const q ="UPDATE books SET `title`=?, `Description`=?, `price`=?, `cover`=? WHERE id= ?"
    db.query(q,[...values,bookId],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Successs")
    })
})
app.listen(8800, ()=>{
    console.log("connected to the backend")
})