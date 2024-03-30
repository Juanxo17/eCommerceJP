const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth' );
const { validarCampos } = require('../middlewares/validarCampos');
const { validarJWT } = require('../middlewares/validarToken');

router.post('/', loginUsuario );

router.post(
    '/new',
    [
        check('name','El campo nombre es obligatorio').not().isEmpty(),
        check('email','El campo e-mail es obligatorio').isEmail(),
        check('password', ).isLength({min: 6}),
        validarCampos
    ],
    crearUsuario);

router.get('/renew',validarJWT, revalidarToken );

module.exports = router;