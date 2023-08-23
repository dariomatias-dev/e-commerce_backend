import { PrismaClient } from '@prisma/client';

const seedProducts = async (prisma: PrismaClient) => {
  await prisma.products.deleteMany();

  await Promise.all([
    prisma.products.create({
      data: {
        id: '32bbd300-5398-4837-a26a-fef408e0c5be',
        name: 'Intel Core i7-10700K',
        description:
          'O Processador Intel Core i7-9700K é um poderoso componente de 9ª geração projetado pela Intel para atender às demandas de alto desempenho dos PCs modernos. Com uma arquitetura avançada e velocidades impressionantes, ele oferece uma experiência de processamento excepcional para entusiastas de jogos e profissionais que exigem performance intensiva. O i7-9700K possui 8 núcleos e 8 threads, operando a uma frequência base de 3.6GHz e alcançando até 4.9GHz no modo Turbo Boost. Com recursos como Intel Optane Memory suportado e Intel UHD Graphics 630 integrada, este processador proporciona um desempenho rápido e fluido em jogos, renderização de vídeos, edição de mídia e tarefas multitarefas intensivas. Ele é compatível com soquetes LGA 1151 e requer uma placa-mãe com chipset adequado para aproveitar todo o seu potencial. O Processador Intel Core i7-9700K é a escolha ideal para quem busca desempenho excepcional e capacidade de resposta imediata em seu PC de alto desempenho.',
        price: 2166.66,
        amountOfImages: 3,
        categoryIds: ['bf565cbb-1f85-49c4-9292-ccff1d2bbe3e'],
      },
    }),
    prisma.products.create({
      data: {
        id: 'd0fb1d0d-60d9-41b8-8613-c24eea6abba9',
        name: 'RTX 3080 Trinity Zotac',
        description:
          'A Placa de Vídeo NVIDIA GeForce RTX 3080 é um componente de última geração que oferece um desempenho gráfico excepcional e recursos avançados para entusiastas de jogos e profissionais de criação de conteúdo. Equipada com a tecnologia revolucionária de Ray Tracing da NVIDIA, a RTX 3080 permite uma renderização de imagens realistas em tempo real, com reflexos, sombras e iluminação incrivelmente precisos. Com 8704 núcleos CUDA e 10 GB de memória GDDR6X de alta velocidade, essa placa de vídeo proporciona uma experiência de jogo fluida e imersiva mesmo nos títulos mais exigentes. Além disso, a RTX 3080 suporta recursos avançados, como DLSS (Deep Learning Super Sampling) para melhorias de desempenho e resolução, bem como tecnologias de transmissão e captura de vídeos em alta qualidade. Se você procura o máximo de desempenho gráfico e qualidade visual impressionante, a Placa de Vídeo NVIDIA GeForce RTX 3080 é a escolha perfeita. Aproveite o poder da próxima geração de jogos e experiências visuais incríveis em seu PC.',
        price: 13092.93,
        amountOfImages: 7,
        categoryIds: ['f5f513f6-4172-4a00-87a0-d03d8bae2fa2'],
      },
    }),
    prisma.products.create({
      data: {
        id: '461764ae-a7e1-4fed-9401-67568e19588a',
        name: 'Memória Corsair Vengeance',
        description:
          'A Memória RAM Corsair Vengeance é um módulo de memória DDR4 projetado para oferecer desempenho excepcional e estilo personalizado ao seu sistema. Com capacidade de aprimorar a velocidade e a capacidade de resposta do seu PC, essa memória RAM é uma escolha ideal para entusiastas de jogos, profissionais de criação de conteúdo e entusiastas de PC em geral. Com a tecnologia DDR4, você desfrutará de taxas de transferência de dados rápidas e maior largura de banda, permitindo que você execute várias tarefas simultaneamente e carregue aplicativos pesados com facilidade. O destaque da Corsair Vengeance é a sua iluminação RGB personalizável, que adiciona um toque de estilo ao seu sistema. Com o software de controle da Corsair, você pode personalizar e sincronizar os efeitos de iluminação com outros componentes do seu PC, criando uma aparência única e impressionante. Além disso, a Vengeance é compatível com perfis de overclocking XMP 2.0, o que permite ajustes rápidos e fáceis para obter o máximo desempenho. Se você busca uma memória RAM confiável, de alto desempenho e com estilo personalizável, a Corsair Vengeance é a escolha perfeita para o seu sistema.',
        price: 258.81,
        amountOfImages: 4,
        categoryIds: ['b3c719dc-18d6-4211-9a95-13b4110e4a3b'],
      },
    }),
    prisma.products.create({
      data: {
        id: '38329235-492e-462a-b3cd-02d4cb0622d7',
        name: 'Samsung 970 EVO Plus',
        description:
          'O SSD Samsung 970 EVO Plus é uma unidade de estado sólido de alta performance, projetada para oferecer velocidades rápidas de leitura e gravação, além de capacidade de armazenamento generosa. Com uma capacidade de 1TB, você terá espaço de sobra para armazenar seus arquivos, jogos e aplicativos de forma rápida e eficiente. A tecnologia avançada de memória NAND 3D da Samsung garante desempenho excepcional e confiabilidade duradoura. Com velocidades de leitura sequencial de até 3.500 MB/s e velocidades de gravação sequencial de até 3.300 MB/s, o SSD 970 EVO Plus oferece tempos de carregamento e transferência de arquivos ultrarrápidos, tornando-o ideal para jogos, edição de vídeo e outras tarefas intensivas em dados. Além disso, o SSD é equipado com recursos avançados de gerenciamento de temperatura e proteção contra sobreaquecimento, garantindo que seu sistema funcione de forma estável mesmo sob cargas de trabalho pesadas. Se você busca desempenho excepcional, capacidade de armazenamento generosa e confiabilidade superior, o SSD Samsung 970 EVO Plus é a escolha perfeita para aprimorar seu sistema de armazenamento.',
        price: 949.95,
        amountOfImages: 6,
        categoryIds: [
          '79d9cde8-93d5-4620-87b5-45cce15d80cb',
          'f1344737-532d-44da-840c-1254d1fd99ca',
        ],
      },
    }),
    prisma.products.create({
      data: {
        id: 'b06b92b2-c505-4bb0-979f-11b2d2bc0cf7',
        name: 'Corsair RM750x',
        description:
          'A Fonte de Alimentação Corsair RM750x é uma escolha confiável para alimentar o seu sistema de forma eficiente e segura. Com capacidade de 750W, ela oferece energia suficiente para alimentar componentes de alto desempenho, como processadores potentes, placas de vídeo avançadas e sistemas de armazenamento exigentes. A Corsair RM750x possui certificação 80 Plus Gold, o que significa que oferece eficiência energética excepcional, reduzindo o desperdício de energia e gerando menos calor. Além disso, a sua modularidade permite que você conecte apenas os cabos necessários, facilitando o gerenciamento de cabos e melhorando o fluxo de ar dentro do gabinete. Com componentes de alta qualidade e proteções avançadas contra sobretensão, sobrecorrente e curto-circuito, essa fonte de alimentação oferece confiabilidade e estabilidade para o seu sistema. Seja você um entusiasta de jogos, um criador de conteúdo ou um usuário exigente, a Fonte de Alimentação Corsair RM750x é uma escolha sólida para garantir a energia necessária para o seu PC funcionar de forma eficiente e segura.',
        price: 1105.75,
        amountOfImages: 6,
        categoryIds: ['4ab735ca-9d1f-4b5f-a9da-651e5880a9b6'],
      },
    }),
    prisma.products.create({
      data: {
        name: 'Placa-Mãe Gigabyte Z590 AORUS PRO',
        description:
          'A Placa-Mãe Gigabyte Z590 AORUS PRO é uma placa-mãe de alta qualidade projetada para os entusiastas de PC que desejam construir um sistema de alto desempenho. Equipada com o chipset Intel Z590, essa placa-mãe oferece suporte para os processadores Intel Core de 11ª geração, proporcionando uma plataforma poderosa e versátil. Com slots PCIe 4.0, você pode aproveitar ao máximo as velocidades de transferência de dados de última geração e conectar placas de vídeo avançadas, SSDs NVMe rápidos e outros dispositivos de alta velocidade. A Z590 AORUS PRO também oferece suporte para memória DDR4 de alta velocidade, permitindo um desempenho excepcional em jogos e tarefas intensivas. Além disso, essa placa-mãe possui recursos avançados, como iluminação RGB personalizável, áudio de alta definição e várias opções de conectividade, incluindo USB 3.2 Gen2 e USB Type-C. Com a Placa-Mãe Gigabyte Z590 AORUS PRO, você pode montar um sistema poderoso e personalizado que atenda às suas necessidades de computação.',
        price: 3380.59,
        amountOfImages: 5,
        categoryIds: ['52ede7e7-4b4a-4ad1-bfd0-a3947be6e50d'],
      },
    }),
    prisma.products.create({
      data: {
        id: '0888b281-35b0-4c73-8a33-b8db1d8966c1',
        name: 'ASUS ROG Swift PG279Q',
        description:
          'O Monitor ASUS ROG Swift PG279Q é um monitor de alta qualidade projetado para jogadores e profissionais que buscam uma experiência visual excepcional. Com um painel IPS de 27 polegadas e resolução WQHD (2560x1440), esse monitor oferece imagens nítidas, cores vibrantes e amplo ângulo de visão. Com uma taxa de atualização de 165Hz e tecnologia NVIDIA G-SYNC, você desfrutará de jogos suaves e livres de tearing. Além disso, o monitor possui recursos avançados, como HDR e suporte para ampla gama de cores, proporcionando uma qualidade de imagem impressionante. Com conectividade versátil, incluindo HDMI, DisplayPort e USB, você pode conectar facilmente seus dispositivos. O design elegante e ergonômico, com ajustes de inclinação, rotação e altura, oferece conforto e flexibilidade durante longas sessões de jogo ou trabalho. Seja para jogos imersivos ou trabalho profissional, o Monitor ASUS ROG Swift PG279Q é uma escolha premium para uma experiência visual excepcional.',
        price: 4495.49,
        amountOfImages: 4,
        categoryIds: ['dd94d285-3475-4252-92ca-2924f74eb56b'],
      },
    }),
    prisma.products.create({
      data: {
        id: 'f0eedf9d-0be5-469b-9ebe-3df46fb65cd5',
        name: 'Teclado Mecânico Razer BlackWidow Elite',
        description:
          'O Teclado Mecânico Razer BlackWidow Elite é um teclado durável e responsivo projetado para jogadores e usuários exigentes. Equipado com switches mecânicos Razer, esse teclado oferece atuação rápida e precisa em cada pressionamento de tecla. Com retroiluminação RGB personalizável e efeitos de iluminação dinâmicos, você pode criar uma aparência única para o seu setup. O BlackWidow Elite também possui teclas programáveis e uma roda de controle multifuncional, proporcionando conveniência e acesso rápido a comandos e macros. Além disso, o teclado possui um apoio de pulso ergonômico magnético, oferecendo conforto durante longas sessões de digitação ou jogos. Com a qualidade de construção robusta da Razer, o Teclado Mecânico Razer BlackWidow Elite é uma escolha confiável para melhorar a sua produtividade e desempenho em jogos.',
        price: 845.99,
        amountOfImages: 6,
        categoryIds: ['cb69fa22-6039-4615-a40a-e89d8e977346'],
      },
    }),
    prisma.products.create({
      data: {
        id: 'f90ab79a-b272-4e19-8980-4dc69a6358ce',
        name: 'HyperX Cloud Alpha',
        description:
          'O Headset HyperX Cloud Alpha é um headset confortável e com qualidade de áudio excepcional para jogadores e entusiastas de música. Com drivers de 50mm personalizados, esse headset oferece som imersivo e preciso, permitindo que você ouça todos os detalhes dos jogos e músicas. O Cloud Alpha apresenta uma estrutura durável em alumínio, oferecendo resistência e conforto para uso prolongado. Além disso, as almofadas auriculares em espuma memory foam proporcionam isolamento acústico e conforto excepcionais. O headset também possui um microfone destacável com cancelamento de ruído, permitindo uma comunicação clara com seus companheiros de equipe. Com compatibilidade multiplataforma e cabo removível, o HyperX Cloud Alpha oferece flexibilidade para uso em PCs, consoles e dispositivos móveis. Seja para jogar, ouvir música ou realizar chamadas, o Headset HyperX Cloud Alpha proporciona uma experiência sonora de alta qualidade.',
        price: 495.99,
        amountOfImages: 7,
        categoryIds: ['37b99c6f-3e32-4a52-8b7e-3645aea86c39'],
      },
    }),
    prisma.products.create({
      data: {
        id: 'c720ab84-8a6e-422e-8948-024542914835',
        name: 'Logitech G502 HERO',
        description:
          'O Mouse Gamer Logitech G502 HERO é um mouse de alta precisão projetado para jogadores que buscam desempenho excepcional. Com um sensor óptico avançado HERO 25K, esse mouse oferece rastreamento preciso e sensibilidade ajustável de até 25.000 DPI, proporcionando movimentos suaves e precisos. Com 11 botões programáveis, você pode personalizar e atribuir comandos para um acesso rápido durante os jogos. Além disso, o G502 HERO possui um design ergonômico e ajustável, permitindo que você encontre a posição de uso mais confortável para longas sessões de jogo. Com iluminação RGB personalizável e perfis de configuração salvos na memória interna, você pode personalizar a aparência e as configurações do seu mouse. Seja para jogos de ação intensa ou trabalho exigente, o Mouse Gamer Logitech G502 HERO oferece desempenho e precisão superiores.',
        price: 395.99,
        amountOfImages: 6,
        categoryIds: ['5cec0e14-4493-4199-a543-8e4045ddd086'],
      },
    }),
    prisma.products.create({
      data: {
        id: 'cad21368-3bb0-43dc-91e6-8c1b6d675762',
        name: 'RAZER ISKUR X',
        description:
          'A Cadeira Gamer RAZER ISKUR X é uma cadeira ergonômica e confortável projetada para proporcionar suporte adequado durante longas sessões de jogos. Com um design esportivo e materiais de alta qualidade, essa cadeira oferece durabilidade e conforto excepcionais. O encosto ajustável e o apoio de cabeça almofadado proporcionam um suporte adequado para a coluna vertebral, ajudando a reduzir a fadiga e o desconforto. Além disso, os braços ajustáveis e retráteis permitem que você encontre a posição ideal para os seus braços e pulsos. A cadeira também possui rodas de alta resistência que deslizam suavemente em diferentes tipos de superfície. Seja para longas sessões de jogos ou trabalho prolongado, a Cadeira Gamer RAZER ISKUR X oferece conforto e estilo para aprimorar a sua experiência.',
        price: 1699.9,
        amountOfImages: 4,
        categoryIds: ['93d40b8d-2ddf-4f1d-9db2-7313ea3fb973'],
      },
    }),
    prisma.products.create({
      data: {
        id: '29b1dbcd-d70a-4fa6-ac5c-1bd5209442a6',
        name: 'JBL Charge 4',
        description:
          'A Caixa de Som Bluetooth JBL Charge 4 é uma caixa de som portátil com som poderoso e bateria de longa duração. Com drivers de alta performance e radiadores passivos, essa caixa de som oferece graves profundos e som claro em ambientes internos e externos. Além disso, a Charge 4 possui conectividade Bluetooth, permitindo que você reproduza suas músicas sem fio a partir de dispositivos compatíveis. Com sua bateria de íons de lítio recarregável, a caixa de som oferece até 20 horas de reprodução contínua. A Charge 4 também possui classificação IPX7, sendo resistente à água, o que a torna perfeita para uso ao ar livre e em ambientes úmidos. Seja para festas, viagens ou momentos de lazer, a Caixa de Som Bluetooth JBL Charge 4 oferece um som imersivo e portabilidade conveniente.',
        price: 745.99,
        amountOfImages: 4,
        categoryIds: ['82383954-da5a-470a-998d-a33b27c3c80d'],
      },
    }),
    prisma.products.create({
      data: {
        id: '15ca2e66-1d75-44c4-89bb-f509af2b6500',
        name: 'AMD Ryzen 7 5800X',
        description:
          'O Processador AMD Ryzen 7 5800X é um poderoso processador de última geração projetado para oferecer alto desempenho em tarefas exigentes. Com 8 núcleos e 16 threads, esse processador oferece velocidades de clock rápidas e capacidade de processamento avançada. Com a arquitetura Zen 3 da AMD, o Ryzen 7 5800X oferece melhorias significativas no desempenho em relação às gerações anteriores. Além disso, o processador conta com tecnologia de desbloqueio de multiplicador, permitindo overclocking para obter ainda mais desempenho. Seja para jogos, edição de vídeo ou renderização 3D, o Processador AMD Ryzen 7 5800X oferece potência e eficiência para atender às demandas dos usuários mais exigentes.',
        price: 2145.99,
        amountOfImages: 4,
        categoryIds: ['bf565cbb-1f85-49c4-9292-ccff1d2bbe3e'],
      },
    }),
    prisma.products.create({
      data: {
        id: '0c03de01-7719-4403-9021-a330da5934f5',
        name: 'Intel Core i9-11900K',
        description:
          'O Processador Intel Core i9-11900K é um processador de alta performance projetado para entregar desempenho excepcional em todas as tarefas. Com 8 núcleos e 16 threads, esse processador oferece velocidades de clock altas e capacidade de resposta rápida. Com a tecnologia Intel Turbo Boost Max 3.0, o i9-11900K aumenta automaticamente a frequência de clock para maximizar o desempenho em cargas de trabalho exigentes. Além disso, o processador possui suporte para memória Intel Optane, proporcionando maior capacidade de armazenamento e velocidades de acesso mais rápidas. Seja para jogos intensos, edição de vídeos em 4K ou criação de conteúdo, o Processador Intel Core i9-11900K oferece o máximo desempenho para os usuários mais exigentes.',
        price: 2995.99,
        amountOfImages: 3,
        categoryIds: ['bf565cbb-1f85-49c4-9292-ccff1d2bbe3e'],
      },
    }),
    prisma.products.create({
      data: {
        id: '59485b51-cb15-4d03-810b-4afad21fb81a',
        name: 'AMD Ryzen 5 5600X',
        description:
          'O Processador AMD Ryzen 5 5600X é uma opção de alto desempenho para usuários que buscam uma combinação de potência e valor. Com 6 núcleos e 12 threads, esse processador oferece velocidades de clock rápidas e capacidade de multitarefa eficiente. Com a arquitetura Zen 3 da AMD, o Ryzen 5 5600X oferece melhorias significativas no desempenho e eficiência energética em relação às gerações anteriores. Além disso, o processador possui suporte para PCIe 4.0, proporcionando velocidades de transferência de dados mais rápidas para dispositivos compatíveis. Seja para jogos, streaming de conteúdo ou tarefas do dia a dia, o Processador AMD Ryzen 5 5600X oferece desempenho confiável e excelente custo-benefício.',
        price: 1395.99,
        amountOfImages: 3,
        categoryIds: ['bf565cbb-1f85-49c4-9292-ccff1d2bbe3e'],
      },
    }),
    prisma.products.create({
      data: {
        id: '7dde05da-62b3-4254-ab72-1b78863a06e1',
        name: 'GIGABYTE RTX 3070 MASTER',
        description:
          'A Placa de Vídeo GIGABYTE RTX 3070 MASTER é uma poderosa placa de vídeo da geração Ampere projetada para oferecer desempenho excepcional em jogos e aplicações de renderização. Com 8 GB de memória GDDR6, essa placa de vídeo oferece imagens de alta qualidade e fluidez em resoluções de até 4K. Além disso, a GeForce RTX 3070 possui tecnologia Ray Tracing em tempo real, que proporciona efeitos visuais realistas e iluminação avançada nos jogos compatíveis. Com suporte a DLSS (Deep Learning Super Sampling), a placa de vídeo também melhora o desempenho e a qualidade gráfica. Seja para jogar os títulos mais recentes ou trabalhar com renderização de alta qualidade, a Placa de Vídeo NVIDIA GeForce RTX 3070 oferece o poder necessário para uma experiência imersiva.',
        price: 4727.13,
        amountOfImages: 7,
        categoryIds: ['f5f513f6-4172-4a00-87a0-d03d8bae2fa2'],
      },
    }),
    prisma.products.create({
      data: {
        id: '5d919cc5-2cd6-4b2e-aa04-409f212d6390',
        name: 'Radeon RX 6750 XT',
        description:
          'A Placa de Vídeo AMD Radeon RX 6750 XT é uma poderosa placa gráfica projetada para jogadores exigentes e criadores de conteúdo. Equipada com a arquitetura AMD RDNA 2, essa placa de vídeo oferece desempenho de alta qualidade, imagens nítidas e taxas de quadros suaves em jogos modernos. Com 12 GB de memória GDDR6 de alta velocidade e velocidades de clock avançadas, ela oferece um desempenho excepcional em resoluções 1440p e até mesmo em 4K. Além disso, a Radeon RX 6750 XT suporta recursos avançados, como ray tracing e AMD FidelityFX, proporcionando gráficos realistas e imersivos. Com conectividade aprimorada, você pode desfrutar de múltiplos monitores e experiências de jogo envolventes. Seja você um jogador apaixonado ou um criador de conteúdo em busca de desempenho gráfico de ponta, a Placa de Vídeo AMD Radeon RX 6750 XT é uma escolha excelente para impulsionar o seu sistema.',
        price: 3380.59,
        amountOfImages: 4,
        categoryIds: ['f5f513f6-4172-4a00-87a0-d03d8bae2fa2'],
      },
    }),
    prisma.products.create({
      data: {
        id: 'ecf2ee55-407b-4ddd-85dd-bf4c82b812a1',
        name: 'Radeon RX 6700 XT',
        description:
          'A Placa de Vídeo AMD Radeon RX 6700 XT é uma placa de vídeo de alta performance projetada para oferecer jogabilidade suave e gráficos impressionantes. Com 12 GB de memória GDDR6, essa placa de vídeo oferece desempenho excepcional em resoluções 1440p e suporte para jogos em 4K. Com a arquitetura RDNA 2 da AMD, a Radeon RX 6700 XT proporciona altas taxas de quadros e recursos avançados, como sombreamento de taxa variável e redução de latência AMD Radeon Anti-Lag. Além disso, a placa de vídeo oferece suporte a tecnologia AMD Smart Access Memory para melhorar o desempenho em jogos quando combinada com processadores AMD Ryzen compatíveis. Seja para jogar os últimos lançamentos ou criar conteúdo em alta resolução, a Placa de Vídeo AMD Radeon RX 6700 XT oferece uma experiência imersiva e envolvente.',
        price: 2745.99,
        amountOfImages: 5,
        categoryIds: ['f5f513f6-4172-4a00-87a0-d03d8bae2fa2'],
      },
    }),
    prisma.products.create({
      data: {
        id: '3fac17d5-383f-43fc-a5bd-ae1f780c4d51',
        name: 'MSI GTX 1660 Super',
        description:
          'A Placa de Vídeo NVIDIA GeForce GTX 1660 Super é uma placa de vídeo de médio porte projetada para oferecer bom desempenho em jogos e aplicações gráficas. Com 6 GB de memória GDDR6, essa placa de vídeo oferece ótima qualidade gráfica em resoluções 1080p e suporte para jogos em 1440p. Com a arquitetura Turing da NVIDIA, a GeForce GTX 1660 Super oferece tecnologias avançadas, como sombreamento adaptável e suporte a G-SYNC, para proporcionar uma experiência de jogo suave e sem rasgos de tela. Seja para jogar os títulos populares ou realizar tarefas de edição de vídeo, a Placa de Vídeo NVIDIA GeForce GTX 1660 Super oferece um bom equilíbrio entre desempenho e custo-benefício.',
        price: 1245.99,
        amountOfImages: 6,
        categoryIds: ['f5f513f6-4172-4a00-87a0-d03d8bae2fa2'],
      },
    }),
    prisma.products.create({
      data: {
        id: 'e37865ec-bdbf-4439-9a62-7046a9a8edd4',
        name: 'RTX 4090 Aorus Xtreme Waterforce',
        description:
          'A RTX 4090 Aorus Xtreme Waterforce é uma placa de vídeo avançada e poderosa, projetada para jogos intensivos. Com refrigeração líquida integrada, oferece desempenho estável e silencioso. Suporta Ray Tracing, DLSS e possui grande capacidade de memória de vídeo. Com recursos de overclocking e software de controle fácil de usar, é uma escolha impressionante para entusiastas de PC que desejam gráficos incríveis e desempenho excepcional.',
        price: 20009.99,
        amountOfImages: 5,
        categoryIds: ['f5f513f6-4172-4a00-87a0-d03d8bae2fa2'],
      },
    }),
    prisma.products.create({
      data: {
        id: '95ca78c7-5fc8-4c43-9f0b-1e17e967507d',
        name: 'RTX 4090 Gigabyte Aorus Master',
        description:
          'A Placa gráfica Gigabyte Aorus Geforce RTX 4090 Master é uma potente placa de vídeo projetada para gamers e criadores de conteúdo. Com tecnologia avançada, como Ray Tracing em tempo real e ampla capacidade de memória, ela oferece gráficos incríveis e alto desempenho. Com um sistema de resfriamento eficiente e recursos adicionais, é a escolha ideal para uma experiência de jogo e criação de conteúdo excepcionais.',
        price: 18016.13,
        amountOfImages: 7,
        categoryIds: ['f5f513f6-4172-4a00-87a0-d03d8bae2fa2'],
      },
    }),
    prisma.products.create({
      data: {
        id: 'de56e7c2-dc7d-4d56-a82d-5b0b39b7beb9',
        name: 'Water Cooler Corsair H60 Hydro Series',
        description:
          'O Water Cooler Corsair H60 Hydro Series é um sistema de refrigeração líquida eficiente para processadores. Com um design compacto e fácil de instalar, ele mantém o processador resfriado durante tarefas exigentes, oferecendo desempenho térmico superior. Com operação silenciosa e capacidade de overclock seguro, é uma excelente opção para manter seu PC fresco e estável.',
        price: 423.52,
        amountOfImages: 6,
        categoryIds: ['68bca881-43f2-456d-979e-1892d00f54e1'],
      },
    }),
    prisma.products.create({
      data: {
        id: '7ba39abb-26dd-4497-932f-2f5a410e3a72',
        name: 'Fonte Asus ROG THOR',
        description:
          'A Fonte Asus ROG THOR conta com um sistema de resfriamento avançado, que mantém a temperatura interna da fonte controlada mesmo em condições de uso intensivo. Sua construção robusta e componentes de alta qualidade garantem uma durabilidade excepcional, oferecendo uma fonte de alimentação confiável a longo prazo. Com certificação 80 Plus Platinum, proporciona eficiência energética excepcional e reduz o desperdício de energia, resultando em menor impacto ambiental e economia de custos de energia.',
        price: 3529.4,
        amountOfImages: 7,
        categoryIds: ['68bca881-43f2-456d-979e-1892d00f54e1'],
      },
    }),
    prisma.products.create({
      data: {
        id: 'cb8a659c-be0c-4ff8-90b6-08b06aab92f2',
        name: 'Gabinete Cooler Master H500P Mesh',
        description:
          'O Gabinete Cooler Master H500P Mesh é ideal para entusiastas que buscam um gabinete de alto desempenho e design arrojado. Com sua estrutura robusta e malha de ventilação, mantém os componentes internos resfriados de forma eficiente. É compatível com placas-mãe ATX e oferece várias opções de armazenamento. Possui tampa frontal removível para facilitar a limpeza e manutenção. Com amplo espaço para gerenciamento de cabos e pontos de montagem inteligentes, permite uma montagem organizada. Oferece suporte para iluminação RGB personalizável e possui um visual estético profissional. O H500P Mesh é a escolha perfeita para criar um sistema poderoso e estiloso.',
        price: 1449.99,
        amountOfImages: 5,
        categoryIds: ['68bca881-43f2-456d-979e-1892d00f54e1'],
      },
    }),
    prisma.products.create({
      data: {
        id: '78bd925e-f9dd-4ef4-b4f9-b7fc91788d1b',
        name: 'SSD Kingston A2000',
        description:
          'O SSD Kingston A2000 é uma solução de armazenamento de alta velocidade que oferece desempenho excepcional para o seu PC. Com capacidade de 500GB, esse SSD utiliza a interface NVMe PCIe Gen 3.0 x4 para proporcionar velocidades de leitura e gravação ultrarrápidas. Além disso, o A2000 é compatível com o protocolo NVMe 1.3 e possui tecnologia de cache SLC para melhorar a eficiência e a durabilidade. Com o suporte para o software de gerenciamento de SSD da Kingston, você pode monitorar e otimizar o desempenho do seu SSD. Seja para jogos, edição de vídeo ou transferência de arquivos pesados, o SSD Kingston A2000 oferece desempenho confiável e capacidade de resposta rápida para suas necessidades de armazenamento.',
        price: 445.99,
        amountOfImages: 4,
        categoryIds: [
          '79d9cde8-93d5-4620-87b5-45cce15d80cb',
          'f1344737-532d-44da-840c-1254d1fd99ca',
        ],
      },
    }),
    prisma.products.create({
      data: {
        id: '94aa82bf-ded3-4e80-90ad-2b445c72ecd8',
        name: 'Memória DDR4 XPG Spectrix D50',
        description:
          'Aumente o desempenho do seu computador gamer com a Memória DDR4 XPG Spectrix D50. Projetada especialmente para jogos intensivos, esta memória RAM oferece velocidades de transferência rápidas e capacidade excepcional para garantir uma experiência de jogo suave e sem interrupções. Compatível com as principais placas-mãe e fácil de instalar, a Memória DDR4 XPG Spectrix D50 é a escolha perfeita para turbinar o seu setup gamer.',
        price: 399.9,
        amountOfImages: 5,
        categoryIds: ['b3c719dc-18d6-4211-9a95-13b4110e4a3b'],
      },
    }),
    prisma.products.create({
      data: {
        id: 'c49c2492-8348-4a7c-be29-8ae29e77ae71',
        name: 'Memória HyperX Fury',
        description:
          'Eleve o seu desempenho gamer com a Memória RAM HyperX Fury. Com velocidades impressionantes e capacidade generosa, esta memória RAM oferece tempos de carregamento rápidos e multitarefa eficiente. Projetada para overclocking fácil, a HyperX Fury garante uma experiência de jogo fluida e responsiva. Adicione potência ao seu setup gamer com esta memória RAM de alto desempenho.',
        price: 249.99,
        amountOfImages: 4,
        categoryIds: ['b3c719dc-18d6-4211-9a95-13b4110e4a3b'],
      },
    }),
    prisma.products.create({
      data: {
        id: 'b17e220f-e6f7-4005-aeb9-193ab8ceb254',
        name: 'Memória G.Skill Trident',
        description:
          'Entre no mundo da iluminação personalizada com a Memória DDR4 G.Skill Trident. Com uma combinação perfeita de estilo e desempenho, esta memória RAM possui um incrível sistema de iluminação RGB que pode ser sincronizado com outros dispositivos compatíveis. Além disso, oferece velocidades extremas e capacidade avançada para garantir a máxima performance em jogos exigentes. Com a G.Skill Trident, você terá um visual impressionante e um desempenho excepcional para tornar o seu PC gamer ainda mais incrível.',
        price: 1359.9,
        amountOfImages: 4,
        categoryIds: ['b3c719dc-18d6-4211-9a95-13b4110e4a3b'],
      },
    }),
    prisma.products.create({
      data: {
        id: '63354a45-b32f-4f0b-96f4-b3393c2ac75a',
        name: 'HD Seagate Barracuda',
        description:
          'Obtenha um espaço de armazenamento confiável e de alta capacidade com o HD Seagate Barracuda. Com uma velocidade de rotação de 7200 RPM e interface SATA de última geração, este HD oferece transferências rápidas de dados e é ideal para jogos, armazenamento de mídia e aplicativos de produtividade. Aproveite a confiabilidade e o desempenho duradouro do HD Seagate Barracuda para suprir todas as suas necessidades de armazenamento.',
        price: 349.99,
        amountOfImages: 4,
        categoryIds: [
          '79d9cde8-93d5-4620-87b5-45cce15d80cb',
          '6b28a626-36aa-46aa-8e00-9751e0540e89',
        ],
      },
    }),
    prisma.products.create({
      data: {
        id: '1a1bb003-7234-4f51-87a8-b126dffafa79',
        name: 'HD Western Digital Blue',
        description:
          'Desfrute de uma solução de armazenamento confiável com o HD Western Digital Blue. Com uma ampla capacidade de armazenamento e uma interface SATA de alta velocidade, este HD oferece desempenho e durabilidade excepcionais. Projetado para atender às necessidades de armazenamento de dados de jogos, vídeos e aplicativos, o HD Western Digital Blue é a escolha perfeita para usuários que buscam uma solução de armazenamento econômica e confiável.',
        price: 199.99,
        amountOfImages: 3,
        categoryIds: [
          '79d9cde8-93d5-4620-87b5-45cce15d80cb',
          '6b28a626-36aa-46aa-8e00-9751e0540e89',
        ],
      },
    }),
    prisma.products.create({
      data: {
        id: 'ab0a1c26-3196-4554-8aa2-b29ab153d2b4',
        name: 'SSD Crucial MX500',
        description:
          'Eleve o desempenho do seu sistema com o SSD Crucial MX500. Com velocidades de leitura e gravação impressionantes, este SSD oferece tempos de inicialização rápidos e transferências de dados eficientes. Além disso, sua tecnologia de proteção de dados avançada garante a segurança e integridade dos seus arquivos. Aproveite a confiabilidade e a capacidade generosa do SSD Crucial MX500 para melhorar a velocidade e a capacidade de resposta do seu PC.',
        price: 299.99,
        amountOfImages: 3,
        categoryIds: [
          '79d9cde8-93d5-4620-87b5-45cce15d80cb',
          'f1344737-532d-44da-840c-1254d1fd99ca',
        ],
      },
    }),
  ]);
};

export default seedProducts;
