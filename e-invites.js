document.getElementById("invite-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const message = document.getElementById("message").value.trim();

  if (!message) {
    alert("Please enter your invitation message.");
    return;
  }

  const encodedMsg = encodeURIComponent(message);
  const shareLink = `https://wa.me/?text=${encodedMsg}`;
  window.open(shareLink, "_blank");

  document.getElementById("invite-form").reset();
  alert("WhatsApp has been opened. You can send your invite there!");
});
