CREATE DATABASE valtari;
USE valtari;

-- ==========================
-- TABLA VEHÍCULOS
-- ==========================

CREATE TABLE vehiculos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    precio BIGINT NOT NULL,
    kilometros INT NOT NULL,
    anio INT NOT NULL,
    marca VARCHAR(50),
    ciudad VARCHAR(100),
    imagen VARCHAR(255),
    descripcion TEXT,
    color VARCHAR(50),
    puertas INT,
    combustible VARCHAR(50),
    motor VARCHAR(50),
    transmision VARCHAR(50),
    whatsapp VARCHAR(20)
);

-- ==========================
-- TABLA IMÁGENES
-- ==========================

CREATE TABLE imagenes_vehiculo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vehiculo_id INT,
    imagen VARCHAR(255),
    FOREIGN KEY (vehiculo_id) REFERENCES vehiculos(id)
);

-- ==========================
-- VEHÍCULOS
-- ==========================

INSERT INTO vehiculos
(nombre, precio, kilometros, anio, marca, ciudad, imagen, descripcion, color, puertas, combustible, motor, transmision, whatsapp)
VALUES
(
'Chevrolet Sail 1.4 LS',
33000000,
237640,
2018,
'Chevrolet',
'Barranquilla',
'prototipo2.webp',
'Chevrolet Sail 2018 en excelente estado, ideal para ciudad y viajes.',
'Blanco',
4,
'Gasolina',
'1.4',
'Manual',
'573001112233'
),
(
'Chevrolet Tracker Premier',
66000000,
47000,
2023,
'Chevrolet',
'Barranquilla',
'carromodelo.avif',
'Chevrolet Tracker Premier 2023 con bajo kilometraje y equipamiento completo.',
'Gris',
5,
'Gasolina',
'1.2 Turbo',
'Automática',
'573004445566'
),
(
'Mazda 3 Touring',
72000000,
35000,
2022,
'Mazda',
'Barranquilla',
'mazda3.webp',
'Mazda 3 Touring en excelente estado.',
'Rojo',
4,
'Gasolina',
'2.0',
'Automática',
'573001111111'
),
(
'Toyota Corolla XEI',
85000000,
28000,
2023,
'Toyota',
'Barranquilla',
'corolla.webp',
'Toyota Corolla XEI con excelente equipamiento.',
'Blanco',
4,
'Gasolina',
'2.0',
'Automática',
'573002222222'
),
(
'BMW Serie 8',
72000000,
35000,
2022,
'BMW',
'Barranquilla',
'bmw.webp',
'BMW Serie 8 deportivo.',
'Negro',
2,
'Gasolina',
'3.0 Turbo',
'Automática',
'573003333333'
),
(
'Ford Fiesta',
85000000,
28000,
2023,
'Ford',
'Barranquilla',
'Ford.webp',
'Ford Fiesta excelente para ciudad.',
'Azul',
4,
'Gasolina',
'1.6',
'Manual',
'573004444444'
),
(
'Hyundai Tucson',
72000000,
35000,
2022,
'Hyundai',
'Barranquilla',
'Hyundai.webp',
'Hyundai Tucson familiar.',
'Gris',
5,
'Gasolina',
'2.0',
'Automática',
'573005555555'
),
(
'Renault Captur',
85000000,
28000,
2023,
'Renault',
'Barranquilla',
'Renaul.webp',
'Renault Captur seminueva.',
'Blanco',
5,
'Gasolina',
'1.3 Turbo',
'Automática',
'573006666666'
),
(
'Nissan X-Trail',
85000000,
28000,
2023,
'Nissan',
'Barranquilla',
'Nissan.webp',
'Nissan X-Trail en perfecto estado.',
'Plata',
5,
'Gasolina',
'2.5',
'Automática',
'573007777777'
),
(
'Mercedes Clase C',
85000000,
28000,
2023,
'Mercedes Benz',
'Barranquilla',
'Mercedes.webp',
'Mercedes Clase C de lujo.',
'Negro',
4,
'Gasolina',
'2.0 Turbo',
'Automática',
'573008888888'
);

-- ==========================
-- GALERÍA DEL SAIL
-- ==========================

INSERT INTO imagenes_vehiculo (vehiculo_id, imagen)
VALUES
(1,'sail1.webp'),
(1,'sail2.webp'),
(1,'sail3.webp'),
(1,'sail4.webp');

-- ==========================
-- GALERÍA DE LA TRACKER
-- ==========================

INSERT INTO imagenes_vehiculo (vehiculo_id, imagen)
VALUES
(2,'tracker1.webp'),
(2,'tracker2.webp'),
(2,'tracker3.webp'),
(2,'tracker4.webp');