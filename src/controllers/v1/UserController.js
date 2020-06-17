const CreateUser = (req, res) => {
  res.send({ status: 'Ok', value: 'estas creando un usuario' });
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
