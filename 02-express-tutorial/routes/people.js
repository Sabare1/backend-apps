const express = require('express');
const router = express.Router();
const {people} = require('../data');
const {getPeople,
createPeoplePostMan,
createPerson,
updatePerson,
deletePerson} = require('../controllers/people')

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPeoplePostMan);
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router