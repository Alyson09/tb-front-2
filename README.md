DIGIMON


(Este projeto tem o intuito de nos ajudar a entender e aprender melhor a comunicação com o banco de dados)

Início
(Para poder iniciar o primeiro comando é)
git clone repositorio ou então git pull
(Depois esse comando)
npm run start

(Como se deve usar)

Após a inicialização, clique em "START" para conhecer a história dos Digimons.
Para voltar à tela inicial, clique em "VOLTAR".
Para visualizar a lista de Digimons, clique em "DIGIMONS".
Na tela de Digimons, você pode filtrar a lista por nome e nível.
Componentes
App Component
O "App" é o componente principal da aplicação. Ele controla a renderização da página inicial, do logotipo e do botão "START". Quando "currentPage" é "list", a página inicial é exibida, e quando "currentPage" é "details", a página "CharacterDetailPage" é renderizada.

CharacterDetailPage Component
O "CharacterDetailPage" é um componente que representa a página de detalhes dos Digimons. Ele fornece informações detalhadas sobre os Digimons e oferece a capacidade de filtrar e exibir uma lista de Digimons. A navegação entre as páginas é controlada pelo estado "currentPage".


Autor
(Alyson Flavio Rodrigues Dos Santos)