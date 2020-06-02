import React from "react";

function LoginForm(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          name="username"
          value={props.input.username}
          onChange={props.onChange}
          placeholder="username:"
        ></input>
        <input
          value={props.input.password}
          name="password"
          type="password"
          onChange={props.onChange}
          placeholder="password:"
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
