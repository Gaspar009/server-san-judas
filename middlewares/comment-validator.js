import {check} from "express-validator";
import { validarCampos } from "./validate-values.js";
import { validateJWT } from "./jwt-verify.js";
import { existePost, existeComment, isCommentOwner} from "../helpers/db-validators.js"
import { validate } from "uuid";

export const createCommentValidator = [
    validateJWT,
    check ("text", "El texto del comentario es obligatorio").not().isEmpty(),
    check ("text", "El comentario debe tener máximo 500 caracteres").isLength({ max:500}),
    check ("post", "El ID del post es obligatorio").not().isEmpty(),
    check ("post", "El ID del post debe ser un ObjectId válido").isMongoId(),
    check ("post").custom(existePost),
    validarCampos,
];