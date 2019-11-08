const e = require('express');
const routes = e.Router();
const SessionController = require('./Controllers/SessionController')
const AgendaController = require('./Controllers/AgendaController')

routes.post("/agenda", AgendaController.store);
routes.post("/session", SessionController.store)
routes.post("/login", SessionController.show)

module.exports = routes;