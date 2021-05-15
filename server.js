const express = require("express");

// express handlebars is the view template engine
const exphbs =  require('express-handlebars');

//initialize the application with express()
const app = express();
const port = process.env.PORT || 3280;

//express module has a method called engine()
// we name the handlebars as handlebars and set the default layout of the handlebars to the main page.
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

// set the view engine to the handlebars
app.set('view engine', 'handlebars');

app.use(express.static('public'));

//get method maps the routes to pages.
app.get('/', (req, res) => {

    res.render('home');
});

/*app.get('/about', (req, res) => {

    res.render('about.handlebars');
})*/

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});