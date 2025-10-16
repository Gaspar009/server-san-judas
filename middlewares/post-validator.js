import { check } from "express-validator";
import { validarCampos } from "./validate-values.js";
import {validateJWT} from './jwt-verify.js'

export const createPostValidator = [
    validateJWT,
    check('title','El título es obligatorio').not().isEmpty(),
    check('title', 'El titulo no debe exceder los 100 caracteres')
        .isLength({ max: 100}),
    check('content', 'El contenido es obligatorio').not().isEmpty(),
    validarCampos
]
