# Plano de construção do site da HANSEN

O site deve ajudar o visitante a reconhecer uma solução para sua rotina, entender o que ela faz e conversar com a HANSEN. Dois percursos orientarão a construção e a revisão do site. Um diretor de escola deve conseguir descobrir como funciona a emissão de boletins. Um comerciante deve conseguir verificar se o caixa aceita Pix e entrar em contato.

## Público e conteúdo

A HANSEN nasceu em 2026, em Teresina (PI), fundada por um professor de Física da rede pública. O primeiro produto surgiu do trabalho com notas e boletins em uma escola. A procura de comerciantes por controle de vendas e estoque deu origem ao HANSEN Caixa.

O site se dirige a escolas, cursos livres, comércios e pequenas e médias empresas. A implantação presencial atende Piauí e Maranhão. Suporte, treinamento e ajustes também podem acontecer a distância.

| Produto | O que o visitante precisa encontrar |
| --- | --- |
| HANSEN Escola | Matrículas, documentos, frequência, notas e boletins. Explicar o que a secretaria, os professores e as famílias podem fazer. |
| HANSEN Caixa | Venda no balcão, recebimento em dinheiro, cartão ou Pix, comprovante, abertura e fechamento de caixa e baixa no estoque. |
| HANSEN Relacionamento | CRM **em desenvolvimento**. Apresentar os recursos previstos para histórico de contatos, acompanhamento de negociações e lembretes de retorno. |
| HANSEN Gestão | ERP **em desenvolvimento**. Apresentar os recursos previstos para compras, estoque, contas a pagar e a receber, notas e relatórios. |

## Mapa do site

| Página | Conteúdo e navegação |
| --- | --- |
| Início | Apresentação curta, cartões dos quatro produtos, resumo da história e dos serviços e acesso ao contato. Cada cartão levará à página do produto. |
| Empresa | História da fundação, experiência na primeira escola e expansão para o comércio. |
| Produtos | Visão geral das quatro soluções, público atendido e acesso às quatro páginas individuais. |
| Página de cada produto | Problema atendido, tarefas que o sistema facilita, situação do produto e caminho até o contato. |
| Serviços | Implantação e migração de dados, treinamento, suporte técnico e customização. Indicar como e onde a equipe atende. |
| Contato | WhatsApp comercial como ação principal e e-mail como alternativa. Incluir Instagram se a empresa decidir divulgá-lo. |

No cabeçalho, usar o nome HANSEN por extenso. Os cartões podem ser apresentados com texto enquanto a empresa prepara imagens. A seção de depoimentos entrará na página inicial quando houver relatos reais com autorização para publicação.

## Paleta de cores

Em 19 de novembro de 2026, o autor definiu laranja, preto e branco para os estilos atuais e as próximas etapas. O CSS centraliza as cores em três variáveis no seletor `:root`.

| Cor | Valor | Aplicação |
| --- | --- | --- |
| Laranja | `#ff7a00` | Fundo dos botões, bordas dos cartões e destaques de navegação. |
| Preto | `#000` | Textos e títulos sobre branco, texto dos botões laranja e fundo do rodapé. |
| Branco | `#fff` | Fundo da página e dos cartões e texto sobre fundos pretos. |

Os botões recebem fundo preto e texto branco ao passar o ponteiro. Os novos estilos devem usar `var(--cor-laranja)`, `var(--cor-preta)` e `var(--cor-branca)` para seguir a paleta.

## Fases do plano aprovado

| Fase | Entrega |
| --- | --- |
| 1. Preparar o conteúdo | Reunir história, público, produtos, serviços e informações de contato. Registrar o que depende de definição da empresa. |
| 2. Desenhar a navegação | Esboçar os blocos da página inicial e os caminhos de quem procura um produto ou atendimento. |
| 3. Começar no VS Code | Organizar a pasta do projeto, criar o arquivo inicial e abri-lo no navegador. |
| 4. Construir as páginas em HTML | Criar a página inicial, as páginas internas e os links entre elas. Usar a primeira página de produto como exercício para as demais. |
| 5. Dar forma ao site com CSS | Definir tipografia, cores, espaçamento e disposição dos cartões. Adaptar o conteúdo para celular e computador. |
| 6. Conectar navegação e contato | Implementar a interação do menu móvel com JavaScript, se necessária, e ligar os canais comerciais. Se a empresa optar por formulário, conferir os recursos da hospedagem e testar envio e recebimento. |
| 7. Revisar antes de publicar | Percorrer os dois caminhos descritos no início do plano. Testar links, teclado, contato e visualização em telas diferentes. Revisar textos e títulos das páginas. |
| 8. Publicar na Locaweb | Identificar a pasta de publicação e conferir o apontamento do domínio. Fazer cópia de segurança de conteúdo existente antes do envio. Publicar e testar páginas, HTTPS e contato em `santustech.com.br`. |

## Forma de trabalho

O autor digita o código no VS Code, testa no navegador e salva os marcos no Git. A orientação acontece em passos curtos, com revisão do código digitado. A execução do código do site pelo assistente depende de pedido expresso do autor.

As fases acima descrevem o projeto inteiro. As aulas dividem essas fases em exercícios menores. Para saber onde a construção parou, consulte o [guia de acompanhamento](ACOMPANHAMENTO.md).
