# Especificações do Projeto

A ideia do projeto advém de um contexto de falta de controle financeiro enfrentada por diferentes personas, resultando em situações de inadimplência, dificuldades em estabelecer metas e acompanhar o progresso financeiro, além da necessidade de acesso a conteúdo educativo relevante para cada contexto específico. As personas enfrentam desafios diversos, como queda na renda, despesas médicas inesperadas, ou falta de trabalho, exigindo uma solução flexível e personalizada.

Durante a fase inicial de planejamento do projeto, seguimos uma abordagem estruturada que incluiu os seguintes passos: identificação das personas mais relevantes para o escopo da aplicação, análise detalhada das necessidades e desafios dos usuários, e elaboração dos requisitos fundamentais que orientam o desenvolvimento do projeto.

## Personas

#### Persona 1:

João Oliveira tem 45 anos, é comerciante autônomo que trabalha como vendedor ambulante nas ruas de Recife. Ele enfrenta dificuldades financeiras devido à queda nas vendas durante a pandemia e acumulou dívidas que o deixaram em situação de inadimplência.

#### Persona 2:

Maria Oliveira tem 35 anos, é assistente administrativa e enfrenta dificuldades financeiras após ter sido demitida durante a pandemia. Ela acumulou dívidas enquanto procurava por um novo emprego e agora está em situação de inadimplência.

#### Persona 3:

Pedro Souza tem 28 anos, é motorista de aplicativo e tem enfrentado dificuldades financeiras devido à queda na demanda por transporte durante a pandemia. Ele acumulou dívidas para pagar suas contas e agora está em situação de inadimplência.


#### Persona 4:

Laura Santos tem 30 anos, é recepcionista em uma clínica médica e enfrenta dificuldades financeiras após ter sido diagnosticada com uma doença que a obrigou a fazer tratamentos médicos caros. Ela acumulou dívidas devido às despesas médicas e agora está em situação de inadimplência.

#### Persona 5:

Ana Rodrigues tem 50 anos, é diarista e enfrenta dificuldades financeiras devido à falta de trabalho durante a pandemia. Ela acumulou dívidas para pagar suas despesas básicas e agora está em situação de inadimplência.

#### Persona 6:

José da Silva tem 55 anos, é corretor de imóveis e sua renda vem das comissões das vendas de imóveis (recebe um percentual quando consegue concretizar o negócio). José acumula dívidas e empréstimos, pois não consegue se organizar em virtude da imprevisibilidade inerente à sua fonte de renda.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO...          | QUERO/PRECISO ...                  |PARA ...                                |
|--------------------|------------------------------------|----------------------------------------|
|João Oliveira       | Visualizar de forma clara e precisa os valores das minhas dívidas, categorizando cada uma delas. | Entender melhor minha situação financeira.
|João Oliveira       | Adicionar novas dívidas à minha lista, informando o valor, o motivo e a data de vencimento.     | Manter meu registro financeiro atualizado. |
|João Oliveira       | Marcar algumas dívidas como prioritárias | Para que a aplicação me ajude a priorizá-las no plano de pagamento.  |
|Maria Oliveira      | Estabelecer metas financeiras realistas e acompanhar meu progresso em relação ao orçamento estipulado. | Ajudar a sair da situação de inadimplência. |
|Maria Oliveira      | Um gráfico ou relatório visual que mostre meu progresso em relação às metas financeiras estabelecidas. | Para me manter motivada a seguir o plano. |
|Pedro Souza         | Registrar minhas despesas fixas e variáveis de maneira sistemática. | Ter um controle mais efetivo sobre meus gastos e evitar o agravamento das dívidas. |
|Pedro Souza         | Categorizar minhas despesas por tipo (alimentação, transporte, moradia, etc.). | Identificar onde estou gastando mais e tomar medidas para reduzir esses gastos. |
|Pedro Souza         | Ter a opção de cadastrar múltiplas fontes de renda na aplicação | Ter uma visão abrangente de todas as minhas receitas mensais. |
|Pedro Souza         | Um histórico de transações que me permita revisar todas as movimentações financeiras realizadas. | Garantir que nada tenha passado despercebido. |
|Pedro Souza         | Ter conhecimento para avaliar se é melhor financiar um carro mais novo ou vender o atual e alugar um carro. | Tomar uma decisão financeira mais responsável |
|Laura Santos        | Receber conteúdo educativo sobre finanças pessoais adaptado à minha realidade, especialmente sobre como lidar com despesas médicas | Para me ajudar a gerenciar melhor os meus recursos financeiros. |
|Laura Santos        | Espaço onde possa armazenar e acessar facilmente documentos importantes relacionados às minhas despesas médicas, como recibos e notas fiscais.  | Oragnizar minhas despesas de forma prática |
|Ana Rodrigues       | Acessar recursos educativos sobre finanças pessoais e receber dicas personalizadas para melhorar minha situação financeira, levando em consideração minha profissão e renda variável.     | Aprender sobre educação financeira e aplicar na minha realidade. |
|Ana Rodrigues       | Ter a opção de acessar um glossário de termos financeiros para entender melhor os conceitos apresentados na aplicação.     | Para ter maior conhecimento e autonomia na gestão de minhas finanças. |
|José da Silva       | Acessar conteúdo educacional sobre como organizar minhas finanças pessoais com essa característica de entradas irregulares.    | Aprender sobre educação financeira e organizar melhor minhas finanças. |
|José da Silva       | Ser capaz de organizar gastos maiores (compras de itens para a casa, troca de carro, etc.) sem recorrer a empréstimos bancários ou crédito rotativo do cartão de crédito    | Evitar entrar em situação de inadimplência. |
|José da Silva       | Negociar as minhas dívidas de forma     | Minimizar a o dinheiro gasto com juros |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito                  | Prioridade |
|------|-----------------------------------------|------------|
|RF-001| O sistema deve permitir que o usuário registre suas dívidas, incluindo valor, motivo e data de vencimento. | ALTA |
|RF-002| Deve ser possível categorizar cada dívida para uma melhor organização financeira.   | ALTA |
|RF-003| O usuário deve poder visualizar de forma clara e precisa o valor total de suas dívidas, bem como uma lista detalhada de cada uma delas.   | ALTA |
|RF-004| O usuário deve poder registrar suas despesas fixas e variáveis de maneira sistemática.   | ALTA |
|RF-005| Deve ser possível categorizar as despesas por tipo (alimentação, transporte, moradia, etc.).   | ALTA |
|RF-006| Os usuários devem ter a opção de cadastrar múltiplas fontes de renda na aplicação.   | ALTA |
|RF-007| A aplicação deve fornecer conteúdo educativo sobre finanças pessoais, adaptado à realidade e às necessidades do público em situação de inadimplência.   | ALTA |
|RF-008| Os usuários devem ter acesso a dicas personalizadas com base em sua profissão e situação financeira.   | ALTA |
|RF-009| Os usuários devem ter acesso a um histórico de transações que lhes permita revisar todas as movimentações financeiras realizadas.   | ALTA |
|RF-010| A aplicação deve permitir que os usuários estabeleçam metas financeiras realistas e acompanhem seu progresso em relação ao orçamento estipulado.   | MÉDIA |
|RF-011| Deve haver opção para priorizar algumas dívidas, destacando-as na interface.   | MÉDIA |
|RF-012| Deve ser possível armazenar e acessar facilmente documentos importantes relacionados às despesas, como recibos e notas fiscais.   | MÉDIA |
|RF-013| Deve haver um gráfico ou relatório visual que mostre o progresso em relação às metas financeiras estabelecidas.   | MÉDIA |
|RF-014| A aplicação deve fornecer ferramentas para ajudar os usuários a avaliar alternativas financeiras, como financiamento de um carro novo versus reparos no carro atual.   | MÉDIA |
|RF-015| Deve haver recursos para auxiliar os usuários na negociação de suas dívidas, visando minimizar os gastos com juros.   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|-----------|
|RNF-001| A interface da aplicação deve ser intuitiva e de fácil utilização, considerando o público-alvo, que pode ter diferentes níveis de familiaridade com a tecnologia. | ALTA |
|RNF-002| A aplicação deve garantir a segurança dos dados dos usuários, implementando medidas como criptografia e autenticação robusta. |  ALTA |
|RNF-003| A aplicação deve estar disponível de forma consistente, com tempo de inatividade mínimo para garantir que os usuários possam acessá-la sempre que necessário. |  ALTA |
|RNF-004| A aplicação deve ser compatível com uma variedade de dispositivos e navegadores web, para garantir que os usuários possam acessá-la em diferentes plataformas. |  ALTA |
|RNF-005| A aplicação deve ser acessível para pessoas com deficiência, seguindo as diretrizes de acessibilidade web.|  ALTA |
|RNF-006| A aplicação deve ser facilmente atualizável e requer manutenção mínima para garantir que esteja sempre atualizada e funcional. |  MÉDIA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
