const express = require("express");
const cors = require("cors");
const axios = require("axios");

if (process.env.NODE_ENV === "development") {
    console.log("In development mode");
    require("dotenv").config()
}

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    if (req.query.url) {
        axios.get(req.query.url)
            .then(data => res.send(data.data))
    } else {
        res.send('Hello World!!!')
    }
})

app.listen(5001, () => {
    console.log("Listening on PORT: 5001")
})

// test url https://developer.nps.gov/api/v1/parks?api_key=l5gqtNnz6NdndT4be4PEiQaCwVjE0KmhGfmaNG1y