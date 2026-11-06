# Acompanhamento da construção do site

**Ponto de retomada em 6 de novembro de 2026.** As aulas 1 a 15 estão concluídas. O site tem nove páginas HTML: Início, Empresa, Produtos, Serviços, Contato e as quatro páginas individuais dos sistemas. A versão do site usada nesta revisão está no commit `383c4b0` da branch `main` (“Atualização das páginas do html”).

**Próximo exercício — aula 16.** Iniciar a fase de CSS. Criar uma folha de estilos compartilhada, vinculá-la no `<head>` das nove páginas e conferir se uma primeira regra de tipografia aparece tanto na página inicial quanto nas páginas internas. Ver fase 5 do [plano de construção](PLANO-DO-SITE.md).

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

## Entregas concluídas e próximas entregas

As marcações concluídas abaixo registram a construção e a revisão do código. A revisão prática completa da navegação continua prevista antes da publicação.

- [x] **Página inicial em HTML.** Construídos apresentação, menu, quatro cartões, história, serviços, contato e rodapé.
- [x] **Santus Escola.** Construída a página, ligada ao cartão da página inicial e revisada pelo código enviado.
- [x] **Demais páginas de produtos.** Construídas e revisadas as páginas do Santus Caixa, Santus Relacionamento e Santus Gestão, com links de ida e retorno.
- [x] **Empresa.** Construída e revisada a página, com o link do resumo e os menus atualizados.
- [x] **Serviços.** Página completa acessível pelos menus e pelo resumo da página inicial.
- [x] **Página de contato.** Estrutura HTML pronta e ligada aos menus e aos links de atendimento.
- [x] **Visão geral dos produtos.** Catálogo ligado às quatro páginas individuais, com caminho de volta em cada rodapé.
- [ ] **CSS.** Criar e conectar uma folha de estilos compartilhada. Trabalhar cabeçalho, tipografia, cartões, links e rodapé. Conferir se o texto fica legível e os cartões cabem na largura de um celular.
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
