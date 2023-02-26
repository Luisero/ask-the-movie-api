/*
  Warnings:

  - Added the required column `answer` to the `answers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "answers" ADD COLUMN     "answer" TEXT NOT NULL;
