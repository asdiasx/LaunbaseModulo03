const express = require("express");
const nunjucks = require("nunjucks");

const links = require("./portfolio_items");
const menu = require("./menu");
const companyData = require("./company");

const server = express();

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: true,
    noCache: true
});

server.get("/", (req, res) => res.render("about", { menu, companyData }));

server.get("/portfolio", (req, res) =>
    res.render("portfolio", { links, menu, companyData })
);

server.use((req, res) => res.status(404).render("not-found", { menu }));

server.listen(5000, "0.0.0.0", () => console.log("Server Running"));