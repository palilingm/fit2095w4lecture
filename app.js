const express = require("express");
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(function (req, res, next) {
    req.unitCode = "FIT2095";
    req.weekNumber = 4;
    next();
});
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

function findMax(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/findmax', (req, res) => {
    let value1 = parseInt(req.body.value1);
    let value2 = parseInt(req.body.value2);
    res.render('response.html', {maxValue: findMax(value1, value2)});
});

app.listen(8080);