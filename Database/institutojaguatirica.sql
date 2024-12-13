create database if not exists ong; 
use ong;

create table if not exists animal (
    idAnimal bigINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL ,
    nome_popular VARCHAR(45) NOT NULL,	
    sexo VARCHAR(45) NOT NULL,	
    genero VARCHAR(45) NOT NULL,	
    especie VARCHAR(45) NOT NULL,
    regiao VARCHAR(45) NOT NULL,
    data_entrada DATE NOT NULL,
    status_preservacao VARCHAR(45) 
);

create table if not exists  usuario (
    idUser bigint PRIMARY KEY AUTO_INCREMENT,
    CPF bigint NOT NULL,
    nome VARCHAR(45)  NOT NULL,
    email VARCHAR(45)  NOT NULL,
    endereco VARCHAR(45)  NOT NULL,
    cidade VARCHAR(45)  NOT NULL,
    estado VARCHAR(45)  NOT NULL,
    tel bigint

);

create table if not exists  voluntario (
    idVoluntario bigint PRIMARY KEY AUTO_INCREMENT,
	Atividade VARCHAR(45)  NOT NULL,
	idUser bigint not null,
    idAnimal bigint not null,
    FOREIGN KEY (idUser) REFERENCES usuario(idUser)
);


create table if not exists  apadrinhamento (
    idApadrinhamento bigint PRIMARY KEY AUTO_INCREMENT,
    valor DECIMAL (4,2) NOT NULL,
    idUser bigint not null,
    idAnimal bigint not null,
    FOREIGN KEY (idUser) REFERENCES usuario(idUser),
	FOREIGN KEY (idAnimal) REFERENCES animal(idAnimal)
);



INSERT INTO animal (nome, nome_popular, sexo, genero, especie, regiao, data_entrada, status_preservacao) VALUES
('Juma', 'Onça-Pintada', 'Fêmea', 'Mamífero', 'Panthera onca', 'Mata Atlântica', '2023-01-01', 'Quase Ameaçado'),
('Jade', 'Ararinha-azul', 'Fêmea', 'Ave', 'Cyanopsitta spixii', 'Cerrado', '2023-01-02', 'Extinto na Natureza'),
('Solar', 'Mico-leão-dourado', 'Macho', 'Mamífero', 'Leontopithecus rosalia', 'Mata Atlântica', '2023-01-03', 'Ameaçado'),
('Tande', 'Tamanduá-bandeira', 'Macho', 'Mamífero', 'Myrmecophaga tridactyla', 'Cerrado', '2023-01-04', 'Vulnerável'),
('Iporã', 'Jabuti-tinga', 'Macho', 'Réptil','Chelonoidis denticulatus', 'Amazônia', '2023-01-05', 'Vulnerável'),
('Guaraná', 'Lobo-guará','Macho', 'Mamífero', 'Chrysocyon brachyurus', 'Cerrado', '2023-01-06', 'Quase Ameaçado'),
('Fuleco', 'Tatu-canastra', 'Macho', 'Mamífero','Priodontes maximus', 'Amazônia', '2023-01-07', 'Vulnerável'),
('Sombra', 'Gato-do-mato','Fêmea', 'Mamífero', 'Leopardus wiedii', 'Mata Atlântica', '2023-01-08', 'Quase Ameaçado'),
('Yara', 'Peixe-boi', 'Fêmea', 'Mamífero','Trichechus inunguis', 'Amazônia', '2023-01-09', 'Vulnerável'),
('Pitanga', 'Jaguatirica', 'Fêmea', 'Mamífero','Leopardus pardalis', 'Mata Atlântica', '2023-01-10', 'Pouco Ameaçado');

INSERT INTO usuario (CPF, nome, email, endereco, cidade, estado, tel) VALUES
('1', 'João Silva', 'joao.silva@email.com', 'Rua A, 123', 'São Paulo', 'SP', '1'),
('98765432100', 'Maria Oliveira', 'maria.oliveira@email.com', 'Avenida B, 456', 'Rio de Janeiro', 'RJ', '21987654321'),
('11122233344', 'Carlos Pereira', 'carlos.pereira@email.com', 'Praça C, 789', 'Belo Horizonte', 'MG', '31998765432'),
('55544433322', 'Ana Costa', 'ana.costa@email.com', 'Rua D, 101', 'Curitiba', 'PR', '41934567890');
