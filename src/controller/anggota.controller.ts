import type { Response, Request } from "express"
import { RepositoryAnggota } from "../repository/anggota.repository"

export class ControllerAnggota {
  public static async getAllAnggota(req: Request, res:Response) {
   try {
    const data = await RepositoryAnggota.getAllDataAnggota()
    res.status(200).json({
      data
    })
   } catch (error) {
    console.log(error)
   }
  }
}