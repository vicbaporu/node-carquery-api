const Joi = require('joi');

const models = Joi.array(Joi.object().keys({
  model: Joi.string(),
  makeId: Joi.string(),
})).rename('model_name', 'model')
   .rename('model_make_id', 'makeId');

module.exports = Joi.array().items(models);
