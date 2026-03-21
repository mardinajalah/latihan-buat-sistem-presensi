# PRD
## Dashboard
- card jumlah anggota
- card jumlah anggota hadir hari ini
- card jumlah anggota absen hari ini

## Anggota
- list anggota
- form input anggota
- tombol edit dan hapus anggota

## Presensi
- form input presensi

<br />
<br />

# ERD
## Tabel Anggota
- kode_anggota
- nama
- asal
- tanggal_lahir
- status (aktif / non aktif)
- tanggal_masuk (pertama kali data di buat)
- tanggal_keluar (terisi jika status berubah menjadi non aktif)

## Tabel Presensi
- id
- hari
- status (hadir, izin, absen)
- jam_masuk (pertama kali data di buat)
- jam_keluar (terisi jika melakukan presensi yang kedua)

<br />

fk_tabel_presensi_ke_tabel_anggota