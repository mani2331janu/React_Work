import React, { useState } from "react";
import "../todo/Todo.css";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { GrView } from "react-icons/gr";

const Todo = () => {
  // Todo items
  const [item, setItem] = useState([
    { id: 1, name: "jsx", checked: true },
    { id: 2, name: "jsx & HTML", checked: true },
    { id: 3, name: "js", checked: false },
  ]);

  // New item input
  const [newItem, setNewItem] = useState("");

  // Edit mode
  const [isEditing, setIsEditing] = useState(false);
  const [currentElementId, setCurrentElementId] = useState();

  // View selected item
  const [getViewItem, setGetViewItem] = useState(null);

  // Checkbox toggle
  function handleChange(id) {
    const checkedList = item.map((t) =>
      t.id === id ? { ...t, checked: !t.checked } : t
    );
    setItem(checkedList);
  }

  // Edit button
  function handleEditSave(id) {
    const editItem = item.find((t) => t.id === id);
    setNewItem(editItem.name);
    setIsEditing(true);
    setCurrentElementId(id);
  }

  // Delete item
  function handleDelete(id) {
    const deleteItem = item
      .filter((t) => t.id !== id)
      .map((t, i) => ({ ...t, id: i + 1 }));
    setItem(deleteItem);
  }

  // Add or update item
  function handleAddOrSaveData() {
    if (isEditing) {
      const newListItem = item.map((t) =>
        t.id === currentElementId ? { ...t, name: newItem } : t
      );
      setItem(newListItem);
      setCurrentElementId(null);
      setNewItem("");
      setIsEditing(false);
    } else {
      if (newItem.trim() === "") return; // avoid empty item
      setItem([
        ...item,
        { id: item.length + 1, name: newItem, checked: false },
      ]);
      setNewItem("");
    }
  }

  return (
    <div className="todo-list">
      <h1>Todo List</h1>

      {/* Input + Button */}
      <div>
        <input
          type="text"
          placeholder="Add new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAddOrSaveData}>
          {isEditing ? "Update" : "Add"}
        </button>
      </div>

      {/* List */}
      <ul>
        {item.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.checked}
              onChange={() => handleChange(t.id)}
            />
            <label style={{ color: t.checked ? "#aaa" : "#333" }}>
              {t.name}
            </label>

            <GrView
              role="button"
              className="view icon"
              onClick={() => setGetViewItem(t)}
            />
            <FaEdit
              role="button"
              onClick={() => handleEditSave(t.id)}
              className="icon edit"
            />
            <MdDeleteForever
              role="button"
              onClick={() => handleDelete(t.id)}
              className="icon delete"
            />
          </li>
        ))}
      </ul>

      {/* View Item */}
      {getViewItem && (
        <div className="view-item">
          <h3>View Todo</h3>
          <p>
            <strong>ID:</strong> {getViewItem.id}
          </p>
          <p>
            <strong>Name:</strong> {getViewItem.name}
          </p>
          <p>
            <strong>Completed:</strong> {getViewItem.checked ? "Yes" : "No"}
          </p>
          <button onClick={() => setGetViewItem(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Todo;
