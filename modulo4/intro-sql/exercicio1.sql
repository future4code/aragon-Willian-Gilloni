USE `aragon-willian-gilloni`;

SET SQL_SAFE_UPDATES = 0;

CREATE TABLE `Funcionarios` (
	id VARCHAR(255) KEY,
  	nome VARCHAR(255) NOT NULL,
  	email VARCHAR(255) NOT NULL UNIQUE
);
