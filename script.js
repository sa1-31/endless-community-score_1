let editing = false;

function show(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function changeName() {
  const input = document.getElementById("nameInput");
  const btn = document.getElementById("nameBtn");
  const display = document.getElementById("displayName");

  if (!editing) {
    input.disabled = false;
    input.focus();
    btn.innerText = "Submit";
    editing = true;
  } else {
    if (input.value.trim()) {
      display.innerText = input.value;
      document.getElementById("profileScore").innerText = "420";
      document.getElementById("scoreText").innerText = "Your score: 420";
      document.getElementById("lb").innerText = input.value + " — 420 pts";
    }
    input.disabled = true;
    btn.innerText = "Change Nick";
    editing = false;
  }
}
