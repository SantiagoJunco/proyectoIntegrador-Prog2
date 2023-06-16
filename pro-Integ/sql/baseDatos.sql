-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 16-06-2023 a las 02:57:36
-- Versión del servidor: 5.7.39
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectoIntegrador`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `idPost` int(10) UNSIGNED NOT NULL,
  `idUsuario` int(10) UNSIGNED NOT NULL,
  `comentario` varchar(500) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `idPost`, `idUsuario`, `comentario`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 2, 'Acabo de comprar el nuevo iPhone y estoy muy contenta con su rendimiento, sin duda es una excelente opción.', '2023-04-10 13:57:57', '2023-04-10 13:57:57', NULL),
(2, 6, 4, 'Me encanta el modelo! super práctico, buen tamaño para llevar en el bolsillo.', '2023-04-10 13:57:57', '2023-04-10 13:57:57', NULL),
(3, 8, 3, 'El precio del iPhone puede ser un poco elevado, pero su calidad y rendimiento lo hacen valer la pena.', '2023-04-10 13:57:57', '2023-04-10 13:57:57', NULL),
(4, 3, 5, 'La verdad que prefiero el rendimiento de los Samsung, son mas faciles de manejar.', '2023-04-10 13:57:57', '2023-04-10 13:57:57', NULL),
(5, 1, 6, 'Hola, quería saber si todavía tienen disponible este modelo.', '2023-06-11 02:42:28', '2023-06-11 02:42:28', NULL),
(6, 3, 8, 'que buen celular, me lo compré y me funciona bárbaro.', '2023-06-11 03:46:34', '2023-06-11 03:46:34', NULL),
(7, 3, 6, 'Hola, quería saber si tienen disponible este modelo en color rojo.', '2023-06-11 03:49:54', '2023-06-11 03:49:54', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `imagen` varchar(200) NOT NULL,
  `producto` varchar(150) NOT NULL,
  `descripcion` varchar(1000) NOT NULL,
  `fechaCarga` date NOT NULL,
  `usuarioId` int(10) UNSIGNED NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `imagen`, `producto`, `descripcion`, `fechaCarga`, `usuarioId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, '/images/products/iphone14ProMax.jpg', 'iPhone 14 Pro Max', 'Pantalla de 6.7 pulgadas, procesador A16 Bionic, triple cámara trasera y un diseño renovado.', '2022-07-23', 1, '2023-04-10 13:57:57', '2023-04-10 13:57:57', NULL),
(2, '/images/products/iphone14Pro.jpg', 'Iphone 14 Pro', 'Pantalla de 6.1 pulgadas, procesador A16 Bionic, triple cámara trasera y características de gama alta.', '2021-09-21', 2, '2023-04-10 13:57:57', '2023-04-10 13:57:57', NULL),
(3, '/images/products/iphone14.jpg', 'iPhone 14', 'Pantalla de 6.1 pulgadas, procesador A16 Bionic, cámara dual trasera y un diseño actualizado.', '2021-04-18', 3, '2023-04-10 13:57:57', '2023-04-10 13:57:57', NULL),
(4, '/images/products/iphone13ProMax.jpg', 'iPhone 13 Pro Max', 'Pantalla de 6.7 pulgadas, procesador A15 Bionic, triple cámara trasera y funciones avanzadas de video.', '2022-05-24', 3, '2023-04-10 13:57:57', '2023-04-10 13:57:57', NULL),
(5, '/images/products/iphone13Pro.jpg', 'iPhone 13 Pro', 'Pantalla de 6.1 pulgadas, procesador A15 Bionic, triple cámara trasera y características avanzadas de fotografía.', '2021-08-17', 1, '2023-04-10 13:57:57', '2023-04-10 13:57:57', NULL),
(6, '/images/products/iphone13.jpg', 'iPhone 13', 'Pantalla de 6.1 pulgadas, procesador A15 Bionic, cámara dual trasera y una batería mejorada.', '2021-03-27', 4, '2023-04-10 13:57:57', '2023-04-10 13:57:57', NULL),
(7, '/images/products/iphoneSE(2G).jpg', 'iPhone SE', 'Segunda generación del iphone SE. Pantalla de 4.7 pulgadas, procesador A13 Bionic, cámara trasera de 12 megapíxeles y un precio más asequible.', '2022-01-29', 5, '2023-04-10 13:57:57', '2023-04-10 13:57:57', NULL),
(8, '/images/products/iphone11ProMax.jpg', 'iPhone 11 Pro Max', 'Pantalla de 6.5 pulgadas, procesador A13 Bionic, triple cámara trasera y un diseño renovado.', '2021-02-15', 5, '2023-04-10 13:57:57', '2023-04-10 13:57:57', NULL),
(9, '/images/products/iphone11Pro.jpg', 'iPhone 11 Pro', 'Pantalla de 5.8 pulgadas, procesador A13 Bionic, triple cámara trasera y mejoras en la duración de la batería.', '2022-03-24', 4, '2023-04-10 13:57:57', '2023-04-10 13:57:57', NULL),
(10, '/images/products/iphone11.jpg', 'iPhone 11', 'Pantalla de 6.1 pulgadas, procesador A13 Bionic, cámara dual trasera y mejoras en la calidad de la fotografía', '2022-09-19', 2, '2023-04-10 13:57:57', '2023-04-10 13:57:57', NULL),
(15, '/images/products/iphone14.jpg', 'Iphone 14 usado', 'Perfectas condiciones, 1 año de uso. Contactarse al privado para saber precio.', '2023-06-09', 6, '2023-06-09 20:08:13', '2023-06-09 20:08:13', NULL),
(16, '/images/products/iphone13.jpg', 'Iphone 13 usado 6 meses', 'Perfectas condiciones, 64gb. Condición de batería 98%', '2023-06-09', 6, '2023-06-09 20:12:35', '2023-06-12 13:08:08', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(100) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `contraseña` varchar(250) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `dni` int(11) NOT NULL,
  `fotoPerfil` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `usuario`, `contraseña`, `fechaNacimiento`, `dni`, `fotoPerfil`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'juan.perez@gmail.com', 'juanperez', 'juan99', '1999-02-15', 38756390, '/images/users/default-image.png', '2023-04-10 13:57:57', '2023-04-10 13:57:57', NULL),
(2, 'ramon.ares@gmail.com', 'ramonares', 'ramon05', '2005-06-12', 46557980, '/images/users/default-image.png', '2023-04-10 13:57:57', '2023-04-10 13:57:57', NULL),
(3, 'gaston.gimenez@gmail.com', 'gastiramirez', 'gaston02', '2002-04-17', 44778325, '/images/users/default-image.png', '2023-04-10 13:57:57', '2023-04-10 13:57:57', NULL),
(4, 'luis.gonzalez@gmail.com', 'luchogonzalez', 'lucho97', '1997-08-19', 43123900, '/images/users/default-image.png', '2023-04-10 13:57:57', '2023-04-10 13:57:57', NULL),
(5, 'santiago.fernandez@gmail.com', 'santifernandez', 'santi03', '2003-09-11', 44576899, '/images/users/default-image.png', '2023-04-10 13:57:57', '2023-04-10 13:57:57', NULL),
(6, 'santiagojunco153@gmail.com', 'santiago', '$2a$10$9qvFLOh/36tKtJ818JRc2.bg3OWQhgwX20n3hpfkqc.an/xdQMmza', '2003-12-02', 45326966, '/images/users/default-image.png', '2023-06-05 13:36:14', '2023-06-12 15:34:49', NULL),
(7, 'naza@gmail.com', 'naza', '$2a$10$izaCyDnERHH5XAeCfCwPsOXQQJBJJzFAO0jfll/1JChG2lC/KhSI.', '2004-05-19', 45686393, '/images/users/default-image.png', '2023-06-05 13:38:52', '2023-06-05 13:38:52', NULL),
(8, 'lucho@gmail.com', 'lucho setton', '$2a$10$X1O.RWqRTRCMK15WBKa5ee38lCW73NuuOuJqsWCHQ1qTUCvv4gmg6', '2004-07-23', 45129874, '/images/users/default-image.png', '2023-06-05 13:46:26', '2023-06-05 13:46:26', NULL),
(9, 'pepe@gmail', 'pepe junco', '$2a$10$w27CmhrXN2SSxJUTq4xn6Ol0iagb0j31D53G1k9kqMREGVTC6v55.', '1994-02-17', 23456798, '/images/users/default-image.png', '2023-06-05 19:14:46', '2023-06-05 19:14:46', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUsuario` (`idUsuario`),
  ADD KEY `comentarios_ibfk_1` (`idPost`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuarioId` (`usuarioId`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`idPost`) REFERENCES `productos` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
