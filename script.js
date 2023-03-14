const scrollItems = document.querySelector(".side-scroll__items");
const scrollWrapper = document.querySelector(".side-scroll__wrapper");
const scrollItem = scrollItems.querySelectorAll(".side-scroll__item");

scrollItem.forEach((el) => {
  let lastItem = scrollItem[scrollItem.length - 1];

  scrollWrapper.style.height = lastItem.getBoundingClientRect().y * 2 + "px";

  window.addEventListener("scroll", (e) => {
    scrollItems.style.transform = `rotateX(45deg) rotateZ(45deg) translate(0,${
      scrollY * -1
    }px)`;
  });

  window.addEventListener(
    "resize",
    () => {
      scrollItem.forEach((el) => {
        let lastItem = scrollItem[scrollItem.length - 1];

        scrollWrapper.style.height =
          lastItem.getBoundingClientRect().y * 2 + "px";
      });
    },
    true
  );
});
