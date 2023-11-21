import { Test, TestingModule } from '@nestjs/testing';
import { Prisma } from '@prisma/client';

import { CategoryController } from './category.controller';

import { CategoryService } from './category.service';

describe('CategoryController', () => {
  let controller: CategoryController;

  const serviceMock = {
    create: jest.fn(),
    findOne: jest.fn(),
    findAll: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
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
      controllers: [CategoryController],
      providers: [
        {
          provide: CategoryService,
          useValue: serviceMock,
        },
      ],
    }).compile();

    controller = module.get<CategoryController>(CategoryController);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should return the created category', async () => {
      serviceMock.create.mockResolvedValue(categoryOne);

      const result = await controller.create(categoryOne);

      expect(result).toEqual(categoryOne);
      expect(serviceMock.create).toHaveBeenCalledWith(categoryOne);
      expect(serviceMock.create).toHaveBeenCalledTimes(1);
    });
  });

  describe('findOne', () => {
    it('should return a user based on ID', async () => {
      serviceMock.findOne.mockResolvedValue(categoryOne);
      const params = { id: categoryOne.id };

      const result = await controller.findOne(params);

      expect(result).toEqual(categoryOne);
      expect(serviceMock.findOne).toHaveBeenCalledWith(categoryOne.id);
      expect(serviceMock.findOne).toHaveBeenCalledTimes(1);
    });
  });

  describe('findAll', () => {
    it('should return all categories', async () => {
      serviceMock.findAll.mockResolvedValue([categoryOne, categoryTwo]);

      const result = await controller.findAll();

      expect(result).toEqual([categoryOne, categoryTwo]);
      expect(serviceMock.findAll).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    it('should return the category ID updated with the data passed', async () => {
      const updatedField = { name: 'Processador' };
      const updatedCategory = {
        ...categoryOne,
        ...updatedField,
      };
      serviceMock.update.mockResolvedValue(updatedCategory);
      const params = { id: categoryOne.id };

      const result = await controller.update(params, updatedField);

      expect(result).toEqual(updatedCategory);
      expect(serviceMock.update).toHaveBeenCalledWith(
        updatedCategory.id,
        updatedField,
      );
      expect(serviceMock.update).toHaveBeenCalledTimes(1);
    });
  });

  describe('remove', () => {
    it('should return the category which was deleted based on ID', async () => {
      serviceMock.remove.mockResolvedValue(categoryOne);
      const params = { id: categoryOne.id };

      const result = await controller.remove(params);

      expect(result).toEqual(categoryOne);
      expect(serviceMock.remove).toHaveBeenCalledWith(categoryOne.id);
      expect(serviceMock.remove).toHaveBeenCalledTimes(1);
    });
  });
});
