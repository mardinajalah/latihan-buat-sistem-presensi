import { ControllerAnggota } from "../controller/anggota.controller";
import express from "express"

const routeAnggota = express.Router()

routeAnggota.get("/anggota", ControllerAnggota.getAllAnggota)

export default routeAnggota