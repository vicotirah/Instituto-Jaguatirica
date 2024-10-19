# ONG - Instituto Jaguatirica 🐆
## Trabalho de Extensão 2 - IFSP

### Escopo 📃
  O sistema a ser desenvolvido será um site web criado para representar a ONG fictícia "Instituto Jaguatirica", a qual defende animais silvestres. A página deverá conter informações científicas sobre animais, assim como características da fauna regional. Além disso, será possível realizar inscrições para o voluntariado na ONG utilizando este sistema, assim como haverá o caso de "apadrinhamento" de animais, no qual o público geral poderá patrocinar animais em específico que estão aos cuidados do Instituto Jaguatirica.</p>
##
### Requisitos ⚙️
#### Funcionais:
- O sistema deve exibir informações sobre grupos de animais silvestres do Brasil, de acordo as regiões.
- O sistema deve exibir informações sobre espécies de animais silvestres.
- O sistema deve permitir ao usuário enviar seus dados em um formulário de inscrição para ser voluntário.
- O sistema deve permitir ao usuário criar uma conta.
- O sistema deve permitir verificar as informações sem ter uma conta cadastrada
- O sistema deve permitir ao usuário fazer login na conta cadastrada.
- O sistema deve permitir ao usuário em sessão visualizar os animais disponíveis para apadrinhamento na ONG.
- O sistema deve permitir ao usuário em sessão apadrinhar um animal ao enviar um comprovante do PIX feito à Organização.
#### Não Funcionais:
- O sistema deve apresentar usabilidade e ergonomia, contendo um guia de navegação simples e autoexplicativo, assim como eventos facilmente compreensíveis.(Com base nos slides eu tiraria essa aqui, pois, é difícil definir o que é 'simples' e 'autoexplicativo'. 
- O sistema deve ter o MySQL como principal banco de dados.
- O sistema deve ser compatível com versões de browsers lançadas no mínimo a partir de  2022.
- O sistema deve ser manutenível.
- O sistema deve validar e confirmar os cadastros de voluntários e padrinhos.
- O sistema deve apresentar responsividade e mobile first.
- O sistema deve permitir que o usuário entre em contato para poder tirar eventuais dúvidas ou então mandar o comprovante de pagamento.
##
### Front-end 🖼️
#### Figma: 🔗[Projeto no Figma](https://www.figma.com)
##
### Back-end 🔢
##
### Banco de Dados 🎲
#### Entidades e atributos:
- **Usuário** 👥
    - **id_usuario**: autoincrement int 🔑
    - CPF: int
    - nome: varchar
    - e-mail: varchar
    - endereço: varchar
    - cidade: varchar
    - estado: varchar
    - telefone: int
- **Animal** 🐾
    - **id_animal**: autoincrement int 🔑
    - nome: varchar
    - especie: varchar
    - regiao: varchar
    - data_entrada: date
    - status : varchar
- **Voluntário** 🤲
    - **id_voluntario**: autoincrement int 🔑
    - atividade: varchar
    - _id_usuario_: int (chave estrangeira) 🗺️

- **Padrinhos** 🤲
    - **id_apadrinhamento**: autoincrement int 🔑
    - mesada: float
    - _id_animal_: int 🗺️
    - _id_usuario_: int  🗺️



### Equipe 👩‍💻👨‍💻
![Static Badge](https://img.shields.io/badge/vicotirah-github?logo=github&logoColor=white&labelColor=black&color=%23000058&link=https%3A%2F%2Fgithub.com%2Fvicotirah)













- Matheus Gois
- Pedro Guedes
- Guilherme
- Kevin
- Carlos
