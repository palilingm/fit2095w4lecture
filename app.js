const express = require('express');
const morgan = require('morgan');

const app = express();

//key-value
app.set('PORT', 8080);

app.listen(app.get('PORT'), () => {
    console.log(`We are listening on port ${app.get('PORT')}`);
});