// //sqlite3 database
// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('./test.db');

// // 111111

// db.serialize(() => {
//     // Create necessary tables if they don't exist
//     db.run('CREATE TABLE IF NOT EXISTS auth (id INTEGER PRIMARY KEY, user_id INTEGER, user_name TEXT, password TEXT)');
//     db.run('CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY, first_name TEXT, middle_name TEXT, last_name TEXT, dob DATE, photo TEXT, user_name TEXT, password TEXT)');
//     db.run('CREATE TABLE IF NOT EXISTS role (id INTEGER PRIMARY KEY, role TEXT)');
//     db.run('CREATE TABLE IF NOT EXISTS parties (id INTEGER PRIMARY KEY, logo BLOB, party_name TEXT)');
//     db.run('CREATE TABLE IF NOT EXISTS positions (id INTEGER PRIMARY KEY, position TEXT)');
//     db.run('CREATE TABLE IF NOT EXISTS candidate (id INTEGER PRIMARY KEY, positions_id INTEGER, photo BLOB, party_id INTEGER)');
//     db.run('CREATE TABLE IF NOT EXISTS votes (id INTEGER PRIMARY KEY, candidate_id INTEGER, votes INTEGER)');
  
//     // Log all rows in the auth table to the console
//     db.each('SELECT * FROM auth', (err, row) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log(row);
//       }
//     });
//   });

//     app.use(express.static("public")); // Serve static files from the "public" directory
//     app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
//     app.set("view engine", "ejs"); // Set EJS as the templating engine

// // Render the voter registration form
// app.get("/", (req, res) => {
//   res.render("voters-registration.ejs");
// });

// // Handle voter registration form submission
// app.post("/voter-registration", upload.single('user-img'), (req, res) => {
//   const { fname, mname, lname, dob, username, password } = req.body; // Extract form data from the request body
//   const photoPath = req.file ? path.join('/images', req.file.filename) : null; // Get the path of the uploaded photo

//   // Open a new database connection
//   const db = new sqlite3.Database('./test.db');
//   const query = 'INSERT INTO user (photo, first_name, middle_name, last_name, dob, user_name, password) VALUES (?, ?, ?, ?, ?, ?, ?)'; // SQL query to insert data into the user table
//   db.run(query, [fname, mname, lname, dob, photoPath, username, password], function(err) {
//     if (err) {
//       console.error(err); // Log any errors
//       res.status(500).send("Error inserting data into the database."); // Send an error response
//     } else {
//       res.render("login.ejs"); // Render the login page on success
//     }
//     db.close(); // Close the database connection
//   });
// });

// //ends

// // 1111111





// const election = ('CREATE TABLE IF NOT EXISTS election(id INT AUTO_INCREMENT, username TEXT NOT NULL, password VARCHAR(30) NOT NULL, user_id INT) NOT NULL');
// const roles = ('CREATE TABLE IF NOT EXISTS roles(id INT AUTO_INCREMENT, row NOT NULL)');
// const user = ('CREATE TABLE IF NOT EXISTS election(id INT AUTO_INCREMENT, firstname TEXT NOT NULL, middle name TEXT, lastname TEXT NOT NULL, date of birth (VARCHAR) NOT NULL, role_id INT NOT NULL, photo BLOB NOT NULL)');
// const parties =('CREATE TABLE IF NOT EXISTS roles(id INT AUTO_INCREMENT, party TEXT, logo BLOB)');
// const positions =('CREATE TABLE IF NOT EXISTS position(id INT AUTO_INCREMENT, position TEXT NOT NULL)');
// const candidates =('CREATE TABLE IF NOT EXISTS candidates(id INT AUTO_INCREMENT, firstname TEXT NOT NULL, middle name TEXT, lastname TEXT NOT NULL, position_id VARCHAR(30) NOT NULL, party_id VARCHAR(30)NOT NULL, poto BLOB NOT NULL)');
// const votes =('CREATE TABLE IF NOT EXISTS candidates(id INT AUTO_INCREMENT, candidanes_id VARSHAR(30) NOT NULL, votes VARCHER(30) NOT NULL');

// const sqlite3 = require('sqlite3').verbose();

// Connect to the SQLite database
// const db = new sqlite3.Database(':memory:'); // In-memory database for testing; replace with file path for persistent database

// // Create tables
// db.serialize(() => {
//     // Create election table
//     db.run(`CREATE TABLE IF NOT EXISTS election (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         username TEXT NOT NULL,
//         password VARCHAR(30) NOT NULL,
//         user_id INTEGER NOT NULL
//     )`);

//     // Create roles table
//     db.run(`CREATE TABLE IF NOT EXISTS roles (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         row TEXT NOT NULL
//     )`);

//     // Create users table
//     db.run(`CREATE TABLE IF NOT EXISTS users (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         firstname TEXT NOT NULL,
//         middlename TEXT,
//         lastname TEXT NOT NULL,
//         date_of_birth VARCHAR(30) NOT NULL,
//         role_id INTEGER NOT NULL,
//         photo BLOB NOT NULL
//     )`);

//     // Create parties table
//     db.run(`CREATE TABLE IF NOT EXISTS parties (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         party TEXT,
//         logo BLOB
//     )`);

//     // Create positions table
//     db.run(`CREATE TABLE IF NOT EXISTS positions (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         position TEXT NOT NULL
//     )`);

//     // Create candidates table
//     db.run(`CREATE TABLE IF NOT EXISTS candidates (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         firstname TEXT NOT NULL,
//         middlename TEXT,
//         lastname TEXT NOT NULL,
//         position_id INTEGER NOT NULL,
//         party_id INTEGER NOT NULL,
//         photo BLOB NOT NULL
//     )`);

//     // Create votes table
//     db.run(`CREATE TABLE IF NOT EXISTS votes (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         candidate_id INTEGER NOT NULL,
//         votes INTEGER NOT NULL
//     )`);

//     console.log('Tables created successfully.');

//     // Close the database connection
//     db.close(err => {
//         if (err) {
//             return console.error(err.message);
//         }
//         console.log('Closed the database connection.');
//     });
// });



// CREATE TABLE courses (
//     course_id INT AUTO_INCREMENT PRIMARY KEY,
//     course_name VARCHAR(50) NOT NULL
// );


// db.serialize(() => {
// //   db.run('CREATE TABLE lorem (info TEXT)')
// //   const stmt = db.prepare('INSERT INTO lorem VALUES (?)')

// //   for (let i = 0; i < 10; i++) {
// //     stmt.run(`Ipsum ${i}`)
// //   }

// //   stmt.finalize()
// // bd.run(election);

//     // 1 Create election table
//     db.run(`CREATE TABLE IF NOT EXISTS election (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         username TEXT NOT NULL,
//         password VARCHAR(30) NOT NULL,
//         user_id INTEGER NOT NULL
//     )`);

//     // 2 Create roles table
//     db.run(`CREATE TABLE IF NOT EXISTS roles (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         row TEXT NOT NULL
//     )`);

//     // 3 Create users table
//     db.run(`CREATE TABLE IF NOT EXISTS users (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         firstname TEXT NOT NULL,
//         middlename TEXT,
//         lastname TEXT NOT NULL,
//         date_of_birth VARCHAR(30) NOT NULL,
//         role_id INTEGER NOT NULL,
//         photo BLOB NOT NULL
//     )`);

//     // 4 Create parties table
//     db.run(`CREATE TABLE IF NOT EXISTS parties (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         party TEXT,
//         logo BLOB
//     )`);

//     // 5 Create positions table
//     db.run(`CREATE TABLE IF NOT EXISTS positions (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         position TEXT NOT NULL
//     )`);

//     // 6 Create candidates table
//     db.run(`CREATE TABLE IF NOT EXISTS candidates (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         firstname TEXT NOT NULL,
//         middlename TEXT,
//         lastname TEXT NOT NULL,
//         position_id INTEGER NOT NULL,
//         party_id INTEGER NOT NULL,
//         photo BLOB NOT NULL
//     )`);

//     // 7 Create votes table
//     db.run(`CREATE TABLE IF NOT EXISTS votes (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         candidate_id INTEGER NOT NULL,
//         votes INTEGER NOT NULL
//     )`);
    
//     //8 crate voter registration  table
//     db.run(`CREATE TABLE IF NOT EXISTS registration (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         photo BLOB NOT NULL,
//         firstname TEXT NOT NULL,
//         middlename TEXT,
//         lastname TEXT NOT NULL,
//         dob TEXT NOT NULL,
//         username TEXT NOT NULL,
//         password VARCHAR(30) NOT NULL
        
//     )`);

// // // Serve the HTML form
// // app.get('/voter-registration', (req, res) => {
// //     res.sendFile(path.join(__dirname, 'public', 'voter-registration.ejs'));
// // });

// // // Handle form submission
// // app.post('/register', upload.single('photo'), (req, res) => {
// //     const { first_name, middle_name, last_name, dob } = req.body;
// //     const photo = req.file ? req.file.filename : null;

// //     if (!photo) {
// //         return res.status(400).send('Photo upload failed');
// //     }

// //     const insertUser = `INSERT INTO users (photo, firstname, middlename, lastname, dob, username, password) VALUES (?, ?, ?, ?, ?, ?, ?)`;
// //     db.run(insertUser, [photo, first_name, middle_name, last_name, dob, username, password], function (err) {
// //         if (err) {
// //             console.error('Error inserting user:', err.message);
// //             return res.status(500).send('Error inserting user');
// //         }
// //         res.send('User registered successfully');
// //     });
// // });



//   db.each('SELECT * FROM auth', (err, row) => {
//     console.log(row)
//   })
// })
// console.log(`${row.id}: ${row.info}`)


// const user = { first_name, middle_name, last_name, dob, username, password };
//     users_data.push(user);

// let users_data = []; // Array to store user data

// app.post('/login', (req, res) => {
//     const { name, password } = req.body;

//     const userDetail = users_data.find(user => user.name === name && user.password === password);

//     if (userDetail) {
//         res.render('dashboard', { name: userDetail.name });
//     } else {
//         res.send('Invalid email or password.');
//     }
// });