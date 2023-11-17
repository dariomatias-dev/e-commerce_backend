-- CreateTable
CREATE TABLE "physicalPersonUser" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "phone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "roles" TEXT[],
    "termsOfUse" BOOLEAN NOT NULL,
    "receiveMessages" BOOLEAN NOT NULL,
    "refreshTokenId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "physicalPersonUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "legalPersonUser" (
    "id" TEXT NOT NULL,
    "fantasyName" TEXT NOT NULL,
    "corporateName" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "stateRegistration" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "termsOfUse" BOOLEAN NOT NULL,
    "receiveMessages" BOOLEAN NOT NULL,
    "refreshTokenId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "legalPersonUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refresh_token" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "refresh_token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wishlist" (
    "userId" TEXT NOT NULL,
    "productIds" TEXT[],

    CONSTRAINT "wishlist_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "cart" (
    "userId" TEXT NOT NULL,
    "productIds" TEXT[],

    CONSTRAINT "cart_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "NewsletterSubscribers" (
    "email" TEXT NOT NULL,

    CONSTRAINT "NewsletterSubscribers_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amountOfImages" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "categoryIds" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "orderDay" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orderItem" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "orderId" TEXT NOT NULL,

    CONSTRAINT "orderItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "physicalPersonUser_phone_key" ON "physicalPersonUser"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "physicalPersonUser_cpf_key" ON "physicalPersonUser"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "physicalPersonUser_rg_key" ON "physicalPersonUser"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "physicalPersonUser_email_key" ON "physicalPersonUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "physicalPersonUser_refreshTokenId_key" ON "physicalPersonUser"("refreshTokenId");

-- CreateIndex
CREATE UNIQUE INDEX "legalPersonUser_cnpj_key" ON "legalPersonUser"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "legalPersonUser_stateRegistration_key" ON "legalPersonUser"("stateRegistration");

-- CreateIndex
CREATE UNIQUE INDEX "legalPersonUser_cpf_key" ON "legalPersonUser"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "legalPersonUser_rg_key" ON "legalPersonUser"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "legalPersonUser_email_key" ON "legalPersonUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "legalPersonUser_phone_key" ON "legalPersonUser"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "legalPersonUser_refreshTokenId_key" ON "legalPersonUser"("refreshTokenId");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_token_token_key" ON "refresh_token"("token");

-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "product_name_key" ON "product"("name");

-- AddForeignKey
ALTER TABLE "physicalPersonUser" ADD CONSTRAINT "physicalPersonUser_refreshTokenId_fkey" FOREIGN KEY ("refreshTokenId") REFERENCES "refresh_token"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "legalPersonUser" ADD CONSTRAINT "legalPersonUser_refreshTokenId_fkey" FOREIGN KEY ("refreshTokenId") REFERENCES "refresh_token"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderItem" ADD CONSTRAINT "orderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
