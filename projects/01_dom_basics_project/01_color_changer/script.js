const body = document.querySelector("body");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "btn-dark") {
      body.style.backgroundColor = "var(--clr-dark)";
      body.style.color = "var(--clr-light)";
      body.style.transition = ".3s";
    }

    if (event.target.id === "btn-light") {
      body.style.backgroundColor = "var(--clr-light)";
      body.style.color = "var(--clr-dark)";
      body.style.transition = ".3s";
    }

    if (event.target.id === "btn-slate400") {
      body.style.backgroundColor = "var(--clr-slate400)";
      body.style.color = "var(--clr-light)";
      body.style.transition = ".3s";
    }

    if (event.target.id === "btn-rose") {
      body.style.backgroundColor = "var(--clr-rose)";
      body.style.color = "var(--clr-light)";
      body.style.transition = ".3s";
    }

    if (event.target.id === "btn-indigo") {
      body.style.backgroundColor = "var(--clr-indigo)";
      body.style.color = "var(--clr-light)";
      body.style.transition = ".3s";
    }
  });
});
