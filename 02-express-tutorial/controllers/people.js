const {people} = require('../data');

const getPeople = (req, res) => {
    res.status(200).send({success:true, data: people});
}

const createPeoplePostMan = (req, res) => {
    const { name } = req.body;
    if(name){
        return res.status(201).json({success: true, data: [...people, name]})
    }
    res.status(400).json({success: false, msg: "Please enter a valid name"})
}

const createPerson = (req, res) =>{
    const {name} = req.body;
    if(!name){
        return res.status(401).send({success: false, msg:"provide a valid name"})
    }
    res.status(201).json({sucess:true, person: name})
}

const updatePerson = (req, res) => {
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
}

const deletePerson = (req, res) => {
    const id = req.params.id
    const person = people.find((person) => person.id === Number(id))
    console.log(person);
    if(!person){
        return res.status(404).json({success: false, msg: `The id:${id} is not found`})
    }
    const newPeople = people.filter((person) => person.id !== Number(id))
    res.status(200).json({success: true, msg: newPeople})
}

module.exports = {getPeople,
createPeoplePostMan,
createPerson,
updatePerson,
deletePerson}