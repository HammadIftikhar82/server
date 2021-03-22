const express = require("express");

const app = express();

app.get("/name", (req, res) => {
    res.send("Hammad");
});

app.listen();
