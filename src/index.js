const express = require('express');
const cors = require('cors')

const connectMongoDatabase = require('./database/mongoDB_index');
connectMongoDatabase();

const app = express();
app.use(express.json());
app.use(cors());

const routs = require('./routes/routes_index');
app.use('/api', routs);

app.listen(3000, () => {
    console.log('* Server Started on port 3000.');
});
