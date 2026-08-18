(function () {
  var grid = document.getElementById('post-grid');
  var empty = document.getElementById('empty-state');
  if (!grid) return;

  var basePath = document.body.getAttribute('data-base') || '';

  function formatDate(d) {
    return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  fetch(basePath + 'js/posts.json', { cache: 'no-store' })
    .then(function (res) { return res.json(); })
    .then(function (posts) {
      window.POSTS = posts; // so search.js can reuse the same fetched data
      var sorted = posts.slice().sort(function (a, b) { return new Date(b.date) - new Date(a.date); });

      if (sorted.length === 0) {
        if (empty) empty.style.display = 'block';
        return;
      }

      grid.innerHTML = sorted.map(function (p) {
        return '<div class="post-card">' +
          '<div class="date">' + formatDate(p.date) + '</div>' +
          '<h2><a href="' + basePath + 'posts/' + p.slug + '.html">' + p.title + '</a></h2>' +
          '<p>' + (p.excerpt || '') + '</p>' +
          '<a class="read-more" href="' + basePath + 'posts/' + p.slug + '.html">read_more &rarr;</a>' +
          '</div>';
      }).join('');
    })
    .catch(function () {
      if (empty) { empty.style.display = 'block'; empty.textContent = '// could not load posts'; }
    });
})();
