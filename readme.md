# Numismática Goiânia — Loja de Colecionáveis Online 🪙 (Projeto Integrador Parte 2)

## Observações Iniciais

- O que já está funcionando bem?

  O design do site, as disposições dos cards, a acessibilidade, os formulários, os links, os botões e a organização do site como um todo já estão em um nível satifastório, porém ainda há espaço para melhorias pontuais.
  
- Quais elementos HTML já repetem em várias páginas?

  O cabeçalho (header), o menu de navegação (nav) e o rodapé (footer) são idênticos em todas as páginas do site. Já os cards de produtos seguem a mesma formatação   em todas as páginas de venda, diferenciando-se apenas quanto as informações e imagens especifícas de cada produto.
  A página "Fale conosco" é a que mais se difere das outras, pois apresenta um card de contatos e um card de formulário com opção de lista.
  
- Onde o layout "quebra" ou fica estranho?

  O layout do site se mantém estável e visualmente equilibrado em diferentes tamanhos de tela, sem apresentar quebras ou distorções perceptíveis. A estrutura foi    organizada de forma coerente, garantindo boa legibilidade e navegação fluida em todas as resoluções.

- Quais melhorias fariam diferença real para o usuário do pequeno negócio?

  Algumas melhorias que fariam diferença real para o usuário incluem o aprimoramento da responsividade em dispositivos móveis e a otimização do tempo de
  carregamento das páginas, essas melhorias tornariam a navegação mais ágil, intuitiva e agradável.

## Componentes reutilizáveis adicionados

- Após percebemos que o header, o footer e o menu lateral eram idênticos em todas as páginas do site, decidimos implementar a reutilização de componentes com o JavaScript, desse modo não há mais a necessidade de alterar estes componentes em cada uma das páginas do site, já que ao alterar a semântica no arquivo do componente (footer.html, header.html, nav.html) todas as páginas já recebem a atualização.

## Interações adicionadas

- Foi adicionado o botão de "Voltar ao Topo" no footer da página para facilitar a navegação do usuário, uma vez que o mesmo não precisará rolar até o início para voltar ao topo da página, bastando apenas clicar no novo botão adicionado.

- Foram adicionados efeitos de hover mais elaborados para deixar a página mais interativa e sofisticada visualmente.

## Ajustes realizados após Lighthouse

- Segundo a auditoria do Lighthouse o site apresenta nota 57 no quesito perfomance, isto se deve ao grande volume de imagens presentes na pasta img. Para melhorar a perfomance do site, as imagens tiveram os seus tamanhos reduzidos.

- Os requisitos de Acessibilidade e Melhores Práticas receberam 96 pontos e SEO recebeu 91 pontos.
  
## Layout em Diferentes Telas

- O layout se adapta bem nos dispostivos (Mobile, Tablet, Desktop), as imagens redimensionam corretamente, os textos ficam legíveis, o menu funciona perfeitamente e os espaçamentos são adequados em todos os dispositivos.

- Os breakpoints do site estão devidamente ajustados.

## Integrações Externas

- O negócio não conta com endereço físico , por isso não foi adicionada a localização do Google Maps.

- O site conta com Botão de WhatsApp que cria um link direto para o WhatsApp do negócio.

- O site conta com Botão de Instagram que abre a página oficial do negócio no Instagram.

## Plano de Melhorias

- Pretendemos aprimorar a responsividade da página “Fale Conosco”, que ainda não se adapta completamente a diferentes tamanhos de tela como as demais seções do site.
  
- Almejamos aumentar a modularização do projeto para melhorar a nota de desempenho no Lighthouse.

- Melhorar a organização do código, inserindo novos comentários que facilitem futuras manutenções.