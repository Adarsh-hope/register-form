const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors')
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

// Serve static files
app.use(express.static('public'));

// Create a mongoose schema and model
const FormSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const Form = mongoose.model('Form', FormSchema);


// POST route for form submission
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const formData = new Form({ username, email, password });

  formData.save()
    .then(() => res.send('Form data saved successfully!'))
    .catch(err => res.status(400).send('Error saving form data: ' + err));
    console.log('Received form data:');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  
});


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://adarshsoman29:gf2uGtkVdgyNsd6h@cluster0.ekjpquc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
