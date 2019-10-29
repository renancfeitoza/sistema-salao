const e = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const app = e();

mongoose.connect("mongodb+srv://sistemasalao:sistemaprotect@sistemasalao-zsouo.mongodb.net/sistemasalao?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
app.use(routes);

app.listen(3000, () => {
    console.log("Escutando na porta 3000")
})