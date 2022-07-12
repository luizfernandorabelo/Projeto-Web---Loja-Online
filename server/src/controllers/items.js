const Item = require('../models/Item');

exports.get = async (req, res, next) => {
  const items = await Item.find({});
  res.status(200).send(items);
};

exports.getById = async (req, res, next) => {
  const id = req.params.id;
  const item = await Item.findOne({ id: id });
  if (item) res.status(200).send(item);
  else res.status(404).send();
};

exports.put = async (req, res, next) => {
  const id = req.params.id;
  const item = await Item.findOne({ id: id });
  if (item) {
    const updated = await item.updateOne({ _id: item._id }, req.body);
    res.status(201).send(updated);
  } else {
    res.status(404).send();
  }
};

exports.delete = async (req, res, next) => {
  const id = req.params.id;
  const deleted = await Item.findOneAndDelete({ id: id });
  if (deleted) res.status(204).send();
  else res.status(404).send();
};
