let counter = 0;
let count = document.getElementById("count");
let minus = document.getElementById("minus");
let reset = document.getElementById("reset");
let plus = document.getElementById("plus");

minus.onclick = function () {
  counter -= 1;
  count.innerHTML = counter;
  color();
};

reset.onclick = function () {
  counter = 0;
  count.innerHTML = counter;
  color();
};

plus.onclick = function () {
  counter += 1;
  count.innerHTML = counter;
  color();
};

function color() {
  if (counter == 0) {
    minus.classList.remove("red");
    minus.classList.remove("blue");
    reset.classList.remove("red");
    reset.classList.remove("blue");
    plus.classList.remove("red");
    plus.classList.remove("blue");
    count.classList.remove("rednum");
    count.classList.remove("bluenum");
  }
  if (counter > 0) {
    minus.classList.remove("red");
    minus.classList.add("blue");
    reset.classList.remove("red");
    reset.classList.add("blue");
    plus.classList.remove("red");
    plus.classList.add("blue");
    count.classList.remove("rednum");
    count.classList.add("bluenum");
  }
  if (counter < 0) {
    minus.classList.add("red");
    minus.classList.remove("blue");
    reset.classList.add("red");
    reset.classList.remove("blue");
    plus.classList.add("red");
    plus.classList.remove("blue");
    count.classList.add("rednum");
    count.classList.remove("bluenum");
  }
}
