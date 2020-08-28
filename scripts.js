const signUpButton = document.querySelector(".signUpButton");
const signInButton = document.querySelector(".signInButton");
const container = document.querySelector(".container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
