const express = require("express");
const nunjucks = require("nunjucks");

const links = require("./data");
const menu = require("./menu");

const server = express();

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: true
});

server.get("/", (req, res) => res.render("about", { menu }));

server.get("/courses", (req, res) => res.render("courses", { links, menu }));

server.use((req, res) => res.status(404).render("not-found", { menu }));

server.listen(5000, "0.0.0.0", () => console.log("Server Running"));