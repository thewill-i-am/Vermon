const Sequelize = require("sequelize");

const db = new Sequelize("mydb", "root", "123Queso.", {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {
    options: {
      encrypt: true,
    },
  },
});

class Empresa {
  insert = async (
    nombre,
    direccion,
    servicio,
    tipo,
    email,
    numeroTelefonico
  ) => {
    try {
      await db.query(
        `INSERT INTO EMPRESA(Nombre, Direccion, Servicio, Tipo, Email, NumeroTelefonico) VALUES ('${nombre}', '${direccion}', '${servicio}', '${tipo} ', '${email}', '${numeroTelefonico}')`
      );
    } catch (e) {
      console.error(e);
    }
  };
}

class FormularioSolicitud {
  insert = async (documento) => {
    try {
      await db.query(
        `INSERT INTO FORMULARIOS_SOLICITUD(Documento) VALUES ('${documento}')`
      );
    } catch (e) {
      console.error(e);
    }
  };
}

class Usuario {
  insert = async (nombre, email) => {
    try {
      await db.query(
        `INSERT INTO USUARIO (Nombre, Password, Email, EsAdmin) VALUES ('${nombre}', 'password','${email}', 0)`
      );
    } catch (e) {
      console.error(e);
    }
  };
}

module.exports = {Usuario, FormularioSolicitud, Empresa};
