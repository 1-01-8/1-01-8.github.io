// 中 / 英切换。
// 页面里每段文字都写了中文（lang="zh-CN"）和英文（lang="en"）两份，
// 显示哪一份由 <html data-lang="zh|en"> 决定（规则在 style.css 里）。
// 首次打开时的语言由 index.html <head> 里的小脚本决定。
(function () {
  var root = document.documentElement;
  var button = document.getElementById('lang-toggle');

  function currentLang() {
    return root.getAttribute('data-lang') === 'en' ? 'en' : 'zh';
  }

  function updateButton() {
    var isZh = currentLang() === 'zh';
    button.textContent = isZh ? 'EN' : '中文';
    button.title = isZh ? 'Switch to English' : '切换到中文';
    button.setAttribute('aria-label', button.title);
  }

  function setLang(lang) {
    root.setAttribute('data-lang', lang);
    root.lang = lang === 'zh' ? 'zh-CN' : 'en';
    try { localStorage.setItem('lang', lang); } catch (e) {}
    updateButton();
  }

  if (button) {
    updateButton();
    button.hidden = false;
    button.addEventListener('click', function () {
      setLang(currentLang() === 'zh' ? 'en' : 'zh');
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
