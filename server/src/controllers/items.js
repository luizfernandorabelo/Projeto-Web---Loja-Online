const Item = require('../models/Item');

exports.get = async (req, res, next) => {
  // const items = await Item.find({});
  const items = await Item.find({}).sort({ id: 'asc' });
  res.status(200).send(items);
};

exports.getById = async (req, res, next) => {
  const id = req.params.id;
  const item = await Item.findOne({ id: id });
  if (item) res.status(200).send(item);
  else res.status(404).send();
};

exports.post = async (req, res, next) => {
  const item = req.body;
  if (!item) {
    res.status(404).send();
  } else {
    try {
      const inserted = await Item.insertMany(item);
      res.status(200).json({ msg: 'Ok' });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
};

exports.put = async (req, res, next) => {
  const id = req.params.id;
  const item = await Item.findOne({ id: id });
  if (item) {
    const updated = await Item.updateOne({ _id: item._id }, { $set: req.body });
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
