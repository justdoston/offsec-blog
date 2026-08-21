(function () {
  var canvas = document.getElementById('matrix-bg');
  if (!canvas) return;

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var ctx = canvas.getContext('2d');
  var chars = '01{}[]<>/\\#$%&*+-=~^;:.ABCDEF0123456789';
  var fontSize = 15;
  var columns, drops;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = new Array(columns).fill(0).map(function () {
      return Math.random() * -100; // stagger start so it doesn't all begin at once
    });
  }

  function draw() {
    // trailing fade - repaints a translucent layer over previous frame
    ctx.fillStyle = 'rgba(10, 10, 10, 0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + 'px monospace';

    for (var i = 0; i < drops.length; i++) {
      var char = chars[Math.floor(Math.random() * chars.length)];
      var x = i * fontSize;
      var y = drops[i] * fontSize;

      // occasional brighter "head" character for depth, rest very dim
      var isHead = Math.random() > 0.94;
      ctx.fillStyle = isHead ? 'rgba(255, 90, 90, 0.55)' : 'rgba(255, 44, 44, 0.16)';
      ctx.fillText(char, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  resize();
  window.addEventListener('resize', resize);

  if (prefersReducedMotion) {
    // draw a single faint static frame instead of animating
    draw();
    return;
  }

  setInterval(draw, 55);
})();
