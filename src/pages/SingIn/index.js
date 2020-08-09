import React from "react";

const SignIn = () => {
  return (
    <>
      <div class="main-form">
        <h2>Sing In</h2>
        <form class="form">
          <p class="form-text">Email</p>
          <input
            type="email"
            name="name"
            class="input"
            id="form-email"
            placeholder="email"
          />

          <p class="form-text">Password</p>
          <input
            type="password"
            name="name"
            class="input"
            id="form-password"
            placeholder="password"
          />

          <button id="btn-sign-in" class="btn-sign-in" type="button">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
