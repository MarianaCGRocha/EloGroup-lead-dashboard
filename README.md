### Features

- Todos os dados armazenados no local storage do navegador / All data stored in the browser's local storage;
- Projeto desenvolvido com TypeScript para melhor legibilidade do código / Project developed with TypeScript for better code readability;
- Todos os forms dependem de preenchimento de todos os campos corretamente / All forms depend on filling all fields correctly;
- Todos os campos dos forms (telefone, e-mail e senha) tem filtros feitos através do uso de regex / All form fields (phone, email and password) have filters made with regex;
- Filtro que não permite registros duplicados de usuários / Filter that doesn't allow duplicate user registering;
- Controle de status dos leads feito através da atribuição de um número (int) sendo 0 - 1 - 2 (hierarquia dos estágios do funil de marketing) na tabela de leads / Lead status control done by assigning a number (int), being 0 - 1 - 2 (marketing funnel stages hierarchy) in the leads table.


------------


# Leads Dashboard - Crack The Code EloGroup Hiring Process

![](https://elogroup.com.br/wp-content/uploads/2021/10/20210621-v1-01-Marca-Principal.jpg)

<a href="https://www.linkedin.com/in/marianacgrocha" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
 <a href = "mailto:marianagomesr@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=red" target="_blank"></a> ![](https://img.shields.io/badge/License-GNU%20General%20Public%20License%20v3.0-green) ![](https://img.shields.io/badge/Release-28%20march%202022-yellowgreen)


[Pt/BR] Dashboard de acompanhamento de leads desenvolvido através de React / TypeScript para o processo seletivo do EloGroup em março/2022.

O dashboard permite o cadastramento de novos usuários, login através de usuário e senha, cadastramento de novos leads (nome da empresa, telefone, e-mail e produtos) e seu acompanhamento através do funil de vendas (de lead a reunião agendada).

[EN] Lead tracking dashboard developed using React / TypeScript for the EloGroup selection process in march/2022.

The dashboard allows the registration of new users, login using username and password, registration of new leads (company name, telephone, email and products) and their follow-up through the sales funnel (from lead to scheduled meeting).

------------

### Libraries
Styled Components ([see more here](https://www.styled-components.com/ "see more here"))<br/>
React-Router-DOM ([see more here](https://www.npmjs.com/package/react-router-dom "see more here"))

------------


### Future Implementations
- Drag and Drop real na tabela / Real Drag and Drop on table;
- Tela de visualização dos leads (atualmente o lead é criado com todos os dados, mas não conseguimos visualizar os dados dos leads e seus detalhes) / Lead preview screen (currently the lead is created with all the data, but we're unable to view the lead data and it's details).

------------

### Detailed project features
![](https://i.imgur.com/pKsQ8cr.png)
<br/>
- `Login`: login através de usuário e senha cadastrados (local storage) / login with registered user and password (local storage);
- `Local Storage`: armazenamento dos dados feitos no local storage do navegador / storage of data in the browser's local storage.

<br/>

![](https://i.imgur.com/hvybA9v.png)

<br/>

- `Novo Usuário`: cadastramento de novo usuário com nome de usuário e senha (local storage), filtro que impede cadastros duplicados / new user registration with username and password (local storage), filter that prevents duplicate registrations;
- `Filtro Duplicata`: filtro que impede cadastro de usuários duplicados (mesmo nome de usuário) / filter that prevents registration of duplicate users (same username);
- `Padrão de Senha`: Senha deve possuir ao menos 8 caracteres, contendo ao menos, um caracter especial, um caracter numérico, um caracter alfanumérico / Password must have, at least, 8 characters long, containing at least one special character, one numeric character, one alphanumeric character.

<br/>

![](https://i.imgur.com/M8lUodU.png)

<br/>

- `Tabela responsiva para acompanhamento de leads`: tabela onde podemos acompanhar o estágio dos leads no funil de vendas / table where we can track the stage of leads in the sales funnel;
- `Novo Lead`: botão para inclusão de dados e cadastro de novo lead / button for adding data and registering a new lead.

<br/>

![](https://i.imgur.com/vLKAEDC.png)
![](https://i.imgur.com/GAhLpVG.png)
![](https://i.imgur.com/BxZ04LT.png)

<br/>

- `Regex`: todos os dados incluídos no cadastro de novo lead são validados com regex para impedir adição de dados não válidos / all data included in the new lead registration is validated with regex to prevent the addition of invalid data;
- `Check-box product table`: ao menos um produto deve ser adicionado ao novo lead para que seu cadastro seja aceito / at least one product must be added to the new lead for your registration to be accepted.

<br/>

![](https://i.imgur.com/dJdPL5d.png)

<br/>

- `New lead confirmation page`: página de confirmação de que o lead foi adicionado com sucesso / confirmation page that the lead was added successfully.

<br/>

![](https://i.imgur.com/kU9R5w6.png)
![](https://i.imgur.com/Svo3Pr2.png)
![](https://i.imgur.com/YHAJven.png)

<br/>

- `Funil de Vendas`: todos os leads, ao serem adicionados, recebem o estágio 0 do funil de vendas, dessa forma ao clicarmos no nome do mesmo na tabela o seu status será adicionado em 1 (passando de 0 para 1) e ele mudará de coluna (descerá pelo funil de vendas) até o último estágio (2 - Reunião agendada) / all leads, when added, receive stage 0 of the sales funnel, in this way, when we click on their name in the table, their status will be added to 1 (going from 0 to 1) and they'll change to the next column (it will go down the funnel sales) until the last stage (2 - meeting scheduled).

### Available Scripts
Scripts que você pode executar no projeto:
In the project directory, you can run:

- `npm install`
Instala todas as dependências do projeto / Install all the project dependencies.

- `npm start`
Roda o projeto no modo de desenvolvimento / Runs the app in the development mode.
Abre http://localhost:3000 no browser para visualização do projeto em tempo real / Open http://localhost:3000 to view it in the browser.

### Tecnologies
- `React`
- `TypeScript`
- `VS Code`
