create schema proyectoIntegrador;
use proyectoIntegrador;

CREATE TABLE usuarios (
	  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	  email VARCHAR(100) UNIQUE NOT NULL,
    usuario VARCHAR(100) UNIQUE NOT NULL,
    contraseña VARCHAR(250) NOT NULL,
    fechaNacimiento DATE NOT NULL,
    dni INT NOT NULL,
    fotoPerfil VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL
    );
    
CREATE TABLE productos (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  imagen VARCHAR(200) NOT NULL,
  producto VARCHAR(150) NOT NULL,
  descripcion VARCHAR(1000) NOT NULL, 
  fechaCarga DATE NOT NULL,
  usuarioId INT UNSIGNED NOT NULL,
  FOREIGN KEY (usuarioId) REFERENCES usuarios(id),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL
	);

CREATE TABLE comentarios (
	id INT UNSIGNED KEY AUTO_INCREMENT,
    idPost INT UNSIGNED NOT NULL,
    idUsuario INT UNSIGNED NOT NULL,
    comentario VARCHAR(500) NOT NULL,
    FOREIGN KEY (idPost) REFERENCES productos(id),
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL
	);

insert into usuarios (id, email, usuario, contraseña, fechaNacimiento, dni, fotoPerfil)
values(default,"juan.perez@gmail.com", "juanperez", "juan99", "1999-02-15", 38756390, "/images/users/default-image.png"),
(default,"ramon.ares@gmail.com", "ramonares", "ramon05", "2005-06-12", 46557980, "/images/users/default-image.png"),
(default,"gaston.gimenez@gmail.com", "gastiramirez", "gaston02", "2002-04-17", 44778325, "/images/users/default-image.png"),
(default,"luis.gonzalez@gmail.com", "luchogonzalez", "lucho97", "1997-08-19", 43123900, "/images/users/default-image.png"),
(default,"santiago.fernandez@gmail.com", "santifernandez", "santi03", "2003-09-11", 44576899, "/images/users/default-image.png");

insert into productos (id, imagen, producto, descripcion, fechaCarga, usuarioId)
values(default,"/images/products/iphone14ProMax.jpg","iPhone 14 Pro Max","Pantalla de 6.7 pulgadas, procesador A16 Bionic, triple cámara trasera y un diseño renovado.","2022-07-23",1),
(default,"/images/products/iphone14pro.jpg","Iphone 14 Pro","Pantalla de 6.1 pulgadas, procesador A16 Bionic, triple cámara trasera y características de gama alta.","2021-09-21",2),
(default,"/images/products/iphone14.jpg","iPhone 14","Pantalla de 6.1 pulgadas, procesador A16 Bionic, cámara dual trasera y un diseño actualizado.","2021-04-18",3),
(default,"/images/products/iphone13ProMax.jpg","iPhone 13 Pro Max","Pantalla de 6.7 pulgadas, procesador A15 Bionic, triple cámara trasera y funciones avanzadas de video.","2022-05-24",3),
(default,"/images/products/iphone13Pro.jpg","iPhone 13 Pro","Pantalla de 6.1 pulgadas, procesador A15 Bionic, triple cámara trasera y características avanzadas de fotografía.","2021-08-17",1),
(default,"/images/products/iphone13.jpg","iPhone 13","Pantalla de 6.1 pulgadas, procesador A15 Bionic, cámara dual trasera y una batería mejorada.","2021-03-27",4),
(default,"/images/products/iphoneSE(2daG).jpg","iPhone SE","Segunda generación del iphone SE. Pantalla de 4.7 pulgadas, procesador A13 Bionic, cámara trasera de 12 megapíxeles y un precio más asequible.","2022-01-29",5),
(default,"/images/products/iphone11ProMax.jpg","iPhone 11 Pro Max","Pantalla de 6.5 pulgadas, procesador A13 Bionic, triple cámara trasera y un diseño renovado.","2021-02-15",5),
(default,"/images/products/iphone11Pro.jpg","iPhone 11 Pro","Pantalla de 5.8 pulgadas, procesador A13 Bionic, triple cámara trasera y mejoras en la duración de la batería.","2022-03-24",4),
(default,"/images/products/iphone11.jpg","iPhone 11","Pantalla de 6.1 pulgadas, procesador A13 Bionic, cámara dual trasera y mejoras en la calidad de la fotografía","2022-09-19",2);

insert into comentarios (id, idPost, idUsuario, comentario)
values(default,1,2,"Acabo de comprar el nuevo iPhone y estoy muy contenta con su rendimiento, sin duda es una excelente opción."),
(default,6,4,"Me encanta el modelo! super práctico, buen tamaño para llevar en el bolsillo."),
(default,8,3,"El precio del iPhone puede ser un poco elevado, pero su calidad y rendimiento lo hacen valer la pena."),
(default,3,5,"La verdad que prefiero el rendimiento de los Samsung, son mas faciles de manejar.");