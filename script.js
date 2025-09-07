const images = ["images/img1.png", "images/img2.png", "images/img3.png"];
const messages = [
  "I didn't know three months could mean so much… until I spent them with you. Miss taka Everyday and gustohon ko man nga ipa feel simo nga special ka everyday, nga treat ka or lagaw ta sa sbng hindi ko pa kaya pero ma abot gid ang time nga ma ubra ta tann nga gusto ta langga ha ?",
  "Every day with you feels like a hidden level in the game of life – magical, rare, and worth fighting for. Ma padayun lang kita langga always ah. Upod kita. and i hope hindi ka ma tak an mag upod sakon ma ubra sang journey ta.. malayo pa pero malayo na! ",
  "You're not just my favorite person – you're my favorite *everything*. Happy 3rd Monthsary Langga."
];

let current = 0;
const imgElement = document.getElementById("mysteryImage");

imgElement.addEventListener("click", () => {
  alert(messages[current]);
  current++;

  if (current < images.length) {
    imgElement.src = images[current];
  } else {
    imgElement.style.display = "none";
    const msg = document.createElement("h2");
    msg.innerHTML = "💖 That's all for now.I Love you always Langga ko 💖";
    document.querySelector(".center-content").appendChild(msg);
  }
});
