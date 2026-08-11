// 언어 감지·전환 로직. 문구를 고칠 땐 translations.js만 건드리면 되고, 이 파일은 건드릴 필요 없다.
// </body> 직전에 로드하므로 DOMContentLoaded를 기다리지 않고 바로 실행한다.
(function () {
  var SUPPORTED = ["ko", "en", "zh", "ja"];

  function detectLang() {
    var fromUrl = new URLSearchParams(location.search).get("lang");
    if (SUPPORTED.indexOf(fromUrl) !== -1) return fromUrl;

    var stored = localStorage.getItem("arexLang");
    if (SUPPORTED.indexOf(stored) !== -1) return stored;

    var nav = (navigator.language || "en").toLowerCase();
    if (nav.indexOf("ko") === 0) return "ko";
    if (nav.indexOf("zh") === 0) return "zh";
    if (nav.indexOf("ja") === 0) return "ja";
    return "en";
  }

  function applyLang(lang) {
    var dict = TRANSLATIONS[lang];
    if (!dict) return;

    document.documentElement.lang = lang;
    localStorage.setItem("arexLang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = dict.text[el.getAttribute("data-i18n")];
      if (value !== undefined) el.textContent = value;
    });

    document.querySelectorAll("[data-link]").forEach(function (el) {
      var href = dict.links[el.getAttribute("data-link")];
      if (href) el.setAttribute("href", href);
    });

    document.querySelectorAll("[data-image]").forEach(function (el) {
      var src = dict.images && dict.images[el.getAttribute("data-image")];
      if (src) el.setAttribute("src", src);
    });

    document.querySelectorAll("[data-arex-note]").forEach(function (el) {
      el.classList.toggle("show", lang !== "ko");
    });

    document.querySelectorAll("[data-internal-link]").forEach(function (el) {
      el.setAttribute("href", el.getAttribute("data-internal-link") + "?lang=" + lang);
    });

    document.querySelectorAll(".lang-pill").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
  }

  var lang = detectLang();
  applyLang(lang);

  document.querySelectorAll(".lang-pill").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });
})();
