import express from "express"
import ProdutoController from "../controllers/produto.controller.js"

const router = express.Router()

router.get("/", ProdutoController.buscarProdutos)

router.post("/", ProdutoController.inserirProduto)

export default router