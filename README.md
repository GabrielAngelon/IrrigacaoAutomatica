# Monitor de Umidade

Com o objetivo de criar um sistema eficiente e acessível para o monitoramento de umidade do solo e condições climáticas. Ele pode ser utilizado em soluções de **irrigação automatizada**, promovendo **economia de água** e **maior eficiência no cultivo**.

<hr>

## 🌱 Monitoramento da Umidade do Solo
- Mede os níveis de umidade com um sensor analógico.
- Classifica os níveis como:
  - `Seco`
  - `Baixo`
  - `Médio`
  - `Muito Alto`
- Controla um **relé** que simula uma válvula de irrigação.

## 🌧️ Detecção de Chuva
- Detecta condições climáticas como:
  - `Clima seco`
  - `Possível chuva`
  - `Chuva detectada`
  - `Chuva forte detectada`
- Emite sinais sonoros com diferentes intensidades usando um buzzer.

## 📟 Interface com LCD
- Exibe os dados de umidade e clima em tempo real no display **LCD I2C**.

## 🌐 Servidor Web
- Exibe informações de umidade e estado do sistema em uma página **HTML** acessível via navegador.

## 🔔 Indicações Visuais e Sonoras
- LEDs indicam o nível de umidade do solo.
- O buzzer sinaliza as condições climáticas detectadas.

## 🛠️ Tecnologias e Componentes

- **Microcontrolador**: ESP32
- **Sensores**:
  - Sensor de umidade do solo
  - Sensor de chuva
- **Atuadores**:
  - Relé
  - Buzzer
  - LEDs
- **Display**: LCD I2C
- **Servidor Web**: HTML integrado ao ESP32

<hr>

## 📋 Como Funciona

1. O sistema monitora a umidade do solo e detecta condições climáticas com sensores analógicos.
2. Exibe os dados no LCD e na página web.
3. Controla o relé para ativar/desativar a irrigação com base nos níveis de umidade.
4. Utiliza LEDs e um buzzer para fornecer feedback visual e sonoro.

<hr> 

**Exemplo da estrutura utilizando o Tinkercad**
<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/6fe5e554-85c9-4a9d-906c-0db64bee52f7">
<hr> 

## 📂 Estrutura do Projeto

- `TCCSenai.pbix`: Arquivo do Power BI
- `PlanilhaCsv.xlsx`: Arquivo Excel
- `CodigoFinalArduino.ino`: Código do Arduino
- `natural_tec_one_compra.sql`: Mysql tabela Compras
- `natural_tec_one_funcionario.sql`: Mysql tabela Funcionarios
- `natural_tec_one_tbluser.sql`: Mysql tabela Usuários

<hr>

## 📊 Exemplos de Análises e Gráficos

 - Power BI e Excel: Visualização de Dados
As imagens abaixo mostram a utilização de Excel e Power BI no projeto. Essas ferramentas foram escolhidas para facilitar a análise e a visualização dos dados coletados pelos sensores.

 - Excel: Utilizado para armazenar, organizar e formatar os dados. Os arquivos gerados podem ser baixados e importados para um banco de dados MySQL, permitindo a integração com os dados do Arduino e a criação de sistemas mais robustos.

 - Power BI: Utilizado para criar dashboards interativos e gráficos que ajudam na interpretação visual dos dados coletados, tornando as informações mais acessíveis e dinâmicas.

<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/e8c8e581-c899-408d-a7f8-609bf25ac99f">
<hr> 

### 🚀 O uso do Excel permite organizar e manipular os dados antes de transferi-los para o MySQL;

<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/bd456a9d-07fa-4fb4-accb-c322fb3b92a7">
<hr> 

### 🚀 Enquanto o Power BI facilita a criação de relatórios visuais e interativos para análise;

<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/264e7c76-a970-4d10-b458-94f2403c3f6d">
<hr> 

### 🚀 Implementação dos dados do Excel já no Mysql;

<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/9ccc61c4-29ca-4ee1-b107-8b01e7ee7679">
<hr> 


## 💧 Sistema de Irrigação Automatizado com Arduino e ESP32

Este projeto combina tecnologia e inovação para oferecer um **sistema de irrigação automatizado**, ideal para residências, hortas e outros ambientes. Inclui hardware personalizado (kits de irrigação) e um site completo para cadastro, login e compras, integrado com banco de dados MySQL.

<hr> 

## 🖥️ **Início do Projeto Web**

A página inicial do site foi projetada para apresentar o propósito do sistema, os benefícios e as opções de kits disponíveis para compra.

<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/34be95dd-7861-41e1-83a7-df4dc47580d1">
<hr> 

## 📚 **Sobre o Projeto**

O objetivo principal é oferecer um sistema inteligente e acessível que automatize o processo de irrigação, promovendo economia e eficiência no uso da água.

- **Missão**: Promover o uso sustentável da água.
- **Visão**: Tornar a automação acessível a diferentes tipos de usuários.
- **Valores**: Sustentabilidade, inovação e simplicidade.

<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/84497005-b051-4bfd-bae1-5ce91fc706d5">
<hr> 

## 🔌 **Sobre o Arduino e Benefícios**

O Arduino é o coração do sistema, controlando os sensores e relés. Entre os principais benefícios estão:

- **Processamento rápido** para automação de tarefas.
- **Baixo consumo de energia**, ideal para operações contínuas.
- **Compatibilidade com Wi-Fi** para controle remoto.
- **Atualizações constantes**, graças à comunidade ativa.

<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/b488743e-84d2-4b21-9944-f2eebbaf3b2e">
<hr> 

## 🛒 **Área de Compra de Kits**

### 🌱 **Kit Básico**
- ESP32  
- Sensor de umidade do solo  
- Módulo relé  
- Válvula solenoide  

<hr> 

### 🌿 **Kit Completo**
- ESP32  
- Sensor de umidade do solo  
- Sensor de umidade do ar  
- Sensor de chuva  
- Sensor de temperatura  
- Módulo relé  
- Display LCD I2C  
- Válvula solenoide  
- Módulo Wi-Fi  

<hr> 

### 🌳 **Kit Avançado**
- ESP32  
- Sensor de umidade do solo  
- Sensor de temperatura  
- Módulo relé  
- Válvula solenoide  
- Módulo Wi-Fi  

<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/2683b72f-c885-495b-a942-a6f3ec60c484">
<hr> 

## 🔑 **Login e Cadastro**

O site oferece áreas seguras para **cadastro de clientes** e **login**, com todas as informações armazenadas no banco de dados MySQL.

**Exemplo das Páginas de Login**
<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/1158ca0a-98b0-434a-b61b-10e0eeb30749">
<hr> 

**Exemplo das Páginas de Cadastro**
<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/b7c74a75-036e-4d81-9c14-d33ab1f883cb">
<hr> 

## 📧 **Integração com a API Formspree para Envio de Contato por Email**

Para facilitar o contato entre os usuários e o suporte técnico, foi implementada uma funcionalidade de envio de mensagens diretamente para o email da equipe utilizando a API **Formspree**. Com isso, os usuários podem preencher um formulário de contato no site e, ao enviá-lo, a mensagem é encaminhada automaticamente para o email do responsável pelo suporte.

### **Como Funciona:**
- O usuário preenche os campos do formulário de contato com informações como:
  - **Nome**
  - **Email**
  - **Mensagem**

- Ao clicar no botão de **enviar**, o Formspree processa os dados e os envia para o email configurado na API.
- O suporte técnico recebe a mensagem no email e pode responder diretamente ao usuário para fornecer assistência ou esclarecer dúvidas.

<hr> 

**Exemplo do Contato**
<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/78b50686-72a3-42df-9bfa-b3d3a63b9891">
<hr> 

**Exemplo da página do FormSpree**
<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/aa41947d-800b-4213-b9be-554d92dcc659">
<hr> 

## 🧑‍💼 **Área de Informações do Usuário**

Após o login no site, o usuário é direcionado para uma página onde pode visualizar todas as informações pessoais que cadastrou, como:

- **Nome**
- **Senha**
- **Username**
- **Email**
- **Telefone**
- **Endereço**

Na página, há também um botão **"Pesquisar"** que, ao ser clicado, traz todas as informações cadastradas, que são puxadas diretamente do banco de dados MySQL. Caso o usuário tenha efetuado uma compra, ele também tem acesso a detalhes sobre o pedido realizado, incluindo:

- **Tamanho do Kit** (Básico, Completo ou Avançado)
- **Área da Irrigação** (Ex: Horta, Jardim, Varanda)
- **Quantidade de Itens**
- **Endereço de Entrega**
- **Valor da Compra**
- **Método de Pagamento** (Pix, Boleto, Cartão)
- **Nome do Funcionário** que realizou o atendimento
- **Nome do Usuário**
- **Data da Compra**

Além disso, a página oferece um **canal de contato** com o suporte técnico, onde o usuário pode tirar dúvidas sobre o sistema, fazer solicitações ou relatar problemas com a compra ou com o uso do sistema. O suporte pode ser acessado via **formulário** ou através de **email** e **WhatsApp**.

<hr> 

**Exemplo das informaçoes do usuario**
<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/1297afd8-4179-4b4f-ab1f-11e2cbbcfc50">
<hr> 

**Exemplo da área de compra**
<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/1106cf51-59c5-4a2c-bb45-cd044e6be19c">
<hr> 

## 🗃️ **Banco de Dados MySQL**

O sistema utiliza o banco de dados MySQL para armazenar e gerenciar informações essenciais dos usuários, funcionários e compras. Abaixo estão as principais tabelas do banco de dados e suas descrições:

### 1. **Tabela Usuário**

A tabela **`usuario`** armazena informações dos usuários registrados no sistema. Essas informações incluem dados pessoais e de contato.

- **Campos:**
  - `id_usuario`: Identificador único do usuário.
  - `nome_user`: Nome completo do usuário.
  - `username`: Username escolhido pelo usuário.
  - `senha`: Senha do usuário (armazenada de forma segura).
  - `email`: Endereço de e-mail do usuário.
  - `fone`: Número de telefone do usuário.
  - `endereco`: Endereço do usuário.

<hr> 

**Exemplo de Estrutura da Tabela Usuário**:

<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/f4a4a9fc-2449-4b29-a389-d0834d099c1d">
<hr> 

### 2. **Tabela Funcionário**

A tabela **`funcionario`** contém os dados dos funcionários que operam o sistema, incluindo informações sobre seu cargo e dados de contato.

- **Campos:**
  - `id_func`: Identificador único do funcionário.
  - `nome_func`: Nome completo do funcionário.
  - `funcao`: Função ou cargo do funcionário (Ex: Gerente, Atendente).

<hr>

**Exemplo de Estrutura da Tabela Funcionário**:

<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/0f243839-e51b-4d3f-b73e-e82afe68f3c9">
<hr> 

### 3. **Tabela Compras**

A tabela **`compras`** registra as compras realizadas pelos usuários, incluindo detalhes sobre o pedido, pagamento e o funcionário responsável pelo atendimento.

- **Campos:**
  - `id_compra`: Identificador único da compra.
  - `tamanho`: Tamanho do kit comprado (Ex: Básico, Completo, Avançado).
  - `area`: Área da irrigação (Ex: Horta, Jardim, Varanda).
  - `quantidade`: Quantidade de itens comprados.
  - `enderec`: Endereço de entrega da compra.
  - `valor`: Valor total da compra.
  - `metodo_pagamento`: Método de pagamento utilizado (Pix, Boleto, Cartão).
  - `id_funcionario`: Identificador do funcionário que atendeu a compra.
  - `nome_funcionario`: Nome do funcionário que atendeu a compra.
  - `id_user`: Identificador do usuário que fez a compra.
  - `nome_user`: Nome do usuário que fez a compra.
  - `data_da_compra`: Data em que a compra foi realizada.

<hr>

**Exemplo de Estrutura da Tabela Compras**:

<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/15dca7a2-f9cf-4034-b22d-9a7028b955e9">
<hr> 

### 🔄 **Relacionamentos entre as Tabelas**

As tabelas `usuario`, `funcionario` e `compras` estão interligadas. A tabela `compras` faz referência aos `id_usuario` e `id_funcionario`, criando um vínculo entre os usuários que realizaram compras e os funcionários que os atenderam. Esse relacionamento permite que o sistema obtenha facilmente informações sobre quem comprou o quê, quem atendeu a compra e outros detalhes relevantes.

<hr> 

**Exemplo do relacionamento de tabelas**:

<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/f6d77fd3-3ad5-40f2-be71-66949cb11f47">
<hr> 

### 📸 **Captura das Tabelas**

Para visualização da estrutura das tabelas, abaixo estão as capturas de tela:

<hr> 

- **Tabela Usuário**:
<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/17ff17bd-a100-4d83-94f6-19429776abe0">
<hr> 

- **Tabela Funcionário**:
<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/a4893854-0481-48ba-a363-746cbbd422e2">
<hr> 

- **Tabela Compras**:
<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/41951e65-b72b-435e-a3ae-4c409c3fe63b">
<hr> 

### 🖥️ **Uso do Eclipse no Projeto**

O Eclipse foi a IDE escolhida para o desenvolvimento do backend do projeto, devido à sua interface amigável, robustez e suporte a ferramentas integradas, como Maven e Spring Boot. Com ele, foi possível organizar todas as camadas da aplicação, implementar funcionalidades e integrar o sistema ao banco de dados MySQL.

<hr> 

### 📂 **Organização do Projeto no Eclipse**

O projeto foi estruturado em pacotes para facilitar a organização do código, como mostra a imagem abaixo:

<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/78f0f889-4114-43a0-81b9-9d9a4a7f320b">
<hr> 

- **Controller:** Contém as classes responsáveis por gerenciar as rotas HTTP e a interação com o frontend.
- **Model:** Classes que representam as tabelas do banco de dados, como `Usuario`, `Funcionario` e `Compra`.
- **DAO (Data Access Object):** Realiza a comunicação direta com o banco de dados MySQL.
- **Resources:** Contém configurações como o arquivo `application.properties`, que conecta a aplicação ao banco.

<hr> 

### 🔄 **Métodos HTTP Implementados**

Dentro do Eclipse, foram criados métodos para realizar as operações CRUD (Get, Post, Put, Delete). Abaixo está um exemplo dos métodos da tabela de compras para exemplificação que busca compras por endereço:

<hr> 

- **Método Get**:
<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/7b79fe9d-b5a1-450b-8808-58d4e2c8e4ab">
<hr> 

- **Método Post**:
<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/6ac668bd-b43c-4bec-8811-dcde07d7982d">
<hr> 

- **Método Put**:
<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/e6e2e3a2-bb72-403c-b88d-3d6b741c83f8">
<hr> 

- **Método Delete**:
<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/7abb0921-6409-4296-aa62-5f4122e63312">
<hr> 

### 🔗 **Configuração da Conexão com o Banco de Dados**

A conexão com o banco de dados MySQL foi configurada no arquivo `application.properties`, garantindo que a aplicação Spring Boot consiga acessar e gerenciar os dados do sistema.

<hr>

### 🛠️ **Detalhes da Configuração**

```java
# Nome da aplicação
spring.application.name=Irrigacao

# Credenciais de acesso ao banco de dados
spring.datasource.username=root
spring.datasource.password=******

# URL do banco de dados
spring.datasource.url=jdbc:mysql://localhost:3306/natural_tec_one?useTimezone=true&serverTimezone=UTC

# Dialeto do banco utilizado pelo Hibernate
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

```

<hr>

### 🔍 **Descrição dos Campos**

- **Nome da Aplicação**  
  Define o nome do projeto como "Irrigacao" para identificação nos logs e no gerenciamento interno.

- **Credenciais**  
  - `spring.datasource.username`: Usuário do banco (no exemplo, *root*).  
  - `spring.datasource.password`: Senha do banco, mantida protegida por motivos de segurança.

- **URL do Banco de Dados**  
  Configura o endereço de conexão com o banco MySQL:
  - **Host**: `localhost`
  - **Porta**: `3306`
  - **Nome do Banco**: `natural_tec_one`
  - **Parâmetros**: Configurações como timezone para evitar inconsistências de data e hora.

- **Dialeto do Hibernate**  
  Define o dialeto para que o Hibernate gere queries compatíveis com MySQL 8.

<hr>

### 📝 Observação

Este projeto foi desenvolvido como parte de um Trabalho de Conclusão de Curso (TCC) no SENAI 🎓

<hr> 
