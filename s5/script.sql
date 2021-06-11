-- Mostrar DB
show databases;
-- Crear DB
create database Osvaldo;
-- Eliminar DB
drop database Osvaldo;
-- Seleccionar DB
use andres;
-- Mostrar tablas
show tables;
-- Crear tabla
CREATE TABLE sucursal(
     razonSocial VARCHAR(50),
     rfc CHAR(13) UNIQUE NOT NULL,
     nombre VARCHAR(50),
     ubicacion VARCHAR(80) NOT NULL,
     PRIMARY KEY(razonSocial)
 );
-- Revisar estructura de tabla
desc sucursal;
-- Eliminar tabla
drop table sucursal;
-- Modificar tabla
ALTER TABLE empleado ADD (sexo CHAR(1) NOT NULL);
ALTER TABLE empleado DROP COLUMN sexo;
ALTER TABLE empleado MODIFY razonSocial VARCHAR(50) NOT NULL;

CREATE TABLE empleado(
    rfc CHAR(13),
    nombre VARCHAR(100) NOT NULL,
    fechaNcto DATE NOT NULL,
    direccion VARCHAR(80) NOT NULL,
    tel CHAR(11),
    razonSocial VARCHAR(50),
    PRIMARY KEY(rfc),
    FOREIGN KEY(razonSocial) REFERENCES sucursal(razonSocial)
  );
CREATE TABLE orden(
     idOrden INT,
     fecha DATE NOT NULL,
     total FLOAT NOT NULL,
     razonSocial VARCHAR(50) NOT NULL,
     rfc CHAR(13) NOT NULL,
     PRIMARY KEY(idOrden),
     FOREIGN KEY(razonSocial) REFERENCES sucursal(razonSocial),
     FOREIGN KEY(rfc) REFERENCES empleado(rfc)
     );
CREATE TABLE ingrediente(
     idIngrediente INT,
     nombre VARCHAR(40) NOT NULL,
     stock INT DEFAULT 1,
     PRIMARY KEY(idIngrediente)
    );
CREATE TABLE categoria(
 idCategoria INT,
 nombre VARCHAR(30) NOT NULL,
 PRIMARY KEY(idCategoria)
);
CREATE TABLE platillo(
     idPlatillo INT,
     nombre VARCHAR(30) NOT NULL,
     costo FLOAT NOT NULL,
     idCategoria INT NOT NULL,
     PRIMARY KEY(idPlatillo),
     FOREIGN KEY(idCategoria) REFERENCES categoria(idCategoria)
    );
    CREATE TABLE orden_platillo(
     cantidad INT NOT NULL,
     idOrden INT NOT NULL,
     idPlatillo INT NOT NULL,
     FOREIGN KEY(idOrden) REFERENCES orden(idOrden),
     FOREIGN KEY(idPlatillo) REFERENCES platillo(idPlatillo)
    );
    CREATE TABLE platillo_ingrediente(
     idIngrediente INT NOT NULL,
     idPlatillo INT NOT NULL,
     FOREIGN KEY(idIngrediente) REFERENCES ingrediente(idIngrediente),
     FOREIGN KEY(idPlatillo) REFERENCES platillo(idPlatillo)
    );
    
--  Insertar registro
INSERT INTO sucursal(
	razonSocial,rfc,nombre,ubicacion
) VALUES (
	"La Torta Feliz 2 SA de CV", 
    "TOF361020666", 
    "Torta Feliz", 
    "GDL"
);
INSERT INTO sucursal VALUES (
	"El Taquito Feliz SA de CV", 
    "TAF261020666", 
    "Taco Feliz", 
    "CDMX"
);

INSERT INTO empleado VALUES(
     "DEFL930301T43",
     "Daniel Ernesto FLores",
     "1993-03-01",
     "Bosque del Tesoro N.345 Col. Miguel Hidalgo, Ciudad de México, México CP.56070",
     "5510673492",
     "El Taquito Feliz SA de CV"
    );

--  Consultar tabla
SELECT * FROM sucursal; -- Todos los campos
SELECT rfc, ubicacion FROM sucursal; -- Solo algunos campos
SELECT * FROM sucursal where ubicacion = "GDL";
SELECT * FROM sucursal where razonSocial like "%CV";
SELECT * FROM sucursal where razonSocial like "LA%";
SELECT * FROM sucursal where razonSocial like "%torta%";
SELECT * FROM sucursal where razonSocial like "%CV" AND ubicacion = "GDL";
-- Contar registros
SELECT count(*) FROM sucursal where ubicacion = "GDL";
-- Agregar alias
SELECT count(*) as TotalSucursales FROM sucursal where ubicacion = "GDL";

-- Eliminar registro
SELECT * FROM sucursal where razonSocial like "%2%";
DELETE FROM sucursal where razonSocial like "%2%";

-- Actualizar registro
UPDATE sucursal set nombre = "La Torta Feliz 2" where razonSocial like "%2%"; 