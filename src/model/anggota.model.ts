export type AnggotaResponse = {
  kode_anggota: string
  nama: string
  asal: string
  tanggal_lahir: string
  status: string
  tanggal_masuk?: Date
  tanggal_keluar?: Date | null
}