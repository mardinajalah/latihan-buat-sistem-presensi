import { prisma } from '../libs/prisma';
import type { AnggotaResponse } from '../model/anggota.model';

export class RepositoryAnggota {
  public static async getAllDataAnggota() {
    return await prisma.anggota.findMany();
  }

  public static async createDataAnggota(dataAnggota: AnggotaResponse) {
    return await prisma.anggota.create({
      data: dataAnggota,
    });
  }
}
