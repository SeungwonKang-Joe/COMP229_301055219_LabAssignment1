const mongoose = require('mongoose');
const Contact = require('../models/contact');

// Get all contacts
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// get contact
exports.getContactById = (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }
  
    Contact.findById(req.params.id)
      .then(contact => {
        if (!contact) {
          return res.status(404).json({ error: "Contact not found" });
        }
        res.json(contact);
      })
      .catch(err => res.status(500).json({ error: err.message }));
  };

// Create new contact
exports.createContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update contact by ID
exports.updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedContact) return res.status(404).json({ error: 'Contact not found' });
    res.json(updatedContact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete contact by ID
exports.deleteContactById = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) return res.status(404).json({ error: 'Contact not found' });
    res.json({ message: 'Contact deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete all contacts
exports.deleteAllContacts = async (req, res) => {
  try {
    await Contact.deleteMany();
    res.json({ message: 'All contacts deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
