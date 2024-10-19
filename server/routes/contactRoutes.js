const express = require('express');
const contactController = require('../controllers/contactController');
const router = express.Router();

router.get('/', contactController.getAllContacts);
router.get('/:id', contactController.getContactById);
router.post('/', contactController.createContact);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.deleteContactById);
router.delete('/', contactController.deleteAllContacts);

module.exports = router;
