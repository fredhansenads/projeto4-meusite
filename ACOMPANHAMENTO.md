# Acompanhamento da construção do site

**Ponto de retomada em 19 de novembro de 2026, após a aula 25.** O menu móvel e as descrições das nove páginas estão concluídos. A marca HANSEN foi aplicada, testada e aprovada pelo autor. A paleta laranja, preto e branco foi aplicada à folha de estilos compartilhada, com revisão do código e cálculo do contraste das combinações de texto. O teste visual da nova paleta pelo autor está pendente. O último commit conferido na branch `main` foi `800da1a` (“Atualização javaScript”). As alterações de marca, cores e documentação aguardam commit.

**Próximo ponto de retomada — aula 26.** Apresentar o próximo exercício no chat, com código, explicações e indicação do local de cada alteração. O autor fará a digitação e os testes. A revisão final e a preparação para publicação continuam pendentes no plano.

**Atualização de marca antes da aula 26.** Por solicitação expressa do autor, o assistente aplicou HANSEN aos títulos, descrições, textos, cabeçalhos e rodapés. Os produtos passaram a HANSEN Escola, HANSEN Caixa, HANSEN Relacionamento e HANSEN Gestão. As quatro páginas foram renomeadas para `hansen-*.html`, com atualização dos links no site e nos documentos. O domínio contratado registrado no plano é `santustech.com.br`.

**Validação da mudança de marca.** A revisão por leitura conferiu os 82 links internos das nove páginas e encontrou os destinos correspondentes. Após essa revisão, o autor informou “Testado e ok”, confirmando o funcionamento da alteração no navegador.

**Paleta definida antes da aula 26.** Em 19 de novembro de 2026, o autor escolheu laranja, preto e branco para o site e as próximas etapas. Por solicitação expressa, o assistente aplicou a paleta à folha de estilos compartilhada. Foram escolhidos laranja `#ff7a00`, preto `#000` e branco `#fff`, centralizados nas variáveis `--cor-laranja`, `--cor-preta` e `--cor-branca`. Os botões usam fundo laranja e texto preto, os cartões têm fundo branco e borda laranja, e o rodapé usa fundo preto e texto branco. A conferência visual dessa alteração pelo autor está pendente.

Os botões principal e do menu recebem fundo preto e texto branco ao passar o ponteiro. O cabeçalho usa texto preto e destaques laranja. Os próximos exercícios de estilo devem usar as três variáveis definidas em `:root`, por meio de `var(--cor-laranja)`, `var(--cor-preta)` e `var(--cor-branca)`. A revisão de formatação passou, e o contraste calculado entre texto preto e fundo laranja foi de aproximadamente 8,04 para 1.

## Dinâmica de aprendizagem a partir da aula 26

O assistente apresenta o código no chat, explica cada parte e indica onde inseri-lo. O autor digita no VS Code, testa no navegador e solicita a revisão ao concluir cada etapa. As revisões do assistente são feitas pela leitura dos arquivos. Edições diretas e execução do site pelo assistente dependem de solicitação expressa do autor, incluindo pedidos específicos de atualização deste documento.

Na aula 25, o assistente inseriu as descrições com autorização do autor. O autor considerou essa etapa concluída e escolheu retomar a digitação manual para favorecer o estudo e a aprendizagem.

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
| 8. HANSEN Escola | Criada a primeira página de produto, com apresentação, funcionalidades por público e acompanhamento da equipe. Acrescentado o link no cartão da página inicial. | [hansen-escola.html](hansen-escola.html) e cartão correspondente em [index.html](index.html). |
| 9. HANSEN Caixa | Criada a página do PDV com abertura, vendas e pagamentos, atualização do estoque e fechamento do caixa. Acrescentado o link no cartão. | [hansen-caixa.html](hansen-caixa.html). |
| 10. HANSEN Relacionamento | Criada a página do CRM com aviso de desenvolvimento e funcionalidades previstas. Acrescentado o link no cartão. | [hansen-relacionamento.html](hansen-relacionamento.html). |
| 11. HANSEN Gestão | Criada a página do ERP com aviso de desenvolvimento e recursos previstos para compras, estoque, contas, notas e relatórios. Acrescentado o link no cartão. | [hansen-gestao.html](hansen-gestao.html). |
| 12. Empresa | Criada a página com história, público atendido e forma de trabalho. Acrescentado “Conheça nossa história” na página inicial. Atualizado o item Empresa nos menus das seis páginas. | [empresa.html](empresa.html). O menu dessa página usa `aria-current="page"` no item Empresa. |
| 13. Serviços | Detalhados implantação, treinamento, suporte e customização. O item Serviços do menu e o link “Conheça nossos serviços” da página inicial abrem a página completa. | [servicos.html](servicos.html). |
| 14. Contato | Criada a página de contato com informações sobre atendimento presencial e a distância. Os menus e os convites para falar com a equipe apontam para ela. | [contato.html](contato.html). Um comentário indica onde inserir o WhatsApp e o e-mail. |
| 15. Produtos | Criado o catálogo dos quatro sistemas, com o aviso “Em desenvolvimento” no CRM e no ERP. Atualizados os menus, o link da página Empresa e os rodapés dos produtos. | [produtos.html](produtos.html). Na [página inicial](index.html), “Conheça os sistemas” leva aos cartões e o item Produtos do menu abre o catálogo. |
| 16. Folha de estilos | Vinculado o mesmo CSS no `head` dos nove arquivos HTML. Definidas a fonte e a altura de linha do texto e a cor azul-escura dos títulos principais. | [estilos.css](css/estilos.css), regras `body` e `h1`. |
| 17. Cabeçalho e menu | Usado Flexbox para alinhar o nome da empresa e os links e permitir a quebra de linha. Definidos o sublinhado da página atual e o contorno de foco para navegação por teclado. | Regras de `header`, `header nav ul`, `[aria-current='page']` e `:focus-visible` na folha de estilos. |
| 18. Largura e espaçamento | Centralizado o conteúdo principal com largura máxima de `70rem`. Parágrafos limitados a `68ch` e margem de `2.5rem` entre seções consecutivas. | Regras `main`, `main p` e `main section + section`. Estrutura conferida em [Empresa](empresa.html) e [Serviços](servicos.html). |
| 19. Cartões dos produtos | Agrupados os quatro artigos dentro de `.grade-produtos` na página inicial e no catálogo. Corrigida a abertura do artigo HANSEN Escola na página inicial. A grade usa uma coluna em telas estreitas e duas a partir de `48rem`. | [Página inicial](index.html), [catálogo](produtos.html) e [folha de estilos](css/estilos.css). |
| 20. Links e botão principal | Estilizados os links do conteúdo, com sublinhado ao passar o ponteiro e contorno de foco pelo teclado. “Conheça os sistemas” recebeu a classe `botao-principal` e leva à seção `#produtos`. | Link na apresentação da página inicial e regras `main a` e `.botao-principal` no CSS. |
| 21. Rodapé e retorno ao início | Estilizados os nove rodapés. Na página inicial, o autor moveu o `id="inicio"` da primeira seção para o cabeçalho e confirmou no navegador que “Voltar ao início” agora leva ao nome HANSEN e ao menu. | Regras `footer` no CSS e ligação entre `href="#inicio"` e `<header id="inicio">` na [página inicial](index.html). |
| 22. Conferência visual e por teclado | O autor confirmou duas colunas na janela larga, uma coluna na estreita e navegação com contorno de foco visível pelo teclado. | Percursos da página inicial e do catálogo usando Tab e Enter, conforme o exercício da aula 22. |
| 23. Canais de atendimento | Inserida a seção “Fale com nossa equipe”, com botão de WhatsApp, número visível e link de e-mail. A digitação foi revisada por leitura e o autor confirmou o funcionamento dos testes no navegador. | [contato.html](contato.html). WhatsApp `https://wa.me/5586999397804` e e-mail `mailto:fredhansenfisico@gmail.com`. |
| 24. Menu móvel com JavaScript | Inseridos botão de abrir e fechar, vínculo com o script usando `defer` e identificação do menu nas nove páginas. O script atualiza `aria-expanded` e o texto do botão. Esc fecha o menu móvel quando o foco está em seus links e devolve o foco ao botão. Código revisado por leitura e testes confirmados pelo autor. | [menu.js](js/menu.js), regras de `.botao-menu` e `.menu-pronto` no [CSS](css/estilos.css) e cabeçalhos das nove páginas. |
| 25. Descrições das páginas | O assistente acrescentou uma `meta description` própria em cada página, após o título e antes do CSS. Foram conferidas nove ocorrências em nove arquivos e a formatação das alterações. O autor considerou a etapa concluída. | Elemento `meta` com `name="description"` no `head` de cada HTML. |
| Ajustes antes da aula 26 | Aplicadas, a pedido do autor, a marca HANSEN e a paleta laranja, preto e branco. A marca foi testada e aprovada. As cores foram revisadas no código e aguardam teste visual pelo autor. | Nove páginas HTML, [folha de estilos](css/estilos.css) e [plano do site](PLANO-DO-SITE.md). |

## Entregas concluídas e próximas entregas

As marcações concluídas abaixo registram a construção e a revisão do código. A revisão prática completa da navegação continua prevista antes da publicação.

- [x] **Página inicial em HTML.** Construídos apresentação, menu, quatro cartões, história, serviços, contato e rodapé.
- [x] **HANSEN Escola.** Construída a página, ligada ao cartão da página inicial e revisada pelo código enviado.
- [x] **Demais páginas de produtos.** Construídas e revisadas as páginas do HANSEN Caixa, HANSEN Relacionamento e HANSEN Gestão, com links de ida e retorno.
- [x] **Empresa.** Construída e revisada a página, com o link do resumo e os menus atualizados.
- [x] **Serviços.** Página completa acessível pelos menus e pelo resumo da página inicial.
- [x] **Página de contato.** Estrutura HTML pronta e ligada aos menus e aos links de atendimento.
- [x] **Visão geral dos produtos.** Catálogo ligado às quatro páginas individuais, com caminho de volta em cada rodapé.
- [x] **CSS compartilhado e tipografia.** Vínculos conferidos nas nove páginas. Regras de cabeçalho, menu e conteúdo revisadas pela leitura do código nas aulas 16 a 18.
- [x] **Cartões dos produtos.** Grade e estrutura dos quatro artigos conferidas na página inicial e no catálogo.
- [x] **Links e rodapés.** Estilos revisados no CSS e destinos dos rodapés conferidos nas nove páginas. Retorno ao cabeçalho testado pelo autor.
- [x] **Conferência visual e por teclado.** Testes da aula 22 confirmados pelo autor em janelas largas e estreitas.
- [x] **Canais de atendimento.** WhatsApp e e-mail inseridos na página Contato, revisados por leitura e testados pelo autor com os destinos corretos.
- [x] **Interatividade do menu.** Controle de abertura e fechamento aplicado às nove páginas, revisado por leitura e testado pelo autor.
- [x] **Descrições das páginas.** Uma descrição própria inserida e conferida no `head` de cada um dos nove arquivos HTML.
- [x] **Marca HANSEN.** Nome da empresa e dos quatro produtos atualizado, páginas renomeadas e links conferidos. Teste no navegador e aprovação confirmados pelo autor.
- [x] **Paleta laranja, preto e branco.** Cores aplicadas aos estilos existentes e registradas no plano para as próximas etapas.
- [ ] **Teste visual da nova paleta.** Conferir textos, cartões, botões, menu móvel e rodapé, incluindo passagem do ponteiro e foco pelo teclado.
- [ ] **Revisão final.** Testar navegação por teclado, links e contato no celular e no computador. Revisar os títulos das abas, a situação dos produtos e as descrições das imagens que forem usadas.
- [ ] **Publicação.** Conferir domínio e pasta de publicação na Locaweb, preservar eventual conteúdo existente e enviar os arquivos. Abrir o domínio por HTTPS e repetir os testes de navegação e contato no site publicado.

## Informações e materiais que dependem da empresa

| Item | Situação e ação quando estiver disponível |
| --- | --- |
| WhatsApp e e-mail | Definidos e publicados no código da página Contato. WhatsApp comercial (86) 99939-7804 e e-mail fredhansenfisico@gmail.com. O autor confirmou os testes dos dois links. |
| Instagram | Perfil a definir. Incluir apenas se for um canal público da empresa. |
| Logotipo e imagens | A empresa ainda vai preparar esses materiais. Por enquanto, a identidade no cabeçalho usa o nome por extenso e os produtos são apresentados em texto. |
| Depoimentos | Aguardar relatos reais e autorização para divulgar. Depois, inserir a seção planejada na página inicial. |
| Formulário | Opcional. A decisão depende da preferência da empresa e dos recursos disponíveis no plano de hospedagem. |

## Como manter este registro

Ao terminar uma aula, acrescente uma linha ao histórico indicando o que construiu e onde conferir. Marque a entrega correspondente quando estiver completa. Depois de salvar no Git, atualize no topo a data, o commit e o próximo exercício. Assim, na retomada, você poderá abrir diretamente o arquivo e a etapa certos.
