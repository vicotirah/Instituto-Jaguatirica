create database if not exists ong; 
use ong;

create table if not exists animal (
    idAnimal INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL ,
    nome_popular VARCHAR(45) NOT NULL,	
    sexo VARCHAR(45) NOT NULL,	
    genero VARCHAR  NOT NULL,	
    especie VARCHAR(45) NOT NULL,
    regiao VARCHAR(45) NOT NULL,
    data_entrada DATE NOT NULL,
    status_preservacao VARCHAR(45) 
);

create table if not exists  usuario (
    idUser INT PRIMARY KEY AUTO_INCREMENT,
    CPF INT NOT NULL,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    endereco TEXT NOT NULL,
    cidade TEXT NOT NULL,
    estado TEXT NOT NULL,
    tel INT

);

create table if not exists  voluntario (
    idVoluntario INT PRIMARY KEY AUTO_INCREMENT,
	Atividade TEXT NOT NULL,
	idUser INT,
    idAnimal INT,
    FOREIGN KEY (usuario_idUser) REFERENCES usuario(idUser)
);


create table if not exists  apadrinhamento (
    idApadrinhamento INT PRIMARY KEY AUTO_INCREMENT,
	valor DECIMAL (4,2) NOT NULL,
    idUser INT,
    FOREIGN KEY (usuario_idUser) REFERENCES usuario(idUser),
	FOREIGN KEY (animal_idAnimal) REFERENCES animal(idAnimal)
);

INSERT INTO animal (nome, nome_popular, sexo, genero, especie, regiao, data_entrada, status_preservacao) VALUES
('Jacy', 'Onça-Pintada', 'Fêmea', 'Mamífero', 'Panthera onca', 'Mata Atlântica', '2023-01-01', 'Ameaçado'),
('Jade', 'Ararinha-azul', 'Fêmea', 'Ave', 'Cyanopsitta spixii', 'Cerrado', '2023-01-02', 'Extinto na Natureza'),
('Taki', 'Mico-leão-dourado', 'Macho', 'Mamífero', 'Leontopithecus rosalia', 'Mata Atlântica', '2023-01-03', 'Ameaçado'),
('Tande', 'Tamanduá-bandeira', 'Macho', 'Mamífero', 'Myrmecophaga tridactyla', 'Cerrado', '2023-01-04', 'Vulnerável'),
('Iporã', 'Cágado-da-amazônia', 'Macho', 'Réptil','Podocnemis expansa', 'Amazônia', '2023-01-05', 'Ameaçado'),
('Guarati', 'Lobo-guará','Macho', 'Mamífero', 'Chrysocyon brachyurus', 'Cerrado', '2023-01-06', 'Vulnerável'),
('Fuleco', 'Tatu-canastra', 'Macho', 'Réptil','Priodontes maximus', 'Amazônia', '2023-01-07', 'Ameaçado'),
('Sombra', 'Gato-do-mato','Fêmea', 'Mamífero', 'Leopardus wiedii', 'Mata Atlântica', '2023-01-08', 'Vulnerável'),
('Yara', 'Peixe-boi', 'Fêmea', 'Mamífero','Trichechus inunguis', 'Amazônia', '2023-01-09', 'Ameaçado'),
('Pitanga', 'Jaguatirica', 'Fêmea', 'Mamífero','Leopardus pardalis', 'Mata Atlântica', '2023-01-10', 'Ameaçado');

INSERT INTO usuario (CPF, nome, email, endereco, cidade, estado, tel) VALUES
('12345678900', 'João Silva', 'joao.silva@email.com', 'Rua A, 123', 'São Paulo', 'SP', '11912345678'),
('98765432100', 'Maria Oliveira', 'maria.oliveira@email.com', 'Avenida B, 456', 'Rio de Janeiro', 'RJ', '21987654321'),
('11122233344', 'Carlos Pereira', 'carlos.pereira@email.com', 'Praça C, 789', 'Belo Horizonte', 'MG', '31998765432'),
('55544433322', 'Ana Costa', 'ana.costa@email.com', 'Rua D, 101', 'Curitiba', 'PR', '41934567890');


