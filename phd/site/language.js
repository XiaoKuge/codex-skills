(function () {
  const storageKey = "phd-site-language";
  const defaultLang = "zh";

  function getLanguage() {
    const stored = localStorage.getItem(storageKey);
    if (stored === "en" || stored === "zh") return stored;
    return defaultLang;
  }

  function setLanguage(lang) {
    const next = lang === "en" ? "en" : "zh";
    localStorage.setItem(storageKey, next);
    document.documentElement.dataset.lang = next;
    document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-set-lang]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.setLang === next));
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setLanguage(getLanguage());
    document.querySelectorAll("[data-set-lang]").forEach((button) => {
      button.addEventListener("click", () => setLanguage(button.dataset.setLang));
    });
  });
})();
