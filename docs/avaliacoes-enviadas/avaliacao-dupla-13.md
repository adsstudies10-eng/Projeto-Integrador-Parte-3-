**Rubrica de Avaliação entre Pares:** Projeto Integrador (Parte 3)

**Projeto Avaliado:** CONIC! - Sebo de Discos

**Integrantes do Projeto:** Pedro Dias Ferreira - Designer, Desenvolvedor Front-end; Diego Alves - Documentação

**GitHub Pages:** <https://p2451.github.io/CONIC-/>

**Repositório GitHub:** https://github.com/p2451/CONIC-

**Dupla Avaliadora:** Carlos Eduardo Costa da Silva e Pedro Augusto Neves Ferreira

**Data de Preenchimento:** 12/11/2025

<a name="x60fc29beef59590b3370de4912bc86748218429"></a><a name="informações-da-avaliação"></a><a name="critérios-técnicos"></a>**CRITÉRIOS TÉCNICOS**

<a name="modularização-do-código-html-0-8-pontos"></a>**1. Modularização do Código HTML (0-8 pontos)**

**Níveis de Desempenho:**

**Iniciante (1-2 pontos):** Código desorganizado, sem separação em componentes. Há repetição de código HTML em múltiplas páginas. Estrutura de pastas confusa ou inexistente.

**Em Desenvolvimento (3-4 pontos):** Alguns componentes identificados e separados, mas nem todos foram modularizados. Estrutura de pastas existe mas está incompleta. Ainda há repetição de código em alguns lugares.

**Proficiente (5-6 pontos):** Componentes principais (header, footer, etc.) estão bem separados e organizados em pastas. Sistema de modularização está funcionando. Estrutura de pastas clara e profissional. Pouca ou nenhuma repetição de código.

**Avançado (7-8 pontos):** Modularização exemplar com todos os componentes reutilizáveis bem separados. Sistema de carregamento de componentes funciona perfeitamente em todas as páginas. Estrutura de pastas profissional e bem documentada. Zero repetição de código HTML.

**Pontuação Atribuída: 6 / 8**

**Justificativa:**

Foi criada uma estrutura de pastas organizada e profissional com separação clara entre componentes, CSS e JavaScript. Os arquivos header.html e footer.html estão apropriadamente separados na pasta /componentes, permitindo reutilização em múltiplas páginas (index.html, sobre.html, contato.html). A estrutura de pastas é clara: /componentes, /css, /js, /img, /docs, mostrando organização, mas existe repetição de código HTML observável, particularmente na navegação (nav\_list vs mobile\_nav\_list com estruturas similares) e na tag <head> que aparece dentro de <header> no arquivo.

<a name="acessibilidade-0-8-pontos"></a>**2. Acessibilidade (0-8 pontos)**

**Níveis de Desempenho:**

**Iniciante (1-2 pontos):** Pouco ou nenhum esforço em acessibilidade. HTML semântico inadequado. Ausência de atributos alt em imagens. Formulários sem labels. Sem teste de navegação por teclado.

**Em Desenvolvimento (3-4 pontos):** Alguns recursos de acessibilidade implementados (ex.: algumas imagens com alt, alguns labels em formulários). HTML semântico parcial. Navegação por teclado parcialmente funcional. Foco visual não muito claro.

**Proficiente (5-6 pontos):** Boa implementação de acessibilidade. HTML semântico em todo o site. Todas as imagens com alt descritivo. Formulários com labels associados. Navegação por teclado funcional. Estilos de :focus visíveis. Contraste adequado.

**Avançado (7-8 pontos):** Excelente implementação de acessibilidade. HTML semântico completo e correto. Skip link implementado. Atributos ARIA onde necessário. Formulários perfeitamente acessíveis. Navegação por teclado fluida. Alto contraste e legibilidade. Teste de acessibilidade realizado com Lighthouse com bom resultado.

**Pontuação Atribuída: 6 / 8**

**Justificativa:**

Foram feitos atributos ARIA implementados (aria-controls, aria-expanded, aria-label no botão hambúrguer); formulários bem estruturados com labels associados aos campos (for=“firstname”, for=“email”, for=“number”); uso de <main> com id apropriado; meta viewport presente para responsividade, mas o atributo alt na imagem de contato é genérico (“whatsapp” em vez de descrição mais completa); faltam algumas tags semânticas estratégicas (como <article> para seções de conteúdo).

<a name="responsividade-0-8-pontos"></a>**3. Responsividade (0-8 pontos)**

**Níveis de Desempenho:**

**Iniciante (1-2 pontos)**: Site não se adapta bem a diferentes tamanhos de tela. Layout quebra ou fica ilegível em mobile ou tablet. Imagens não redimensionam. Pouco ou nenhum uso de media queries.

**Em Desenvolvimento (3-4 pontos):** Site adapta-se parcialmente. Alguns breakpoints implementados mas layout é inconsistente em certos tamanhos. Imagens redimensionam mas nem sempre bem. Espaçamentos irregulares.

**Proficiente (5-6 pontos):** Site totalmente responsivo. Media queries bem aplicadas para mobile (375px), tablet (768px) e desktop (1024px+). Layout adapta-se fluidamente. Imagens redimensionam corretamente. Espaçamentos consistentes. Mobile-first implementado.

**Avançado (7-8 pontos):** Responsividade impecável em todos os tamanhos de tela. Breakpoints bem planejados e executados. Uso avançado de Flexbox/Grid. Imagens e vídeo não apenas redimensionam, mas otimizam. Tipografia escalável. Experiência perfeita em qualquer dispositivo.

**Pontuação Atribuída: 7 / 8**

**Justificativa:**

O projeto utiliza uma abordagem mobile-first conforme (“mobile-first, breakpoints em 768px, 1024px, 1280px”). O arquivo responsive.css é dedicado a media queries, o que demonstra organização. Meta viewport presente para responsividade móvel; imagens configuradas com max-width:100%; height:auto; para fluidez; grid responsivo implementado com grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); botão hambúrguer funcional em breakpoints menores.

<a name="x1a0ae8004832024ffa95015b87efbb50a1b59a5"></a>**4. Organização e Manutenibilidade do Código (0-8 pontos)**

**Níveis de Desempenho:**

**Iniciante (1-2 pontos):** Código desorganizado. Nomes de arquivos confusos. Comentários ausentes ou inúteis. Difícil entender ou manter o código.

**Em Desenvolvimento (3-4 pontos):** Estrutura básica de pastas. Nomes de arquivos parcialmente claros. Alguns comentários mas nem sempre bem colocados. Código funciona mas é moderadamente difícil manter.

**Proficiente (5-6 pontos):** Código bem organizado em arquivos e pastas lógicas. Nomes descritivos e consistentes (kebab-case para arquivos, etc.). Comentários relevantes em trechos complexos. Fácil navegar e manter o código.

**Avançado (7-8 pontos):** Organização exemplar. Estrutura de pastas profissional. Nomenclatura consistente e clara. Comentários bem colocados explicando lógica. Código limpo, sem redundâncias. Pronto para manutenção por terceiros.

**Pontuação Atribuída: 7 / 8**

**Justificativa:**

A estrutura de pastas lógica e intuitiva: /css para estilos separados em style.min.css e responsive.css; /js para JavaScript modularizado em main.min.js e menu\_hamburguer.js; /img para todos os assets; /componentes para header e footer reutilizáveis. Nomes de arquivos são descritivos (menu\_hamburguer.js, style.min.css); O README é detalhado e há comentários no código HTML.

<a name="critérios-estéticos"></a>**CRITÉRIOS ESTÉTICOS**

<a name="design-visual-coerente-0-8-pontos"></a>**5. Design Visual Coerente (0-8 pontos)**

**Níveis de Desempenho:**

**Iniciante (1-2 pontos):** Visual inconsistente ou genérico. Cores sem harmonia. Tipografia inadequada. Sem identidade visual clara. Escolhas visuais não justificadas.

**Em Desenvolvimento (3-4 pontos):** Visual razoável mas com inconsistências. Paleta de cores básica. Tipografia aceitável mas não otimizada. Identidade visual fraca. Algumas justificativas de design.

**Proficiente (5-6 pontos):** Design coerente e profissional. Paleta de cores bem escolhida e justificada. Tipografia adequada ao negócio e público. Identidade visual clara. Escolhas visuais alinhadas com a proposta.

**Avançado (7-8 pontos):** Design excepcional e memorável. Paleta de cores harmoniosa e estratégica. Tipografia sofisticada e totalmente justificada. Identidade visual forte e diferenciada. Cada escolha visual tem propósito claro.

**Pontuação Atribuída: 6 / 8**

**Justificativa:**

O projeto demonstra uma identidade visual coerente, alinhada ao tema proposto. A paleta de cores é harmoniosa, transmite modernidade retro. A fonte Poppins foi bem escolhida, permitindo hierarquia visual.

O README poderia documentar mais a paleta de cores.

<a name="hierarquia-visual-e-layout-0-8-pontos"></a>**6. Hierarquia Visual e Layout (0-8 pontos)**

**Níveis de Desempenho:**

**Iniciante (1-2 pontos):** Sem hierarquia clara. Elementos desalinhados. Espaçamento irregular. Layout confuso. Difícil identificar o conteúdo principal.

**Em Desenvolvimento (3-4 pontos):** Hierarquia básica presente. Alguns elementos alinhados. Espaçamento parcialmente consistente. Layout funcional mas poderia ser mais organizado.

**Proficiente (5-6 pontos):** Hierarquia visual bem definida. Elementos alinhados e bem espaçados. Grid ou estrutura clara. Usuário consegue identificar facilmente o que é importante. Layout profissional.

**Avançado (7-8 pontos):** Hierarquia excepcional que guia perfeitamente o olhar. Alinhamento impecável. Whitespace estratégico. Composição visual profissional e refinada. Usuário entende intuitivamente a estrutura.

**Pontuação Atribuída: 6 / 8**

**Justificativa:**

A hierarquia visual é bem definida e a estrutura do layout é clara. O projeto usa Grid responsivo (grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))) o que cria layouts em diferentes tamanhos. A página de contato exemplifica boa hierarquia: imagem à esquerda, formulário à direita em desktop, com reorganização apropriada em mobile.

Elementos estão bem alinhados e o whitespace bem utilizado.

A composição visual poderia explorar mais o conceito retro/vintage apropriado a sebo de discos, mais texturas, talvez efeitos analógicos.

<a name="x8d214d51f978be134f43cf8db7e4a727093590c"></a>**7. Usabilidade e Experiência do Usuário (0-8 pontos)**

**Níveis de Desempenho:**

**Iniciante (1-2 pontos):** Navegação confusa. Elementos pouco intuitivos. Usuário se perde facilmente. Botões e links desorganizados. Experiência frustrante.

**Em Desenvolvimento (3-4 pontos):** Navegação funcional mas não muito intuitiva. Alguns elementos claros, outros confusos. Usuário consegue navegar mas com dificuldade. Experiência mediana.

**Proficiente (5-6 pontos):** Navegação clara e intuitiva. Botões e links bem-sinalizados. Menu funciona bem. Fluxo lógico no site. Usuário navega sem confusão. Boa experiência.

**Avançado (7-8 pontos):** Navegação fluida e natural. Elementos interativos claramente identificáveis. Feedback visual claro (ex.: hover effects). Fluxo perfeito. Usuário tem excelente experiência. Interface agradável e intuitiva.

**Pontuação Atribuída: 6 / 8**

**Justificativa:**

A navegação é clara com menu tradicional em desktop (Início, Sobre, Contato) e menu hambúrguer com transição suave em mobile. Botão “Compre Aqui!” é destaque visual evidente. Links têm feedback visual claro.

Botões apresentam texto claro (“Enviar”, “Compre Aqui!”); os ícones utilizados são reconhecíveis (WhatsApp, Instagram, Facebook). O usuário entra em index.html e pode ir para “Sobre” ou “Contato”.

<a name="alinhamento-com-o-negócio-0-8-pontos"></a>**8. Alinhamento com o Negócio (0-8 pontos)**

**Níveis de Desempenho:**

**Iniciante (1-2 pontos):** Design não reflete o negócio. Escolhas visuais desconectadas do público-alvo. Site poderia ser de qualquer negócio.

**Em Desenvolvimento (3-4 pontos):** Design parcialmente alinhado ao negócio. Algumas escolhas justificadas mas outras genéricas. Identidade do negócio parcialmente visível.

**Proficiente (5-6 pontos):** Design bem alinhado ao negócio e público-alvo. Escolhas visuais justificadas e apropriadas. Identidade e proposta do negócio claramente comunicadas. Site é reconhecível para este negócio específico.

**Avançado (7-8 pontos):** Design estrategicamente alinhado com negócio. Visual diferenciado e memorável. Escolhas justificadas pelo público-alvo. Comunica valor único da proposta. Professionalismo em todos os detalhes.

**Pontuação Atribuída: 6 / 8**

**Justificativa:**

O site está bem alinhado ao negócio de sebo de discos CONIC!. Ícone de vinil integrado na marca; slogan “Desfrute dos clássicos dos anos 80 / Os melhores discos você encontra aqui” comunica a proposta do site; imagens de discos transmitem o tema retrô.

Público-alvo é considerado, botão “Compre Aqui!” voltado para vendas; Paleta de cores na cor ouro e rosa transmitem a atmosfera retrô almejada.

O site é funcional e alinhado a proposta do sebo de discos, mas poderia ter mais elementos visuais únicos, como design de capas de disco e animações temáticas.

<a name="resumo-de-pontuação"></a>**RESUMO DE PONTUAÇÃO**

|Critério|**Pontuação**|
| :- | :- |
|1\. Modularização do Código HTML|6 / 8|
|2\. Acessibilidade|6 / 8|
|3\. Responsividade|7 / 8|
|4\. Organização e Manutenibilidade|7 / 8|
|5\. Design Visual Coerente|6 / 8|
|6\. Hierarquia Visual e Layout|6 / 8|
|7\. Usabilidade e UX|6 / 8|
|8\. Alinhamento com o Negócio|6 / 8|
|TOTAL|50 / 64|

<a name="devolutiva-construtiva"></a>**DEVOLUTIVA CONSTRUTIVA**

<a name="pontos-fortes"></a>**Pontos Fortes**

**1. Responsividade Excepcional**

O site adapta-se em todos os tamanhos de tela (375px, 768px, 1280px, 1920px). A abordagem mobile-first está bem implementada com breakpoints bem planejados. A dupla demonstrou um ótimo domínio de media queries, Flexbox/Grid e tipografia escalável. Os testes em vários navegadores (Chrome, Edge, Mozilla) comprovam essa qualidade.

**2. Organização e Estrutura Profissional**

A organização de pastas, nomes dos arquivos e estrutura do projeto no geral refletem profissionalismo e pensamento estruturado. A separação clara entre componentes, CSS, JavaScript e assets facilita a manutenção. O README é bem organizado.

**3. Implementação de Acessibilidade com Atributos ARIA**

Percebeu-se o esforço em acessibilidade implementando atributos ARIA (aria-controls, aria-expanded, aria-label), labels associados em formulários, e navegação semântica. Demonstra consciência sobre inclusão e usabilidade.

<a name="oportunidades-de-melhoria"></a>**Oportunidades de Melhoria**

**1. Refinar Acessibilidade com HTML Semântico Completo**

Embora os atributos ARIA estejam bem implementados, o projeto poderia melhorar ainda mais usando mais tags semânticas HTML5 (como <article>, <section>, <aside> apropriadamente). Revisar e otimizar todos os atributos alt em imagens para descrições mais completas e significativas, em vez de placeholders.

**2. Aprofundar Identidade Visual e Diferenciação**

O projeto poderia explorar mais a estética retro, talvez adicionar texturas visuais, animações temáticas no *hover* ou paleta de cores mais diversa e documentada adequadamente.

<a name="comentário-final"></a>**Comentário Final**

Parabéns à dupla Pedro Dias Ferreira e Diego Alves pelo excelente trabalho realizado no projeto CONIC!. O site demonstra conhecimento sólido de desenvolvimento front-end responsivo, organização profissional de código e preocupação com usabilidade e acessibilidade.

O README bem organizado e os testes documentados mostram competência técnica e também pensamento crítico sobre o trabalho realizado.
