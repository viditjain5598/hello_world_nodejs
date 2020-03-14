const app = require("express")();

app.get("/", (req, res) => res.send("Hello world!"))

app.listen(9999, ()=>console.log("Listeing on 9999"))
