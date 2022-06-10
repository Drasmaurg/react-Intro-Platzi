import react from "react";
import './CreateTodoButtom.css';

function CreateTodoButtom(props){
    const onClickButton = (msg) => {
        alert(msg);
    }
    
    return(
        <button
         className="CreateTodoButtom"
         onClick={() => onClickButton('Aqui se deberia abrir el modal')}
         >
            +
         </button>
    );
}

export { CreateTodoButtom};