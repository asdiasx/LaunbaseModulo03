const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const videos = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");
nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/13187501?s=460&v=4",
        name: "Adriano Dias",
        role: "Self-Taught Programmer",
        description: 'Programador Full stack em desenvolvimento. Aluno na <a href="https://rocketseat.com.br" target="_blank">RocketSeat</a>.',
        links: [
            { name: "GitHub", url: "https://github.com/asdiasx" },
            { name: "Twitter", url: "https://twitter.com/Dragodian" },
            { name: "Linkedin", url: "https://www.linkedin.com/in/adriano-d-6783a2/" }
        ]
    };

    return res.render("about", { about });
});

server.get("/portfolio", function(req, res) {
    return res.render("portfolio", { items: videos });
});

server.listen(5000, function() {
    console.log("server is running");
});