import React from "react";
import CreateUserSuggestion from "./CreateUserSuggestion.js";
const nameAndUserid = (name, userId) => {
  return { name, userId };
};
let newUsersSuggestion = [];
newUsersSuggestion.push(nameAndUserid("Lina Dreik", "_lin.di"));
newUsersSuggestion.push(nameAndUserid("Anna Pugacheva", "anni.illustr"));
newUsersSuggestion.push(nameAndUserid("Agata Serge", "agataserge"));
newUsersSuggestion.push(nameAndUserid("Bade Fuwa", "badefuwa"));
newUsersSuggestion.push(nameAndUserid("Nour El Refai", "elrefai"));

const UsuariosSugeridos = () => (
  <div className="usuariosSugeridos">
    {newUsersSuggestion.map((user, index) => (
      <CreateUserSuggestion
        key={`userSuggestion${index}`}
        name={user.name}
        userId={user.userId}
        id={index + 1}
      />
    ))}
  </div>
);
export default UsuariosSugeridos;
