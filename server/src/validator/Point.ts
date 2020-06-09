import { celebrate, Joi } from 'celebrate';

const createPointValidator = celebrate({
    body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().length(2).required(),
        items: Joi.string().required()
    })
}, {
    abortEarly: false
});

export default createPointValidator;
