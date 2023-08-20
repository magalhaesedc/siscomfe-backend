import express from "express"
import ProdutoController from "../controllers/produto.controller.js"

const router = express.Router()

router.get("/", ProdutoController.buscarProdutos)
router.get("/:id", ProdutoController.buscarProduto)
router.post("/", ProdutoController.inserirProduto)
router.put("/", ProdutoController.atualizarProduto)

export default router