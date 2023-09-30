let calculator_buttons = [
  [
    { style: "btn", text: "C", id: "clear", value: "clear" },
    { style: "btn", text: "(", id: "open-parenthesis", value: "(" },
    { style: "btn", text: ")", id: "close-parenthesis", value: ")" },
    { style: "btn", text: "➗", id: "div", value: "/" },
  ],
  [
    { style: "btn", text: "7", id: "7", value: "7" },
    { style: "btn", text: "8", id: "8", value: "8" },
    { style: "btn", text: "9", id: "9", value: "9" },
    { style: "btn", text: "✖️", id: "mul", value: "*" },
  ],
  [
    { style: "btn", text: "4", id: "4", value: "4" },
    { style: "btn", text: "5", id: "5", value: "5" },
    { style: "btn", text: "6", id: "6", value: "6" },
    { style: "btn", text: "➖", id: "sub", value: "-" },
  ],
  [
    { style: "btn", text: "1", id: "1", value: "1" },
    { style: "btn", text: "2", id: "2", value: "2" },
    { style: "btn", text: "3", id: "3", value: "3" },
    { style: "btn", text: "➕", id: "add", value: "+" },
  ],
  [
    { style: "btn", text: "AC", id: "reset", value: "reset" },
    { style: "btn", text: "0", id: "0", value: "0" },
    { style: "btn", text: ".", id: "comma", value: "." },
    { style: "btn", text: "🟰", id: "equal", value: "=" },
  ],
];

document.addEventListener("DOMContentLoaded", () => {
  const calculator = document.querySelector("#calculator");
  const display = calculator.querySelector(".display-text");

  calculator_buttons.forEach((button_row) => {
    let row = document.createElement("div");
    row.classList.add("row");
    button_row.forEach((button) => {
      let btn = document.createElement("button");
      btn.classList.add(button.style);
      btn.id = button.id;
      btn.innerText = button.text;
      btn.addEventListener("click", () => addBtn(button.value));
      row.appendChild(btn);
    });
    calculator.querySelector(".buttons").appendChild(row);
  });
});

function addBtn(value) {
  const displayText = document.querySelector(".display-text");
  switch (value) {
    case "clear":
      displayText.innerText = "0";
      break;
    case "=":
      try {
        displayText.innerText = eval(displayText.innerText);
      } catch (error) {
        displayText.innerText = "Error";
      }
      break;
    default:
      if (
        displayText.innerText === "0" ||
        displayText.innerText === "Error"
      ) {
        displayText.innerText = value;
      } else {
        displayText.innerText += value;
      }
      break;
  }
}