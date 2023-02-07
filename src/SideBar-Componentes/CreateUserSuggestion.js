import React from "react";

const CreateUserSuggestion = (props) => (
  <div className="usuarioSugeridoCard">
    <div className="sugestãoCardContent">
      <div>
        <img id={`hint${props.id}`} alt="" />
      </div>
      <div>
        <h4>{props.userId}</h4>
        <p>{props.name}</p>
      </div>
    </div>
    <h4>Seguir</h4>
  </div>
);
export default CreateUserSuggestion;
