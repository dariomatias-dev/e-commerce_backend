import { Test, TestingModule } from '@nestjs/testing';

import { CartService } from './cart.service';

import { PrismaService } from '../prisma/prisma.service';

describe('CartService', () => {
  let service: CartService;

  const prismaMock = {
    carts: {
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  const cart = {
    userId: 'f8a5ded4-9247-44c2-a794-15aa5ff6fda1',
    productIds: [
      'd0fb1d0d-60d9-41b8-8613-c24eea6abba9',
      '38329235-492e-462a-b3cd-02d4cb0622d7',
    ],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CartService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get<CartService>(CartService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    it("should return the products from the user's cart ID", async () => {
      prismaMock.carts.findUnique.mockResolvedValue(cart);

      const result = await service.findOne(cart.userId);

      expect(result).toEqual(cart.productIds);
      expect(prismaMock.carts.findUnique).toHaveBeenCalledWith({
        where: { userId: cart.userId },
      });
      expect(prismaMock.carts.findUnique).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array', async () => {
      const emptyCart = { ...cart, productIds: [] };
      prismaMock.carts.findUnique.mockResolvedValue(emptyCart);

      const result = await service.findOne(emptyCart.userId);

      expect(result).toEqual([]);
      expect(prismaMock.carts.findUnique).toHaveBeenCalledWith({
        where: { userId: emptyCart.userId },
      });
      expect(prismaMock.carts.findUnique).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    it('should return the ids of the products from the record that was updated based on the ID', async () => {
      const updatedField = { productIds: [cart.productIds[0]] };
      const updatedCart = { ...cart, ...updatedField };
      prismaMock.carts.update.mockResolvedValue(updatedCart);

      const result = await service.update(cart.userId, updatedField);

      expect(result).toEqual(updatedCart.productIds);
      expect(prismaMock.carts.update).toHaveBeenCalledWith({
        where: {
          userId: updatedCart.userId,
        },
        data: updatedField,
      });
      expect(prismaMock.carts.update).toHaveBeenCalledTimes(1);
    });
  });

  describe('remove', () => {
    it('should return deleted cart data', async () => {
      prismaMock.carts.delete.mockResolvedValue(cart);

      const result = await service.remove(cart.userId);

      expect(result).toEqual(cart);
      expect(prismaMock.carts.delete).toHaveBeenCalledWith({
        where: { userId: cart.userId },
      });
      expect(prismaMock.carts.delete).toHaveBeenCalledTimes(1);
    });
  });
});
