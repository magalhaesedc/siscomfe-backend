import express from "express"
import cors from "cors";
import OfertaRouter from "./routes/oferta.route.js"
import ProdutoRouter from "./routes/produto.route.js"
import SupermercadoRouter from "./routes/supermercado.route.js"

const app = express()
app.use(express.json())

app.use(cors());

app.get("/", (req, res) => {
    res.send("SISCOMFE Back-end com NodeJs rodando com sucesso!")
});

app.use("/oferta", OfertaRouter)

app.use("/produto", ProdutoRouter)

app.use("/supermercado", SupermercadoRouter)

app.listen(4000, () => console.log("API Started! Port 4000 in http://localhost:4000"))