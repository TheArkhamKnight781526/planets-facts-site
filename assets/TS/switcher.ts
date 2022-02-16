const planets = [
  "/mercury/",
  "/venus/",
  "/earth/",
  "/mars/",
  "/jupiter/",
  "/saturn/",
  "/uranus/",
  "/neptune/",
];

// @ts-ignore
const toggles: HTMLButtonElement[] =
  document.querySelectorAll("#toggles button");
const url = planets.indexOf(window.location.pathname);

document.onkeydown = (e) => {
  if (e.key === "ArrowRight") {
    window.location.pathname =
      planets[url + 1 === planets.length ? 0 : url + 1];
  } else if (e.key === "ArrowLeft") {
    window.location.pathname =
      planets[url === 0 ? planets.length - 1 : url - 1];
  } else if (e.key === "ArrowUp") {
    let currentToggle = Array.prototype.indexOf.call(
      toggles,
      document.querySelector("#toggles button.active")
    );
    e.preventDefault();
    toggles.forEach((toggle) => toggle.classList.remove("active"));
    let newToggle =
      toggles[currentToggle === 0 ? toggles.length - 1 : currentToggle - 1];
    newToggle.classList.add("active");
    newToggle.click();
  } else if (e.key === "ArrowDown") {
    let currentToggle = Array.prototype.indexOf.call(
      toggles,
      document.querySelector("#toggles button.active")
    );
    e.preventDefault();
    toggles.forEach((toggle) => toggle.classList.remove("active"));
    let newToggle =
      toggles[currentToggle + 1 === toggles.length ? 0 : currentToggle + 1];
    newToggle.classList.add("active");
    newToggle.click();
  }
};
