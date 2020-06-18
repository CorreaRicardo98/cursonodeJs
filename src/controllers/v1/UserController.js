const bcrypt = require('bcrypt');
const mysql = require('../../modules/database');

const CreateUser = async (req, response) => {
  try {
    const { mail } = req.body;
    console.log('req.body', req.body);
    const hash = await bcrypt.hash(req.body.password, 10);
    console.log('FIN', hash);
    mysql.query(
      `insert into users values(null,"${mail}","${hash}")`,
      (err, res, campos) => {},
    );
    mysql.query('select * from users', (err, res, campos) => {
      console.log('resultado de query', res);
    });
    response.send({ status: 'Ok', value: 'estas creando un usuario' });
  } catch (error) {
    console.log(error);
    response.status(500).send({ status: 'ERROR', value: error.message });
  }
};

const DeleteUser = (req, res) => {
  res.send({ status: 'Ok', value: 'estas Eliminando un usuario' });
};

const GetUsers = (req, res) => {
  res.send({ status: 'Ok', value: 'estas obteniendo un usuario' });
};

const UpdateUser = (req, res) => {
  res.send({ status: 'Ok', value: 'estas actualizando un usuario' });
};

module.exports = {
  CreateUser,
  DeleteUser,
  GetUsers,
  UpdateUser,
};
