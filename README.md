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

---

## 📂 Estrutura do Projeto

- `TCCSenai.pbix`: Arquivo do Power BI
- `PlanilhaCsv.xlsx`: Arquivo Excel
- `CodigoFinalArduino.ino`: Código do Arduino

---

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

## 📝 Observação

Este projeto foi desenvolvido como parte de um Trabalho de Conclusão de Curso (TCC) no SENAI 🎓

<hr> 
