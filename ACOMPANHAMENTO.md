# Acompanhamento da construção do site

**Ponto de retomada em 11 de novembro de 2026, após a aula 21.** A página inicial e o catálogo apresentam os quatro produtos em cartões. As nove páginas usam os estilos compartilhados para os links de conteúdo e o rodapé. O último commit conferido na branch `main` foi `d5951ae`. No momento deste registro, as alterações das aulas 19 a 21 em `index.html`, `produtos.html` e `css/estilos.css` aguardam commit.

**Próximo exercício sugerido para a aula 22.** Conferir a página inicial e o catálogo em uma janela estreita e outra larga. Observar a quebra de linha do menu e a passagem da grade de uma para duas colunas a partir de `48rem`. Usar Tab e Enter para percorrer o botão “Conheça os sistemas”, os links dos cartões e o rodapé.

**Conferência realizada.** O autor confirmou o teste da etapa de Contato no navegador. Após as correções nos menus, a revisão por leitura dos nove arquivos confirmou o fechamento das tags, um único `<h1>` por página e os cinco itens do menu na mesma ordem. Os links internos apontam para arquivos ou seções existentes. Nas quatro páginas de produto, “Voltar aos produtos” leva ao catálogo.

## Histórico das aulas

| Aula | O que foi feito | Onde conferir |
| --- | --- | --- |
| 1. Conteúdo | Definidos nome, história, públicos, quatro produtos, serviços e preferência de contato. | Conteúdo consolidado no plano. Dados comerciais pendentes abaixo. |
| 2. Esboço | Desenhado o percurso do visitante entre apresentação, produtos, empresa, serviços e contato. | Esboço concluído pelo autor. |
| 3. Primeira página | Criado o HTML em português do Brasil, com título da aba, apresentação e link “Conheça os sistemas”. | Elementos `title` e `h1` e link para `#produtos`. |
| 4. Produtos | Digitados os quatro cartões. CRM e ERP receberam o aviso “Em desenvolvimento”. | Quatro elementos `article` dentro de `#produtos`. |
| 5. Empresa e serviços | Acrescentadas a história da empresa e a lista com implantação, treinamento, suporte e customização. | Seções `#empresa` e `#servicos`. |
| 6. Menu | Ligados os itens do menu às seções da página por meio de âncoras. | Elemento `nav` no cabeçalho. Cada `href` interno corresponde a um `id`. |
| 7. Contato e rodapé | Acrescentados o texto de contato, a quinta âncora do menu e o link “Voltar ao início”. | Seção `#contato` e elemento `footer`. |
| 8. Santus Escola | Criada a primeira página de produto, com apresentação, funcionalidades por público e acompanhamento da equipe. Acrescentado o link no cartão da página inicial. | [santus-escola.html](santus-escola.html) e cartão correspondente em [index.html](index.html). |
| 9. Santus Caixa | Criada a página do PDV com abertura, vendas e pagamentos, atualização do estoque e fechamento do caixa. Acrescentado o link no cartão. | [santus-caixa.html](santus-caixa.html). |
| 10. Santus Relacionamento | Criada a página do CRM com aviso de desenvolvimento e funcionalidades previstas. Acrescentado o link no cartão. | [santus-relacionamento.html](santus-relacionamento.html). |
| 11. Santus Gestão | Criada a página do ERP com aviso de desenvolvimento e recursos previstos para compras, estoque, contas, notas e relatórios. Acrescentado o link no cartão. | [santus-gestao.html](santus-gestao.html). |
| 12. Empresa | Criada a página com história, público atendido e forma de trabalho. Acrescentado “Conheça nossa história” na página inicial. Atualizado o item Empresa nos menus das seis páginas. | [empresa.html](empresa.html). O menu dessa página usa `aria-current="page"` no item Empresa. |
| 13. Serviços | Detalhados implantação, treinamento, suporte e customização. O item Serviços do menu e o link “Conheça nossos serviços” da página inicial abrem a página completa. | [servicos.html](servicos.html). |
| 14. Contato | Criada a página de contato com informações sobre atendimento presencial e a distância. Os menus e os convites para falar com a equipe apontam para ela. | [contato.html](contato.html). Um comentário indica onde inserir o WhatsApp e o e-mail. |
| 15. Produtos | Criado o catálogo dos quatro sistemas, com o aviso “Em desenvolvimento” no CRM e no ERP. Atualizados os menus, o link da página Empresa e os rodapés dos produtos. | [produtos.html](produtos.html). Na [página inicial](index.html), “Conheça os sistemas” leva aos cartões e o item Produtos do menu abre o catálogo. |
| 16. Folha de estilos | Vinculado o mesmo CSS no `head` dos nove arquivos HTML. Definidas a fonte e a altura de linha do texto e a cor azul-escura dos títulos principais. | [estilos.css](css/estilos.css), regras `body` e `h1`. |
| 17. Cabeçalho e menu | Usado Flexbox para alinhar o nome da empresa e os links e permitir a quebra de linha. Definidos o sublinhado da página atual e o contorno de foco para navegação por teclado. | Regras de `header`, `header nav ul`, `[aria-current='page']` e `:focus-visible` na folha de estilos. |
| 18. Largura e espaçamento | Centralizado o conteúdo principal com largura máxima de `70rem`. Parágrafos limitados a `68ch` e margem de `2.5rem` entre seções consecutivas. | Regras `main`, `main p` e `main section + section`. Estrutura conferida em [Empresa](empresa.html) e [Serviços](servicos.html). |
| 19. Cartões dos produtos | Agrupados os quatro artigos dentro de `.grade-produtos` na página inicial e no catálogo. Corrigida a abertura do artigo Santus Escola na página inicial. A grade usa uma coluna em telas estreitas e duas a partir de `48rem`. | [Página inicial](index.html), [catálogo](produtos.html) e [folha de estilos](css/estilos.css). |
| 20. Links e botão principal | Estilizados os links do conteúdo, com sublinhado ao passar o ponteiro e contorno de foco pelo teclado. “Conheça os sistemas” recebeu a classe `botao-principal` e leva à seção `#produtos`. | Link na apresentação da página inicial e regras `main a` e `.botao-principal` no CSS. |
| 21. Rodapé e retorno ao início | Estilizados os nove rodapés. Na página inicial, o autor moveu o `id="inicio"` da primeira seção para o cabeçalho e confirmou no navegador que “Voltar ao início” agora leva ao nome Santus Tech e ao menu. | Regras `footer` no CSS e ligação entre `href="#inicio"` e `<header id="inicio">` na [página inicial](index.html). |

## Entregas concluídas e próximas entregas

As marcações concluídas abaixo registram a construção e a revisão do código. A revisão prática completa da navegação continua prevista antes da publicação.

- [x] **Página inicial em HTML.** Construídos apresentação, menu, quatro cartões, história, serviços, contato e rodapé.
- [x] **Santus Escola.** Construída a página, ligada ao cartão da página inicial e revisada pelo código enviado.
- [x] **Demais páginas de produtos.** Construídas e revisadas as páginas do Santus Caixa, Santus Relacionamento e Santus Gestão, com links de ida e retorno.
- [x] **Empresa.** Construída e revisada a página, com o link do resumo e os menus atualizados.
- [x] **Serviços.** Página completa acessível pelos menus e pelo resumo da página inicial.
- [x] **Página de contato.** Estrutura HTML pronta e ligada aos menus e aos links de atendimento.
- [x] **Visão geral dos produtos.** Catálogo ligado às quatro páginas individuais, com caminho de volta em cada rodapé.
- [x] **CSS compartilhado e tipografia.** Vínculos conferidos nas nove páginas. Regras de cabeçalho, menu e conteúdo revisadas pela leitura do código nas aulas 16 a 18.
- [x] **Cartões dos produtos.** Grade e estrutura dos quatro artigos conferidas na página inicial e no catálogo.
- [x] **Links e rodapés.** Estilos revisados no CSS e destinos dos rodapés conferidos nas nove páginas. Retorno ao cabeçalho testado pelo autor.
- [ ] **Conferência visual e por teclado.** Verificar a leitura dos cartões, a disposição do menu e o foco dos links em telas de larguras diferentes.
- [ ] **Interatividade e atendimento.** Concluir o menu móvel conforme o desenho escolhido. Inserir os canais comerciais definidos pela empresa. Conferir o número de destino do WhatsApp e o destinatário do e-mail.
- [ ] **Revisão final.** Testar navegação por teclado, links e contato no celular e no computador. Revisar os títulos das abas, a situação dos produtos e as descrições das imagens que forem usadas.
- [ ] **Publicação.** Conferir domínio e pasta de publicação na Locaweb, preservar eventual conteúdo existente e enviar os arquivos. Abrir o domínio por HTTPS e repetir os testes de navegação e contato no site publicado.

## Informações e materiais que dependem da empresa

| Item | Situação e ação quando estiver disponível |
| --- | --- |
| WhatsApp e e-mail | Número e endereço a definir. Inserir e testar os links na página Contato assim que os dados comerciais forem confirmados. |
| Instagram | Perfil a definir. Incluir apenas se for um canal público da empresa. |
| Logotipo e imagens | A empresa ainda vai preparar esses materiais. Por enquanto, a identidade no cabeçalho usa o nome por extenso e os produtos são apresentados em texto. |
| Depoimentos | Aguardar relatos reais e autorização para divulgar. Depois, inserir a seção planejada na página inicial. |
| Formulário | Opcional. A decisão depende da preferência da empresa e dos recursos disponíveis no plano de hospedagem. |

## Como manter este registro

Ao terminar uma aula, acrescente uma linha ao histórico indicando o que construiu e onde conferir. Marque a entrega correspondente quando estiver completa. Depois de salvar no Git, atualize no topo a data, o commit e o próximo exercício. Assim, na retomada, você poderá abrir diretamente o arquivo e a etapa certos.
