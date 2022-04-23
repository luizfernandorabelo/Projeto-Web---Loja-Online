# Projeto-Web---Loja-Online

Projeto da disciplina Introdução ao Desenvolvimento Web - SCC0219.

Foi decidido pelo grupo que o website a ser desenvolvido seria um petshop virtual.
## Autores:
Felipe Cadavez Oliveira - 11208558
Gustavo Lelli Guirao - 11918182
Luiz Fernando Rabelo - ??


## 1. Requisitos

O sistema deve ter 2 tipos de usuários: clientes e administradores.

Os administradores são responsáveis por registrar/gerenciar clientes e produtos fornecidos. O aplicativo já vem com uma conta admin com senha admin.

Clientes são usuários que acessam o sistema para comprar produtos.

O registro de cada cliente contém nome, CPF, gênero, telefone e e-mail.

Os registros de produto incluem nome, id, foto, descrição, preço, quantidade em estoque.

Venda de produtos: Os produtos e serviços são selecionados, são incluídos em um carrinho e sua quantidade escolhida. Os produtos são comprados usando um número de cartão de crédito (qualquer número é aceito pelo sistema). A quantidade de produto vendida é subtraída da quantidade em estoque. Os carrinhos são esvaziados somente quando o pagamento é efetuado ou quando os clientes removem todos os produtos.

Gerenciamento de produto: os administradores podem criar/atualizar/ler/excluir novos produtos. Por exemplo, eles podem alterar a quantidade em estoque.

Gerenciamento de serviços: os serviços agem como produtos com a diferença que a “quantidade em estoque” de um serviço é na verdade a quantidade de vezes que esse serviço pode ser solicitado em um dia, essa quantidade pode ser alterada porém receberá um “refresh” para a quantidade diária inicial toda vez que um dia passar. O serviço também possui um campo extra de horário de funcionamento impedindo que um serviço seja solicitado fora do horário de funcionamento da loja

O sistema é responsivo e visa uma boa acessibilidade e usabilidade para seus usuários.


## 2. Descrição do Projeto

Nosso site é um petshop virtual, que vende todo tipo de produtos destinados aos cuidados dos pets, o
que vende produtos destinados ao cuidado e ao lazer de bichinhos de estimação, como brinquedos, acessórios, caminhas e muito mais. Implementado com HTML, CSS até agora

Diagrama de navegação:

***** DIAGRAMA *****


As imagens do mockup estão na pasta /mockups. Também pode ser acessado nos links abaixo:

Homepage
Produto
Login
Perfil do Cliente
Carrinho
Finalizar Compra
Funcionalidades
As funcionalidades visadas pelo nosso site são:

Login com email e senha na plataforma, com opção de criar uma nova conta.
Visualização das informações do cliente, com opção de alterar cadastro.
Visualização da página de administrador, com opção de administrar os produtos e usuários da loja.
Acesso à homepage, com visualização de alguns produtos selecionados pela loja.
Visualização de um produto, com seu nome, descrição, preço e botão para adicionar ao carrinho.
Acesso ao carrinho de compras, com opção de mudar a quantidade de itens, conferir o preço total e finalizar compra.
Opção de inserir informações do cartão de crédito para efetuar o pagamento.
Opção de alterar o endereço de entrega.
Um teste de personalidade animal com perguntas de múltiplas respostas
Servidor
As informações salvas no servidor são:

Contas:
id (identificador do cliente, valor único)
nome
email
senha
admin (booleano)
cpf
endereço
número de telefone
Produtos:
id (identificador do produto, valor único)
título
categoria (número de 0 a 4)
preço
descrição
identificador da imagem
quantidade vendida do produto

## 3. Comentários sobre o código
Usamos bootstrap para facilitar a implementação de um layout responsivo.

## 4. Plano de teste
Nosso projeto foi desenvolvido e testado no Firefox e no Google Chrome, dois navegadores muito populares no mercado, e nos sistemas operacionais Windows e Linux (na distribuição Manjaro).

## 5. Resultados dos testes
O comportamento do site apresenta ser satisfatório nos dois navegadores testados, com um tempo de resposta rápido (principalmente considerando que não foram gastos recursos financeiros para hospedar o banco de dados), layouts responsivos e consistentes durante a utilização. Na entrega final, não encontramos bugs que afetassem significativamente a experiência do usuário.

## 6. Building
É necessário ter o npm e o node.js instalados. O processo de building foi testando no Linux Manjaro e no Windows (WSL)

Inicialmente, é necessário baixar esse repositório. O front-end e o back-end (o site e o servidor) serão executados localmente, enquanto o banco de dados está hosteado num servidor de mongodb.

Recomendamos que inicialmente, o servidor seja colocado para rodar, e em seguida, o site seja aberto.

Para rodar o servidor:

Entre na pasta do projeto (ProjetoWeb)
cd server/
npm install
npm start
Se tudo ocorrer bem, o server estará rodando em localhost:3000/.
Para abrir o site:

Entre na pasta do projeto (ProjetoWeb)
cd site/
npm install
npm run serve
O programa no terminal indicará em qual local o site pode ser acessado. (Provavelmente, localhost:8080/) image
Existe uma conta de administrador com email admin e senha admin. Para acessar as ferramentas de administração, entre no localhost:3000/admin.

## 7. Problemas
O maior problema encontrado pelos membros foi o tamanho do projeto, que foi extremamente exaustivo de ser desenvolvido, principalmente tendo em vista a preocupação com outras disciplinas e/ou estágio.
Certa dificuldade de traduzir as imagens do mockup para código HTML e CSS, por causa da falta de padronização do tamanho das fontes entre as telas feitas no mockup.
Tempo gasto no aprendizado de novas tecnologias, como bootstrap, vue.js e node.js
Algumas coisas específicas de implementação de cada navegador tornam alguns bugs difíceis de serem identificados. Por exemplo, Array.sort se comporta diferentemente em diferentes navegadores.

## 8. Comentários
A segurança da aplicação foi completamente negligenciada por fins educativos. Para fins de produção, procure alternativas mais seguras. (Por exemplo, senhas estão sendo guardadas como plain text)

Alguns dos frameworks/ferramentas usados pelo grupo foram:

Figma (para o mockup)
