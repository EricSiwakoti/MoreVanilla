const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = 0;

  function updateCounter() {
    const target = +counter.dataset.target; // Unary(+) converts string to number
    const count = +counter.innerText;
    const increment = target / 200; //Count timing

    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  }

  window.addEventListener("scroll", () => {
    const scrollHeight = window.scrollY;
    const sectionTop = document.querySelector(".top");
    const sectionTopHeight = sectionTop.clientHeight;
    console.log(sectionTopHeight);
    if (scrollHeight >= sectionTopHeight - 1) {
      updateCounter();
    }
  });
});
