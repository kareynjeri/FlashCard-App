let count = 0;
// HOLD THE BUTTONS IN A LIST
const buttons = document.querySelectorAll(".btn");
const elementValue = document.querySelector(".value");
console.log(elementValue);

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (color) {
    const styles = color.currentTarget.classList;
    console.log(color);
    // console.log(e);
    console.log(styles);

    if (styles.contains("increase")) {
      // increment our count
      count++;
    } else if (styles.contains("decrease")) {
      // decrement our count
      count--;
    } else {
      count = 0;
    }
    if (count < 0) {
      elementValue.style.color = "red";
    }
    if (count > 0) {
      elementValue.style.color = "green";
    }
    if (count == 0) {
      elementValue.style.color = "blue";
    }

    elementValue.textContent = count;
  });
});
