// const express = require('express');
// const bodyParser = require('body-parser');
// const multer = require('multer');
// const path = require('path');
// const sqlite3 = require('sqlite3').verbose();

// const app = express();
// const upload = multer({ storage: multer.memoryStorage() });

// app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.urlencoded({ extended: true })); // Ensure body-parser is correctly set up

// // Initialize SQLite database
// const db = new sqlite3.Database('./election.db');

// // users table
// db.serialize(() => {
//     db.run(`CREATE TABLE IF NOT EXISTS users (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         first_name TEXT NOT NULL,
//         middle_name TEXT,
//         last_name TEXT NOT NULL,
//         dob TEXT NOT NULL,
//         role_id TEXT NOT NULL,
//         username TEXT NOT NULL UNIQUE,
//         password TEXT NOT NULL,
//         photo BLOB NOT NULL
//     )`);
// });

// // login table
// db.serialize(() => {
//     db.run(`CREATE TABLE IF NOT EXISTS login (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         username TEXT NOT NULL UNIQUE,
//         password TEXT NOT NULL
//     )`);
// });

// // roles table
// db.serialize(() => {
//     db.run(`CREATE TABLE IF NOT EXISTS roles (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         role TEXT NOT NULL,
//         admin TEXT NOT NULL,
//         candidate TEXT NOT NULL,
//         voter TEXT NOT NULL
//     )`);
// });

// // all of my route

// // Render the dashboard
// app.get('/', (req, res) => {
//     res.render('dashboard');
// });

// // Render the dashboard 1
// app.get('/dashboard', (req, res) => {
//     res.render('dashboard');
// });

// // Render the registration form 2
// app.get('/register', (req, res) => {
//     res.render('voter-registration');
// });

// // Render the login form 3
// app.get('/login', (req, res) => {
//     res.render('log-in');
// });

// // Render the party-registration form 4
// app.get('/partyregistration', (req, res) => {
//     res.render('party-registration');
// });

// // Render the vote page 5
// app.get('/vote', (req, res) => {
//     res.render('vote');
// });
// // all of my route ends

// // Handle registration form submission
// app.post('/register', upload.single('photo'), (req, res) => {
//     const { first_name, middle_name, last_name, dob, role_id, username, password } = req.body;
//     const photo = req.file ? req.file.buffer : null;

//     console.log(req.body); // Debug output
//     console.log(req.file); // Debug output

//     if (!first_name || !last_name || !dob || !role_id || !username || !password || !photo) {
//         return res.send('All fields are required.');
//     }

//     // Check if the username already exists
//     db.get(`SELECT username FROM users WHERE username = ?`, [username], (err, row) => {
//         if (err) {
//             return res.send('Error occurred during registration: ' + err.message);
//         }

//         if (row) {
//             // Username already exists
//             return res.send('Username already exists. Please choose a different username.');
//         }

//         // Proceed with user registration
//         db.run(`INSERT INTO users (first_name, middle_name, last_name, dob, role_id, username, password, photo)
//                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [first_name, middle_name, last_name, dob, role_id, username, password, photo], function(err) {
//             if (err) {
//                 return res.send('Error occurred during registration: ' + err.message);
//             }
//             res.redirect('/login');
//         });
//     });
// });

// // Handle login form submission
// app.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     console.log('Login request received:', req.body);

//     db.get(`SELECT * FROM users WHERE username = ? AND password = ?`, [username, password], (err, row) => {
//         if (err) {
//             console.error('Error during login query:', err.message);
//             return res.send('Error occurred during login: ' + err.message);
//         }

//         if (row) {
//             console.log('Login successful for user:', row);
//             res.render('dashboard', { name: row.first_name }); // Pass the name to the template
//         } else {
//             console.log('Invalid username or password for user:', username);
//             res.send('Invalid username or password');
//         }
//     });
// });

// const PORT = process.env.PORT || 3300;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });




// const swal = require('sweetalert');

const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const upload = multer({ storage: multer.memoryStorage() });
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
// let user_name = "";
// Initialize SQLite database
const db = new sqlite3.Database('./election.db', (err) => {
    if (err) {
        console.error('Could not connect to database', err);
    } else {
        console.log('Connected to database');
    }
});

// Create tables if they don't exist
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name TEXT NOT NULL,
        middle_name TEXT,
        last_name TEXT NOT NULL,
        dob TEXT NOT NULL,
        role TEXT NOT NULL,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        photo BLOB NOT NULL
    )`, (err) => {
        if (err) console.error('Error creating users table', err);
    });

    db.run(`CREATE TABLE IF NOT EXISTS login (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL
    )`, (err) => {
        if (err) console.error('Error creating login table', err);
    });

    db.run(`CREATE TABLE IF NOT EXISTS roles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        role TEXT NOT NULL
    )`, (err) => {
        if (err) console.error('Error creating roles table', err);
    });
});

// Define routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/register', (req, res) => {
    db.all("SELECT * FROM roles",[],(err, row)=>{
        if(err){
            return res.status.send("error fetching row");
        }
        res.render('voter-registration', {row});
    })
  
});

app.get('/login', (req, res) => {
    res.render('log-in');
});

app.get('/partyregistration', (req, res) => {
    res.render('party-registration');
});

app.get('/vote', (req, res) => {
    res.render('vote');
});

// Handle registration form submission
app.post('/register', upload.single('photo'), (req, res) => {
    const { first_name, middle_name, last_name, dob, role, username, password } = req.body;
    const photo = req.file ? req.file.buffer : null;

    console.log(req.body); // Debug output
    console.log(req.file); // Debug output

    if (!first_name || !last_name || !dob || !role || !username || !password || !photo) {
        return res.send('All fields are required.');
    }

    db.run(`INSERT INTO users (first_name, middle_name, last_name, dob, role, username, password, photo)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [first_name, middle_name, last_name, dob, role, username, password, photo], function(err) {
        if (err) {
            return res.send('Error occurred during registration: ' + err.message);
        }
        res.redirect('/login');
    });
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});


// Handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.get(`SELECT * FROM voters WHERE username = ? AND password = ?`, [username, password], (err, row) => {
        if (err) {
            return res.send('Error occurred during login: ' + err.message);
        }
        if (row) {
            res.redirect('/dashboard');
        } else {
            res.send('Invalid username or password');
        }
    });
});


// app.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     console.log('Login request received:', req.body);

//     db.get(`SELECT * FROM users WHERE username = ? AND password = ?`, [username, password], (err, row) => {
//         if (err) {
//             console.error('Error during login query:', err.message);
//             return res.send('Error occurred during login: ' + err.message);
//         }

//         if (row) {
//             console.log('Login successful for user:', row);
//             res.render('dashboard', { name: row.first_name }); // Pass the name to the template
//         } else {
//             console.log('Invalid username or password for user:', username);
//             res.send('Invalid username or password');
//         }
//     });
// });



// // Handle login form submission

// app.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     console.log('Login request received:', req.body);
//     // user_name=username;

//     db.get(`SELECT * FROM users WHERE username = ? AND password = ?`, [username, password], (err, row) => {
//         if (err) {
//             console.error('Error during login query:', err.message);
//             return res.send('Error occurred during login: ' + err.message);
//         }

//         if (row) {
//             console.log('Login successful for user:', row);
//             res.redirect('/home');
//         } else {
//             console.log('Invalid username or password for user:', username);
//             res.send('Invalid username or password');
//         }
//     });
// });

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
