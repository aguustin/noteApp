const mongoose = require('mongoose'); 

mongoose.connect('mongodb+srv://agustin:agustin@cluster0.wvsxw.mongodb.net/?retryWrites=true&w=majority')
.then(db => console.log('db is conected'))
.catch(err => console.log('error'));

