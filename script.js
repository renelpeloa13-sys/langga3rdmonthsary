document.addEventListener("DOMContentLoaded", () => {
    const images = ["img1.png", "img2.png", "img3.png"];
    const messages = [
      "I didn't know three months could mean so much… until I spent them with you. Miss taka Everyday and gustohon ko man nga ipa feel simo na.",
      "Every day with you feels like a hidden level in the game of life ~ magical, rare, and worth fighting for. Ma padayun lang kita langga ko.",
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
        msg.innerHTML = "💖 That's all for now. I Love you always Langga ko 💖";
        document.querySelector(".center-content").appendChild(msg);
      }
    });
});
