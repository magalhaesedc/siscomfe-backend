import express from "express"
import SupermercadoController from "../controllers/supermercado.controller.js"

const router = express.Router()

router.get("/", SupermercadoController.buscarSupermercados)

router.post("/", SupermercadoController.inserirSupermercado)

export default router