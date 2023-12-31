import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { CategoryService } from './category.service';

import { categorySelection } from './selections/category.selection';

import { PrismaService } from '../prisma/prisma.service';

describe('CategoryService', () => {
  let service: CategoryService;

  const prismaMock = {
    categories: {
      create: jest.fn(),
      findUnique: jest.fn(),
      findMany: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  const categoryOne: Prisma.CategoriesCreateInput = {
    id: 'bf565cbb-1f85-49c4-9292-ccff1d2bbe3e',
    name: 'Processadores',
  };

  const categoryTwo: Prisma.CategoriesCreateInput = {
    id: 'f5f513f6-4172-4a00-87a0-d03d8bae2fa2',
    name: 'Placas de Vídeo',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoryService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should return user number one created', async () => {
      prismaMock.categories.create.mockResolvedValue(categoryOne);

      const result = await service.create(categoryOne);

      expect(result).toEqual(categoryOne);
      expect(prismaMock.categories.create).toHaveBeenCalledWith({
        select: categorySelection,
        data: categoryOne,
      });
      expect(prismaMock.categories.create).toHaveBeenCalledTimes(1);
    });

    it('should return user number two created', async () => {
      prismaMock.categories.create.mockResolvedValue(categoryTwo);

      const result = await service.create(categoryTwo);

      expect(result).toEqual(categoryTwo);
      expect(prismaMock.categories.create).toHaveBeenCalledWith({
        select: categorySelection,
        data: categoryTwo,
      });
      expect(prismaMock.categories.create).toHaveBeenCalledTimes(1);
    });
  });

  describe('findOne', () => {
    it('should return a user based on ID', async () => {
      prismaMock.categories.findUnique.mockResolvedValue(categoryOne);

      const result = await service.findOne(categoryOne.id);

      expect(result).toEqual(categoryOne);
      expect(prismaMock.categories.findUnique).toHaveBeenCalledWith({
        where: {
          id: categoryOne.id,
        },
        select: categorySelection,
      });
      expect(prismaMock.categories.findUnique).toHaveBeenCalledTimes(1);
    });

    it('should return an error for not having found the category', async () => {
      const categoryId = 'e167d636-eecc-4ca9-9cde-9676b8c6b4d4';
      prismaMock.categories.findUnique.mockResolvedValue(null);

      await expect(service.findOne(categoryId)).rejects.toThrow(
        NotFoundException,
      );
      expect(prismaMock.categories.findUnique).toHaveBeenCalledWith({
        where: { id: categoryId },
        select: categorySelection,
      });
      expect(prismaMock.categories.findUnique).toHaveBeenCalledTimes(1);
    });
  });

  describe('findAll', () => {
    it('should return all categories', async () => {
      prismaMock.categories.findMany.mockResolvedValue([
        categoryOne,
        categoryTwo,
      ]);

      const result = await service.findAll();

      expect(result).toEqual([categoryOne, categoryTwo]);
      expect(prismaMock.categories.findMany).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    it('should return the category ID updated with the data passed', async () => {
      const updatedField = {
        name: 'Processadores',
      };
      const updatedCategory = {
        ...categoryOne,
        ...updatedField,
      };
      prismaMock.categories.update.mockResolvedValue(updatedCategory);

      const result = await service.update(updatedCategory.id, updatedField);

      expect(result).toEqual(updatedCategory);
      expect(prismaMock.categories.update).toHaveBeenCalledWith({
        where: { id: updatedCategory.id },
        select: categorySelection,
        data: updatedField,
      });
      expect(prismaMock.categories.update).toHaveBeenCalledTimes(1);
    });
  });

  describe('delete', () => {
    it('should return the category which was deleted based on ID', async () => {
      prismaMock.categories.delete.mockResolvedValue(categoryOne);

      const result = await service.remove(categoryOne.id);

      expect(result).toEqual(categoryOne);
      expect(prismaMock.categories.delete).toHaveBeenCalledWith({
        where: {
          id: categoryOne.id,
        },
        select: categorySelection,
      });
      expect(prismaMock.categories.delete).toHaveBeenCalledTimes(1);
    });
  });
});
