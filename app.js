//Init express
const express = require('express');
const app = express();

//Port to use
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


//Routes imports
const usersRoutes = require('./routes/usersRoutes');
const remarksRoutes = require('./routes/remarksRoutes');
const answersRoutes = require('./routes/answersRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');

app.use('/answers', answersRoutes);
app.use('/remarks', remarksRoutes);
app.use('/users', usersRoutes);
app.use('/categories', categoriesRoutes);

//Controllers imports
const answersController = require('./controllers/answersController');
const usersController = require('./controllers/usersController');
const remarksController = require('./controllers/remarksController');
const categoriesController = require('./controllers/categoriesController');



