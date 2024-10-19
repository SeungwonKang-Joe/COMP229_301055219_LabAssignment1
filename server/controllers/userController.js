// controllers/userController.js

const User = require('../models/user');

// Get all users
exports.getAllUsers = (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }));
};

// Create a new user
exports.createUser = (req, res) => {
  const newUser = new User(req.body);
  newUser.save()
    .then(user => res.status(201).json(user))
    .catch(err => res.status(500).json({ error: err.message }));
};

// Get a user by ID
exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

// Update a user by ID
exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

// Delete a user by ID
exports.deleteUserById = (req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(user => {
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
      })
      .catch(err => res.status(500).json({ error: err.message }));
  };
  
  // Delete all users
  exports.deleteAllUsers = (req, res) => {
    User.deleteMany()
      .then(() => res.json({ message: 'All users deleted successfully' }))
      .catch(err => res.status(500).json({ error: err.message }));
  };