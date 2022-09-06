let container = document.querySelector(".container");
let toggleBtn = document.querySelector("toggle-btn");

dycalender.draw({
  target: "#dycalendar",
  dayformat: "full",
  type: "month",
  monthformat: "full",
  highlighttoday: true,
  prevenxtbutton: "show",
});

toggleBtn.onclick = () => {
  container.classList / toggle("dark");
  document.body.classList.toggle("background-dark");
};
