export function kermitLoser() {
  // Create the Kermit GIF container
  const kermitContainer = document.createElement("div");
  kermitContainer.setAttribute("class", "kermit-container");

  // Create the Kermit GIF element
  const kermitGif = document.createElement("img");
  kermitGif.setAttribute("src", "assets/images/kermitLoser.gif");
  kermitGif.setAttribute("alt", "kermit");
  kermitGif.setAttribute("width", "304");
  kermitGif.setAttribute("height", "210");

  // Append the Kermit GIF to the container
  kermitContainer.appendChild(kermitGif);

  // Append the Kermit GIF container to the full-height-container
  const fullHeightContainer = document.querySelector(".full-height-container");
  if (fullHeightContainer) {
    fullHeightContainer.appendChild(kermitContainer);
  }
}

export function kermitFine() {
  // Create the Kermit GIF container
  const kermitContainer = document.createElement("div");
  kermitContainer.setAttribute("class", "kermit-container");

  // Create the Kermit GIF element
  const kermitGif = document.createElement("img");
  kermitGif.setAttribute("src", "assets/images/kermitFine.gif");
  kermitGif.setAttribute("alt", "kermit");
  kermitGif.setAttribute("width", "304");
  kermitGif.setAttribute("height", "210");

  // Append the Kermit GIF to the container
  kermitContainer.appendChild(kermitGif);

  // Append the Kermit GIF container to the full-height-container
  const fullHeightContainer = document.querySelector(".full-height-container");
  if (fullHeightContainer) {
    fullHeightContainer.appendChild(kermitContainer);
  }
}

export function kermitHighscore() {
  // Create the Kermit GIF container
  const kermitContainer = document.createElement("div");
  kermitContainer.setAttribute("class", "kermit-container");

  // Create the Kermit GIF element
  const kermitGif = document.createElement("img");
  kermitGif.setAttribute("src", "assets/images/kermitHiScore.gif");
  kermitGif.setAttribute("alt", "kermit");
  kermitGif.setAttribute("width", "304");
  kermitGif.setAttribute("height", "210");

  // Append the Kermit GIF to the container
  kermitContainer.appendChild(kermitGif);

  // Append the Kermit GIF container to the full-height-container
  const fullHeightContainer = document.querySelector(".full-height-container");
  if (fullHeightContainer) {
    fullHeightContainer.appendChild(kermitContainer);
  }
}

export function removeKermit() {
  const kermitContainer = document.querySelector(".kermit-container");
  if (kermitContainer) {
    kermitContainer.parentNode.removeChild(kermitContainer);
  }
}
