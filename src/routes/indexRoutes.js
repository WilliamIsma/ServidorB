import { Router } from "express";

const router = Router()

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/update", (req, res) => {
    res.render("editar");
});

export default router;