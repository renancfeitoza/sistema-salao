const e = require("express");
const routes = require("./routes")
const app = e();

app.use(routes);

app.listen(3000, () => {
    console.log("Escutando na porta 3000")
})