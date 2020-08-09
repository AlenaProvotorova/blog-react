import React from "react";
import "./style.scss";

const SignUp = () => {
  return (
    <>
      <div class="main-form">
        <h2>Sing Up</h2>
        <form class="form">
          <p class="form-text">Name</p>
          <input
            type="text"
            name="name"
            class="input"
            id="form-name"
            placeholder="name"
            maxlength="20"
          />
          <p class="error-message">Введите Имя</p>
          <p class="form-text">Email</p>
          <input
            type="email"
            name="name"
            class="input"
            id="form-email"
            placeholder="email"
            maxlength="20"
          />
          <p class="error-message">Вы ввели Email неправильно</p>
          <p class="form-text">Password</p>
          <input
            type="password"
            name="name"
            class="input"
            id="form-password"
            placeholder="password"
          />
          <p class="error-message">Пароли не совпадают</p>
          <p class="form-text">Confirm Password</p>
          <input
            type="password"
            name="name"
            class="input"
            id="form-conf-password"
            placeholder="password"
          />
          <br />
          <p class="error-message">Пароли не совпадают</p>
          <button id="btn-sign-in" class="btn-sign-in" type="button">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
