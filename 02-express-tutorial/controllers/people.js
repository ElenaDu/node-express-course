let { people } = require("../data");

const addPerson = (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });
};

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
};

const getPersonById = (req, res) => {
    const personId = parseInt(req.params.id);
    const person = people.find(person => person.id === personId);

    if (person) {
        res.status(200).json({ success: true, data: person });
    } else {
        res.status(404).json({ success: false, message: "Person not found" });
    }
};

const updatePerson = (req, res) => {
    const personId = parseInt(req.params.id);
    const { name } = req.body;

    const person = people.find((person) => person.id === personId)

    if (!person) {
        res.status(404).json({ success: false, message: `Person with id ${req.params.id} not found` });

    } else {
        person.name = name;
        res.status(200).json({ success: true, data: person });
    }
};
const deletePerson = (req, res) => {
    const personId = parseInt(req.params.id);
    const person = people.find((person) => person.id === personId)

    if (!person) {
        res.status(404).json({ success: false, message: `Person with id ${req.params.id} not found` });
    } else {
        const newPeople = people.filter(
            (person) => person.id !== personId
        );
        people = newPeople;
        res.status(200).json({ success: true, data: people });
    }
};


module.exports = { addPerson, getPeople, getPersonById, updatePerson, deletePerson };