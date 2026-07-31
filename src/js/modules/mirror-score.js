export function initMirrorScore() {
  const scoreEl = document.getElementById('score-us');
  const resultEl = document.querySelector('#mirror-scoreboard .scoreboard__result');
  const rows = document.querySelectorAll('[data-score-trigger]');
  if (!rows.length) return;

  if (!scoreEl || !resultEl || !('IntersectionObserver' in window)) {
    rows.forEach((row) => row.classList.add('verdict-row--visible'));
    return;
  }

  let score = 0;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('verdict-row--visible');
        score += 1;
        scoreEl.textContent = score;
        resultEl.classList.add('scoreboard__result--pulse');
        window.setTimeout(() => resultEl.classList.remove('scoreboard__result--pulse'), 400);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.25 }
  );

  rows.forEach((row) => observer.observe(row));
}
