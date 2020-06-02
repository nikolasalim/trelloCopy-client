import React, { useState } from "react";
import LoginForm from "./LoginForm";

function LoginFormContainer() {
  const [input, setInput] = useState({ username: "", password: "" });

  const onSubmit = (event) => {
    event.preventDefault();

    setInput({
      username: "",
      password: "",
    });
  };

  const onChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <LoginForm input={input} onChange={onChange} onSubmit={onSubmit} />
    </div>
  );
}

export default LoginFormContainer;
