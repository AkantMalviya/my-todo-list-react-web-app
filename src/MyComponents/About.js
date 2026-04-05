import React from "react";
import todo from "../images/todo.jpeg";

export default function About() {
let myStyle = {
    minHeight: "100vh",
    margin: "40px auto"
}
  return (
    <div className="mx-5" style={myStyle}>
      <h5>About Todo App</h5>
      <p>
        This is a Todo App designed and developed by Akant Malviya, Here you can add your important task as a todo item and after completion of that task you can mark as complete or delete them.
        Thank you for using my todo web application :)
      </p>
      <img src={todo} alt="Todo list app preview" className="d-block w-50"/>
    </div>
  );
}
