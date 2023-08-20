import express from "express"
import SupermercadoController from "../controllers/supermercado.controller.js"

const router = express.Router()

router.get("/", SupermercadoController.buscarSupermercados)
router.get("/:id", SupermercadoController.buscarSupermercado);
router.post("/", SupermercadoController.inserirSupermercado)
router.put("/", SupermercadoController.atualizarSupermercado);

export default router