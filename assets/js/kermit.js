export function kermit() {
  let kermitPic = document.createElement("IMG");
  kermitPic.setAttribute("src", "assets/images/kermit-the-frog-kermit.gif");
  kermitPic.setAttribute("width", "304");
  kermitPic.setAttribute("height", "228");
  kermitPic.setAttribute("alt", "kermit");
  kermitPic.setAttribute("id", "kermitPic");
  document.body.appendChild(kermitPic);
}

export function removeKermit() {
  const kermitPic = document.getElementById("kermitPic");
  if (kermitPic) {
    kermitPic.parentNode.removeChild(kermitPic);
  }
}
