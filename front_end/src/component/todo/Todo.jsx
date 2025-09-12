import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { GrView } from "react-icons/gr";

const Todo = () => {
  const [item, setItem] = useState([
    { id: 1, name: "Learn React", checked: false },
    { id: 2, name: "Build Todo App", checked: true },
  ]);
  const [newItem, setNewItem] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [getViewItem, setGetViewItem] = useState(null);
  
  const handleAddOrSaveData = () => {
    if (!newItem.trim()) return;
    if (isEditing) {
      setItem((prev) =>
        prev.map((t) =>
          t.id === editId ? { ...t, name: newItem } : t
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      setItem((prev) => [
        ...prev,
        { id: Date.now(), name: newItem, checked: false },
      ]);
    }
    setNewItem("");
  };

 
  const handleDelete = (id) => {
    setItem(item.filter((t) => t.id !== id));
  };

  const handleEditSave = (id) => {
    const todo = item.find((t) => t.id === id);
    setNewItem(todo.name);
    setIsEditing(true);
    setEditId(id);
  };

  const handleChange = (id) => {
    setItem((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, checked: !t.checked } : t
      )
    );
  };

  return (
    <div className="p-6 flex justify-center items-center ">
      <div className="todo-list bg-white shadow-lg rounded-lg  p-6">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Add new item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddOrSaveData}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {isEditing ? "Update" : "Add"}
          </button>
        </div>

        {/* Scrollable List */}
        <ul className="max-h-60 overflow-y-auto space-y-3 pr-2">
          {item.map((t) => (
            <li
              key={t.id}
              className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded shadow-sm"
            >
              {/* Left side: checkbox + text */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={t.checked}
                  onChange={() => handleChange(t.id)}
                  className="h-5 w-5 cursor-pointer accent-blue-500"
                />
                <label
                  className={`text-base ${
                    t.checked ? "line-through text-gray-400" : "text-gray-800"
                  }`}
                >
                  {t.name}
                </label>
              </div>

              {/* Right side: icons */}
              <div className="flex gap-3 text-xl">
                <GrView
                  role="button"
                  className="text-green-600 cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => setGetViewItem(t)}
                />
                <FaEdit
                  role="button"
                  onClick={() => handleEditSave(t.id)}
                  className="text-blue-600 cursor-pointer hover:scale-110 transition-transform"
                />
                <MdDeleteForever
                  role="button"
                  onClick={() => handleDelete(t.id)}
                  className="text-red-600 cursor-pointer hover:scale-110 transition-transform"
                />
              </div>
            </li>
          ))}
        </ul>

        {getViewItem && (
          <div className="mt-4 p-4 border rounded bg-gray-50 shadow-md">
            <h3 className="text-lg font-semibold mb-2">View Todo</h3>
            <p>
              <strong>ID:</strong> {getViewItem.id}
            </p>
            <p>
              <strong>Name:</strong> {getViewItem.name}
            </p>
            <p>
              <strong>Completed:</strong>{" "}
              {getViewItem.checked ? "Yes ✅" : "No ❌"}
            </p>
            <button
              onClick={() => setGetViewItem(null)}
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
