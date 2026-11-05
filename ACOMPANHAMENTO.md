# Acompanhamento da construção do site

**Ponto de retomada em 4 de novembro de 2026.** A aula 7 terminou com a estrutura HTML da página inicial. O arquivo [index.html](index.html) foi salvo no commit local `ca10cbc`, na branch `master`, com a mensagem “Cria estrutura HTML da página inicial da Santus Tech”. A conferência deste registro foi feita pela leitura do HTML e do histórico do Git.

**Próximo exercício sugerido.** Criar a primeira página interna, dedicada ao Santus Escola, e ligar o cartão da página inicial a ela. Esse exercício continua a fase 4 do [plano de construção](PLANO-DO-SITE.md).

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

## Próximas entregas

Marque cada item depois de construí-lo e conferi-lo. Os cartões, a história, os serviços e o contato que já aparecem na página inicial são o ponto de partida para as páginas abaixo.

- [ ] **Primeira página de produto.** Criar a página do Santus Escola com um título próprio e explicar a rotina de matrículas, notas e boletins. Ligar o cartão à página e incluir um link de volta. Conferir o percurso de ida e volta no navegador.
- [ ] **Demais produtos.** Construir as páginas do Santus Caixa, Santus Relacionamento e Santus Gestão, respeitando a situação de cada produto. Criar a página de visão geral e conferir se ela leva às quatro soluções.
- [ ] **Empresa, Serviços e Contato.** Criar as páginas internas, ligar os resumos da página inicial a elas e conferir a navegação a partir de cada página.
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
