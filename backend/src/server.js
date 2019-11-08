const e = require("express");
const routes = require("./routes")
const mongoose = require("mongoose")
const app = e();

mongoose.connect('mongodb+srv://salao-sistema:salaosistema2019@salao-oseos.mongodb.net/salao?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })

app.use(e.json());
app.use(routes);

app.listen(3000, () => {
    console.log("Escutando na porta 3000")
})