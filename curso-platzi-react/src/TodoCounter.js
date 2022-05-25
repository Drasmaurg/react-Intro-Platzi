import React from "react";
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
        return (
        <div className="container">
        <h2 className="TodoTitulo">Toodo Task </h2>
        <p className="TodoCounter"> Has complentado {completed} de {total} TODOs</p>
        </div>
      
    );
}

export {TodoCounter};