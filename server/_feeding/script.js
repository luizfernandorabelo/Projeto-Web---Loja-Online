const initialItems = [
  {
    id: 0,
    name: "Ração Hill's Cães Adultos Raças Pequenas e Mini 800 g",
    price: 59.99,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/399805/Racao-Hills-Caes-Adultos-RPM-1.jpg?v=637523902238200000',
      'https://cobasi.vteximg.com.br/arquivos/ids/399806/Racao-Hills-Caes-Adultos-RPM-2.jpg?v=637523902690400000',
      'https://cobasi.vteximg.com.br/arquivos/ids/399807/Racao-Hills-Caes-Adultos-RPM-3.jpg?v=637523902833070000',
    ],
    description:
      "A Ração Hill's Cães Adultos Raças Pequenas e Mini é um alimento feito especialmente para os pequenos que atingiram a fase adulta. Produzida majoritariamente com proteínas de origem animal, ela ajuda a desenvolver e manter a massa magra do animal, fazendo com que ele se mantenha ativo e resistente.Enriquecida com o complexo de vitaminas C+E, a Ração Hill's Cães Adultos Pequenos e Mini tem um forte poder antioxidante, retardando os efeitos do envelhecimento no cão.A Ração Hill's Cães Adultos Pequenos e Mini também é rica em ácidos graxos essenciais como ômega 6, além de vitamina E e outros nutrientes que protegem a pele do animal, proporcionando pelos mais macios e brilhantes.",
    categories: ['Cachorros', 'Ração', 'Ração seca'],
    rating: {
      totalStars: 4,
      feedbacks: [
        {
          userName: 'Rosângela',
          email: 'rosangela@gmail.com',
          comment: 'Lorem ipsilum dolor sit amet, consectetur adipiscing elit.',
          stars: 3,
        },
        {
          userName: 'Edicreusa',
          email: 'edicreusa@gmail.com',
          comment:
            'Lorem ipsilum dolor sit amet, consectetur adipiscing elit. Lorem ipislum dolor. Consectetur adipiscing elit.',
          stars: 5,
        },
      ],
    },
    stock: 40,
  },
  {
    id: 1,
    name: 'Ração Gran Plus Choice Frango e Carne Cães Adultos 10,1 kg',
    price: 99.9,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/844375/7896048918536.jpg?v=637692078717370000',
      'https://cobasi.vteximg.com.br/arquivos/ids/861502/racao-gran-plus-choice-frango-e-carne-caes-adultos-Particula.jpg?v=637707718142900000',
      'https://cobasi.vteximg.com.br/arquivos/ids/861504/racao-gran-plus-choice-frango-e-carne-caes-adultos-pesos-e-medidas.jpg?v=637707718726170000',
    ],
    description:
      'A Ração Gran Plus Choice Frango e Carne Cães Adultos possui fórmula exclusiva foi especialmente desenvolvida para atender aos paladares mais exigentes e ajudar a manter a saúde de seu cão. Produzido com ingredientes nobres e cozidos a vapor, a Ração Gran Plus Choice Frango e Carne Cães Adultos faz parte de uma linha completa de Alimentos High Premium, não contém corantes e aromas artificiais oferecendo ao seu pet uma alimentação equilibrada e nutritiva. Ela pode ser a única fonte de alimentação do seu animal, ajudando a mantê-lo saudável.',
    categories: ['Cachorros', 'Ração', 'Ração seca'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 50,
  },
  {
    id: 2,
    name: 'Ração Úmida Gran Plus Menu Cães Adultos Salmão 100 g',
    price: 3.19,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/720865/deparasache-granplus-gourmet-cao-adulto-salmao.jpg?v=637588460993630000',
      'https://cobasi.vteximg.com.br/arquivos/ids/720866/sache-granplus-gourmet-cao-adulto-salmao-100g-frontal.jpg?v=637588461432500000',
      'https://cobasi.vteximg.com.br/arquivos/ids/720869/selo-ingredientes-nobres.jpg?v=637588461740000000',
    ],
    description:
      'A Ração Úmida Gran Plus Menu Cães Adultos Salmão é um alimento High Premium de alta qualidade e feito com ingredientes nobres e funcionais que proporciona uma experiência irresistível para seu gato filhote enquanto ajuda no seu crescimento e desenvolvimento.',
    categories: ['Cachorros', 'Ração', 'Ração úmida'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 30,
  },
  {
    id: 3,
    name: 'Ração Úmida Pedigree Sachê Cães Adultos Raças Pequenas Carne ao Molho 100 g',
    price: 2.89,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/753159/racao-umida-pedigree-sache-carne-ao-molho-para-caes-adultos-de-racas-pequenas-100g-frente.jpg?v=637596407287470000',
      'https://cobasi.vteximg.com.br/arquivos/ids/753161/racao-umida-pedigree-sache-carne-ao-molho-para-caes-adultos-de-racas-pequenas-100g-frente1.jpg?v=637596407515100000',
      'https://cobasi.vteximg.com.br/arquivos/ids/753163/racao-umida-pedigree-sache-carne-ao-molho-para-caes-adultos-de-racas-pequenas-100g-verso.jpg?v=637596407667700000',
    ],
    description:
      'A Ração Úmida Pedigree Adulto Raças Pequenas Carne é composta por proteínas de altíssima qualidade. A carne, cozida no vapor, além de saudável é muito saborosa. Graças à sua composição repleta de fibras, a ração úmida ajuda seu animal a ter fezes mais firmes, o que facilita a limpeza.',
    categories: ['Cachorros', 'Ração', 'Ração úmida'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 40,
  },
  {
    id: 4,
    name: 'Petisco Cães Origem Natural Crost Crostine Prime Rib 100 g',
    price: 19.9,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/451634/RIB.jpg?v=637523760398170000',
      'https://cobasi.vteximg.com.br/arquivos/ids/692886/Crost-Caes-Origem-Natural.jpg?v=637580726467000000',
    ],
    description:
      'O Petisco Cães Origem Natural Crost Crostine Prime Rib é puro sabor e crocância para o seu melhor amigo. O petisco saudável para cachorro da Origem Natural é feito apenas com ingredientes de verdade, sem corantes e com uma proteína de alta qualidade.',
    categories: ['Cachorros', 'Petiscos'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 20,
  },
  {
    id: 5,
    name: 'Petisco Snack Cães Origem Natural Dermative Care 65 g',
    price: 8.9,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/223921/ORIGEM_DEMARTIVECARE.jpg?v=636978658336130000',
      'https://cobasi.vteximg.com.br/arquivos/ids/692989/Snack-Caes-Delicioso-Origem-Natural.jpg?v=637580763159600000',
    ],
    description:
      'O Petisco Snack Cães Origem Natural Dermative Care é um alimento pensado para cachorros com alergia aproveitarem cada mordida. Um petisco feito com salmão, cordeiro e linhaça, um sabor único e delicioso para cães de todas as idades e portes.',
    categories: ['Cachorros', 'Petiscos'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 60,
  },
  {
    id: 6,
    name: 'Antipulgas Simparic Cães 80mg 20,1 a 40 kg 1 comprimido',
    price: 131.9,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/279380/Antipulgas-Caes-Simparic-80mg-201-a-40kg-Zoetis.jpg?v=637396944046830000',
      'https://cobasi.vteximg.com.br/arquivos/ids/361235/antipulgas-simparic-20-1-a-40-kg-beneficios.jpg?v=637396945156570000',
      'https://cobasi.vteximg.com.br/arquivos/ids/823458/Antipulgas-Simpari-para-Caes-Adultos.jpg?v=637671398875630000',
    ],
    description:
      'A proteção dos pets é nossa prioridade, concorda? Por isso, pensando em você, tutor, e nos pequenos, oferecemos aqui na Cobasi este antipulgas Simparic 80 mg para cachorros com 20,1 a 40 kg, desenvolvido pela Zoetis.',
    categories: ['Cachorros', 'Medicamentos', 'Antipulgas e carrapatos'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 80,
  },
  {
    id: 7,
    name: 'Vermífugo Drontal Plus Cães até 10kg Sabor Carne Bayer 2 Comprimidos',
    price: 35.5,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/220052/Vermifugo-Drontal-Plus-Sabor-Carne-Bayer--2.jpg?v=637393999332670000',
      'https://cobasi.vteximg.com.br/arquivos/ids/359763/vermifugo-drontal-plus-caes-ate-10-kg-sabor-carne-bayer-beneficios.jpg?v=637394006833430000',
      'https://cobasi.vteximg.com.br/arquivos/ids/359764/vermifugo-drontal-plus-caes-ate-10-kg-sabor-carne-bayer-eficacia.jpg?v=637394006959430000',
    ],
    description:
      'O Vermífugo Drontal Plus Cães até 10kg é indicado para o tratamento e combate a todos os tipos de vermes intestinais que acometem os cães, além da giardíase.Os cachorros adoram seu sabor de carne, tornando muito mais fácil administrar o Vermífugo Drontal Plus Cães até 10kg por via oral. Se mesmo assim for necessário, você poderá misturá-lo à ração ou a um alimento. Não é necessário que o cão faça jejum ou dieta antes de ingerir o comprimido.No caso das verminoses intestinais, a dose é única. Se você está buscando tratar a giardíase, deve administrar a dose recomendada do Vermífugo Drontal Plus Cães até 10kg uma vez por dia, durante três dias seguidos.Caso o peso do seu cão faça com que a dosagem utilizada seja inferior a um comprimido, o restante do comprimido deve ser descartado.Cada comprimido do Vermífugo Drontal Plus Cães até 10kg trata 10kg. Antes de comprar ou fazer uso deste medicamento, não deixe de consultar o médico veterinário.',
    categories: ['Cachorros', 'Medicamentos', 'Vermífugos'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 50,
  },
  {
    id: 8,
    name: 'Cama Coroa Azul Fábrica Pet P',
    price: 154.25,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/295487/Cama-Coroa-Azul-Fabrica-Pet.jpg?v=637116916719700000',
    ],
    description:
      'Beleza, conforto e praticidade em um só produto!A delicadeza do tecido unida com a graça da estampa desenvolvida pelo nosso Designer torna a Cama Coroa o produto ideal para você e seu Pet.Cama 2 em 1, todas as camas Fábrica Pet são Dupla Face, desenvolvidas para que os dois lados possam ser usados.Possuí zíper em toda a lateral e almofada para retirada do enchimento e lavagem da capa, proporcionando higiene perfeita. Possui também um enchimento em fibra siliconada que não retém umidade.Um cuidado com seu melhor amigo!',
    categories: ['Cachorros', 'Caminhas e casinhas', 'Caminhas'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 15,
  },
  {
    id: 9,
    name: 'Brinquedo Pelúcia Sweet Porquinho Chalesco Único',
    price: 28.9,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/808217/Brinquedo-Pelucia-Sweet-Porquinho-Chalesco.jpg?v=637654103523200000',
    ],
    description:
      'O Brinquedo Pelúcia Sweet Porquinho Chalesco possui um formato divertido e alegre.Produzido com um material super confortável, essa pelúcia é ideal para seu pet reduzir o stress e se distrair.',
    categories: ['Cachorros', 'Brinquedos'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 35,
  },
  {
    id: 10,
    name: 'Caixa de Transporte C-Pet PP',
    price: 309.9,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/401630/L55.jpg?v=637462497975830000',
      'https://cobasi.vteximg.com.br/arquivos/ids/401700/IMG_9701_nova.jpg?v=637462498323530000',
      'https://cobasi.vteximg.com.br/arquivos/ids/401701/IMG_9702_nova.jpg?v=637462498610770000',
    ],
    description:
      'Caixa de Transporte produzida com material de alta qualidade, com furos nas laterais, proporcionando todo conforto necessário durante o transporte.',
    categories: [
      'Cachorros',
      'Acessórios para transporte',
      'Caixa de transporte',
    ],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 10,
  },
  {
    id: 11,
    name: 'Roupa para Cachorro Corinthians PP',
    price: 99.9,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/920274/image-927c205061184002a91db791dd6bab5e.jpg?v=637800925626330000',
    ],
    description:
      'Seu pet ficará um charme e aquecido com o My Dream Modelo que veste bem todas as raças. Todo acabamento em viés de malha. Tecido peludinho e com um toque especial.As nossas roupas personalizadas trazem para seu pet, conforto, proteção e dando-lhe total liberdade na hora de suas atividades no andar ou se divertindo, esse produto oferece aquela beleza que você espera para seu cão ou gato. Feita artesanalmente com tecido macio e super gostoso de usar. Sua composição é 95% de poliéster e 5% de elastano. Nossas roupas se destacam em meio aos outros visualmente agradando seu dono e a todos ao seu redor. Confeccionadas com todo carinho, pois somos um ateliê que produz roupas personalizadas para seu PET, dando-lhe a liberdade na escolha das variadas opções de estampa.',
    categories: ['Cachorros', 'Roupas e acessórios', 'Roupas de Verão'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 25,
  },
  {
    id: 12,
    name: 'Colar Elizabetano p/ Cães Braquicefálicos Kruuse Buster P',
    price: 40.3,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/726276/Colar-Elizabetano-p-Caes-Braquicefalicos-Kruuse-Buster.jpg?v=637590640007470000',
      'https://cobasi.vteximg.com.br/arquivos/ids/726277/Colar-Elizabetano-p-Caes-Braquicefalicos-Kruuse-Buster-P--1-.jpg?v=637590640020800000',
      'https://cobasi.vteximg.com.br/arquivos/ids/726278/Colar-Elizabetano-p-Caes-Braquicefalicos-Kruuse-Buster-P--2-.jpg?v=637590640041900000',
    ],
    description:
      'É uma forma confortável e menos estressante de ajudar a manter os cães seguros enquanto se curam; 100% desenvolvido para suprir as necessidades de cães de raças braquicefálicas (focinho achatado)',
    categories: ['Cachorros', 'Proteção e adestramento'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 50,
  },
  {
    id: 13,
    name: 'Banheira Dobrável De Plástico E Silicone Único',
    price: 228.85,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/864206/image-248486876f184211a4d3eb0916c4054f.jpg?v=637710402426230000',
      'https://cobasi.vteximg.com.br/arquivos/ids/864207/image-bd88f27cf4e54e4b8b5efdd3b55c4a7a.jpg?v=637710402427000000',
      'https://cobasi.vteximg.com.br/arquivos/ids/864215/image-42dc597bcb7e40478bec30ce957b896c.jpg?v=637710402429370000',
    ],
    description:
      'A banheira/ bacia de plástico e silicone dobrável é o item ideal para mais praticidade e otimização de espaço. Além de ser muito útil para usar na lavanderia, na sua cozinha e até mesmo para dar banhos em cachorros.',
    categories: ['Cachorros', 'Higiene e limpeza', 'Banheira'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 25,
  },
  {
    id: 14,
    name: 'Kit Spray Repelente Natural Neem Pet Preserva Mundi 180Ml 3 unidades',
    price: 155.7,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/936608/image-36d1f160b72d4bd28456675e3adce2da.jpg?v=637843341026070000',
      'https://cobasi.vteximg.com.br/arquivos/ids/936607/image-8dea80b9fa3d4598b7a993356b50bf75.jpg?v=637843341025300000',
    ],
    description:
      'Muito além de repelir, o Neem ainda ajuda a hidratar os pelos e reparar a pele.O Spray Repelente Natural para PETS Neem, Flores & Ervas da Preserva Mundi é um spray 100% natural formulado com extrato de neem, que age como uma barreira protetora, evitando a penetração de microrganismos patogênicos, protegendo seu animal contra doenças de pele, sarna, micoses e alergias e uma poderosa combinação de óleos de alecrim, gerânio e lavanda, unindo o efeito repelente do neem e deixando uma leve brisa de frescor que se espalha pelo ambiente. Especialmente elaborado para uso animal, este repelente combate e protege os pets contra pulgas, carrapatos, sarna, parasitas e insetos voadores transmissores de doenças. Atua como fitoterápico animal no controle de vermes, micoses, dermatites e alergias. Além disso, hidrata e mantém os pelos mais brilhantes, saudáveis e macios, controlando a queda.',
    categories: ['Cachorros', 'Proteção e adestramento', 'Repelentes'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 50,
  },
  {
    id: 15,
    name: 'Casinha Pinus Mokoi N° 1',
    price: 89.9,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/179695/Casinha-Pinus-Mokoi-N1.jpg?v=636008227889000000',
    ],
    description:
      'A Casinha Pinus Mokoi é fabricada em Pinus de qualidade, com uma demão de verniz e celadora para garantir a durabilidade do produto.Além de ser muito fácil de montar!',
    categories: ['Cachorros', 'Caminhas e casinhas', 'Casinhas'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 50,
  },
  {
    id: 16,
    name: "Suplemento Condroplex Stick's para Cães Avert Nutrientes Para Cartilagem 315 g",
    price: 174.9,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/174643/condroplex_sticks_45_sticks_315g.jpg?v=637631832580000000',
    ],
    description:
      'É muito comum que os cachorros tenham algum tipo de deficiência nutricional ao longo da vida. Por isso, nesses momentos é fundamental que algum suplemento seja inserido na dieta do pet. Isso é essencial para garantir a saúde do animal, como é o caso do CondroPlex Sticks.',
    categories: ['Cachorros', 'Medicamentos', 'Vitaminas e suplementos'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 40,
  },
  {
    id: 17,
    name: 'Keldog Mini Bifinho Criadores Carne Kelco 500 g',
    price: 24.99,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/190063/Keldog-Mini-Bifinho-Kelco-Carne-500g-.jpg?v=637632407712800000',
    ],
    description:
      'Keldog Mini Bifinho Criadores Carne Kelco é preparado com carnes e miúdos 100% selecionados, tem sabor delicioso, e vem em suculentos pedacinhos para você oferecer ao seu cão como um agrado ou recompensa.Além de ser rico em nutrientes, Keldog Mini Bifinho Criadores Carne Kelco ajuda a suprir as necessidades diárias do seu pet. Você pode oferecer os bifinhos como um agrado, uma demonstração de carinho, ou utilizá-los como incentivo e recompensa durante o adestramento, premiando os comportamentos que você deseja que seu amigo tenha.',
    categories: ['Cachorros', 'Petiscos', 'Bifinhos'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 35,
  },
  {
    id: 18,
    name: 'Macacão Tigre Emporium Distripet Laranja N° 0',
    price: 131.5,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/544401/Macacao_tigre_-2-.jpg?v=637559184170830000',
      'https://cobasi.vteximg.com.br/arquivos/ids/544402/Untitled-1.jpg?v=637559185454070000',
    ],
    description:
      'O Macacão Tigre da Emporium Distripet é feito em tecido plush super macio, proporcionando mais aconchego ao seu pet.',
    categories: ['Cachorros', 'Roupas e acessórios', 'Roupas de inverno'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 80,
  },
  {
    id: 19,
    name: 'Coleira Cães Nylon Signature Doco Azul P',
    price: 23.5,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/279164/Coleira-para-Caes-Nylon-Azul-Signature-Doco.jpg?v=637061326894570000',
    ],
    description:
      'Coleira para cães confeccionada em nylon de alta qualidade, que proporciona conforto e segurança ao seu pet;Possui fecho plástico de liberação rápida e fivelas de regulagem, para um ajuste perfeito ao pescoço do cão;Conta com costura reforçada e um anel de metal soldado para fixação segura da guia.',
    categories: ['Cachorros', 'Acessórios para transporte', 'Coleira'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 30,
  },
  {
    id: 20,
    name: 'Ração Gran Plus Choice Gatos Adultos Frango e Carne 10,1kg',
    price: 135.9,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/869996/racao-gran-plus-choice-gatos-adultos-frango-e-carne-10kg-frontal.jpg?v=637717389862230000',
      'https://cobasi.vteximg.com.br/arquivos/ids/869997/racao-gran-plus-choice-gatos-adultos-frango-e-carne-particulas.jpg?v=637717389988170000',
      'https://cobasi.vteximg.com.br/arquivos/ids/869998/racao-gran-plus-choice-gatos-adultos-frango-e-carne-sem-corantes-e-aromas-artificiais.jpg?v=637717390830070000',
    ],
    description:
      'Pensando no bem-estar do seu gato, a Ração Gran Plus Choice Frango e Carne Gatos Adultos é produzida com nobres ingredientes que estimulam o animal a ter uma mais saudável e ativa.',
    categories: ['Gatos', 'Ração', 'Ração seca'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 10,
  },
  {
    id: 21,
    name: 'Ração Golden Gatos Castrados Salmão 1 kg',
    price: 28.9,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/938594/racao-golden-gatos-castrados-sabor-salmao-3641006-Lado-1kg.jpg?v=637853800600370000',
      'https://cobasi.vteximg.com.br/arquivos/ids/938595/racao-golden-gatos-castrados-sabor-salmao-3641006-Frente-1kg.jpg?v=637853800731300000',
    ],
    description:
      'Balanceada e nutritiva, a Ração Golden Gatos Castrados Salmão é um alimento completo para o seu gato. Livre de conservantes e aromatizantes artificiais, ela é feita com nobres proteínas de salmão, além de possuir as fibras necessárias para a alimentação saudável do animal.',
    categories: ['Gatos', 'Ração', 'Ração seca'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 60,
  },
  {
    id: 22,
    name: 'Ração Úmida Whiskas Sachê Cordeiro ao Molho Gatos Adultos 85 g',
    price: 2.89,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/753063/Whiskas-Sache-Cordeiro-ao-Molho-Gatos-Adultos-794007-1.jpg?v=637596311719270000',
      'https://cobasi.vteximg.com.br/arquivos/ids/753064/Whiskas-Sache-Cordeiro-ao-Molho-Gatos-Adultos-794007-2.jpg?v=637596311877700000',
      'https://cobasi.vteximg.com.br/arquivos/ids/753065/Whiskas-Sache-Cordeiro-ao-Molho-Gatos-Adultos-794007-3.jpg?v=637596312159700000',
    ],
    description:
      'A Ração Úmida Whiskas Cordeiro é produzida pela Whiskas, desde 1958 referência quando pensamos em alimentos para gatos. Ela é sinônimo de qualidade e confiança. Os gatos gostam muito de cordeiro, ainda mais quando ele é envolvido em um delicioso molho da Ração Úmida Whiskas Cordeiro.',
    categories: ['Gatos', 'Ração', 'Ração úmida'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 55,
  },
  {
    id: 23,
    name: 'Ração Úmida Whiskas Sachê Carne ao Molho Gatos Adultos Castrados 85 g',
    price: 2.89,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/753152/racao-umida-whiskas-sache-carne-ao-molho-gatos-adultos-castrados.jpg?v=637596401355900000',
      'https://cobasi.vteximg.com.br/arquivos/ids/753153/racao-umida-whiskas-sache-carne-ao-molho-gatos-adultos-castrados_2.jpg?v=637596401484700000',
      'https://cobasi.vteximg.com.br/arquivos/ids/753154/racao-umida-whiskas-sache-carne-ao-molho-gatos-adultos-castrados_3.jpg?v=637596401622530000',
    ],
    description:
      'A Ração Úmida Whiskas Carne Gatos Castrados é indicada os animais que já fizeram a castração. O metabolismo e as necessidades dos gatos que já fizeram este procedimento sofrem mudanças, e essa ração supre todas essas necessidades.',
    categories: ['Gatos', 'Ração', 'Ração úmida'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 50,
  },
  {
    id: 24,
    name: 'Cookie Premier Gatos Adultos Original 40 g',
    price: 9.9,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/942438/cookie-premier-gatos-adultos-original-principal.jpg?v=637867516220600000',
      'https://cobasi.vteximg.com.br/arquivos/ids/942439/cookie-premier-gatos-adultos-original-lateral.jpg?v=637867516666570000',
    ],
    description:
      'O petisco para gatos é uma forma de agradar seu bichano. É um jeito de atrair seu gatinho quando ele está muito isolado. É o modo de recompensar também por um bom comportamento. Um lanchinho entre as refeições, como um snack, pode deixar ele mais feliz e alegre.',
    categories: ['Gatos', 'Petiscos', 'Cookies e biscoitos'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 80,
  },
  {
    id: 25,
    name: 'Antipulgas e Carrapatos Frontline Topspot Gatos 0,5 ml Único',
    price: 40.5,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/547540/Antipulgas-e-Carrapatos-Frontline-Topspot-para-Gatos.jpg?v=637565327306300000',
    ],
    description:
      'Frontline Topspot é a linha pensada para gatos caseiros, que vivem em ambientes com baixo risco de infestação. Seu princípio ativo, a molécula Fipronil, atua no controle de infestações por pulgas, carrapatos e piolhos mastigadores.',
    categories: ['Gatos', 'Medicamentos', 'Antipulgas e carrapatos'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 45,
  },
  {
    id: 26,
    name: 'Arranhador Mini São Pet Marrom Único',
    price: 44.9,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/173003/Arranhador-Mini-Liso-Marrom-Sao-Pet.png?v=635688568084730000',
    ],
    description:
      'O Arranhador Mini São Pet Marrom foi produzido em madeira de excelente qualidade encapada com pelúcia e sisal. Seu design diferenciado permite colocar o arranhador em qualquer ambiente da casa como um objeto de decoração.',
    categories: ['Gatos', 'Arranhadores e brinquedos', 'Arranhadores'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 70,
  },
  {
    id: 27,
    name: 'Cama Eslovênia Bege Bichinho Chic P',
    price: 94.9,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/971245/Cama-Eslovenia-Bege--1-.jpg?v=637890918769000000',
      'https://cobasi.vteximg.com.br/arquivos/ids/971263/Cama-Eslovenia-Bege--2---1-.jpg?v=637890919465470000',
      'https://cobasi.vteximg.com.br/arquivos/ids/971264/Cama-Eslovenia-Bege--3-.jpg?v=637890924367570000',
    ],
    description:
      'Assim como nós, humanos, os nossos pets também precisam dormir bem para evitar problemas de saúde.Para que isso ocorra, as camas são fundamentais. E um modelo que é bem aceito para a maioria dos cães e gatos é a Cama Eslovênia Bege Bichinho Chic cama linda, prática, leve, em formato retangular.Confeccionada em pelúcia acrílica muito macia ao toque, sua base é de courino antiderrapante. Ideal para dar aquele conforto ao pet em qualquer canto da casa.Longa durabilidade, enchimento em fibra siliconizada que não retém umidade, não possui zíper, secagem rápida, seu pet vai adorar!',
    categories: ['Gatos', 'Tocas e caminhas', 'Cama'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 10,
  },
  {
    id: 28,
    name: 'Bandeja Higiênica Furba Alvorada Rosa Único',
    price: 59.9,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/766741/ROSA.jpg?v=637600771504830000',
    ],
    description:
      'A bandeja sanitária furba com borda vem com 3 bandejas, a superior vazada e as outras duas não, a borda é removível impedindo que seu pet jogue para fora a areia que fora cavá lá.',
    categories: ['Gatos', 'Higiene e limpeza', 'Caixa de areia'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 25,
  },
  {
    id: 29,
    name: 'Jaqueta Bobojaco Emporium Distripet Salmão Nº 00',
    price: 109.5,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/950558/jaqueta-bobojaco-emporium-distripet-salmao-3461075-1.jpg?v=637878690796130000',
      'https://cobasi.vteximg.com.br/arquivos/ids/950559/jaqueta-bobojaco-emporium-distripet-salmao-3461075-2.jpg?v=637878690896830000',
    ],
    description:
      'A Jaqueta Bobojaco Emporium Distripet Salmão é ideal para deixar o seu pet quentinho e confortável nos dias frios, além disso, deixa seu pet com um estilo próprio e não limita os seus movimentos.',
    categories: ['Gatos', 'Roupas e acessórios', 'Roupas de inverno'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 30,
  },
  {
    id: 30,
    name: 'Bolsa de Transporte Para Gatos Resistente a Água Com Bolsos Único',
    price: 120.0,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/927350/image-1a891ee78cf349118d58389ef1c5ca69.jpg?v=637819109501770000',
      'https://cobasi.vteximg.com.br/arquivos/ids/927351/image-9abf9761ec2a4035ba4c066d27ec689d.jpg?v=637819109501770000',
      'https://cobasi.vteximg.com.br/arquivos/ids/927354/image-b9136a44ac544bd5be5b94c20aa1ee43.jpg?v=637819109502830000',
    ],
    description:
      'TRANSPORTADORA DE ANIMAIS DE ESTIMAÇÃO APROVADA POR LINHA AÉREA - ACEITA como transportadora de animais de estimação de companhias aéreas, transportadora de animais de estimação da AMERICAN Airlines.',
    categories: ['Gatos', 'Acessórios para transporte'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 15,
  },
  {
    id: 31,
    name: 'Brinquedo Pet Lagartixa Verde Único',
    price: 5.0,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/984415/image-7bffa938c04541e19696b680450a253a.jpg?v=637902910319300000',
    ],
    description:
      'Lagartixa de borracha com aproximadamente 12 cm de comprimento.  Brinquedo para gatos super resistente, atóxico e lavável.',
    categories: ['Gatos', 'Arranhadores e brinquedos', 'Bichinhos divertidos'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 10,
  },
  {
    id: 32,
    name: 'Areia para Gato Katbom Natural Granulado Higiênico 3 kg',
    price: 39.9,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/887014/areia-para-gato-katbom-natural-granulado-higienico.jpg?v=637732939721400000',
    ],
    description:
      'Produzida pela FVO Alimentos, a Areia para Gato Katbom Natural é a melhor opção para o seu gato fazer as necessidades dele.',
    categories: ['Gatos', 'Higiene e limpeza', 'Areia higiênica'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 25,
  },
  {
    id: 33,
    name: 'Pá Higiênica Furacão Pet Preta Único',
    price: 5.9,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/206395/Pa-Higienica-Preta-Furacao-Pet.jpg?v=636803935426100000',
    ],
    description:
      'É ideal para a higienização da areia do seu gatinho com ela pode peneirar a areia e coletar as fezes do seu pet.',
    categories: ['Gatos', 'Higiene e limpeza', 'Acessórios de higiene'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 60,
  },
  {
    id: 34,
    name: 'Bandana Pet Natal Poa Vermelho e Pelinho M',
    price: 26.99,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/898696/image-50d78fc7d2094a18961ef146f086686c.jpg?v=637751885585900000',
    ],
    description:
      ' A Bandana Natal Pet é confeccionada em tecido 100% algodão que respira, não irrita a pele e garante toque macio para o maior conforto do seu pet e carapinha branca.',
    categories: ['Gatos', 'Roupas e acessórios', 'Fantasias'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 40,
  },
  {
    id: 35,
    name: 'Peitoral com Guia FreeFaro para Gatos Ídolos Flamengo P',
    price: 112.9,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/845881/image-23fd9ddde1934fd780138e8c625993c1.jpg?v=637695509607530000',
      'https://cobasi.vteximg.com.br/arquivos/ids/845879/image-d9ee811923ea4356a4c3e5d4a38bfb86.jpg?v=637695509607300000',
      'https://cobasi.vteximg.com.br/arquivos/ids/845880/image-857dab051ece455b93e11e07d5070a12.jpg?v=637695509607470000',
    ],
    description:
      'A estampa Flamengo Ídolos faz parte da #FreeFaroTeam, a linha esportiva do seu pet. Ela carrega os grandes ídolos que compõe a história do clube no verso da coleção, com direito a frase “acima de tudo rubro-negro”, os logos CRF e o brasão nas cores originais, preto e vermelho.',
    categories: ['Gatos', 'Acessórios para transporte', 'Guia'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 25,
  },
  {
    id: 36,
    name: 'Petisco Snack Gatos Origem Natural Sensations Atum 40 g',
    price: 7.5,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/396973/Petisco-Snack-Origem-Natural-Sensations-para-Gatos-Atum.jpg?v=637443405789670000',
    ],
    description:
      'O Petisco Snack Gatos Origem Natural Sensations Atum foi produzido pensando no bem-estar e na qualidade de vida do seu pet. Feito com ingredientes naturais e probióticos de alta qualidade, além de deixar seu bichinho mais feliz, o petisco de gato Origem Natural aumenta a longevidade e qualidade de vida dos felinos.',
    categories: ['Gatos', 'Petiscos', 'Naturais'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 10,
  },
  {
    id: 37,
    name: 'Mistura para Calopsita, Agapornes e Rose Faces Nutripássaros 500g',
    price: 6.5,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/300525/507873-Mistura-Calopsita-Agapornes-e-Rose-Faces-500g.jpg?v=637154043263300000',
      'https://cobasi.vteximg.com.br/arquivos/ids/300526/507873-Mistura-Calopsita-Agapornes-e-Rose-Faces-500g-2.jpg?v=637154044529600000',
    ],
    description:
      'Indicado para Calopsitas, Agapornis e Rose faces.Alimento completo de alta digestibilidade, mais saúde, proteção, nutrição e longevidade para seu pássaro.',
    categories: ['Passaros', 'Ração'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 40,
  },
  {
    id: 38,
    name: 'Mistura para Periquitos Nutripássaros com Mel 500 g',
    price: 5.5,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/300551/796530-Mistura-para-passaros-com-Mel-Periquitos-500g.jpg?v=637154070999670000',
      'https://cobasi.vteximg.com.br/arquivos/ids/300553/796530-Mistura-para-passaros-com-Mel-Periquitos-500g-2.jpg?v=637154071005200000',
    ],
    description:
      'Alimentação para Periquitos.Alimento de alta digestibilidade.Mais saúde, proteção, nutrição e longevidade para seu pássaro.',
    categories: ['Passaros', 'Ração'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 60,
  },
  {
    id: 39,
    name: 'Gaiola Para Canário Criadeira Com 4 Comedouros Zincada Prata Único',
    price: 139.0,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/903624/image-f5d4d5867ad048ff84a52aa8ca0a4c5b.jpg?v=637762038338230000',
      'https://cobasi.vteximg.com.br/arquivos/ids/903622/image-342e7242d4aa417dbad3e2a281eceeae.jpg?v=637762038337430000',
      'https://cobasi.vteximg.com.br/arquivos/ids/903623/image-e9bc7e96647549ee96c93c4b3d637aa8.jpg?v=637762038337430000',
    ],
    description:
      'Gaiola Para Canário Contrera Com 04 Comedouros Zincada Prata A Gaiola para Canário Contrera possui uma divisória interna que permite, se necessário, separar o casal de canários dentro da gaiola. A Gaiola para Canário é feita em Arame de primeira qualidade com tratamento de Zincagem que evita a ferrugem Comprando sua Gaiola para Canário na Vmart você recebe o produto em casa com segurança, devidamente embalado e protegido. Ficha Técnica: Saiba mais sobre o produto A Gaiola Para Canário é perfeita para acondicionar seus canários. Confira os detalhes: Medidas 30cm de altura 22cm de largura 45cm de comprimento Material Arame de alto padrão com zincagem em prata, que reduz a incidência de ferrugem. Itens Inclusos no Pacote Acompanha 01 Gaiola, 04 comedouros em meia lua (CORES SORTIDAS), poleiros e 01 bandeja zincada prata para recolhimento de fezes.',
    categories: ['Passaros', 'Gaiolas'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 25,
  },
  {
    id: 40,
    name: 'Avitrin Vermífugo 10 ml',
    price: 27.5,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/180910/Avitrin-Vermifugo-10-ml-Coveli-1.jpg?v=636033289517830000',
      'https://cobasi.vteximg.com.br/arquivos/ids/180911/Avitrin-Vermifugo-10-ml-Coveli-2.jpg?v=636033289663430000',
    ],
    description:
      'Avitrin Vermífugo de amplo espectro para pássaros e aves ornamentais. Combate verme entérico e respiratório. Combate a verminoses gastrintestinais e pulmonares.',
    categories: ['Passaros', 'Medicamentos', 'Vermífugos'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 15,
  },
  {
    id: 41,
    name: 'Bebedouro Pássaros Alvorada M',
    price: 3.9,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/176488/Bebedouro-passaros-medio.jpg?v=635925960045030000',
    ],
    description:
      'Bebedouro para pássaro (tamanho médio).O melhor Bebedouro pra alimentar seu pet!Ideal para você colocar a água do seu pássaro em um recipiente amplo e limpoProduzido com excelente material, que cabe a quantidade ideal pra seu pet e que não acumule sujeira. Esse é o produto correto!Ele é ultra-resistente e confeccionado com excelente acabamento para que seu pet possa se alimentar com qualidade, praticidade e beleza!Além de ser produzido com material de ótima qualidade, o Bebedouro Pássaros Alvorada tem preço imperdível.',
    categories: ['Passaros', 'Acessórios para alimentação', 'Bebedouro'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 60,
  },
  {
    id: 42,
    name: 'Brinquedo para Aves Escada 10 Degraus Real Brinquedos Pet Único',
    price: 24.9,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/395610/Escada_10_Degraus.jpg?v=637439008027000000',
      'https://cobasi.vteximg.com.br/arquivos/ids/395611/Escada_10_Degraus_1.jpg?v=637439008194500000',
    ],
    description:
      'Produzido com poleiros cilindricos de Pinus, corante alimentício 100% seguro, arame galvanizado, miçangas de plástico e fechos de metal para fixação no recinto.',
    categories: ['Passaros', 'Brinquedos e poleiros', 'Brinquedos'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 10,
  },
  {
    id: 43,
    name: 'Comedouro para Aves Chalesco Único',
    price: 21.5,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/ids/190580/Comedouro-passaro-chalesco.jpg?v=636444357913700000',
    ],
    description:
      'Comedouro para aves Chalesco feito de inox material resistente para uma alimentação segura e prática das suas aves.',
    categories: ['Passaros', 'Acessórios para alimentação', 'Comedouro'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 50,
  },
  {
    id: 44,
    name: 'Bactericida Atlantys p/peixes 15 ML - Mundo Animal',
    price: 23.99,
    images: [
      'https://static3.tcdn.com.br/img/img_prod/496822/bactericida_atlantys_p_peixes_15_ml_mundo_animal_27121_1_dbbf08de1bf55f10eeaa5eef0e096d4a.jpg',
    ],
    description:
      'Ração para peixes de água doce ou salgada. Composta por sulfadiazina, azul de metileno e veículo q.s.p de 100ml, é um dos bactericidas mais indicados para peixeis, auxiliando na prevenção e tratamento de infecções bacterianas',
    categories: ['Peixes'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 20,
  },
  {
    id: 45,
    name: 'Hospedagem Familiar Canina',
    price: 59.9,
    images: [
      'https://www.cobasi.com.br/arquivos/servico-petanjo-hospedagem-familiar-card.png?v=637884918926070000',
    ],
    description:
      'Seu pet bem cuidado enquanto você estiver fora. Hospedagem em ambiente familiar na casa do Anjo, com atenção exclusiva, muito amor e carinho para o pet se sentir à vontade.',
    categories: ['Cachorros', 'servicos'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 15,
  },
  {
    id: 51,
    name: 'Hospedagem Familiar Felina',
    price: 49.9,
    images: [
      'https://static1.patasdacasa.com.br/articles/8/83/8/@/3685-hotel-para-gatos-e-uma-alternativa-para-articles_media_mobile-4.jpg',
    ],
    description:
      'Seu pet bem cuidado enquanto você estiver fora. Hospedagem em ambiente familiar na casa do Anjo, com atenção exclusiva, muito amor e carinho para o pet se sentir à vontade.',
    categories: ['Gatos', 'servicos'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 15,
  },
  {
    id: 46,
    name: 'Babá de Cachorros',
    price: 49.9,
    images: [
      'https://www.zooplus.pt/magazine/wp-content/uploads/2020/01/dog-sitter.jpeg',
    ],
    description:
      'Não tem com quem deixar o seu cachorro? Um Anjo vai até a sua casa para cuidar dele com todo carinho e atenção. É claro que não vão faltar brincadeiras, alimentação e banheiro sempre limpo.',
    categories: ['Cachorros', 'servicos'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 15,
  },
  {
    id: 52,
    name: 'Babá de Gatos',
    price: 49.9,
    images: [
      'https://www.cobasi.com.br/arquivos/servico-petanjo-baba-de-pet-card.png?v=637884918921070000',
    ],
    description:
      'Não tem com quem deixar o seu pet? Um Anjo vai até a sua casa para cuidar dele com todo carinho e atenção. É claro que não vão faltar brincadeiras, alimentação e banheiro sempre limpo.',
    categories: ['Gatos', 'servicos'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 15,
  },
  {
    id: 47,
    name: 'Passeio Educativo',
    price: 49.9,
    images: [
      'https://cobasi.vteximg.com.br/arquivos/servico-petanjo-passeio-educativo-card.png?v=637884918926070000',
    ],
    description:
      'Passear é fundamental para seu pet gastar energia e curtir bons momentos ao ar livre. Os passeios são realizados por profissionais e ajudam a deixar seu cachorro mais saudável e feliz.',
    categories: ['Cachorros', 'servicos'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 15,
  },
  {
    id: 48,
    name: 'Creche Familiar',
    price: 74.9,
    images: [
      'https://www.cobasi.com.br/arquivos/servico-petanjo-creche-familiar-card.png?v=637884918921530000',
    ],
    description:
      'A melhor solução para o seu pet não ficar sozinho. Ele terá cuidados personalizados, brincadeiras educativas, aconchego e muita diversão para curtir o dia inteiro na casa do Anjo.',
    categories: ['Cachorros', 'servicos'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 15,
  },
  {
    id: 49,
    name: 'Adestramento canino',
    price: 199.9,
    images: [
      'https://www.cobasi.com.br/arquivos/servico-petanjo-adestramento-card.png?v=637884918917930000',
    ],
    description:
      'Seu pet educado com adestramento de profissionais. Ele aprenderá truques e comandos com atividades direcionadas, cuidado, atenção, brincadeiras e petiscos de recompensa.',
    categories: ['Cachorros', 'servicos'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 15,
  },
  {
    id: 53,
    name: 'Adestramento felino',
    price: 179.9,
    images: [
      'https://static1.patasdacasa.com.br/articles/0/67/0/@/2765-aprender-como-adestrar-um-gato-nao-e-dif-opengraph_1200-4.jpg',
    ],
    description:
      'Seu pet educado com adestramento de profissionais. Ele aprenderá truques e comandos com atividades direcionadas, cuidado, atenção, brincadeiras e petiscos de recompensa.',
    categories: ['Gatos', 'servicos'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 15,
  },
  {
    id: 54,
    name: 'Adestramento de aves',
    price: 159.9,
    images: [
      'https://i0.wp.com/espacodasaves.com/wp-content/uploads/2021/12/kit-adestramento-de-aves-target-stick-e-clicker-espaco-das-aves-calopsita-papagaio-ethos-animal-01.webp?fit=1200%2C1152&ssl=1',
    ],
    description:
      'Seu pet educado com adestramento de profissionais. Ele aprenderá truques e comandos com atividades direcionadas, cuidado, atenção, brincadeiras e petiscos de recompensa.',
    categories: ['Passaros', 'servicos'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 15,
  },
  {
    id: 50,
    name: 'Banho e Tosa',
    price: 79.9,
    images: [
      'https://www.cobasi.com.br/arquivos/servico-banhotosa-card.png?v=637553437337530000',
    ],
    description:
      'Seu pet limpinho e cheiroso, cuidado por profissionais parceiros especialistas no assunto.',
    categories: ['Cachorros', 'servicos'],
    rating: {
      totalStars: 0,
      feedbacks: [],
    },
    stock: 15,
  },
];

const initialUsers = [
  {
    id: '0',
    admin: true,
    personalInfo: {
      name: 'Admin',
      email: 'admin@azulaops.com',
      password: 'admin',
      CPF: '12345678900',
      telephone: '1632334893',
      gender: 'não-binário',
    },
    address: {
      cep: '37950000',
      city: 'São Carlos',
      state: 'São Paulo',
      district: 'Centro',
      street: 'Adolfo Catani',
      number: '233',
      complement: 'apto 12',
    },
    card: {
      number: '1234567890123456',
      holderName: 'Cliente da Silva',
      holderCPF: '98765432100',
      billingAddress: 'Rua Adolfo Catani 233, apartamento 12, São Carlos, SP',
      expiringDate: '11/26',
    },
    cart: {
      items: [],
      cep: '',
      deliveryFee: 0,
    },
  },
  {
    id: '1',
    admin: false,
    personalInfo: {
      name: 'Primeiro Cliente',
      email: 'cliente@gmail.com',
      password: 'cliente',
      CPF: '98765432100',
      telephone: '1632334893',
      gender: 'não-binário',
    },
    address: {
      cep: '37950000',
      city: 'São Carlos',
      state: 'São Paulo',
      district: 'Centro',
      street: 'Adolfo Catani',
      number: '233',
      complement: 'apto 13',
    },
    card: {
      number: '1234567890123456',
      holderName: 'Cliente da Silva',
      holderCPF: '98765432100',
      billingAddress: 'Rua Adolfo Catani 233, apartamento 13, São Carlos, SP',
      expiringDate: '11/26',
    },
    cart: {
      items: [],
      cep: '',
      deliveryFee: 0,
    },
  },
  {
    id: '2',
    admin: false,
    personalInfo: {
      name: 'Rosângela da Silva',
      email: 'rosangela@gmail.com',
      password: 'rosangela',
      CPF: '14523698741',
      telephone: '1255014701',
      gender: 'não-binário',
    },
    address: {
      cep: '37950000',
      city: 'São Carlos',
      state: 'São Paulo',
      district: 'Centro',
      street: 'Adolfo Catani',
      number: '233',
      complement: 'apto 14',
    },
    card: {
      number: '1234567890123456',
      holderName: 'Cliente da Silva',
      holderCPF: '98765432100',
      billingAddress: 'Rua Adolfo Catani 233, apartamento 14, São Carlos, SP',
      expiringDate: '11/26',
    },
    cart: {
      items: [],
      cep: '',
      deliveryFee: 0,
    },
  },
  {
    id: '3',
    admin: false,
    personalInfo: {
      name: 'Edicreusa',
      email: 'edicreusa@azulaops.com',
      password: 'edicreusa',
      CPF: '55469312578',
      telephone: '1475523614',
      gender: 'não-binário',
    },
    address: {
      cep: '37950000',
      city: 'São Carlos',
      state: 'São Paulo',
      district: 'Centro',
      street: 'Adolfo Catani',
      number: '233',
      complement: 'apto 15',
    },
    card: {
      number: '1234567890123456',
      holderName: 'Cliente da Silva',
      holderCPF: '98765432100',
      billingAddress: 'Rua Adolfo Catani 233, apartamento 15, São Carlos, SP',
      expiringDate: '11/26',
    },
    cart: {
      items: [],
      cep: '',
      deliveryFee: 0,
    },
  },
];

const initialCeps = [
  { id: 0, fee: 12.5, days: 9 },
  { id: 1, fee: 21.1, days: 10 },
  { id: 2, fee: 29.9, days: 6 },
  { id: 3, fee: 14.2, days: 3 },
  { id: 4, fee: 23.3, days: 11 },
  { id: 5, fee: 16.25, days: 8 },
  { id: 6, fee: 22.9, days: 7 },
  { id: 7, fee: 11.3, days: 5 },
  { id: 8, fee: 28.4, days: 4 },
  { id: 9, fee: 15.7, days: 2 },
];

async function postItem(index) {
  const response = await fetch('http://localhost:3000/items', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(initialItems[index]),
  });
  const data = await response.json();
  console.log(data);
}

async function postUser(index) {
  const response = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(initialUsers[index]),
  });
  const data = await response.json();
  console.log(data);
}

async function postCep(index) {
  const response = await fetch('http://localhost:3000/ceps', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(initialCeps[index]),
  });
  const data = await response.json();
  console.log(data);
}

async function deleteItem(index) {
  const response = await fetch(
    'http://localhost:3000/items/' + initialItems[index].id,
    {
      method: 'DELETE',
    }
  );
  console.log(response);
}

async function deleteUser(index) {
  const response = await fetch(
    'http://localhost:3000/users/' + initialUsers[index].id,
    {
      method: 'DELETE',
    }
  );
  console.log(response);
}

async function deleteCep(index) {
  const response = await fetch(
    'http://localhost:3000/ceps/' + initialCeps[index].id,
    {
      method: 'DELETE',
    }
  );
  console.log(response);
}

// // Save initial items to db:
// for (let i = 0; i < initialItems.length; i++) {
//   postItem(i);
// }

// // Save initial users to db:
// for (let i = 0; i < initialUsers.length; i++) {
//   postUser(i);
// }

// // Save initial ceps to db:
// for (let i = 0; i < initialCeps.length; i++) {
//   postCep(i);
// }

// Delete all inital items from db:
for (let i = 0; i < initialItems.length; i++) {
  deleteItem(i);
}

// Delete all initial users from db:
for (let i = 0; i < initialUsers.length; i++) {
  deleteUser(i);
}

// Delete all initial ceps from db:
for (let i = 0; i < initialCeps.length; i++) {
  deleteCep(i);
}
