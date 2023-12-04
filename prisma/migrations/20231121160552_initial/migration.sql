-- CreateTable
CREATE TABLE "personalAccount" (
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

    CONSTRAINT "personalAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "businessAccount" (
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
    "roles" TEXT[],
    "termsOfUse" BOOLEAN NOT NULL,
    "receiveMessages" BOOLEAN NOT NULL,
    "refreshTokenId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "businessAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refreshToken" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "refreshToken_pkey" PRIMARY KEY ("id")
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
CREATE UNIQUE INDEX "personalAccount_phone_key" ON "personalAccount"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "personalAccount_cpf_key" ON "personalAccount"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "personalAccount_rg_key" ON "personalAccount"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "personalAccount_email_key" ON "personalAccount"("email");

-- CreateIndex
CREATE UNIQUE INDEX "personalAccount_refreshTokenId_key" ON "personalAccount"("refreshTokenId");

-- CreateIndex
CREATE UNIQUE INDEX "businessAccount_cnpj_key" ON "businessAccount"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "businessAccount_stateRegistration_key" ON "businessAccount"("stateRegistration");

-- CreateIndex
CREATE UNIQUE INDEX "businessAccount_cpf_key" ON "businessAccount"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "businessAccount_rg_key" ON "businessAccount"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "businessAccount_email_key" ON "businessAccount"("email");

-- CreateIndex
CREATE UNIQUE INDEX "businessAccount_phone_key" ON "businessAccount"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "businessAccount_refreshTokenId_key" ON "businessAccount"("refreshTokenId");

-- CreateIndex
CREATE UNIQUE INDEX "refreshToken_token_key" ON "refreshToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "product_name_key" ON "product"("name");

-- AddForeignKey
ALTER TABLE "personalAccount" ADD CONSTRAINT "personalAccount_refreshTokenId_fkey" FOREIGN KEY ("refreshTokenId") REFERENCES "refreshToken"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "businessAccount" ADD CONSTRAINT "businessAccount_refreshTokenId_fkey" FOREIGN KEY ("refreshTokenId") REFERENCES "refreshToken"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderItem" ADD CONSTRAINT "orderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
