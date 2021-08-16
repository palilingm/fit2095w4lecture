const express = require('express');
const morgan = require('morgan');

const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//key-value
app.set('PORT', 8080);



//middlewares
app.use(morgan('tiny'));
app.use(requestRecevied);
app.use(addTS);
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));

// app.use((req, res, next) => {
//     req.week4TimeStamp = new Date().toISOString();
//     next();
// });

//get requests
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

//post requests
app.post('/adduser', (req, res) => {
    res.render('response.html', {
        weekNumber: 4
    });
});

//listen
app.listen(app.get('PORT'), () => {
    console.log(`We are listening on port ${app.get('PORT')}`);
});

//functions
function addTS(req, res, next) {
    req.week4TimeStamp = new Date().toISOString();
    console.log(`Time of this request is ${req.week4TimeStamp}`);
    next();
}

function requestRecevied(req, res, next) {
    console.log('Request is received');
    next();
}