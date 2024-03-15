# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

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



<!-- Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja. -->

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|João Oliveira       | Visualizar de forma clara e precisa os valores das minhas dívidas, categorizando cada uma delas, para entender melhor minha situação financeira.    | Não esquecer de fazê-las
|João Oliveira       | Adicionar novas dívidas à minha lista, informando o valor, o motivo e a data de vencimento, para manter meu registro financeiro atualizado.         | Não esquecer de fazê-las               |
|João Oliveira       | Marcar algumas dívidas como prioritárias, para que a aplicação me ajude a priorizá-las no plano de pagamento.| Não esquecer de fazê-las               |
|Maria Oliveira      | Estabelecer metas financeiras realistas e acompanhar meu progresso em relação ao orçamento estipulado, para me ajudar a sair da situação de inadimplência.  | Não esquecer de fazê-las               |
|Maria Oliveira      | Um gráfico ou relatório visual que mostre meu progresso em relação às metas financeiras estabelecidas, para me manter motivada a seguir o plano.           | Não esquecer de fazê-las               |
|Pedro Souza         | Registrar minhas despesas fixas e variáveis de maneira sistemática, para ter um controle mais efetivo sobre meus gastos e evitar o agravamento das dívidas.           | Não esquecer de fazê-las               |
|Pedro Souza         | Categorizar minhas despesas por tipo (alimentação, transporte, moradia, etc.) para identificar onde estou gastando mais e tomar medidas para reduzir esses gastos.           | Não esquecer de fazê-las               |
|Pedro Souza         | Ter a opção de cadastrar múltiplas fontes de renda na aplicação, para ter uma visão abrangente de todas as minhas receitas mensais.                 | Permitir que possam administrar contas |
|Pedro Souza         | Um histórico de transações que me permita revisar todas as movimentações financeiras realizadas, para garantir que nada tenha passado despercebido.                 | Permitir que possam administrar contas |
|Pedro Souza         | Ter conhecimento para avaliar se é melhor financiar um carro mais novo ou vender o atual e alugar um carro.                | Permitir que possam administrar contas |
|Laura Santos        | Receber conteúdo educativo sobre finanças pessoais adaptado à minha realidade, especialmente sobre como lidar com despesas médicas, para me ajudar a gerenciar melhor os meus recursos financeiros.      | Permitir que possam administrar contas |
|Laura Santos        | Espaço onde possa armazenar e acessar facilmente documentos importantes relacionados às minhas despesas médicas, como recibos e notas fiscais.     | Permitir que possam administrar contas |
|Ana Rodrigues       | Acessar recursos educativos sobre finanças pessoais e receber dicas personalizadas para melhorar minha situação financeira, levando em consideração minha profissão e renda variável.     | Permitir que possam administrar contas |
|Ana Rodrigues       | Ter a opção de acessar um glossário de termos financeiros para entender melhor os conceitos apresentados na aplicação.     | Permitir que possam administrar contas |
|José da Silva       | Acessar conteúdo educacional sobre como organizar minhas finanças pessoais com essa característica de entradas irregulares    | Permitir que possam administrar contas |
|José da Silva       | Ser capaz de organizar gastos maiores (compras de itens para a casa, troca de carro, etc.) sem recorrer a empréstimos bancários ou crédito rotativo do cartão de crédito    | Permitir que possam administrar contas |
|José da Silva       | negociar as minhas dívidas de forma a minimizar a o dinheiro gasto com juros    | Permitir que possam administrar contas |



Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

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
