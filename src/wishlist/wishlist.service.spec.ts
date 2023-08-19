import { Test, TestingModule } from '@nestjs/testing';

import { WishlistService } from './wishlist.service';

import { PrismaService } from '../prisma/prisma.service';

describe('WishlistService', () => {
  let service: WishlistService;

  const prismaMock = {
    wishlists: {
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  const wishlist = {
    userId: 'f8a5ded4-9247-44c2-a794-15aa5ff6fda1',
    productIds: [
      'd0fb1d0d-60d9-41b8-8613-c24eea6abba9',
      '38329235-492e-462a-b3cd-02d4cb0622d7',
    ],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WishlistService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get<WishlistService>(WishlistService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    it("should return the products from the user's wishlist ID", async () => {
      prismaMock.wishlists.findUnique.mockResolvedValue(wishlist);

      const result = await service.findOne(wishlist.userId);

      expect(result).toEqual(wishlist.productIds);
      expect(prismaMock.wishlists.findUnique).toHaveBeenCalledWith({
        where: {
          userId: wishlist.userId,
        },
      });
      expect(prismaMock.wishlists.findUnique).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array', async () => {
      const emptyWishlist = {
        ...wishlist,
        productIds: [],
      };
      prismaMock.wishlists.findUnique.mockResolvedValue(emptyWishlist);

      const result = await service.findOne(emptyWishlist.userId);

      expect(result).toEqual([]);
      expect(prismaMock.wishlists.findUnique).toHaveBeenCalledWith({
        where: {
          userId: emptyWishlist.userId,
        },
      });
      expect(prismaMock.wishlists.findUnique).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    it('should return the ids of the products from the record that was updated based on the ID', async () => {
      const updatedField = { productIds: [wishlist.productIds[0]] };
      const updatedWishlist = { ...wishlist, ...updatedField };
      prismaMock.wishlists.update.mockResolvedValue(updatedWishlist);

      const result = await service.update(updatedWishlist.userId, updatedField);

      expect(result).toEqual(updatedWishlist.productIds);
      expect(prismaMock.wishlists.update).toHaveBeenCalledWith({
        where: {
          userId: updatedWishlist.userId,
        },
        data: updatedField,
      });
      expect(prismaMock.wishlists.update).toHaveBeenCalledTimes(1);
    });
  });

  describe('delete', () => {
    it('should return deleted cart data', async () => {
      prismaMock.wishlists.delete.mockResolvedValue(wishlist);

      const result = await service.remove(wishlist.userId);

      expect(result).toEqual(wishlist);
      expect(prismaMock.wishlists.delete).toHaveBeenCalledWith({
        where: {
          userId: wishlist.userId,
        },
      });
      expect(prismaMock.wishlists.delete).toHaveBeenCalledTimes(1);
    });
  });
});
