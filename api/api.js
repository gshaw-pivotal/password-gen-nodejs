const express = require('express');
const app = express();
const {validationResult, body, matchedData} = require('express-validator');
const bodyParser = require('body-parser');

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({  extended: true }));

const checkPasswordLength = () => body('length').trim().isNumeric();
const checkStartsWith = () => body('startWithLetterOrNumber').trim().isBoolean();

app.post('/generate', checkPasswordLength(), checkStartsWith(), async function (req, res) {
    const errors = validationResult(req);

    // The request has failed validation checks, return bad request and the errors
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    return res.status(200).json('').end();
})

exports.app = app;