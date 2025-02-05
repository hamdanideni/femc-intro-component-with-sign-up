"use strict";

const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#form");

const setError = function (element, message) {
  const formField = element.parentElement;
  const errorDisplay = formField.querySelector(".error-message");
  errorDisplay.innerText = message;
  formField.classList.add("error");
};

const setSuccess = function (element) {
  const formField = element.parentElement;
  const success = formField.querySelector("input");

  success.value = "";
  formField.classList.remove("error");
};

const isValidEmail = function (email) {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reg.test(String(email).toLowerCase());
};

const validateInputs = function () {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === "") {
    setError(firstName, "First Name cannot be empty");
  } else {
    setSuccess(firstName);
  }

  if (lastNameValue === "") {
    setError(lastName, "Last Name cannot be empty");
  } else {
    setSuccess(lastName);
  }

  if (emailValue === "") {
    setError(email, "Email cannot be empty");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Looks like this is not an email");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password cannot be empty");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 characters");
  } else {
    setSuccess(password);
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateInputs();
});
