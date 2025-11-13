const Todo = require('../models/Todo');


exports.getAll = async (req, res) => {
const todos = await Todo.find().sort({ createdAt: -1 });
res.json(todos);
};


exports.create = async (req, res) => {
const todo = new Todo({ text: req.body.text });
await todo.save();
res.status(201).json(todo);
};


exports.toggle = async (req, res) => {
const todo = await Todo.findById(req.params.id);
if (!todo) return res.status(404).json({ message: 'Not found' });
todo.done = !todo.done;
await todo.save();
res.json(todo);
};


exports.delete = async (req, res) => {
await Todo.findByIdAndDelete(req.params.id);
res.json({ ok: true });
};
