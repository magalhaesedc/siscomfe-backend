import express from "express"
import OfertaController from "../controllers/oferta.controller.js"

const router = express.Router()

router.get("/", OfertaController.buscarOfertas)
router.get("/produto/:idProduto", OfertaController.buscarOfertasProduto)
router.get("/melhores", OfertaController.buscarMelhoresOfertas)
router.get("/:id", OfertaController.buscarOferta)
router.post("/", OfertaController.inserirOferta)
router.put("/", OfertaController.atualizarOferta)
router.delete("/:id", OfertaController.excluirOferta)


export default router