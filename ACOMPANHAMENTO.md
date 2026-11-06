# Acompanhamento da construção do site

**Ponto de retomada em 5 de novembro de 2026.** As aulas 1 a 12 foram concluídas. Foram construídas a página inicial, as quatro páginas de produtos e a página Empresa. O último commit local conferido é `352022c`, na branch `master`, com a mensagem “Atualização dos html”. Esta atualização do acompanhamento deverá ser incluída em um próximo commit.

**Próximo exercício — aula 13.** Criar a página Serviços, detalhando implantação, treinamento, suporte e customização. Acrescentar um link no resumo da página inicial e atualizar o item Serviços nos menus. Esse exercício continua a fase 4 do [plano de construção](PLANO-DO-SITE.md).

**Conferência realizada.** Os códigos dos seis arquivos foram revisados pela leitura dos trechos enviados no chat. Foram conferidos o fechamento das tags, a hierarquia dos títulos, os destinos dos links e os avisos de desenvolvimento do CRM e do ERP. O assistente não executou o site. Os testes de navegação no navegador ficam a cargo do autor.

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

## Entregas concluídas e próximas entregas

As marcações concluídas abaixo registram a construção e a revisão do código. A revisão prática completa da navegação continua prevista antes da publicação.

- [x] **Página inicial em HTML.** Construídos apresentação, menu, quatro cartões, história, serviços, contato e rodapé.
- [x] **Santus Escola.** Construída a página, ligada ao cartão da página inicial e revisada pelo código enviado.
- [x] **Demais páginas de produtos.** Construídas e revisadas as páginas do Santus Caixa, Santus Relacionamento e Santus Gestão, com links de ida e retorno.
- [x] **Empresa.** Construída e revisada a página, com o link do resumo e os menus atualizados.
- [ ] **Serviços.** Criar a página interna, detalhar os quatro serviços e conectar o resumo da página inicial e os menus.
- [ ] **Contato.** Criar a página interna e conectar os menus. Inserir os canais comerciais quando os dados forem definidos.
- [ ] **Visão geral dos produtos.** Criar a página que apresenta e leva às quatro soluções. Atualizar o item Produtos nos menus para esse destino.
- [ ] **CSS.** Criar e conectar uma folha de estilos compartilhada. Trabalhar cabeçalho, tipografia, cartões, links e rodapé. Conferir se o texto fica legível e os cartões cabem na largura de um celular.
- [ ] **Interatividade e atendimento.** Concluir o menu móvel conforme o desenho escolhido. Inserir os canais comerciais definidos pela empresa. Conferir o número de destino do WhatsApp e o destinatário do e-mail.
- [ ] **Revisão final.** Testar navegação por teclado, links e contato no celular e no computador. Revisar os títulos das abas, a situação dos produtos e as descrições das imagens que forem usadas.
- [ ] **Publicação.** Conferir domínio e pasta de publicação na Locaweb, preservar eventual conteúdo existente e enviar os arquivos. Abrir o domínio por HTTPS e repetir os testes de navegação e contato no site publicado.

## Informações e materiais que dependem da empresa

| Item | Situação e ação quando estiver disponível |
| --- | --- |
| WhatsApp e e-mail | Número e endereço a definir. A seção de contato já tem texto. Acrescentar os links quando os dados comerciais forem confirmados. |
| Instagram | Perfil a definir. Incluir apenas se for um canal público da empresa. |
| Logotipo e imagens | A empresa ainda vai preparar esses materiais. Por enquanto, a identidade no cabeçalho usa o nome por extenso e os produtos são apresentados em texto. |
| Depoimentos | Aguardar relatos reais e autorização para divulgar. Depois, inserir a seção planejada na página inicial. |
| Formulário | Opcional. A decisão depende da preferência da empresa e dos recursos disponíveis no plano de hospedagem. |

## Como manter este registro

Ao terminar uma aula, acrescente uma linha ao histórico indicando o que construiu e onde conferir. Marque a entrega correspondente quando estiver completa. Depois de salvar no Git, atualize no topo a data, o commit e o próximo exercício. Assim, na retomada, você poderá abrir diretamente o arquivo e a etapa certos.
