import "./App.css";
import Header from "./MyComponents/Header";
import AddTodo from "./MyComponents/AddTodo";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import About from "./MyComponents/About";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am on Delete for ", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      }),
    );
    localStorage.getItem("todos");
  };
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };
  let [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL ?? ""}>
        <Header title="Akant's Todos List" searchBar={false} />
        <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

// <Switch>
//     <Route
//       path="/" render={()=>{
//         return (
//            <>
//             <AddTodo addTodo={addTodo} />
//             <Todos todos={todos} onDelete={onDelete} />
//           </>
//         )
//       }}
//     />
//     <Route path="/about" element={<About />}/>
//   </Switch>
