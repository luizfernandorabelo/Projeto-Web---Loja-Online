const Cep = require('../models/Cep');

exports.get = async (req, res, next) => {
  const ceps = await Cep.find({});
  res.status(200).send(ceps);
};

exports.getById = async (req, res, next) => {
  const id = req.params.id;
  const cep = await Cep.findOne({ id: id });
  if (cep) res.status(200).send(cep);
  else res.status(404).send();
};
