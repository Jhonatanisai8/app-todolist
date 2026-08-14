import React, { useState } from "react";
import { useTareas } from "../hooks/useTareas";

export const ListaTareas = () => {
  const { tareas, loading, error, agregarTarea, borrarTarea, refetch } = useTareas();
  const [nuevoTitulo, setNuevoTitulo] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nuevoTitulo.trim() || submitting) return;

    setSubmitting(true);
    try {
      await agregarTarea(nuevoTitulo);
      setNuevoTitulo("");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="todo-container">
      <div className="todo-card">
        <header className="todo-header">
          <div>
            <h2>Task Manager</h2>
            <p className="todo-subtitle">
              {tareas.length === 0
                ? "No pending tasks"
                : `${tareas.length} active task${tareas.length > 1 ? "s" : ""}`}
            </p>
          </div>
          <button
            type="button"
            onClick={refetch}
            disabled={loading}
            className="todo-btn-refresh"
            title="Listar / Refrescar todas las tareas"
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={loading ? "spin-animation" : ""}
            >
              <polyline points="23 4 23 10 17 10"></polyline>
              <polyline points="1 20 1 14 7 14"></polyline>
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
            </svg>
            <span>Listar Tareas</span>
          </button>
        </header>

        <form onSubmit={handleSubmit} className="todo-form">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={nuevoTitulo}
            onChange={(e) => setNuevoTitulo(e.target.value)}
            disabled={submitting}
            className="todo-input"
          />
          <button
            type="submit"
            className="todo-btn-add"
            disabled={submitting || !nuevoTitulo.trim()}
          >
            {submitting ? "Adding..." : "Add"}
          </button>
        </form>

        {error && (
          <div className="todo-error">
            <span className="error-icon">⚠️</span> {error}
          </div>
        )}

        {loading && tareas.length === 0 ? (
          <div className="todo-loading">
            <div className="spinner"></div>
            <p>Loading tasks...</p>
          </div>
        ) : (
          <ul className="todo-list">
            {tareas.map((tarea) => (
              <li key={tarea.idTare} className="todo-item">
                <span className="todo-text">{tarea.titulo}</span>
                <button
                  onClick={() => borrarTarea(tarea.idTare)}
                  className="todo-btn-delete"
                  aria-label="Delete task"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Styled Component CSS */}
      <style>{`
        .todo-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
          width: 100%;
          box-sizing: border-box;
        }

        .todo-card {
          width: 100%;
          max-width: 550px;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 16px;
          box-shadow: var(--shadow);
          padding: 32px;
          text-align: left;
          transition: all 0.3s ease;
        }

        .todo-header {
          margin-bottom: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .todo-btn-refresh {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: var(--bg);
          color: var(--text);
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .todo-btn-refresh:hover:not(:disabled) {
          border-color: var(--accent-border);
          color: var(--accent);
          background: var(--accent-bg);
        }

        .todo-btn-refresh:active:not(:disabled) {
          transform: scale(0.97);
        }

        .todo-btn-refresh:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .spin-animation {
          animation: spin 1s linear infinite;
        }

        .todo-header h2 {
          font-size: 28px;
          margin: 0 0 6px 0;
          background: linear-gradient(135deg, var(--text-h), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .todo-subtitle {
          font-size: 14px;
          color: var(--text);
          margin: 0;
        }

        .todo-form {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
        }

        .todo-input {
          flex: 1;
          padding: 12px 16px;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: var(--code-bg);
          color: var(--text-h);
          font-size: 16px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .todo-input:focus {
          border-color: var(--accent-border);
          box-shadow: 0 0 0 3px var(--accent-bg);
        }

        .todo-btn-add {
          padding: 12px 24px;
          border-radius: 8px;
          border: none;
          background: var(--accent);
          color: white;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.1s;
        }

        .todo-btn-add:hover:not(:disabled) {
          opacity: 0.9;
        }

        .todo-btn-add:active:not(:disabled) {
          transform: scale(0.97);
        }

        .todo-btn-add:disabled {
          background: var(--border);
          color: var(--text);
          cursor: not-allowed;
        }

        .todo-error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #ef4444;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 20px;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .todo-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 0;
          color: var(--text);
        }

        .spinner {
          width: 32px;
          height: 32px;
          border: 3px solid var(--border);
          border-top-color: var(--accent);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 12px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .todo-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .todo-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 18px;
          background: var(--code-bg);
          border: 1px solid var(--border);
          border-radius: 10px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .todo-item:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow);
          border-color: var(--accent-border);
        }

        .todo-text {
          font-size: 16px;
          color: var(--text-h);
          font-weight: 500;
          word-break: break-all;
        }

        .todo-btn-delete {
          background: transparent;
          border: none;
          color: #ef4444;
          cursor: pointer;
          padding: 6px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s, color 0.2s;
        }

        .todo-btn-delete:hover {
          background-color: rgba(239, 68, 68, 0.1);
          color: #dc2626;
        }
      `}</style>
    </div>
  );
};
