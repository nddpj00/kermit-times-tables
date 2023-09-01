// export function kermit() {
//   let kermitPic = document.createElement("IMG");
//   kermitPic.setAttribute("src", "assets/images/kermit-the-frog-kermit.gif");
//   kermitPic.setAttribute("width", "304");
//   kermitPic.setAttribute("height", "228");
//   kermitPic.setAttribute("alt", "kermit");
//   kermitPic.setAttribute("id", "kermitPic");
//   kermitPic.setAttribute("class", "justify-content-center");
//   document.body.appendChild(kermitPic);
// }

// export function removeKermit() {
//   const kermitPic = document.getElementById("kermitPic");
//   if (kermitPic) {
//     kermitPic.parentNode.removeChild(kermitPic);
//   }
// }

export function kermit() {
  // Create the Kermit GIF container
  const kermitContainer = document.createElement("div");
  kermitContainer.setAttribute("class", "kermit-container");

  // Create the Kermit GIF element
  const kermitGif = document.createElement("img");
  kermitGif.setAttribute("src", "assets/images/kermit-the-frog-kermit.gif");
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
