const express = require('express')
const {people} = require('./data')
const app = express()

app.use(express.static("./methods-public"))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).send({success:true, data: people});
})

app.post('/api/people/postman', (req, res) => {
    const { name } = req.body;
    if(name){
        return res.status(201).json({success: true, data: [...people, name]})
    }
    res.status(400).json({success: false, msg: "Please enter a valid name"})
})

app.post('/api/people', (req, res) =>{
    const {name} = req.body;
    if(!name){
        return res.status(401).send({success: false, msg:"provide a valid name"})
    }
    res.status(201).json({sucess:true, person: name})
})

app.post("/login", (req, res)=>{
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send("Please provide valid credentials");
})

app.put('/api/people/:id', (req, res) => {
    const {name} = req.body
    const {id} = req.params
    const person = people.find((person) => person.id === Number(id))
    if(!person){
        return res.status(404).json({success: false, msg: "Please enter a valid id"})
    }
    const newPeople = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name;
        }
        return person;
    })
    res.status(201).json({success: true, msg: newPeople})
})

app.delete('/api/people/:id', (req, res) => {
    const id = req.params.id
    const person = people.find((person) => person.id === Number(id))
    console.log(person);
    if(!person){
        return res.status(404).json({success: false, msg: `The id:${id} is not found`})
    }
    const newPeople = people.filter((person) => person.id !== Number(id))
    res.status(200).json({success: true, msg: newPeople})
})

app.listen(5000, ()=>{
    console.log("server is listening on the port 5000...");
})