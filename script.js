function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Set button position to absolute
    noButton.style.position = "absolute";

    // Change image source to "gun.gif"
    document.getElementsByClassName("image")[0].src = "images/gun.png";

    // Generate random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply new coordinates to the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Update text content and hide name message
    document.getElementById("question").textContent =
      "Tlačítko nie tu je len na ozdobu";
    document.getElementById("name").style.display = "none";

    // Optional: You can also add a timeout to reset the position after a few seconds
  }

if (response === "Yes") {
  // Remove name message and no button
  document.getElementById("name").remove();
  document.getElementById("no-button").remove();

  // Update text content, show message, and change image source
  const yesMessage = document.getElementById("question");
  yesMessage.textContent = "LESGOOO Ďakujeeeem😘😘";
  yesMessage.style.display = "block";
  yesMessage.style.fontStyle = "normal";
  document.getElementsByClassName("image")[0].src = "images/dance.gif";

  // Play MP3 🎵
  const audio = document.getElementById("yesAudio");
  audio.currentTime = 0; // start from beginning
  audio.play();

  // Remove yes button
  document.getElementById("yesButton").remove();
}

}
