import { useState } from "react";

export default function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="form-group">
          <label for="title">Todo Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            id="title"
            aria-describedby="emailHelp"
            placeholder="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="desc">Todo Description</label>
          <input
            type="text"
            className="form-control"
            value={desc}
            id="desc"
            placeholder="description"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
}
