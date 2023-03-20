import { Router } from "express";
import { agregarCelular, deleteCelular, listarCelular, renderCelular, statusCelular, traerCelular, updateCelular } from "../controllers/celularController";

const router = Router();

// Celular
router.get("/", renderCelular);

router.post("/celular/agregar", agregarCelular);

router.get("/celular/agregar", listarCelular);

router.get("/update/:id", traerCelular);

router.post("/update/:id", updateCelular);

router.get("/delete/:id", deleteCelular);

router.get("/status/:id", statusCelular);


export default router;
