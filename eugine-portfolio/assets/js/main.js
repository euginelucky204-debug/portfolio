const projectGrid = document.querySelector("#project-grid");
const learningList = document.querySelector("#learning-list");

function renderProjects() {
  const projects = window.PORTFOLIO_PROJECTS || [];
  if (!projects.length) {
    projectGrid.innerHTML = '<p class="empty-state">Projects will appear here as they are added.</p>';
    return;
  }
  projectGrid.innerHTML = projects.map(project => {
    const linkOpen = project.url ? `<a class="project-arrow" href="${escapeHTML(project.url)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHTML(project.title)}">↗</a>` : '<span class="project-arrow">•</span>';
    return `<article class="project-card">
      <div class="project-visual" aria-hidden="true">${escapeHTML(project.icon || "✳")}</div>
      <div class="project-content">
        <div class="project-topline"><span class="project-status">${escapeHTML(project.status || "Project")}</span>${linkOpen}</div>
        <h3>${escapeHTML(project.title)}</h3>
        <p>${escapeHTML(project.description)}</p>
        <div class="tag-list">${(project.technologies || []).map(tech => `<span>${escapeHTML(tech)}</span>`).join("")}</div>
      </div>
    </article>`;
  }).join("");
}

function renderLearning() {
  const topics = window.PORTFOLIO_LEARNING || [];
  if (!topics.length) {
    learningList.innerHTML = '<p class="empty-state">Learning updates will appear here.</p>';
    return;
  }
  learningList.innerHTML = topics.map(topic => `<article class="learning-item">
    <div><h3>${escapeHTML(topic.title)}</h3><p>${escapeHTML(topic.description)}</p></div>
    <span class="learning-status">${escapeHTML(topic.status)}</span>
  </article>`).join("");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);
}

const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const themeToggle = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light") document.documentElement.dataset.theme = "light";
themeToggle.textContent = document.documentElement.dataset.theme === "light" ? "☾" : "☼";
themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  if (nextTheme === "light") document.documentElement.dataset.theme = "light";
  else delete document.documentElement.dataset.theme;
  localStorage.setItem("portfolio-theme", nextTheme);
  themeToggle.textContent = nextTheme === "light" ? "☾" : "☼";
});

document.querySelector("#year").textContent = new Date().getFullYear();
renderProjects();
renderLearning();
