# Plano de Testes de Software

|     **Caso de Teste**     | **CT01 - Iniciar Navegação**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) Acessar <br> 2) Inserir os dados nos campos apresentados <br> 3) Clicar no botão Começar                                                                                                                     |
| **Requisitos associados** | RF-016                                                                                                                                                                                                          |
|  **Resultado esperado**   | Prosseguir para a página de login.                                                                                                                                                                              |
|   **Dados de entrada**    | Clique no botão começar.                                                                                                                                                                                        |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                                                        |

|     **Caso de Teste**     | **CT02 - Realizar Login**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) Inserir e-mail e senha. <br> 2) Clicar no botão Entrar <br> 3) Seja redirecionado para a tela de dashboard                                                                                                                     |
| **Requisitos associados** | RF-016                                                                                                                                                                                                          |
|  **Resultado esperado**   | Login na plataforma e ser direcionado para a página de dashboard                                                                                                                                                                              |
|   **Dados de entrada**    | E-mail e senha                                                                                                                                                                                        |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                                                        |

|     **Caso de Teste**     | **CT03 - Realizar Cadastro**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) Na tela de login clicar em Cadastre-se <br> 2) Usuário será direcionado para tela de cadastro <br> 3) Inserir dados solicitados (Nome, Sobrenome, Email, Senha e Confirmar senha). <br> 4) Clicar no botão Cadastrar <br> 5) Será direcionado para a página de login novamente. <br> 6) Aparece pop-up informando que o cadastro foi realizado com sucesso.                                                                                                                     |
| **Requisitos associados** | RF-016                                                                                                                                                                                                          |
|  **Resultado esperado**   | Realização de cadastro e retorno para a página de login.                                                                                                                                                                              |
|   **Dados de entrada**    | Nome, Sobrenome, Email, Senha e Confirmar senha                                                                                                                                                                                        |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                                                        |

|     **Caso de Teste**     | **CT04 - Cadastrar transações**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) Clicar no botão da carteira no menu, tela de transações <br> 2) Na tela aparecerão as opções para inserir nova receita ou nova despesa <br> 3) Preencher os campos da transação desejada. <br> 4) Selecionar a categoria desejada ou criar nova <br> 5) Para o caso de despesas parceladas marcar o checkbox de “Val. parcelado” e inserir o dado da quantidade de parcelas. <br> 6) Clicar no botão Salvar <br> 7) Aparecerá um pop-up com os dados digitados para confirmação <br> 8) Clicar no botão Confirmar <br> 9) Aparecerá um pop-up com a mensagem transação salva com sucesso.                                                                                                                     |
| **Requisitos associados** | RF-001 - RF004                                                                                                                                                                                                          |
|  **Resultado esperado**   | Cadastro de nova transação e confirmação de que cadastro foi realizado.                                                                                                                                                                       |
|   **Dados de entrada**    | Checkbox, valor total, quantidade de parcelas, descrição, opções dropbox, nome de categoria.                                                                                                                                                                                      |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                                                        |

|     **Caso de Teste**     | **CT05 - Criar nova categoria**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) Durante o cadastro de nova transação selecionar o checkbox Nova categoria. <br> 2) Dropdown de categoria deve permanecer sem categoria selecionada. <br> 3) Digitar nome da nova categoria.                                    |
| **Requisitos associados** | RF-002 - RF-005                                                                                                                                                                                                          |
|  **Resultado esperado**   | Ao cadastrar a transação a categoria deve ser cadastrada junto.                                                                                                                                                                              |
|   **Dados de entrada**    | Check box e nome da categoria.                                                                                                                                                                                        |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                                                        |

|     **Caso de Teste**     | **CT06 - Cadastrar nova meta**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) Clicar no botão do foguete no menu, tela de metas <br> 2) Inserir os dados solicitados. <br> 3) Clicar no botão criar meta <br> 4) aparece um pop-up informando que a meta foi cadastrada com sucesso        |
| **Requisitos associados** | RF-010 - RF-013                                                                                                                                                                                                         |
|  **Resultado esperado**   | Meta deve ser cadastrada e deve aparecer no campo acompanhamento de meta.                                                                                                                                                        |
|   **Dados de entrada**    | Dropbox, seleção de data, valor total e nome da meta.                                                                                                                                                                                        |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                                                        |

|     **Caso de Teste**     | **CT07 - Adicionar saldo à meta**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) Clicar no botão do foguete no menu, tela de metas <br> 2) Inserir o valor e selecionar a meta que deseja atualizar <br> 3) Clicar no botão salvar <br> 4) aparece um pop-up informando que a meta foi atualizada com sucesso         |
| **Requisitos associados** | RF-010 - RF-013                                                                                                                                                                                                         |
|  **Resultado esperado**   | Barra de porcentagem da meta deve ser ajustada no campo acompanhamento de meta                                                                                                                                                        |
|   **Dados de entrada**    | Dropbox e valor total.                                                                                                                                                                                        |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                                                        |

|     **Caso de Teste**     | **CT08 - Visualizar extrato**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) Clicar no botão do gráfico no menu, tela de dashboard <br> 2) Clicar em ver extrato <br> 3) Usuário será direcionado para a tela de extrato         |
| **Requisitos associados** | RF-003                                                                                                                                                                                                         |
|  **Resultado esperado**   | Direcionamento para a tela de extrato                                                                                                                                                        |
|   **Dados de entrada**    | Clique simples no link ver extrato.                                                                                                                                                                                        |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                                                        |

|     **Caso de Teste**     | **CT09 - Realizar Logout**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) A partir de qualquer tela que acesse o menu lateral, selecionar a opção “Logout” (posição inferior do menu lateral)         |
| **Requisitos associados** | RF-016                                                                                                                                                                                                         |
|  **Resultado esperado**   | Redirecionamento para a página de login                                                                                                                                                        |
|   **Dados de entrada**    | Clique simples na opção “Logout” do menu lateral                                                                                                                                                                                        |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                                                        |

|     **Caso de Teste**     | **CT10 - Acessar página de Artigos**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) A partir de qualquer tela que acesse o menu lateral, selecionar a opção “Artigos”         |
| **Requisitos associados** | RF-007                                                                                                                                                                                                         |
|  **Resultado esperado**   | Redirecionamento para a página de artigos                                                                                                                                                        |
|   **Dados de entrada**    | Clique simples na opção “Artigos” do menu lateral                                                                                                                                                                                        |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                                                        |

|     **Caso de Teste**     | **CT11 - Navegação da página de Artigos / Barra de Rolagem**                                                                                                                                                                                |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) Teste de funcionamento da barra de rolagem da página de artigos utilizando as teclas “up” e “down” do teclado <br> 2)  Teste de funcionamento da barra de rolagem da página de artigos utilizando o botão de rolagem do mouse <br> 3) Teste de funcionamento da barra de rolagem da página de artigos utilizando o botão esquerdo do mouse (mantendo pressionado e arrastando)       |
| **Requisitos associados** | RF-007                                                                                                                                                                                                         |
|  **Resultado esperado**   | Rolagem da página de artigos para cima e para baixo                                                                                                                                                        |
|   **Dados de entrada**    | Teclas “up” e “down” do teclado e botões do mouse                                                                                                                                                                                        |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                                                        |

|     **Caso de Teste**     | **CT12 - Navegação da página de Artigos / Botão “Ler Mais”**                                                                                                                                                                                |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) Clicar no botão “Ler Mais” para abrir o texto completo de cada item listado na página de Artigos       |
| **Requisitos associados** | RF-007                                                                                                                                                                                                         |
|  **Resultado esperado**   | Redirecionamento para a página específica de cada artigo                                                                                                                                                        |
|   **Dados de entrada**    | Clique simples em cada botão “Ler Mais”                                                                                                                                                                                        |
|   **Resultado obtido**    | Sucesso em todos os casos                                                                                                                                                                                                        |

|     **Caso de Teste**     | **CT13 - Navegação da página de Artigos / “Buscar Artigo”**                                                                                                                                                                                |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) Digitar palavras-chave na caixa de pesquisa do canto superior direito da página de Artigos       |
| **Requisitos associados** | RF-007                                                                                                                                                                                                         |
|  **Resultado esperado**   | Aplicação de filtro para exibição apenas dos artigos que contenham as palavras inseridas                                                                                                                                                       |
|   **Dados de entrada**    | Digitação de termos na caixa de pesquisa “Buscar Artigo”                                                                                                                                                                                      |
|   **Resultado obtido**    | Sucesso: motor de busca filtra os artigos buscando as palavras digitadas tanto no título do artigo, quanto no conteúdo e nas "breadcrumbs" |

|     **Caso de Teste**     | **CT14 - Navegação das páginas individuais de cada Artigo / Barra de Rolagem**                                                                                                                                                          |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) Teste de funcionamento da barra de rolagem da página de cada artigo utilizando as teclas “up” e “down” do teclado <br> 2)  Teste de funcionamento da barra de rolagem da página de cada artigo utilizando o botão de rolagem do mouse <br> 3) Teste de funcionamento da barra de rolagem da página de cada artigo utilizando o botão esquerdo do mouse (mantendo pressionado e arrastando)    |
| **Requisitos associados** | RF-007                                                                                                                                                                                                         |
|  **Resultado esperado**   | Rolagem da página de artigos para cima e para baixo                                                                                                                                                      |
|   **Dados de entrada**    | Teclas “up” e “down” do teclado e botões do mouse                                                                                                                                                                                     |
|   **Resultado obtido**    | Sucesso em todos os casos (e em todas as páginas)                                                                                                                                            |

|     **Caso de Teste**     | **CT15 - Acessar página do Simulador**                                                                                                                                                          |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) A partir de qualquer tela que acesse o menu lateral, selecionar a opção “Simulador”     |
| **Requisitos associados** | RF-014                                                                                                                                                                                                         |
|  **Resultado esperado**   | Redirecionamento para a página do Simulador                                                                                                                                                      |
|   **Dados de entrada**    | Clique simples na opção “Simulador” do menu lateral                                                                                                                                                                                     |
|   **Resultado obtido**    | Sucesso.                                                                                                                                            |

|     **Caso de Teste**     | **CT16 - Utilizar recurso do Simulador**                                                                                                                                                          |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1) Preencher os campos da página do simulador e clicar em “Simular”     |
| **Requisitos associados** | RF-014                                                                                                                                                                                                         |
|  **Resultado esperado**   | Demonstrativo com valor mensal da parcela, montante total a ser pago e valor a ser pago em juros                                                                                                                                       |
|   **Dados de entrada**    | Inserir Valor Total, Valor de Entrada, taxa de juros e quantidade de prestações (clicar em Simular)                                                                                                                                |
|   **Resultado obtido**    | Sucesso.                                                                                                                                            |

|     **Caso de Teste**     | **CT17 - Utilizar recurso do Simulador - Parte 2**                                                                                                                                                          |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     **Procedimento**      | 1)  Clicar nas diferentes opções do simulador: Veículo, Imóvel e Empréstimo     |
| **Requisitos associados** | RF-014                                                                                                                                                                                                         |
|  **Resultado esperado**   | Troca da modalidade de financiamento                                                                                                                                       |
|   **Dados de entrada**    | Clique simples nos botões de Veículo, Imóvel e Empréstimo                                                                                                                                |
|   **Resultado obtido**    | Sucesso: o simulador faz os cálculos corretamente e reseta (zera) os campos ao trocarmos de categoria |

# Plano de Testes de Software

|     **Caso de Teste**     | **CT01 - Iniciar Navegação**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Requisitos associados** | RF-016 - Os usuários devem realizar o cadastro e efetuar login para ter acesso a plataforma.                                                                                                                                                                                                          |
|  **Teste Realizado**   |    ![CT1](/docs/gifsTestes/CT01.gif)      

|     **Caso de Teste**     | **CT02 - Realizar Login**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Requisitos associados** | RF-016 - Os usuários devem realizar o cadastro e efetuar login para ter acesso a plataforma.                                                                                                                                                                                                          |
|  **Teste Realizado**   |    ![CT1](/docs/gifsTestes/CT02.gif)

|     **Caso de Teste**     | **CT03 - Realizar Cadastro**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Requisitos associados** | RF-016 - Os usuários devem realizar o cadastro e efetuar login para ter acesso a plataforma.                                                                                                                                                                                                          |
|  **Teste Realizado**   |    ![CT1](/docs/gifsTestes/CT03.gif)  

|     **Caso de Teste**     | **CT04 - Cadastrar Transações**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Requisitos associados** | RF-001 - O sistema deve permitir que o usuário registre suas dívidas, incluindo valor, motivo e data de vencimento. RF-004 - O usuário deve poder registrar suas despesas fixas e variáveis de maneira sistemática.                                                                              |
|  **Teste Realizado**   |    ![CT1](/docs/gifsTestes/CT04.gif)  

|     **Caso de Teste**     | **CT05 - Criar Nova Categoria**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Requisitos associados** | RF-002 - Deve ser possível categorizar cada dívida para uma melhor organização financeira. RF-005 - Deve ser possível categorizar as despesas por tipo (alimentação, transporte, moradia, etc.).                                             |
|  **Teste Realizado**   |    ![CT1](/docs/gifsTestes/CT05.gif)  

|     **Caso de Teste**     | **CT06 - Criar Nova Meta**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Requisitos associados** | RF-010 - A aplicação deve permitir que os usuários estabeleçam metas financeiras realistas e acompanhem seu progresso em relação ao orçamento estipulado. RF-013 - Deve haver um gráfico ou relatório visual que mostre o progresso em relação às metas financeiras estabelecidas.                     |
|  **Teste Realizado**   |    ![CT1](/docs/gifsTestes/CT06.gif)  

|     **Caso de Teste**     | **CT07 - Adicionar saldo à meta**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Requisitos associados** | RF-010 - A aplicação deve permitir que os usuários estabeleçam metas financeiras realistas e acompanhem seu progresso em relação ao orçamento estipulado. RF-013 - Deve haver um gráfico ou relatório visual que mostre o progresso em relação às metas financeiras estabelecidas.           |
|  **Teste Realizado**   |    ![CT1](/docs/gifsTestes/CT07.gif)  

|     **Caso de Teste**     | **CT08 - Visualizar extrato**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Requisitos associados** | RF-003 - O usuário deve poder visualizar de forma clara e precisa o valor total de suas dívidas, bem como uma lista detalhada de cada uma delas.                         |
|  **Teste Realizado**   |    ![CT1](/docs/gifsTestes/CT08.gif)  

|     **Caso de Teste**     | **CT09 - Realizar Logout**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Requisitos associados** | RF-016 - Os usuários devem realizar o cadastro e efetuar login para ter acesso a plataforma.             |
|  **Teste Realizado**   |    ![CT1](/docs/gifsTestes/CT09.gif)  

|     **Caso de Teste**     | **CT10 - Acessar página de Artigos**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Requisitos associados** | RF-007 - A aplicação deve fornecer conteúdo educativo sobre finanças pessoais, adaptado à realidade e às necessidades do público em situação de inadimplência.        |
|  **Teste Realizado**   |    ![CT1](/docs/gifsTestes/CT10e11.gif)  

|     **Caso de Teste**     | **CT11 - Navegação da página de Artigos / Barra de Rolagem**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Requisitos associados** | RF-007 - A aplicação deve fornecer conteúdo educativo sobre finanças pessoais, adaptado à realidade e às necessidades do público em situação de inadimplência.            |
|  **Teste Realizado**   |    ![CT1](/docs/gifsTestes/CT10e11.gif)  

|     **Caso de Teste**     | **CT12 - Navegação da página de Artigos / Botão “Ler Mais”**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Requisitos associados** | RF-007 - A aplicação deve fornecer conteúdo educativo sobre finanças pessoais, adaptado à realidade e às necessidades do público em situação de inadimplência.            |
|  **Teste Realizado**   |    ![CT1](/docs/gifsTestes/CT12.gif)  

|     **Caso de Teste**     | **CT13 - Navegação da página de Artigos / “Buscar Artigo”**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Requisitos associados** | RF-007 - A aplicação deve fornecer conteúdo educativo sobre finanças pessoais, adaptado à realidade e às necessidades do público em situação de inadimplência.                   |
|  **Teste Realizado**   |    ![CT1](/docs/gifsTestes/CT13.gif)  

|     **Caso de Teste**     | **CT14 - Navegação das páginas individuais de cada Artigo / Barra de Rolagem**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Requisitos associados** | RF-007 - A aplicação deve fornecer conteúdo educativo sobre finanças pessoais, adaptado à realidade e às necessidades do público em situação de inadimplência.               |
|  **Teste Realizado**   |    ![CT1](/docs/gifsTestes/CT14.gif)  

|     **Caso de Teste**     | **CT15 - Acessar página do Simulador**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Requisitos associados** | RF-014 - A aplicação deve fornecer ferramentas para ajudar os usuários a avaliar alternativas financeiras, como financiamento de um carro novo versus reparos no carro atual.            |
|  **Teste Realizado**   |    ![CT1](/docs/gifsTestes/CT15.gif)  

|     **Caso de Teste**     | **CT16 -  Utilizar recurso do Simulador**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Requisitos associados** | RF-014 - A aplicação deve fornecer ferramentas para ajudar os usuários a avaliar alternativas financeiras, como financiamento de um carro novo versus reparos no carro atual.                 |
|  **Teste Realizado**   |    ![CT1](/docs/gifsTestes/CT16.gif)  

|     **Caso de Teste**     | **CT17 - Utilizar recurso do Simulador - Parte 2**                                                                                                                                                                                    |
|:-------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Requisitos associados** | RF-014 - A aplicação deve fornecer ferramentas para ajudar os usuários a avaliar alternativas financeiras, como financiamento de um carro novo versus reparos no carro atual.                 |
|  **Teste Realizado**   |    ![CT1](/docs/gifsTestes/CT17.gif)  

# Avaliação dos Testes de Software

Durante a execução dos testes de software, obtivemos resultados significativos que proporcionam insights valiosos sobre a aplicação avaliada. Essas análises foram focadas em examinar a qualidade, a funcionalidade e a confiabilidade do software, destacando tanto seus aspectos positivos quanto às áreas que necessitam de melhorias.

Os testes demonstraram consistência nos resultados conforme as expectativas, evidenciando o cumprimento dos requisitos estabelecidos. Os testes foram realizados de forma extensa, de modo a garantir a avaliação das funcionalidades principais. Acrescenta-se que a equipe de testes demonstrou profissionalismo e competência ao executar os casos de teste, reforçando a confiança nos resultados obtidos.

Como pontos a melhorar, foram observados: lançamento de despesa parcelada não funciona como esperado, ausência de seleção de cores para categorias personalizadas, falta de edição de transações e ajuste de usabilidade e design. Como pontos positivos, foram observados principalmente em relação ao design escolhido, à organização do site, à escolha de cores e à disposição das informações.
Para as próximas etapas pretendemos corrigir e acrescentar as funcionalidades cujo comportamento ainda não alcançou o nível ideal e melhorar a usabilidade do usuário.
Em resumo, a avaliação de testes de software é crucial para assegurar a qualidade e a eficiência de um projeto. Com a participação de vários membros da equipe nos testes, a confiabilidade do projeto é significativamente elevada.
