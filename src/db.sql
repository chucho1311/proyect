CREATE TABLE bucaramanga (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  photo VARCHAR(255),
  address VARCHAR(255) NOT NULL,
  number INT,
  instagram VARCHAR(255)
);

CREATE TABLE `florida` (
  `id` INT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `photo` VARCHAR(255),
  `address` VARCHAR(255) NOT NULL,
  `number` INT,
  `instagram` VARCHAR(255)
);

CREATE TABLE `giron` (
  `id` INT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `photo` VARCHAR(255),
  `address` VARCHAR(255) NOT NULL,
  `number` INT,
  `instagram` VARCHAR(255)
);

CREATE TABLE `users` (
  `id` iNT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) UNIQUE NOT NULL,
  `password` VARCHAR(255) NOT NULL
);

INSERT INTO users VALUES
(1, 'joe', 'joe@gmail.com', "123456a"),
(2, 'paul', 'paul@gmail.com', "123456a"),
(3, 'jennifer', 'jennifer@gmail.com', "123456a"),
(4, 'carlos', 'carlos@gmail.com', "123456a"),
(5, 'maria', 'maria@gmail.com', "123456a"),
(6, 'jeimy', 'jeimy@gmail.com', "123456a")

INSERT INTO bucaramanga VALUES
(1, 'Restaurante 1', 'https://media-cdn.tripadvisor.com/media/photo-s/1c/95/65/ef/sumergete-en-nuestra.jpg', "calle 34", 321456789, "@Realplace"),
(2, 'Restaurante 2', "https://i.pinimg.com/564x/81/f4/4f/81f44f7a4a3fe0c900c5e9f4430eae3c.jpg", "calle 34", 321456789, "@Realplace"),
(3, 'Restaurante 3', "https://i.pinimg.com/564x/f2/70/d7/f270d7ec34d739613378abff4d7dcfb7.jpg", "calle 34", 321456789, "@Realplace"),
(4, 'Restaurante 4', "https://i.pinimg.com/564x/20/9b/06/209b06015142db3dc26aab0ac0ca12dd.jpg", "calle 34", 321456789, "@Realplace"),
(5, 'Restaurante 5', "https://i.pinimg.com/564x/f2/24/39/f22439ca2b412a1e39dfa600a3d59a09.jpg", "calle 34", 321456789, "@Realplace")

INSERT INTO giron VALUES
(1, 'Restaurante 1', 'https://i.pinimg.com/564x/f9/0e/b2/f90eb2c452d53bedcba8eda903b9444b.jpg', "calle 34", 321456789, "@Realplace")