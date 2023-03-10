const scrollItems = document.querySelector(".side-scroll__items");
const scrollWrapper = document.querySelector(".side-scroll__wrapper");
const scrollItem = scrollItems.querySelectorAll(".side-scroll__item");

scrollItem.forEach((el) => {
  let lastItem = scrollItem[scrollItem.length - 1];
  console.log(lastItem.getBoundingClientRect().y);
  console.log(lastItem);
  scrollWrapper.style.height = lastItem.getBoundingClientRect().y + 2000 + "px";
  console.log(scrollWrapper.style.height);
});

window.addEventListener("scroll", (e) => {
  scrollItems.style.transform = `rotateX(45deg) rotateZ(45deg) translate(0,${
    scrollY * -1
  }px)`;
});

// window.addEventListener(
//   "resize",
//   function (event) {
//     if (window.innerHeight >= 869) {
//       scrollWrapper.style.height = scrollItems.offsetHeight + 600 + "px";
//     }
//     if (window.innerWidth <= 868 && window.innerWidth >= 715) {
//       scrollWrapper.style.height = scrollItems.offsetHeight + 700 + "px";
//     }

//     if (window.innerWidth <= 715 && window.innerWidth >= 530) {
//       scrollWrapper.style.height = scrollItems.offsetHeight + 200 + "px";
//     }

//     if (window.innerWidth <= 530) {
//       scrollWrapper.style.height = scrollItems.offsetHeight + 100 + "px";
//     }
//   },
//   true
// );
