const express = require('express');
const router = express.Router();
const {people} = require('../data');
const {getPeople,
createPeoplePostMan,
createPerson,
updatePerson,
deletePerson} = require('../controllers/people')

// router.get('/', getPeople)
// router.post('/postman', createPeoplePostMan)
// router.post('/', createPerson)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPeoplePostMan);
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router