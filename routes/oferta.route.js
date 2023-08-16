import express from "express"
import OfertaController from "../controllers/oferta.controller.js"

const router = express.Router()

router.get("/", OfertaController.getOfertas)

export default router