require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const todosRouter = require('./routes/todos');


const app = express();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mern-deploy';


mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Mongo connection error', err));


app.use('/api/todos', todosRouter);


app.get('/', (req, res) => res.json({ ok: true, message: 'Backend running' }));


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));


// Basic health endpoint used for monitoring
app.get('/health', (req, res) => res.json({ status: 'ok', timestamp: Date.now() }));
