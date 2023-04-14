let alerts = document.querySelector(".alert");
let dots = document.querySelectorAll(".dot");
const toggle = document.querySelector(".toggle");
const read = document.querySelectorAll(".unread");
alerts.innerHTML = read.length;

toggle.addEventListener("click", () => {
  for (i = 0; i < read.length; i++) {
    // console.log("h");
    read[i].classList.remove("unread");
    const newUnreadMessages = document.querySelectorAll(".unread");
    alerts.innerHTML = newUnreadMessages.length;
    dots[i].classList.remove("dot");
  }
});

// click delete
for (i = 0; i < read.length; i++) {
  read[0].addEventListener("click", () => {
    read[0].classList.remove("unread");
    dots[0].classList.remove("dot");
  });
}
for (i = 0; i < read.length; i++) {
  read[1].addEventListener("click", () => {
    read[1].classList.remove("unread");
    dots[1].classList.remove("dot");
  });
}
for (i = 0; i < read.length; i++) {
  read[2].addEventListener("click", () => {
    read[2].classList.remove("unread");
    dots[2].classList.remove("dot");
  });
}
