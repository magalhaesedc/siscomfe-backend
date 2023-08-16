import express from "express"
import OfertaRouter from "./routes/oferta.route.js"

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("SISCOMFE Back-end com NodeJs rodando com sucesso!")
});

app.use("/oferta", OfertaRouter)

app.listen(3000, () => console.log("API Started! Port 3000 in http://localhost:3000"))