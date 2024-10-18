import pymysql # type: ignore

pymysql.install_as_MySQLdb()

class Usuario():
    # PK INT - id_usuario
    # int - CPF 
    # varchar - nome
    # varchar - email
    # varchar - endereço
    # varchar - Cidade
    # int - telefone
    pass

class Animais():
    # PK int - id_animal
    # varchar - nome
    # varchar - especie
    # varchar - região
    # date - data de entrada na ong
    # varchar - status apadrinhamento
    pass

class Volutarios():
    # PK INT -id_voluntário
    # varchar - interesses
    # FK INT - id usuario
    pass

class Padrinhos():
    # PK int - id_apadrinhamento
    # float - mesada 
    # FK - id animal
    # Fk - id_usuario 
    pass

