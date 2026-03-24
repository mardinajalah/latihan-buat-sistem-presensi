-- CreateTable
CREATE TABLE `Anggota` (
    `kode_anggota` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `asal` VARCHAR(191) NOT NULL,
    `tanggal_lahir` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `tanggal_masuk` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tanggal_keluar` DATETIME(3) NULL,

    UNIQUE INDEX `Anggota_kode_anggota_key`(`kode_anggota`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Presensi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hari` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `jam_masuk` VARCHAR(191) NOT NULL,
    `jam_keluar` VARCHAR(191) NULL,
    `kodeAnggota` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Presensi_kodeAnggota_key`(`kodeAnggota`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Presensi` ADD CONSTRAINT `Presensi_kodeAnggota_fkey` FOREIGN KEY (`kodeAnggota`) REFERENCES `Anggota`(`kode_anggota`) ON DELETE RESTRICT ON UPDATE CASCADE;
