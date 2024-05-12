const express = require("express");
const mysql = require("mysql2")
const app = express();
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const multer = require("multer");
const dotenv = require("dotenv");
dotenv.config();


//?server port
const port = 3000;


app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173"] }));




const connection = mysql.createConnection({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
  connectionLimit: 10,
});


// ? fectch data -register
app.post('/register', async (req, res) => {
  const { username, password, email ,role } = req.body;
  console.log(role);
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user data into the database
    connection.query(
      'INSERT INTO userinfo (username, password, email ,role) VALUES (?, ?, ? ,?)',
      [username, hashedPassword, email, role],
      (err, result) => {
        if (err) {
          console.error('Error inserting data into MySQL:', err);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          console.log('Data inserted into MySQL successfully:', result);
          res.json('Successfully registered');
        }
      }
    );
  } catch (error) {
    console.error('Error hashing password:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//? login
app.post('/login', async (req, res) => {
  const { email, password, role } = req.body;
  try {
    // ?Query the database to retrieve user data
    connection.query(
      'SELECT * FROM userinfo WHERE email = ?', [email,role],
      async (err, result) => {
        if (err) {
          console.error('Error querying data from MySQL:', err);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          if (result.length > 0) {
            // ?User found, compare hashed password
            const user = result[0];
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
              // ?Generate JWT token
              const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
                expiresIn: '1h'
              });
              res.json({ message: 'Login successful', token, email: user.email });
              console.log('Data retrieved from MySQL successfully:', user);
            } else {
              res.status(401).json({ error: 'Invalid username or password' });
            }
          } else {
            res.status(401).json({ error: 'Invalid username or password' });
          }
        }
      }
    );
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




// ? upload file 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
   return cb(null, "./file");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`); 
  }
});

const upload = multer({storage });

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { fromData } = req.file; // Changed . to filename
    const { role } = req.body;
    console.log(req.body);
    console.log(req.file);



    const [result] = await connection.query(
      'INSERT INTO files (filename, role) VALUES (?, ?)',
      [fromData, filePath, mimetype ,role]
    );

    res.status(200).json({ message: 'File uploaded successfully', fileId: result.insertId });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//? delivery
app.post("/delivery", async(req,res)=>{
  try{
    const { id ,name ,status,address,  imageUrl} = req.body;
  const res =   await connection.query("INSERT INTO delivery (id ,name,status,address,  imageUrl) VALUES (?,?,?,?)",[ id ,name,status,address,  imageUrl] );
    console.log("report succssfully",res);
  }
  catch(error){
    console.log("report succssfully",error);
  }

})




//? to database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});


//? server connection
app.listen(port, () => {
  console.log(`connected to port ${port}`)
});
