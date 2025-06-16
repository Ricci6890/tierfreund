const pets = ["🐶", "🐱", "🐰"];
const petNames = ["dog", "cat", "rabbit"];
let currentPetIndex = Math.floor(Math.random() * pets.length);
let mood = "😊";
let hunger = 1;
let energy = 2;

function updateStatus() {
  document.getElementById("pet").innerText = pets[currentPetIndex];
  document.getElementById("status").innerText =
    `Laune: ${mood} | Hunger: ${hunger === 0 ? "😊" : "😋"} | Energie: ${"⚡".repeat(energy)}`;

  petNames.forEach((name, index) => {
    const slot = document.getElementById(`slot-${name}`);
    if (index === currentPetIndex) {
      slot.classList.add("active");
    }
  });
}

function feedPet() {
  hunger = 0;
  mood = "😁";
  updateStatus();
}

function playWithPet() {
  if (energy > 0) {
    mood = "😄";
    energy--;
  } else {
    mood = "😴";
  }
  updateStatus();
}

function sleepPet() {
  energy = 2;
  mood = "😌";
  updateStatus();
}

updateStatus();