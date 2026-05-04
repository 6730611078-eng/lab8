const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const itemRoutes = require('./routes/itemRoutes');
app.use('/', itemRoutes);

app.listen(8080, () => {
    console.log('Server runs at http://localhost:8080');
});