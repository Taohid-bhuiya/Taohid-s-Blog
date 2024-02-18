const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

//listen for requests
app.listen(3001);

//middleware & static files
app.use(express.static('public'));   //for linking css file
app.use(morgan('dev'));

app.get('/', (req, res) => {
    // res.sendFile('./views/index.html', {root: __dirname});
    const blogs = [
        {title: 'Dylan is good',snippet: 'Dylan is my co-worker and he is a good person, I really admire it.'},
        {title: 'Kayleigh is cool',snippet: 'Kayleigh is my co-worker and she is a cool person, I really admire it.'},
        {title: 'Life is a journey',snippet: 'Our life is a journey and the path is different for each people. For someone it is difficult and for some people its easier'},
    ];
    res.render('index', {title: "About", blogs});
});

app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', {root: __dirname});
    res.render('about', {title: "About"});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: "Create a new blog"});
});

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

//404 page
app.use((req, res) => {
    res.render('404', {title: "Home"});
    // res.status(404).sendFile('./views/404.html', {root: __dirname});
})