import React from 'react';
import axios from 'axios';


const API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';


export default function TodoList({ todos, refresh }){
async function toggle(id){ await axios.patch(`${API}/todos/${id}/toggle`); refresh(); }
async function remove(id){ await axios.delete(`${API}/todos/${id}`); refresh(); }


return (
<ul>
{todos.map(t => (
<li key={t._id}>
<button onClick={()=>toggle(t._id)}>{t.done ? '☑' : '☐'}</button>
{' '}{t.text}
<button onClick={()=>remove(t._id)} style={{ marginLeft: 8 }}>Delete</button>
</li>
))}
</ul>
);
}
