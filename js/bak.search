(function () {
  var toggle = document.getElementById('search-toggle');
  var panel = document.getElementById('search-panel');
  var input = document.getElementById('search-input');
  var resultsBox = document.getElementById('search-results');

  if (!toggle || !panel || !input || !resultsBox || typeof POSTS === 'undefined') return;

  // basePath lets this script work whether the page is at the site root
  // (index.html, about.html) or one level down (posts/whatever.html)
  var basePath = document.body.getAttribute('data-base') || '';

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function formatDate(d) {
    return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  function renderResults(query) {
    if (!query) {
      resultsBox.innerHTML = '<div class="search-hint">// start typing to search posts</div>';
      return;
    }
    var q = query.toLowerCase();
    var matches = POSTS.filter(function (p) {
      return p.title.toLowerCase().indexOf(q) !== -1 ||
             (p.excerpt || '').toLowerCase().indexOf(q) !== -1;
    }).slice(0, 8);

    if (matches.length === 0) {
      resultsBox.innerHTML = '<div class="search-empty">// no matches for "' + escapeHtml(query) + '"</div>';
      return;
    }

    resultsBox.innerHTML = matches.map(function (p) {
      return '<a class="search-result-item" href="' + basePath + 'posts/' + p.slug + '.html">' +
        '<div class="srt-title">' + escapeHtml(p.title) + '</div>' +
        '<div class="srt-date">' + formatDate(p.date) + '</div>' +
        '</a>';
    }).join('');
  }

  function openPanel() {
    panel.classList.add('open');
    renderResults(input.value.trim());
  }
  function closePanel() { panel.classList.remove('open'); }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    if (panel.classList.contains('open')) {
      closePanel();
    } else {
      openPanel();
      setTimeout(function () { input.focus(); }, 0);
    }
  });

  // Live search: fires on every keystroke, paste, or delete - no Enter needed
  input.addEventListener('input', function () { renderResults(input.value.trim()); });

  document.addEventListener('click', function (e) {
    if (!panel.contains(e.target) && e.target !== toggle) closePanel();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closePanel();
  });
})();
