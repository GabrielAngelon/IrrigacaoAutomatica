# Monitor de Umidade e Clima com ESP32 e LCD I2C

Este projeto foi desenvolvido como parte do **Trabalho de Conclusão de Curso (TCC)** no **SENAI**, com o objetivo de criar um sistema eficiente e acessível para o monitoramento de umidade do solo e condições climáticas. Ele pode ser utilizado em soluções de **irrigação automatizada**, promovendo **economia de água** e **maior eficiência no cultivo**.

---

## 🚀 Funcionalidades

### 🌱 Monitoramento da Umidade do Solo
- Mede os níveis de umidade com um sensor analógico.
- Classifica os níveis como:
  - `Seco`
  - `Baixo`
  - `Médio`
  - `Muito Alto`
- Controla um **relé** que simula uma válvula de irrigação.

### 🌧️ Detecção de Chuva
- Detecta condições climáticas como:
  - `Clima seco`
  - `Possível chuva`
  - `Chuva detectada`
  - `Chuva forte detectada`
- Emite sinais sonoros com diferentes intensidades usando um buzzer.

### 📟 Interface com LCD
- Exibe os dados de umidade e clima em tempo real no display **LCD I2C**.

### 🌐 Servidor Web
- Exibe informações de umidade e estado do sistema em uma página **HTML** acessível via navegador.

### 🔔 Indicações Visuais e Sonoras
- LEDs indicam o nível de umidade do solo.
- O buzzer sinaliza as condições climáticas detectadas.

---

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

---

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

### O uso do Excel permite organizar e manipular os dados antes de transferi-los para o MySQL;

<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/bd456a9d-07fa-4fb4-accb-c322fb3b92a7">
<hr> 

### Enquanto o Power BI facilita a criação de relatórios visuais e interativos para análise;

<hr> 
<img width="379" alt="Captura de tela 2024-03-14 074016" src="https://github.com/user-attachments/assets/264e7c76-a970-4d10-b458-94f2403c3f6d">
<hr> 

## 📝 Observação

Este projeto foi desenvolvido como parte de um Trabalho de Conclusão de Curso (TCC) no SENAI, com foco na criação de um sistema eficiente e acessível para monitoramento de umidade do solo e condições climáticas. Ele pode ser utilizado em soluções de irrigação automatizada, promovendo economia de água e maior eficiência no cultivo. 🎓

<hr> 
