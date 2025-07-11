import React, { useState } from 'react';
import './App.css'; // Ensure your styles are defined here

function WishlistApp() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { todo: input, iscompleted: false }]);
    setInput('');
  };

  const handleDelete = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  const handleToggle = (index) => {
    const updated = todos.map((item, i) =>
      i === index ? { ...item, iscompleted: !item.iscompleted } : item
    );
    setTodos(updated);
  };

  return (
    <div className="main-container">
      <h1 className="heading">Your Wishlist</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Add your wishlist here..."
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="button" onClick={handleAdd}>Add</button>
      </div>

      {todos.map((item, index) => (
        <div className="todo-item" key={index}>
          <input type="checkbox" checked={item.iscompleted} onChange={() => handleToggle(index)} />
          <span
            className="todo-text"
            style={{ textDecoration: item.iscompleted ? 'line-through' : 'none' }}
          >
            {item.todo}
          </span>
          <button className="delete-icon" onClick={() => handleDelete(index)}>🗑</button>
        </div>
      ))}
    </div>
  );
}

export default WishlistApp;