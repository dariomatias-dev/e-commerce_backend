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

  const wishlistOne = {
    userId: 'f8a5ded4-9247-44c2-a794-15aa5ff6fda1',
    productIds: [
      'd0fb1d0d-60d9-41b8-8613-c24eea6abba9',
      '38329235-492e-462a-b3cd-02d4cb0622d7',
    ],
  };

  const wishlistTwo = {
    userId: '57e99e52-753e-4da7-8a67-a6286edd2ee4',
    productIds: [
      '0c03de01-7719-4403-9021-a330da5934f5',
      '7dde05da-62b3-4254-ab72-1b78863a06e1',
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
    it('should return the products from the cart ID of the first wishlist', async () => {
      prismaMock.wishlists.findUnique.mockResolvedValue(wishlistOne);

      const result = await service.findOne(wishlistOne.userId);

      expect(result).toEqual(wishlistOne.productIds);
      expect(prismaMock.wishlists.findUnique).toHaveBeenCalledWith({
        where: {
          userId: wishlistOne.userId,
        },
      });
      expect(prismaMock.wishlists.findUnique).toHaveBeenCalledTimes(1);
    });

    it("should return an empty array from the first user's wishlist", async () => {
      const emptyWishlist = {
        ...wishlistOne,
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

    it('should return the products from the cart ID of the second wishlist', async () => {
      prismaMock.wishlists.findUnique.mockResolvedValue(wishlistTwo);

      const result = await service.findOne(wishlistTwo.userId);

      expect(result).toEqual(wishlistTwo.productIds);
      expect(prismaMock.wishlists.findUnique).toHaveBeenCalledWith({
        where: {
          userId: wishlistTwo.userId,
        },
      });
      expect(prismaMock.wishlists.findUnique).toHaveBeenCalledTimes(1);
    });

    it("should return an empty array from the first user's wishlist", async () => {
      const emptyWishlistTwo = {
        ...wishlistTwo,
        productIds: [],
      };
      prismaMock.wishlists.findUnique.mockResolvedValue(emptyWishlistTwo);

      const result = await service.findOne(emptyWishlistTwo.userId);

      expect(result).toEqual(emptyWishlistTwo.productIds);
      expect(prismaMock.wishlists.findUnique).toHaveBeenCalledWith({
        where: {
          userId: emptyWishlistTwo.userId,
        },
      });
      expect(prismaMock.wishlists.findUnique).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    it('should return the ids of the products in the record that was updated based on the ID of the first wishlist', async () => {
      const updatedField = { productIds: [wishlistOne.productIds[0]] };
      const updatedWishlist = {
        ...wishlistOne,
        ...updatedField,
      };
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

    it('should return an empty array corresponding to the ids of the products in the record that were updated based on the first wishlist ID', async () => {
      const updatedField = { productIds: [] };
      const updatedWishlistOne = {
        ...wishlistOne,
        productIds: [],
      };
      prismaMock.wishlists.update.mockResolvedValue(updatedWishlistOne);

      const result = await service.update(
        updatedWishlistOne.userId,
        updatedField,
      );

      expect(result).toEqual(updatedWishlistOne.productIds);
      expect(prismaMock.wishlists.update).toHaveBeenCalledWith({
        where: {
          userId: updatedWishlistOne.userId,
        },
        data: updatedField,
      });
      expect(prismaMock.wishlists.update).toHaveBeenCalledTimes(1);
    });
  });

  describe('remove', () => {
    it('should return the wishlist from the first wishlist', async () => {
      prismaMock.wishlists.delete.mockResolvedValue(wishlistOne);

      const result = await service.remove(wishlistOne.userId);

      expect(result).toEqual(wishlistOne);
      expect(prismaMock.wishlists.delete).toHaveBeenCalledWith({
        where: {
          userId: wishlistOne.userId,
        },
      });
      expect(prismaMock.wishlists.delete).toHaveBeenCalledTimes(1);
    });

    it('should return a wishlist with an empty array in the productIds field for the first user', async () => {
      const emptyWishlistOne = {
        ...wishlistOne,
        productIds: [],
      };
      prismaMock.wishlists.delete.mockResolvedValue(emptyWishlistOne);

      const result = await service.remove(emptyWishlistOne.userId);

      expect(result).toEqual(emptyWishlistOne);
      expect(prismaMock.wishlists.delete).toHaveBeenCalledWith({
        where: {
          userId: emptyWishlistOne.userId,
        },
      });
      expect(prismaMock.wishlists.delete).toHaveBeenCalledTimes(1);
    });
  });
});
