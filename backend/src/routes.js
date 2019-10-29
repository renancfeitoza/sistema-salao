const e = require("express");
const routes = e.Router();

routes.get("/", (req,res) => {
    res.send("<h1>teste</h1>")
});

module.exports = routes;