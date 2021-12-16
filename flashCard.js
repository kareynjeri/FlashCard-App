let addQuestion = document.getElementById("qtn");
let newQuestion = [];
let inputValue = "";
let btn = document.querySelector(".btn");

// adding set qiuestion at the center of the flash card

addQuestion.addEventListener("change ", (event) => {
  inputValue = event.tartget.value.trim();
});

btn.addEventListener("click", () => {
  //   if (inputValue.length > 0) {
  //     createQuestionNode(inputValue);
  //     newQuestion.push(inputValue);
  //   }
  let el = document.createElement("button");
  el.innerHTML = "click me ";
  document.body.appendChild(el);
});
function myFunction() {
  let el = document.createElement("p");
  el.innerHTML = "CLICK ME";
  document.body.appendChild(el);
}
