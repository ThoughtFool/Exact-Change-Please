const express = require('express');
const app = express();
const path = require("path");
const port = 8080;

app.use(express.static(path.join(__dirname, "client")));
app.get('/', (req, res) => {
    res.render("index");
});

app.post("/", (req, res) => {
    console.log(req.query);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))