/*
  Warnings:

  - A unique constraint covering the columns `[subdomain]` on the table `Business` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Business_subdomain_key" ON "Business"("subdomain");
