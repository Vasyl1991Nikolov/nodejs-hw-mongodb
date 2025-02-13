import Joi from 'joi';

export const updateValidation = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().min(3).max(20).required(),
  email: Joi.string().min(3).max(20).required(false),
  isFavourite: Joi.boolean().default(false),
  contactType: Joi.string()
    .min(3)
    .max(20)
    .required()
    .valid('work', 'home', 'personal')
    .default('personal'),
});