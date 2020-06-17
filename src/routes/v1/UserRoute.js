const express = require('express');
const UserController = require('../../controllers/v1/UserController');

const router = express.Router();

router.post('/create', UserController.CreateUser);
router.put('/update', UserController.UpdateUser);
router.delete('/delete', UserController.DeleteUser);
router.post('/get', UserController.GetUsers);

module.exports = router;
