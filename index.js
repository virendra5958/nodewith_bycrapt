const express = require('express');
const dotenv = require ('dotenv');
const mongoose= require('mongoose');
const usersRouts= require('./routes/users');

dotenv.config();

const app =express();
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL ||'mongodb://localhost:27017/auth')
.then(()=> console.log('Database Connected Successfully'))
.catch((err) => console.log('Error connecting with Database', err));
// const mongoUrl = 'mongodb://localhost:27017/auth';
// mongoose.connect(mongoUrl)
// .then(() => {console.log('Mongo Connected');})
// .catch(err => {console.error('Connection error:', err);});
// mongoose.connection.on('disconnected', () => {
//   console.log('Mongo Disconnected');
// });


app.use("/api/v1/user",usersRouts);
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
