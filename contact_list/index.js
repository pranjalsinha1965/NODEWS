const express = require('express');
const path = require('path');
const mongoose = require('./config/mongoose'); // Ensure this is correct
const Contact = require('./models/contact');
const port = 5009;

const app = express();

// Set up view engine and views directory
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// Middleware for parsing form data
// app.use(express.urlencoded({ extended: true }));

// Serve static files
// app.use(express.static(path.join(__dirname, 'assets'))); // Ensure 'assets' is the correct directory for your static files

// Set up view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for parsing form data
app.use(express.urlencoded());

// // Serve static files
app.use(express.static('assests'));

// Route: Home
app.get('/', async function (req, res) {
    try {
        const contacts = await Contact.find({});
        return res.render('home', {
            title: "Contacts List",
            contact_list: contacts
        });
    } catch (err) {
        console.log('Error fetching contacts:', err);
        return res.status(500).send('Error fetching contacts');
    }
});

// Route: Create Contact
app.post('/create-contact', async function (req, res) {
    try {
        const newContact = await Contact.create({
            name: req.body.name,
            phone: req.body.phone
        });
        console.log('New Contact Created:', newContact);
        return res.redirect(req.get('Referrer') || '/');  // Use Referrer to return to the previous page or home
    } catch (err) {
        console.log('Error in creating a contact:', err);
        return res.status(500).send('Error in creating contact');
    }
});

// Route: Delete Contact
app.get('/delete-contact/:phone', async function (req, res) {
    try {
        let phone = req.params.phone;
        await Contact.deleteOne({ phone: phone });
        return res.redirect(req.get('Referrer') || '/');  // Redirect back or to home page
    } catch (err) {
        console.log('Error in deleting a contact:', err);
        return res.status(500).send('Error in deleting contact');
    }
});

// Start the server
app.listen(port, function (err) {
    if (err) {
        console.log('Error in running the server:', err);
        return;
    }
    console.log('Server is running on Port:', port);
});
