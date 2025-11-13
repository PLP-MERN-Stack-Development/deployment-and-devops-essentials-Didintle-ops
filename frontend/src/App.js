import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';


const API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';


export default function App() {
const [todos, setTodos] = useState([]);
const [text, setText] = useState('');


useEffect(() => { fetchTodos(); }, []);


async function fetchTodos() {
const res = await axios.get(`${API}/todos`);
setTodos(res.data);
}


async function addTodo(e) {
e.preventDefault();
if (!text) return;
await axios.post(`${API}/todos`, { text });
setText('');
fetchTodos();
}


return (
<div style={{ padding: 20 }}>
<h1>Simple MERN Todo (Deployment Demo)</h1>
<form onSubmit={addTodo}>
<input value={text} onChange={e => setText(e.target.value)} placeholder="New todo" />
<button type="submit">Add</button>
</form>
<TodoList todos={todos} refresh={fetchTodos} />
</div>
);
}
