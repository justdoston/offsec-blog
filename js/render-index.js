(function () {
  var grid = document.getElementById('post-grid');
  var empty = document.getElementById('empty-state');
  if (!grid || typeof POSTS === 'undefined') return;

  function formatDate(d) {
    return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  var sorted = POSTS.slice().sort(function (a, b) { return new Date(b.date) - new Date(a.date); });

  if (sorted.length === 0) {
    if (empty) empty.style.display = 'block';
    return;
  }

  grid.innerHTML = sorted.map(function (p) {
    return '<div class="post-card">' +
      '<div class="date">' + formatDate(p.date) + '</div>' +
      '<h2><a href="posts/' + p.slug + '.html">' + p.title + '</a></h2>' +
      '<p>' + (p.excerpt || '') + '</p>' +
      '<a class="read-more" href="posts/' + p.slug + '.html">read_more &rarr;</a>' +
      '</div>';
  }).join('');
})();
