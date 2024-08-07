function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!name || !email || !password) {
        alert('All fields are required!');
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        // alert('Please enter a valid email address.');
        return false;
    }

    return true;
}





// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// app.set('view engine', 'ejs');
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: true }));

// let users = []; // Array to store user data

// app.get('/', (req, res) => {
//     res.render('index');
// });

// app.get('/login', (req, res) => {
//     res.render('login');
// });

// app.post('/registration', (req, res) => {
//     const { name, email, password } = req.body;

//     // Server-side validation
//     if (!name || !email || !password) {
//         return res.send('All fields are required!');
//     }

//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!emailPattern.test(email)) {
//         return res.send('Please enter a valid email address.');
//     }

//     // Store user data
//     const user = { name, email, password };
//     users.push(user);

//     // Redirect to login page
//     res.redirect('/login');
// });

// app.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     const user = users.find(user => user.email === email && user.password === password);

//     if (user) {
//         res.render('success', { name: user.name });
//     } else {
//         res.send('Invalid email or password.');
//     }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
