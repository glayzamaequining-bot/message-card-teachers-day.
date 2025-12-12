// Default configuration
const defaultConfig = {
  teacher_name: "Sir Randy Bello",
  personal_message:
    "Thank you for being an amazing teacher! Your dedication, patience, and wisdom have made such a difference in my life. You inspire me to learn, grow, and become the best version of myself every day.",
  student_name: "With gratitude",
  primary_color: "#ff9a9e",
  secondary_color: "#a8edea",
  text_color: "#2c3e50",
  accent_color: "#e74c3c",
  highlight_color: "#8e44ad",
};

// Card flip functionality
const card = document.getElementById("teacherCard");
card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

// Create floating hearts animationunction createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDelay = Math.random() * 2 + "s";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.getElementById("heartsContainer").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

// Generate hearts periodically
setInterval(createHeart, 1500);

// Update text and colors
async function onConfigChange(config) {
  const teacherNameEl = document.getElementById("teacherName");
  const personalMessageEl = document.getElementById("personalMessage");
  const studentNameEl = document.getElementById("studentName");

  teacherNameEl.textContent = config.teacher_name || defaultConfig.teacher_name;
  personalMessageEl.textContent =
    config.personal_message || defaultConfig.personal_message;
  studentNameEl.textContent = config.student_name || defaultConfig.student_name;

  document.documentElement.style.setProperty(
    "--primary-color",
    config.primary_color || defaultConfig.primary_color
  );
  document.documentElement.style.setProperty(
    "--secondary-color",
    config.secondary_color || defaultConfig.secondary_color
  );
  document.documentElement.style.setProperty(
    "--text-color",
    config.text_color || defaultConfig.text_color
  );
  document.documentElement.style.setProperty(
    "--accent-color",
    config.accent_color || defaultConfig.accent_color
  );
  document.documentElement.style.setProperty(
    "--highlight-color",
    config.highlight_color || defaultConfig.highlight_color
  );
}

function mapToCapabilities(config) {
  return {
    recolorables: [],
    borderables: [],
    fontEditable: undefined,
    fontSizeable: undefined,
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ["teacher_name", config.teacher_name || defaultConfig.teacher_name],
    [
      "personal_message",
      config.personal_message || defaultConfig.personal_message,
    ],
    ["student_name", config.student_name || defaultConfig.student_name],
  ]);
}

// Initial render
onConfigChange(defaultConfig);
You sent
// Default configuration