import express from "express"
import OfertaController from "../controllers/oferta.controller.js"

const router = express.Router()

router.get("/", OfertaController.buscarOfertas)

export default router