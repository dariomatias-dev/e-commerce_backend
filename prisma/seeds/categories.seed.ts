import { PrismaClient } from '@prisma/client';

const seedCategories = async (prisma: PrismaClient) => {
  await prisma.categories.deleteMany();

  await Promise.all([
    prisma.categories.create({
      data: {
        id: 'bf565cbb-1f85-49c4-9292-ccff1d2bbe3e',
        name: 'Processadores',
      },
    }),
    prisma.categories.create({
      data: {
        id: 'f5f513f6-4172-4a00-87a0-d03d8bae2fa2',
        name: 'Placas de Vídeo',
      },
    }),
    prisma.categories.create({
      data: {
        id: '52ede7e7-4b4a-4ad1-bfd0-a3947be6e50d',
        name: 'Placas-mãe',
      },
    }),
    prisma.categories.create({
      data: {
        id: 'b3c719dc-18d6-4211-9a95-13b4110e4a3b',
        name: 'Memórias RAM',
      },
    }),
    prisma.categories.create({
      data: {
        id: '79d9cde8-93d5-4620-87b5-45cce15d80cb',
        name: 'Armazenamentos',
      },
    }),
    prisma.categories.create({
      data: {
        id: '6b28a626-36aa-46aa-8e00-9751e0540e89',
        name: 'HDs',
      },
    }),
    prisma.categories.create({
      data: {
        id: 'f1344737-532d-44da-840c-1254d1fd99ca',
        name: 'SSDs NVMe',
      },
    }),
    prisma.categories.create({
      data: {
        id: '6f07e1d3-2b64-4590-8fed-621f943d9e93',
        name: 'SSDs SATA',
      },
    }),
    prisma.categories.create({
      data: {
        id: '4ab735ca-9d1f-4b5f-a9da-651e5880a9b6',
        name: 'Fontes de Alimentação',
      },
    }),
    prisma.categories.create({
      data: {
        id: '8c644e10-75e0-4252-bd26-6da1fd177137',
        name: 'Gabinetes',
      },
    }),
    prisma.categories.create({
      data: {
        id: '84e97d5d-4bd7-4af5-9fa1-ad87621a53e3',
        name: 'Periféricos',
      },
    }),
    prisma.categories.create({
      data: {
        id: 'dd94d285-3475-4252-92ca-2924f74eb56b',
        name: 'Monitores',
      },
    }),
    prisma.categories.create({
      data: {
        id: '93d40b8d-2ddf-4f1d-9db2-7313ea3fb973',
        name: 'Cadeiras Gamers',
      },
    }),
    prisma.categories.create({
      data: {
        id: '40cf9857-3c65-46a8-8db6-f19266d18771',
        name: 'Mousepads',
      },
    }),
    prisma.categories.create({
      data: {
        id: 'cb69fa22-6039-4615-a40a-e89d8e977346',
        name: 'Teclados',
      },
    }),
    prisma.categories.create({
      data: {
        id: '5cec0e14-4493-4199-a543-8e4045ddd086',
        name: 'Mouses',
      },
    }),
    prisma.categories.create({
      data: {
        id: '37b99c6f-3e32-4a52-8b7e-3645aea86c39',
        name: 'Headsets',
      },
    }),
    prisma.categories.create({
      data: {
        id: '90723760-5bad-4846-98dc-80c7c991fbee',
        name: 'Adaptadores',
      },
    }),
    prisma.categories.create({
      data: {
        id: '0094d51c-99c6-44b0-a0da-df22fe108e2f',
        name: 'Cabos',
      },
    }),
    prisma.categories.create({
      data: {
        id: 'df8fbf53-206e-42e7-9c9a-cae5b7f4b7a7',
        name: 'Sistemas Operacionais',
      },
    }),
    prisma.categories.create({
      data: {
        id: 'f63af00c-46cc-4668-a2b5-defc61526547',
        name: 'Antivírus',
      },
    }),
    prisma.categories.create({
      data: {
        id: '290217c9-2691-420d-8d57-c798589555ec',
        name: 'Sistemas de Áudio',
      },
    }),
    prisma.categories.create({
      data: {
        id: '82383954-da5a-470a-998d-a33b27c3c80d',
        name: 'Placas de Som',
      },
    }),
    prisma.categories.create({
      data: {
        id: '33fad856-8d86-4049-be75-d75990573a77',
        name: 'Alto-falantes',
      },
    }),
    prisma.categories.create({
      data: {
        id: 'da2548a0-d727-4b0c-941a-6e93ad73c007',
        name: 'Fones de Ouvido',
      },
    }),
    prisma.categories.create({
      data: {
        id: 'df20aaa1-af4b-4af4-82bd-f80c9cccc0f5',
        name: 'Microfones',
      },
    }),
    prisma.categories.create({
      data: {
        id: '7f39ac65-a266-45d0-b773-94d99f5abf49',
        name: 'Mesas Gamers',
      },
    }),
    prisma.categories.create({
      data: {
        id: 'c5b3375a-0a1f-4e40-8ba9-3cf0044f4c7c',
        name: 'Notebooks',
      },
    }),
    prisma.categories.create({
      data: {
        id: '68bca881-43f2-456d-979e-1892d00f54e1',
        name: 'Water Coolers',
      },
    }),
  ]);
};

export default seedCategories;
