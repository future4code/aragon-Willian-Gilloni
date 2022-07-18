USE `aragon-willian-gilloni`;

SET SQL_SAFE_UPDATES = 0;

-- EXERCICIO1 --
CREATE TABLE `Projetos` (
	id VARCHAR(255) KEY,
  	nome VARCHAR(255) NOT NULL,
  	title VARCHAR(255) NOT NULL,
  	date VARCHAR(255) NOT NULL	 
);

--EXERCICIO2--
INSERT INTO Projetos (id,nome,title,date)
VALUES("001","Labesky","Lsy","2023/10/05"),
		("002","Labefy","Lfy","2024/01/06"),
        ("003","AstroZoom","AZm","2022/12/20");

SELECT * FROM Projetos;

--Exercicio3 A --
ALTER TABLE Projetos
DROP COLUMN title;

DESCRIBE Projetos;

--Exercicio3 B --
ALTER TABLE Projetos
CHANGE date dueDate VARCHAR(255) NOT NULL;

--Exercicio3 C --
ALTER TABLE Funcionarios
MODIFY email VARCHAR(255) NOT NULL UNIQUE;

DESCRIBE Funcionarios;

--Exercicio4 A --
ALTER TABLE Projetos
ADD description VARCHAR(255) NOT NULL;

DESCRIBE Projetos;
--Exercicio4 B --
UPDATE Projetos
SET description = "Projeto de sistema em nuvem da Labenu."
WHERE id = 1;

UPDATE Projetos
SET description = "Projeto de sistema de gerenciamento de músicas da Labenu."
WHERE id = 2;

UPDATE Projetos
SET description = "Projeto de rede de comunicação da Labenu."
WHERE id = 3;

--Exercicio5 A --
SELECT * 
FROM Projetos
ORDER BY dueDate DESC;

--Exercicio5 B --
SELECT *
FROM Projetos
ORDER BY duedate ASC
LIMIT 2;