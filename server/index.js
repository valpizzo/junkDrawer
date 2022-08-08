const axios = require('axios');
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(express.urlencoded());


app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);