import React from "react";
import './TodoCounter.css';

function TodoCounter(){
    return(
        <div className="container">
        <h2 className="TodoTitulo">Toodo Task </h2>
        <p className="TodoCounter"> Has complentado 2 de 3 TODOs</p>
        </div>
      
    )
}

export {TodoCounter};