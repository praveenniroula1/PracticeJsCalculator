const buttons = document.querySelectorAll(".btn-area>div");
console.log(buttons);

const display = document.querySelector(".display");
console.log(display);

const screen = (str) => {
  display.innerText = str || "0.00";
};

let displayOnScreen = "";

buttonArray = Array.from(buttons);
console.log(buttonArray);

buttonArray.forEach((eachBtn) => {
  eachBtn.addEventListener("click", () => {
    const value = eachBtn.innerText;
    displayOnScreen.innerText = value;

    if (value === "AC") {
      displayOnScreen = "";
      screen(displayOnScreen);
      return;
    }

    if (value === "C") {
      displayOnScreen = displayOnScreen.slice(0, -1);
      screen(displayOnScreen);
      return;
    }

    if (value === "=") {
      return total();
    }

    displayOnScreen += value;
    screen(displayOnScreen);
  });
});

const total = () => {
  const totl = eval(displayOnScreen);
  screen(totl);
};
