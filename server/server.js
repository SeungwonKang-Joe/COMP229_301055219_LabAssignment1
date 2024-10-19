const express = require('express');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();


app.use(express.json());


const mongoURI = "mongodb+srv://seungwon987:chopa4452%21@cluster0.jjrjt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoURI)
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB: ', err));

// Routes
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

app.get('/', (req, res) => {
    res.json({ message: "Welcome to DressStore application." });
  });
