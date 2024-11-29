function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function drawObserveArrow() {
  await wait(1500);
  const leftConfig = {
    color: "gray",
    destinationPosition: "middleRight",
    sourcePosition: "middleLeft",
    endpoint: {
      size: 0.8,
    },
    forceDirection: "horizontal",
  };
  const rightConfig = {
    color: "gray",
    destinationPosition: "middleLeft",
    sourcePosition: "middleRight",
    endpoint: {
      size: 0.8,
    },
    forceDirection: "horizontal",
  };

  arrowLine({
    source: "#link-main",
    destination: "#link-1",
    ...leftConfig,
  });
  arrowLine({
    source: "#link-main",
    destination: "#link-2",
    ...leftConfig,
  });
  arrowLine({
    source: "#link-main",
    destination: "#link-3",
    ...leftConfig,
  });
  arrowLine({
    source: "#link-main",
    destination: "#link-4",
    ...leftConfig,
  });
  arrowLine({
    source: "#link-main",
    destination: "#link-5",
    ...rightConfig,
  });
  arrowLine({
    source: "#link-main",
    destination: "#link-6",
    ...rightConfig,
  });
  arrowLine({
    source: "#link-main",
    destination: "#link-7",
    ...rightConfig,
  });
}

function closePopup(event) {
  const activePopup = document.querySelector(".popup.popup--active");
  if (activePopup && !activePopup.contains(event.target)) {
    activePopup.classList.remove("popup--active");
    activePopup.style.display = "none";
    window.removeEventListener("click", closePopup);
  }
}

function handlePopupClick(event) {
  event.stopPropagation();
  const activePopups = document.querySelectorAll(".popup--active");
  if (activePopups) {
    activePopups.forEach((activePopup) => {
      activePopup.style.display = "none";
      activePopup.classList.remove(".popup--active");
    });
  }
  const popup = this.querySelector(".popup");
  popup.classList.add("popup--active");
  popup.style.display = "block";

  setTimeout(() => {
    window.addEventListener("click", closePopup);
  }, 0);
}

function main() {
  drawObserveArrow();

  const popupElems = document.querySelectorAll(".red-dot");
  popupElems.forEach((elem) =>
    elem.addEventListener("click", handlePopupClick)
  );
}

window.addEventListener("DOMContentLoaded", main);
