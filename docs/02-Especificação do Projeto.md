# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>


A ideia do projeto advém de um contexto de falta de controle financeiro enfrentada por diferentes personas, resultando em situações de inadimplência, dificuldades em estabelecer metas e acompanhar o progresso financeiro, além da necessidade de acesso a conteúdo educativo relevante para cada contexto específico. As personas enfrentam desafios diversos, como queda na renda, despesas médicas inesperadas, ou falta de trabalho, exigindo uma solução flexível e personalizada.

Durante a fase inicial de planejamento do projeto, seguimos uma abordagem estruturada que incluiu os seguintes passos: identificação das personas mais relevantes para o escopo da aplicação, análise detalhada das necessidades e desafios dos usuários, e elaboração dos requisitos fundamentais que orientam o desenvolvimento do projeto.

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

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

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
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

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA |
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA |
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

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
