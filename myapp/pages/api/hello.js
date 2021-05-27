export default (req, res) => {
    console.log("the request...");
    console.log("this is all ran on the server (in a lambda)");
    const request = require('request');

    request('https://6obli1j4bb.execute-api.us-west-2.amazonaws.com/Prod/hello', { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        console.log("body: " + JSON.stringify(body));
        res.status(200).json({ text: JSON.stringify(body) });
    });
}