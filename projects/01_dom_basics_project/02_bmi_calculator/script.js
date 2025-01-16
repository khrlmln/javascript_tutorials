const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const weight = parseInt(document.querySelector("#weight").value);
  const height = parseInt(document.querySelector("#height").value);
  const result = document.querySelector("#result");

  if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please give a valid weight";
  } else if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please give a valid height";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    result.innerHTML = `<h2>Your BMI: <span>${bmi} kg/m<sup>2</sup></span></h2>`;
  }
});
