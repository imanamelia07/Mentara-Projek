const express = require('express');

const UserContoller = require('../controller/users');

const router = express.Router();

// CREATE - POST
router.get('/',UserContoller.getAllUsers);

// READ - GET
router.post('/',UserContoller.createNewUser);

// UPDATE - PATCH
router.patch('/:idUser', UserContoller.updateUser);

// DELETE - DELETE
router.delete('/:idUser', UserContoller.deleteUser);


module.exports=router;