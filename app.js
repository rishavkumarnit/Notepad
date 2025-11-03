const toggleBtn = document.getElementById("toggleBtn");
const toggleCircle = document.getElementById("toggleCircle");
const textArea = document.getElementById("notes");

let isOn = false;
let autosaveInterval = null;

textArea.value = localStorage.getItem("autosave-data") || "";

toggleBtn.addEventListener("click", () => {
  isOn = !isOn;
  toggleBtn.classList.toggle("bg-green-400");
  toggleCircle.style.transform = isOn ? "translateX(24px)" : "translateX(0)";

  if (isOn) {
    autosaveInterval = setInterval(() => {
      localStorage.setItem("autosave-data", textArea.value);
    }, 1000);
    if (textArea.value.length > 200) {
      alert("Your note exceeded 200 characters and has been cleared!");
      textArea.value = "";
      localStorage.removeItem("autosave-data");
      return;
    }
  } else {
    clearInterval(autosaveInterval);
    autosaveInterval = null;
  }
});
