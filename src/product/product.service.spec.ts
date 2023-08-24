import { Test, TestingModule } from '@nestjs/testing';

import { ProductService } from './product.service';

import { PrismaService } from '../prisma/prisma.service';

describe('ProductService', () => {
  let service: ProductService;

  const prismaMock = {
    products: {
      create: jest.fn(),
      count: jest.fn(),
      findUnique: jest.fn(),
      findMany: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  const productOne = {
    id: '0888b281-35b0-4c73-8a33-b8db1d8966c1',
    name: 'ASUS ROG Swift PG279Q',
    price: 4495.49,
    description:
      'O Monitor ASUS ROG Swift PG279Q é um monitor de alta qualidade projetado para jogadores e profissionais que buscam uma experiência visual excepcional. Com um painel IPS de 27 polegadas e resolução WQHD (2560x1440), esse monitor oferece imagens nítidas, cores vibrantes e amplo ângulo de visão. Com uma taxa de atualização de 165Hz e tecnologia NVIDIA G-SYNC, você desfrutará de jogos suaves e livres de tearing. Além disso, o monitor possui recursos avançados, como HDR e suporte para ampla gama de cores, proporcionando uma qualidade de imagem impressionante. Com conectividade versátil, incluindo HDMI, DisplayPort e USB, você pode conectar facilmente seus dispositivos. O design elegante e ergonômico, com ajustes de inclinação, rotação e altura, oferece conforto e flexibilidade durante longas sessões de jogo ou trabalho. Seja para jogos imersivos ou trabalho profissional, o Monitor ASUS ROG Swift PG279Q é uma escolha premium para uma experiência visual excepcional.',
    amountOfImages: 4,
    categoryIds: ['dd94d285-3475-4252-92ca-2924f74eb56b'],
  };

  const productTwo = {
    id: '0cb5c0e5-d95e-410f-a10b-b89a75aacdb3',
    name: 'Placa-Mãe Gigabyte Z590 AORUS PRO',
    price: 3380.59,
    description:
      'A Placa-Mãe Gigabyte Z590 AORUS PRO é uma placa-mãe de alta qualidade projetada para os entusiastas de PC que desejam construir um sistema de alto desempenho. Equipada com o chipset Intel Z590, essa placa-mãe oferece suporte para os processadores Intel Core de 11ª geração, proporcionando uma plataforma poderosa e versátil. Com slots PCIe 4.0, você pode aproveitar ao máximo as velocidades de transferência de dados de última geração e conectar placas de vídeo avançadas, SSDs NVMe rápidos e outros dispositivos de alta velocidade. A Z590 AORUS PRO também oferece suporte para memória DDR4 de alta velocidade, permitindo um desempenho excepcional em jogos e tarefas intensivas. Além disso, essa placa-mãe possui recursos avançados, como iluminação RGB personalizável, áudio de alta definição e várias opções de conectividade, incluindo USB 3.2 Gen2 e USB Type-C. Com a Placa-Mãe Gigabyte Z590 AORUS PRO, você pode montar um sistema poderoso e personalizado que atenda às suas necessidades de computação.',
    amountOfImages: 5,
    categoryIds: ['52ede7e7-4b4a-4ad1-bfd0-a3947be6e50d'],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('return the product that was created', async () => {
      prismaMock.products.create.mockResolvedValue(productOne);

      const result = await service.create(productOne);

      expect(result).toEqual(productOne);
      expect(prismaMock.products.create).toHaveBeenCalledWith({
        data: productOne,
      });
      expect(prismaMock.products.create).toHaveBeenCalledTimes(1);
    });
  });

  describe('findOne', () => {
    it('should return the user that corresponds to the given ID', async () => {
      prismaMock.products.findUnique.mockResolvedValue(productOne);

      const result = await service.findOne(productOne.id);

      expect(result).toEqual(productOne);
      expect(prismaMock.products.findUnique).toHaveBeenCalledWith({
        where: {
          id: productOne.id,
        },
        select: {
          id: true,
          name: true,
          price: true,
          description: true,
          amountOfImages: true,
          categoryIds: true,
        },
      });
      expect(prismaMock.products.findUnique).toHaveBeenCalledTimes(1);
    });
  });

  describe('remove', () => {
    it('should return the user that was deleted based on the sent id', async () => {
      prismaMock.products.delete.mockResolvedValue(productOne);

      const result = await service.remove(productOne.id);

      expect(result).toEqual(productOne);
      expect(prismaMock.products.delete).toHaveBeenCalledWith({
        where: {
          id: productOne.id,
        },
      });
      expect(prismaMock.products.delete).toHaveBeenCalledTimes(1);
    });
  });
});
