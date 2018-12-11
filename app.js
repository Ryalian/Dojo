const express = require('express');
const port = 3001;
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/the-dojo/build')));

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/the-dojo/build/index.html'); 
})


app.listen(port, function () {
    console.log("Server is running on "+ port +" port");
});