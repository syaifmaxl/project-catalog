/*
  Warnings:

  - You are about to drop the column `product_id` on the `discounts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `discounts` DROP FOREIGN KEY `discounts_product_id_fkey`;

-- DropIndex
DROP INDEX `discounts_product_id_fkey` ON `discounts`;

-- AlterTable
ALTER TABLE `discounts` DROP COLUMN `product_id`;

-- CreateTable
CREATE TABLE `product_discounts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `discount_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `product_discounts` ADD CONSTRAINT `product_discounts_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_discounts` ADD CONSTRAINT `product_discounts_discount_id_fkey` FOREIGN KEY (`discount_id`) REFERENCES `discounts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
