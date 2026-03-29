/* ============================================================
   Mental Calculus — app.js
   ============================================================ */

// ── Translations ─────────────────────────────────────────────
const T = {
  en: {
    brand: 'Mental Calculus',
    nav_home: 'Home', nav_practice: 'Practice', nav_lessons: 'Techniques', nav_progress: 'Progress',
    hero_title: 'Sharpen Your Mental Math',
    hero_sub: 'Master arithmetic in your head. No calculator, no paper — just your brain.',
    card_practice_title: 'Timed Practice',
    card_practice_desc: 'Challenge yourself with exercises across 5 difficulty levels.',
    card_lessons_title: 'Learn Techniques',
    card_lessons_desc: 'Proven methods: complement, anchor, cross-multiply and more.',
    card_progress_title: 'Track Progress',
    card_progress_desc: 'See your accuracy, speed, and streaks over time.',
    setup_title: 'Practice Setup',
    setup_operation: 'Operation', setup_difficulty: 'Difficulty',
    setup_round_length: 'Round length', setup_timer: 'Timer',
    op_addition: 'Addition', op_subtraction: 'Subtraction',
    op_multiplication: 'Multiplication', op_division: 'Division', op_mixed: 'Mixed',
    diff_easy: 'Easy', diff_hard: 'Hard', timer_off: 'Off',
    btn_start: 'Start Round', btn_submit: 'Submit',
    btn_next: 'Next', btn_see_results: 'See Results',
    btn_retry: 'Retry Same', btn_new_round: 'New Setup',
    results_title: 'Round Complete',
    res_correct: 'Correct', res_total: 'Total', res_accuracy: 'Accuracy', res_avg_time: 'Avg Time',
    tbl_num: '#', tbl_problem: 'Problem', tbl_your_answer: 'Your Answer',
    tbl_correct_ans: 'Correct', tbl_time: 'Time',
    input_placeholder: 'Your answer',
    fb_correct: t => `Correct! (${t}s)`,
    fb_wrong: a => `Wrong — answer is ${a}`,
    fb_timeout: a => `Time's up! Answer: ${a}`,
    lessons_title: 'Mental Math Techniques',
    lesson_back: '← Back to techniques',
    lesson_practice: op => `Practice ${op} →`,
    progress_title: 'Your Progress',
    stat_rounds: 'Rounds', stat_problems: 'Problems', stat_accuracy: 'Accuracy',
    stat_speed: 'Avg Speed', stat_best: 'Best Round', stat_streak: 'Streak (≥70%)',
    btn_clear: 'Reset All Progress',
    confirm_clear: 'Delete all your progress data?',
    no_rounds: 'No rounds completed yet. Start practicing!',
    chart_accuracy: 'Accuracy %', chart_speed: 'Avg Speed (s)',
  },
  fr: {
    brand: 'Calcul Mental',
    nav_home: 'Accueil', nav_practice: 'Entraînement', nav_lessons: 'Techniques', nav_progress: 'Progrès',
    hero_title: 'Affûtez votre calcul mental',
    hero_sub: 'Maîtrisez l\'arithmétique dans votre tête. Ni calculatrice, ni papier — juste votre cerveau.',
    card_practice_title: 'Entraînement chronométré',
    card_practice_desc: 'Défiez-vous avec des exercices sur 5 niveaux de difficulté.',
    card_lessons_title: 'Apprendre les techniques',
    card_lessons_desc: 'Méthodes éprouvées : complément, ancrage, multiplication croisée et plus.',
    card_progress_title: 'Suivre vos progrès',
    card_progress_desc: 'Consultez votre précision, vitesse et séries dans le temps.',
    setup_title: 'Paramètres',
    setup_operation: 'Opération', setup_difficulty: 'Difficulté',
    setup_round_length: 'Longueur du tour', setup_timer: 'Minuteur',
    op_addition: 'Addition', op_subtraction: 'Soustraction',
    op_multiplication: 'Multiplication', op_division: 'Division', op_mixed: 'Mixte',
    diff_easy: 'Facile', diff_hard: 'Difficile', timer_off: 'Désactivé',
    btn_start: 'Commencer', btn_submit: 'Valider',
    btn_next: 'Suivant', btn_see_results: 'Voir les résultats',
    btn_retry: 'Rejouer', btn_new_round: 'Nouveaux paramètres',
    results_title: 'Tour terminé',
    res_correct: 'Correct', res_total: 'Total', res_accuracy: 'Précision', res_avg_time: 'Temps moy.',
    tbl_num: '#', tbl_problem: 'Problème', tbl_your_answer: 'Votre réponse',
    tbl_correct_ans: 'Bonne réponse', tbl_time: 'Temps',
    input_placeholder: 'Votre réponse',
    fb_correct: t => `Correct ! (${t}s)`,
    fb_wrong: a => `Faux — la réponse est ${a}`,
    fb_timeout: a => `Temps écoulé ! Réponse : ${a}`,
    lessons_title: 'Techniques de calcul mental',
    lesson_back: '← Retour aux techniques',
    lesson_practice: op => `S'entraîner — ${op} →`,
    progress_title: 'Vos progrès',
    stat_rounds: 'Tours', stat_problems: 'Exercices', stat_accuracy: 'Précision',
    stat_speed: 'Vitesse moy.', stat_best: 'Meilleur tour', stat_streak: 'Série (≥70%)',
    btn_clear: 'Réinitialiser les progrès',
    confirm_clear: 'Supprimer toutes vos données de progression ?',
    no_rounds: 'Aucun tour effectué. Commencez à vous entraîner !',
    chart_accuracy: 'Précision %', chart_speed: 'Vitesse moy. (s)',
  },
  de: {
    brand: 'Kopfrechnen',
    nav_home: 'Start', nav_practice: 'Üben', nav_lessons: 'Techniken', nav_progress: 'Fortschritt',
    hero_title: 'Trainiere dein Kopfrechnen',
    hero_sub: 'Meistere Arithmetik im Kopf. Kein Taschenrechner, kein Papier — nur dein Gehirn.',
    card_practice_title: 'Zeitgesteuertes Üben',
    card_practice_desc: 'Fordere dich mit Aufgaben auf 5 Schwierigkeitsstufen.',
    card_lessons_title: 'Techniken lernen',
    card_lessons_desc: 'Bewährte Methoden: Komplement, Anker, Kreuzmultiplikation und mehr.',
    card_progress_title: 'Fortschritt verfolgen',
    card_progress_desc: 'Sieh deine Genauigkeit, Geschwindigkeit und Serien im Zeitverlauf.',
    setup_title: 'Einstellungen',
    setup_operation: 'Operation', setup_difficulty: 'Schwierigkeit',
    setup_round_length: 'Rundenlänge', setup_timer: 'Timer',
    op_addition: 'Addition', op_subtraction: 'Subtraktion',
    op_multiplication: 'Multiplikation', op_division: 'Division', op_mixed: 'Gemischt',
    diff_easy: 'Leicht', diff_hard: 'Schwer', timer_off: 'Aus',
    btn_start: 'Runde starten', btn_submit: 'Bestätigen',
    btn_next: 'Weiter', btn_see_results: 'Ergebnisse anzeigen',
    btn_retry: 'Wiederholen', btn_new_round: 'Neue Einstellungen',
    results_title: 'Runde beendet',
    res_correct: 'Richtig', res_total: 'Gesamt', res_accuracy: 'Genauigkeit', res_avg_time: 'Ø Zeit',
    tbl_num: '#', tbl_problem: 'Aufgabe', tbl_your_answer: 'Deine Antwort',
    tbl_correct_ans: 'Richtige Antwort', tbl_time: 'Zeit',
    input_placeholder: 'Deine Antwort',
    fb_correct: t => `Richtig! (${t}s)`,
    fb_wrong: a => `Falsch — Antwort ist ${a}`,
    fb_timeout: a => `Zeit abgelaufen! Antwort: ${a}`,
    lessons_title: 'Kopfrechnen-Techniken',
    lesson_back: '← Zurück zu den Techniken',
    lesson_practice: op => `${op} üben →`,
    progress_title: 'Dein Fortschritt',
    stat_rounds: 'Runden', stat_problems: 'Aufgaben', stat_accuracy: 'Genauigkeit',
    stat_speed: 'Ø Geschw.', stat_best: 'Beste Runde', stat_streak: 'Serie (≥70%)',
    btn_clear: 'Fortschritt zurücksetzen',
    confirm_clear: 'Alle Fortschrittsdaten löschen?',
    no_rounds: 'Noch keine Runden. Fang an zu üben!',
    chart_accuracy: 'Genauigkeit %', chart_speed: 'Ø Geschwindigkeit (s)',
  }
};

// ── Language state ───────────────────────────────────────────
let currentLang = localStorage.getItem('mental-calculus-lang') || 'en';

function t(key, ...args) {
  const val = T[currentLang][key];
  return typeof val === 'function' ? val(...args) : (val || T.en[key] || key);
}

function applyLang() {
  document.documentElement.lang = currentLang;
  document.title = t('brand') + ' — ' + t('hero_title');

  // Static data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  // Placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  // Difficulty buttons with Easy/Hard labels
  const diff1 = document.querySelector('#diff-select [data-diff="1"]');
  const diff5 = document.querySelector('#diff-select [data-diff="5"]');
  if (diff1) diff1.textContent = `1 — ${t('diff_easy')}`;
  if (diff5) diff5.textContent = `5 — ${t('diff_hard')}`;

  // Active lang button
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === currentLang);
  });

  // Re-render dynamic content if visible
  const activePage = document.querySelector('.page.active');
  if (activePage) {
    const pageId = activePage.id;
    if (pageId === 'page-lessons') showLessonList();
    if (pageId === 'page-progress') renderProgress();
  }
}

// Language selector
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    localStorage.setItem('mental-calculus-lang', currentLang);
    applyLang();
  });
});

// ── Lessons data (multilingual) ──────────────────────────────
const LESSONS = {
  en: [
    {
      id: 'complement', opKey: 'addition', tag: 'Addition',
      title: 'Complement Method (Addition)',
      summary: 'Add large numbers by rounding up, then subtracting the overshoot.',
      content: `
        <h3>The Idea</h3>
        <p>Instead of adding an awkward number, round it up to the nearest 10/100/1000, add that, then subtract the difference.</p>
        <h3>Example</h3>
        <div class="example"><strong>298 + 467</strong><br>→ 300 + 467 = 767<br>→ 767 − 2 = <strong>765</strong></div>
        <h3>Why it works</h3>
        <p>Your brain handles round numbers much faster. The subtraction step is tiny (single-digit), so the overall effort is lower.</p>
        <h3>Practice tip</h3>
        <p>Start with 2-digit numbers, then move to 3-digit. Once comfortable, try chaining: e.g. 298 + 467 + 195.</p>`
    },
    {
      id: 'left-to-right', opKey: 'addition', tag: 'Addition',
      title: 'Left-to-Right Addition',
      summary: 'Process digits from left to right — the natural reading direction.',
      content: `
        <h3>The Idea</h3>
        <p>School teaches right-to-left (carry the one). Your brain prefers left-to-right because you get an approximate answer immediately and refine it.</p>
        <h3>Example</h3>
        <div class="example"><strong>347 + 586</strong><br>→ 300 + 500 = 800<br>→ 40 + 80 = 120 → running total: 920<br>→ 7 + 6 = 13 → running total: <strong>933</strong></div>
        <h3>When to use</h3>
        <p>Great for any addition. Especially powerful when you need a quick estimate first — after the first step you already know the answer is "around 800".</p>`
    },
    {
      id: 'subtract-complement', opKey: 'subtraction', tag: 'Subtraction',
      title: 'Subtract by Adding (Complement)',
      summary: 'Turn subtraction into addition by finding how far the smaller number is from a round number.',
      content: `
        <h3>The Idea</h3>
        <p>To compute A − B, round B up to the next round number, subtract that from A (easy), then add back the overshoot.</p>
        <h3>Example</h3>
        <div class="example"><strong>843 − 267</strong><br>→ Round 267 up to 300 (overshoot = 33)<br>→ 843 − 300 = 543<br>→ 543 + 33 = <strong>576</strong></div>
        <h3>Alternative: subtract left-to-right</h3>
        <div class="example"><strong>843 − 267</strong><br>→ 843 − 200 = 643<br>→ 643 − 60 = 583<br>→ 583 − 7 = <strong>576</strong></div>`
    },
    {
      id: 'multiply-factor', opKey: 'multiplication', tag: 'Multiplication',
      title: 'Factoring (Multiplication)',
      summary: 'Break one factor into simpler parts and multiply step by step.',
      content: `
        <h3>The Idea</h3>
        <p>Factor one of the numbers so each step involves a simple multiplication.</p>
        <h3>Example</h3>
        <div class="example"><strong>36 × 25</strong><br>→ 36 × 100 / 4 = 3600 / 4 = <strong>900</strong><br><br>Or: 36 × 25 = 9 × 4 × 25 = 9 × 100 = <strong>900</strong></div>
        <h3>Useful factors</h3>
        <div class="example">× 25 = × 100 / 4<br>× 50 = × 100 / 2<br>× 125 = × 1000 / 8<br>× 5 = × 10 / 2<br>× 15 = × 10 + × 5</div>`
    },
    {
      id: 'multiply-distribute', opKey: 'multiplication', tag: 'Multiplication',
      title: 'Distribution (Multiplication)',
      summary: 'Split a multiplication into easier pieces and add the results.',
      content: `
        <h3>The Idea</h3>
        <p>Use the distributive property: a × b = a × (c + d) where c and d are round or easy numbers.</p>
        <h3>Examples</h3>
        <div class="example"><strong>47 × 8</strong><br>→ (50 − 3) × 8<br>→ 400 − 24 = <strong>376</strong></div>
        <div class="example"><strong>23 × 12</strong><br>→ 23 × 10 + 23 × 2<br>→ 230 + 46 = <strong>276</strong></div>
        <h3>When to use</h3>
        <p>Whenever one factor is close to a round number (like 47 ≈ 50) or one factor is small enough to split easily.</p>`
    },
    {
      id: 'multiply-cross', opKey: 'multiplication', tag: 'Multiplication',
      title: 'Cross Multiplication (2-digit × 2-digit)',
      summary: 'Multiply any two 2-digit numbers in three steps.',
      content: `
        <h3>The Method</h3>
        <p>For AB × CD (where A, B, C, D are digits):</p>
        <div class="example">Step 1: A×C × 100 (hundreds)<br>Step 2: (A×D + B×C) × 10 (tens cross)<br>Step 3: B×D (units)<br>Add all three.</div>
        <h3>Example</h3>
        <div class="example"><strong>34 × 72</strong><br>→ 3×7 × 100 = 2100<br>→ (3×2 + 4×7) × 10 = 340<br>→ 4×2 = 8<br>→ 2100 + 340 + 8 = <strong>2448</strong></div>
        <h3>Practice</h3>
        <p>Start with numbers where B and D are small (e.g. 31 × 42). Work up to larger digits.</p>`
    },
    {
      id: 'squaring', opKey: 'multiplication', tag: 'Multiplication',
      title: 'Squaring Numbers',
      summary: 'Square any 2-digit number using the "distance to nearest 10" trick.',
      content: `
        <h3>The Method</h3>
        <p>To square N, find the nearest round number R. Then: N² = (N − d) × (N + d) + d²</p>
        <div class="example">N² = (N − d) × (N + d) + d²<br>where d = distance from N to R</div>
        <h3>Examples</h3>
        <div class="example"><strong>47²</strong><br>→ Nearest round: 50, d = 3<br>→ 44 × 50 + 9 = 2200 + 9 = <strong>2209</strong></div>
        <div class="example"><strong>83²</strong><br>→ Nearest round: 80, d = 3<br>→ 80 × 86 + 9 = <strong>6889</strong></div>`
    },
    {
      id: 'division-halving', opKey: 'division', tag: 'Division',
      title: 'Halving and Doubling (Division)',
      summary: 'Simplify division by halving both numbers until it becomes obvious.',
      content: `
        <h3>The Idea</h3>
        <p>If both the dividend and divisor are even, halve them repeatedly. The quotient stays the same.</p>
        <h3>Example</h3>
        <div class="example"><strong>448 ÷ 16</strong><br>→ 224 ÷ 8 → 112 ÷ 4 → 56 ÷ 2 → <strong>28</strong></div>
        <h3>Dividing by 5</h3>
        <div class="example"><strong>N ÷ 5 = N × 2 ÷ 10</strong><br><br>370 ÷ 5 = 740 ÷ 10 = <strong>74</strong></div>`
    },
    {
      id: 'anchor-method', opKey: 'multiplication', tag: 'Multiplication',
      title: 'Anchor Method (Multiplication)',
      summary: 'Multiply numbers close to a base (10, 100, 1000) using deviations.',
      content: `
        <h3>The Idea</h3>
        <p>When both numbers are close to a "base" (like 100), use their deviations from that base.</p>
        <h3>For numbers near 100</h3>
        <div class="example"><strong>97 × 94</strong><br>→ Deviations: −3 and −6<br>→ Left: 97 − 6 = 91<br>→ Right: (−3) × (−6) = 18<br>→ <strong>9118</strong></div>
        <h3>Identity trick</h3>
        <div class="example"><strong>103 × 97</strong><br>→ = 100² − 3² = 10000 − 9 = <strong>9991</strong></div>`
    },
    {
      id: 'percentage', opKey: 'mixed', tag: 'Mixed',
      title: 'Percentage Tricks',
      summary: 'Flip percentages and use friendly anchors to compute them fast.',
      content: `
        <h3>The Flip Rule</h3>
        <p>x% of y = y% of x. Pick whichever is easier.</p>
        <div class="example"><strong>4% of 75</strong> = 75% of 4 = <strong>3</strong><br><strong>8% of 50</strong> = 50% of 8 = <strong>4</strong></div>
        <h3>Break percentages into parts</h3>
        <div class="example"><strong>15% of 240</strong><br>→ 10% = 24 → 5% = 12 → 15% = <strong>36</strong></div>
        <h3>Common anchors</h3>
        <div class="example">10% → ÷ 10 | 5% → half of 10%<br>1% → ÷ 100 | 25% → ÷ 4<br>33% → ÷ 3 | 50% → ÷ 2</div>`
    }
  ],
  fr: [
    {
      id: 'complement', opKey: 'addition', tag: 'Addition',
      title: 'Méthode du complément (Addition)',
      summary: 'Additionner des grands nombres en arrondissant, puis en soustrayant le surplus.',
      content: `
        <h3>Le principe</h3>
        <p>Au lieu d'additionner un nombre difficile, arrondissez-le au 10/100/1000 supérieur, ajoutez ce nombre arrondi, puis soustrayez la différence.</p>
        <h3>Exemple</h3>
        <div class="example"><strong>298 + 467</strong><br>→ 300 + 467 = 767<br>→ 767 − 2 = <strong>765</strong></div>
        <h3>Pourquoi ça marche</h3>
        <p>Le cerveau traite les nombres ronds beaucoup plus vite. La soustraction finale est minuscule (un seul chiffre), donc l'effort global est moindre.</p>
        <h3>Conseil</h3>
        <p>Commencez par des nombres à 2 chiffres, puis passez à 3 chiffres. Ensuite enchaînez : 298 + 467 + 195.</p>`
    },
    {
      id: 'left-to-right', opKey: 'addition', tag: 'Addition',
      title: 'Addition de gauche à droite',
      summary: 'Traitez les chiffres de gauche à droite — le sens naturel de lecture.',
      content: `
        <h3>Le principe</h3>
        <p>À l'école on apprend de droite à gauche (retenues). Le cerveau préfère de gauche à droite : on obtient une approximation immédiate que l'on affine.</p>
        <h3>Exemple</h3>
        <div class="example"><strong>347 + 586</strong><br>→ 300 + 500 = 800<br>→ 40 + 80 = 120 → total courant : 920<br>→ 7 + 6 = 13 → total courant : <strong>933</strong></div>
        <h3>Quand l'utiliser</h3>
        <p>Idéal pour toute addition. Très puissant quand on a besoin d'une estimation rapide — dès la première étape, on sait que la réponse est "environ 800".</p>`
    },
    {
      id: 'subtract-complement', opKey: 'subtraction', tag: 'Soustraction',
      title: 'Soustraire par addition (Complément)',
      summary: 'Transformez une soustraction en addition en trouvant la distance au nombre rond.',
      content: `
        <h3>Le principe</h3>
        <p>Pour calculer A − B, arrondissez B au nombre rond supérieur, soustrayez ce nombre de A (facile), puis rajoutez le surplus.</p>
        <h3>Exemple</h3>
        <div class="example"><strong>843 − 267</strong><br>→ Arrondir 267 à 300 (surplus = 33)<br>→ 843 − 300 = 543<br>→ 543 + 33 = <strong>576</strong></div>
        <h3>Variante : soustraire de gauche à droite</h3>
        <div class="example"><strong>843 − 267</strong><br>→ 843 − 200 = 643<br>→ 643 − 60 = 583<br>→ 583 − 7 = <strong>576</strong></div>`
    },
    {
      id: 'multiply-factor', opKey: 'multiplication', tag: 'Multiplication',
      title: 'Factorisation (Multiplication)',
      summary: 'Décomposez un facteur en parties simples et multipliez étape par étape.',
      content: `
        <h3>Le principe</h3>
        <p>Factorisez l'un des nombres afin que chaque étape implique une multiplication simple.</p>
        <h3>Exemple</h3>
        <div class="example"><strong>36 × 25</strong><br>→ 36 × 100 / 4 = 3600 / 4 = <strong>900</strong><br><br>Ou : 36 × 25 = 9 × 4 × 25 = 9 × 100 = <strong>900</strong></div>
        <h3>Facteurs utiles</h3>
        <div class="example">× 25 = × 100 / 4<br>× 50 = × 100 / 2<br>× 125 = × 1000 / 8<br>× 5 = × 10 / 2<br>× 15 = × 10 + × 5</div>`
    },
    {
      id: 'multiply-distribute', opKey: 'multiplication', tag: 'Multiplication',
      title: 'Distributivité (Multiplication)',
      summary: 'Décomposez une multiplication en parties plus faciles et additionnez les résultats.',
      content: `
        <h3>Le principe</h3>
        <p>Utilisez la propriété distributive : a × b = a × (c + d) où c et d sont des nombres ronds ou simples.</p>
        <h3>Exemples</h3>
        <div class="example"><strong>47 × 8</strong><br>→ (50 − 3) × 8<br>→ 400 − 24 = <strong>376</strong></div>
        <div class="example"><strong>23 × 12</strong><br>→ 23 × 10 + 23 × 2<br>→ 230 + 46 = <strong>276</strong></div>
        <h3>Quand l'utiliser</h3>
        <p>Quand un facteur est proche d'un nombre rond (ex : 47 ≈ 50) ou quand un facteur est assez petit pour être décomposé facilement.</p>`
    },
    {
      id: 'multiply-cross', opKey: 'multiplication', tag: 'Multiplication',
      title: 'Multiplication croisée (2 chiffres × 2 chiffres)',
      summary: 'Multipliez deux nombres à 2 chiffres en trois étapes.',
      content: `
        <h3>La méthode</h3>
        <p>Pour AB × CD (où A, B, C, D sont des chiffres) :</p>
        <div class="example">Étape 1 : A×C × 100 (centaines)<br>Étape 2 : (A×D + B×C) × 10 (dizaines croisées)<br>Étape 3 : B×D (unités)<br>Additionnez les trois.</div>
        <h3>Exemple</h3>
        <div class="example"><strong>34 × 72</strong><br>→ 3×7 × 100 = 2100<br>→ (3×2 + 4×7) × 10 = 340<br>→ 4×2 = 8<br>→ 2100 + 340 + 8 = <strong>2448</strong></div>
        <h3>Entraînement</h3>
        <p>Commencez avec des chiffres B et D petits (ex : 31 × 42). Montez progressivement.</p>`
    },
    {
      id: 'squaring', opKey: 'multiplication', tag: 'Multiplication',
      title: 'Carré d\'un nombre',
      summary: 'Élevez au carré un nombre à 2 chiffres avec l\'astuce de la distance au 10.',
      content: `
        <h3>La méthode</h3>
        <p>Pour élever N au carré, trouvez le nombre rond R le plus proche. Puis :</p>
        <div class="example">N² = (N − d) × (N + d) + d²<br>où d = distance de N à R</div>
        <h3>Exemples</h3>
        <div class="example"><strong>47²</strong><br>→ R = 50, d = 3<br>→ 44 × 50 + 9 = 2200 + 9 = <strong>2209</strong></div>
        <div class="example"><strong>83²</strong><br>→ R = 80, d = 3<br>→ 80 × 86 + 9 = <strong>6889</strong></div>`
    },
    {
      id: 'division-halving', opKey: 'division', tag: 'Division',
      title: 'Halvage et doublement (Division)',
      summary: 'Simplifiez la division en divisant les deux nombres par 2 jusqu\'à l\'évidence.',
      content: `
        <h3>Le principe</h3>
        <p>Si le dividende et le diviseur sont tous deux pairs, divisez-les par 2 répétitivement. Le quotient reste le même.</p>
        <h3>Exemple</h3>
        <div class="example"><strong>448 ÷ 16</strong><br>→ 224 ÷ 8 → 112 ÷ 4 → 56 ÷ 2 → <strong>28</strong></div>
        <h3>Diviser par 5</h3>
        <div class="example"><strong>N ÷ 5 = N × 2 ÷ 10</strong><br><br>370 ÷ 5 = 740 ÷ 10 = <strong>74</strong></div>`
    },
    {
      id: 'anchor-method', opKey: 'multiplication', tag: 'Multiplication',
      title: 'Méthode de l\'ancrage (Multiplication)',
      summary: 'Multipliez des nombres proches d\'une base (10, 100, 1000) grâce aux écarts.',
      content: `
        <h3>Le principe</h3>
        <p>Quand les deux nombres sont proches d'une "base" (ex : 100), utilisez leurs écarts par rapport à cette base.</p>
        <h3>Nombres proches de 100</h3>
        <div class="example"><strong>97 × 94</strong><br>→ Écarts : −3 et −6<br>→ Partie gauche : 97 − 6 = 91<br>→ Partie droite : (−3) × (−6) = 18<br>→ <strong>9118</strong></div>
        <h3>Astuce identité</h3>
        <div class="example"><strong>103 × 97</strong><br>→ = 100² − 3² = 10000 − 9 = <strong>9991</strong></div>`
    },
    {
      id: 'percentage', opKey: 'mixed', tag: 'Mixte',
      title: 'Astuces pour les pourcentages',
      summary: 'Inversez les pourcentages et utilisez des ancres pratiques pour calculer vite.',
      content: `
        <h3>La règle d'inversion</h3>
        <p>x% de y = y% de x. Choisissez le calcul le plus facile.</p>
        <div class="example"><strong>4% de 75</strong> = 75% de 4 = <strong>3</strong><br><strong>8% de 50</strong> = 50% de 8 = <strong>4</strong></div>
        <h3>Décomposer les pourcentages</h3>
        <div class="example"><strong>15% de 240</strong><br>→ 10% = 24 → 5% = 12 → 15% = <strong>36</strong></div>
        <h3>Ancres courantes</h3>
        <div class="example">10% → ÷ 10 | 5% → moitié de 10%<br>1% → ÷ 100 | 25% → ÷ 4<br>33% → ÷ 3 | 50% → ÷ 2</div>`
    }
  ],
  de: [
    {
      id: 'complement', opKey: 'addition', tag: 'Addition',
      title: 'Komplementmethode (Addition)',
      summary: 'Große Zahlen addieren durch Aufrunden und anschließendes Subtrahieren des Überschusses.',
      content: `
        <h3>Die Idee</h3>
        <p>Statt einer schwierigen Zahl runde sie auf die nächste 10/100/1000 auf, addiere diese und subtrahiere dann die Differenz.</p>
        <h3>Beispiel</h3>
        <div class="example"><strong>298 + 467</strong><br>→ 300 + 467 = 767<br>→ 767 − 2 = <strong>765</strong></div>
        <h3>Warum es funktioniert</h3>
        <p>Das Gehirn verarbeitet runde Zahlen viel schneller. Der Subtraktionsschritt ist winzig, also ist der Gesamtaufwand geringer.</p>
        <h3>Übungstipp</h3>
        <p>Beginne mit 2-stelligen Zahlen, dann zu 3-stelligen. Danach verkettet: z.B. 298 + 467 + 195.</p>`
    },
    {
      id: 'left-to-right', opKey: 'addition', tag: 'Addition',
      title: 'Addition von links nach rechts',
      summary: 'Ziffern von links nach rechts verarbeiten — in natürlicher Leserichtung.',
      content: `
        <h3>Die Idee</h3>
        <p>In der Schule lernt man von rechts nach links (mit Übertrag). Das Gehirn bevorzugt links nach rechts: Man bekommt sofort eine Näherung und verfeinert sie.</p>
        <h3>Beispiel</h3>
        <div class="example"><strong>347 + 586</strong><br>→ 300 + 500 = 800<br>→ 40 + 80 = 120 → laufende Summe: 920<br>→ 7 + 6 = 13 → laufende Summe: <strong>933</strong></div>
        <h3>Wann verwenden</h3>
        <p>Ideal für jede Addition. Besonders nützlich, wenn zuerst eine schnelle Schätzung benötigt wird.</p>`
    },
    {
      id: 'subtract-complement', opKey: 'subtraction', tag: 'Subtraktion',
      title: 'Subtrahieren durch Addieren (Komplement)',
      summary: 'Subtraktion in Addition umwandeln, indem man die Entfernung zur nächsten runden Zahl findet.',
      content: `
        <h3>Die Idee</h3>
        <p>Um A − B zu berechnen, runde B auf die nächste runde Zahl auf, subtrahiere das von A, dann addiere den Überschuss zurück.</p>
        <h3>Beispiel</h3>
        <div class="example"><strong>843 − 267</strong><br>→ 267 auf 300 aufrunden (Überschuss = 33)<br>→ 843 − 300 = 543<br>→ 543 + 33 = <strong>576</strong></div>
        <h3>Alternative: von links nach rechts subtrahieren</h3>
        <div class="example"><strong>843 − 267</strong><br>→ 843 − 200 = 643<br>→ 643 − 60 = 583<br>→ 583 − 7 = <strong>576</strong></div>`
    },
    {
      id: 'multiply-factor', opKey: 'multiplication', tag: 'Multiplikation',
      title: 'Faktorisierung (Multiplikation)',
      summary: 'Einen Faktor in einfachere Teile zerlegen und Schritt für Schritt multiplizieren.',
      content: `
        <h3>Die Idee</h3>
        <p>Faktorisiere eine der Zahlen, sodass jeder Schritt eine einfache Multiplikation ist.</p>
        <h3>Beispiel</h3>
        <div class="example"><strong>36 × 25</strong><br>→ 36 × 100 / 4 = 3600 / 4 = <strong>900</strong></div>
        <h3>Nützliche Faktoren</h3>
        <div class="example">× 25 = × 100 / 4<br>× 50 = × 100 / 2<br>× 125 = × 1000 / 8<br>× 5 = × 10 / 2<br>× 15 = × 10 + × 5</div>`
    },
    {
      id: 'multiply-distribute', opKey: 'multiplication', tag: 'Multiplikation',
      title: 'Distributivität (Multiplikation)',
      summary: 'Eine Multiplikation in einfachere Teile aufteilen und die Ergebnisse addieren.',
      content: `
        <h3>Die Idee</h3>
        <p>Nutze das Distributivgesetz: a × b = a × (c + d), wobei c und d runde oder einfache Zahlen sind.</p>
        <h3>Beispiele</h3>
        <div class="example"><strong>47 × 8</strong><br>→ (50 − 3) × 8<br>→ 400 − 24 = <strong>376</strong></div>
        <div class="example"><strong>23 × 12</strong><br>→ 23 × 10 + 23 × 2<br>→ 230 + 46 = <strong>276</strong></div>
        <h3>Wann verwenden</h3>
        <p>Wenn ein Faktor nahe an einer runden Zahl liegt (z.B. 47 ≈ 50) oder ein Faktor klein genug zum leichten Aufteilen ist.</p>`
    },
    {
      id: 'multiply-cross', opKey: 'multiplication', tag: 'Multiplikation',
      title: 'Kreuzweise Multiplikation (2-stellig × 2-stellig)',
      summary: 'Beliebige zwei 2-stellige Zahlen in drei Schritten multiplizieren.',
      content: `
        <h3>Die Methode</h3>
        <p>Für AB × CD (A, B, C, D sind Ziffern):</p>
        <div class="example">Schritt 1: A×C × 100 (Hunderte)<br>Schritt 2: (A×D + B×C) × 10 (Kreuz-Zehner)<br>Schritt 3: B×D (Einer)<br>Alle drei addieren.</div>
        <h3>Beispiel</h3>
        <div class="example"><strong>34 × 72</strong><br>→ 3×7 × 100 = 2100<br>→ (3×2 + 4×7) × 10 = 340<br>→ 4×2 = 8<br>→ 2100 + 340 + 8 = <strong>2448</strong></div>
        <h3>Übung</h3>
        <p>Beginne mit kleinen B und D (z.B. 31 × 42). Arbeite dich zu größeren Ziffern vor.</p>`
    },
    {
      id: 'squaring', opKey: 'multiplication', tag: 'Multiplikation',
      title: 'Quadrieren von Zahlen',
      summary: '2-stellige Zahlen quadrieren mit dem "Abstand zur nächsten 10er"-Trick.',
      content: `
        <h3>Die Methode</h3>
        <p>Um N zu quadrieren, finde die nächste runde Zahl R. Dann:</p>
        <div class="example">N² = (N − d) × (N + d) + d²<br>wobei d = Abstand von N zu R</div>
        <h3>Beispiele</h3>
        <div class="example"><strong>47²</strong><br>→ R = 50, d = 3<br>→ 44 × 50 + 9 = <strong>2209</strong></div>
        <div class="example"><strong>83²</strong><br>→ R = 80, d = 3<br>→ 80 × 86 + 9 = <strong>6889</strong></div>`
    },
    {
      id: 'division-halving', opKey: 'division', tag: 'Division',
      title: 'Halbieren und Verdoppeln (Division)',
      summary: 'Division vereinfachen durch wiederholtes Halbieren beider Zahlen.',
      content: `
        <h3>Die Idee</h3>
        <p>Wenn Dividend und Divisor beide gerade sind, halbiere sie wiederholt. Der Quotient bleibt gleich.</p>
        <h3>Beispiel</h3>
        <div class="example"><strong>448 ÷ 16</strong><br>→ 224 ÷ 8 → 112 ÷ 4 → 56 ÷ 2 → <strong>28</strong></div>
        <h3>Division durch 5</h3>
        <div class="example"><strong>N ÷ 5 = N × 2 ÷ 10</strong><br><br>370 ÷ 5 = 740 ÷ 10 = <strong>74</strong></div>`
    },
    {
      id: 'anchor-method', opKey: 'multiplication', tag: 'Multiplikation',
      title: 'Ankermethode (Multiplikation)',
      summary: 'Zahlen nahe einer Basis (10, 100, 1000) über Abweichungen multiplizieren.',
      content: `
        <h3>Die Idee</h3>
        <p>Wenn beide Zahlen nahe einer "Basis" (z.B. 100) liegen, benutze ihre Abweichungen von dieser Basis.</p>
        <h3>Zahlen nahe 100</h3>
        <div class="example"><strong>97 × 94</strong><br>→ Abweichungen: −3 und −6<br>→ Links: 97 − 6 = 91<br>→ Rechts: (−3) × (−6) = 18<br>→ <strong>9118</strong></div>
        <h3>Identitäts-Trick</h3>
        <div class="example"><strong>103 × 97</strong><br>→ = 100² − 3² = 10000 − 9 = <strong>9991</strong></div>`
    },
    {
      id: 'percentage', opKey: 'mixed', tag: 'Gemischt',
      title: 'Prozentrechnen-Tricks',
      summary: 'Prozentsätze umkehren und praktische Anker für schnelle Berechnungen nutzen.',
      content: `
        <h3>Die Umkehrregel</h3>
        <p>x% von y = y% von x. Nimm das Einfachere.</p>
        <div class="example"><strong>4% von 75</strong> = 75% von 4 = <strong>3</strong><br><strong>8% von 50</strong> = 50% von 8 = <strong>4</strong></div>
        <h3>Prozentsätze aufteilen</h3>
        <div class="example"><strong>15% von 240</strong><br>→ 10% = 24 → 5% = 12 → 15% = <strong>36</strong></div>
        <h3>Häufige Anker</h3>
        <div class="example">10% → ÷ 10 | 5% → Hälfte von 10%<br>1% → ÷ 100 | 25% → ÷ 4<br>33% → ÷ 3 | 50% → ÷ 2</div>`
    }
  ]
};

function getLessons() {
  return LESSONS[currentLang] || LESSONS.en;
}

// ── Navigation ──────────────────────────────────────────────
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(link.dataset.page);
  });
});

document.querySelectorAll('[data-goto]').forEach(el => {
  el.addEventListener('click', () => navigateTo(el.dataset.goto));
});

function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelector(`.nav-link[data-page="${page}"]`).classList.add('active');
  window.scrollTo(0, 0);
  if (page === 'progress') renderProgress();
  if (page === 'lessons') showLessonList();
}

// ── Toggle button groups ────────────────────────────────────
document.querySelectorAll('.btn-group').forEach(group => {
  group.querySelectorAll('.btn-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      group.querySelectorAll('.btn-toggle').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});

// ── Exercise generation ─────────────────────────────────────
function getSelected(groupId, attr) {
  const el = document.querySelector(`#${groupId} .btn-toggle.active`);
  return el ? el.dataset[attr] : null;
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateExercise(operation, difficulty) {
  const diff = parseInt(difficulty);
  const ops = operation === 'mixed'
    ? ['addition', 'subtraction', 'multiplication', 'division']
    : [operation];
  const op = ops[randInt(0, ops.length - 1)];
  let a, b, answer, display;

  switch (op) {
    case 'addition': {
      const ranges = [[10,99],[100,999],[1000,9999],[10000,99999],[100000,999999]];
      const [min, max] = ranges[diff - 1];
      a = randInt(min, max); b = randInt(min, max);
      answer = a + b;
      display = `${a.toLocaleString()} + ${b.toLocaleString()}`;
      break;
    }
    case 'subtraction': {
      const ranges = [[10,99],[100,999],[1000,9999],[10000,99999],[100000,999999]];
      const [min, max] = ranges[diff - 1];
      a = randInt(min, max); b = randInt(min, max);
      if (b > a) [a, b] = [b, a];
      answer = a - b;
      display = `${a.toLocaleString()} − ${b.toLocaleString()}`;
      break;
    }
    case 'multiplication': {
      const ranges = [[[2,9],[2,9]],[[10,99],[2,9]],[[10,99],[10,99]],[[100,999],[10,99]],[[100,999],[100,999]]];
      const [[minA,maxA],[minB,maxB]] = ranges[diff - 1];
      a = randInt(minA, maxA); b = randInt(minB, maxB);
      answer = a * b;
      display = `${a.toLocaleString()} × ${b.toLocaleString()}`;
      break;
    }
    case 'division': {
      const ranges = [[[2,9],[2,9]],[[2,9],[10,99]],[[2,19],[10,99]],[[2,49],[100,999]],[[10,99],[100,999]]];
      const [[minDiv,maxDiv],[minQuot,maxQuot]] = ranges[diff - 1];
      b = randInt(minDiv, maxDiv);
      answer = randInt(minQuot, maxQuot);
      a = b * answer;
      display = `${a.toLocaleString()} ÷ ${b.toLocaleString()}`;
      break;
    }
  }
  return { a, b, op, answer, display };
}

// ── Practice session state ──────────────────────────────────
let session = null;
let timerInterval = null;

const $setup    = document.getElementById('practice-setup');
const $exercise = document.getElementById('practice-exercise');
const $results  = document.getElementById('practice-results');
const $question = document.getElementById('ex-question');
const $input    = document.getElementById('answer-input');
const $counter  = document.getElementById('ex-counter');
const $timerBadge = document.getElementById('ex-timer');
const $timerBar   = document.getElementById('timer-bar');
const $feedback   = document.getElementById('ex-feedback');
const $btnNext    = document.getElementById('btn-next');

document.getElementById('btn-start').addEventListener('click', startRound);
document.getElementById('answer-form').addEventListener('submit', e => { e.preventDefault(); submitAnswer(); });
$btnNext.addEventListener('click', nextExercise);
document.getElementById('btn-retry').addEventListener('click', () => startRound());
document.getElementById('btn-new-round').addEventListener('click', () => {
  $setup.classList.remove('hidden');
  $results.classList.add('hidden');
});

function startRound() {
  const operation = getSelected('op-select', 'op');
  const difficulty = getSelected('diff-select', 'diff');
  const count = parseInt(getSelected('count-select', 'count'));
  const timer = parseInt(getSelected('timer-select', 'timer'));
  const exercises = [];
  for (let i = 0; i < count; i++) exercises.push(generateExercise(operation, difficulty));
  session = { operation, difficulty, count, timer, exercises, current: 0, results: [], startTime: null };
  $setup.classList.add('hidden');
  $results.classList.add('hidden');
  $exercise.classList.remove('hidden');
  showExercise();
}

function showExercise() {
  const ex = session.exercises[session.current];
  $question.textContent = ex.display;
  $counter.textContent = `${session.current + 1} / ${session.count}`;
  $input.value = '';
  $input.disabled = false;
  $input.focus();
  $feedback.classList.add('hidden');
  $btnNext.classList.add('hidden');
  session.startTime = performance.now();
  clearInterval(timerInterval);
  if (session.timer > 0) {
    $timerBadge.classList.remove('hidden');
    $timerBar.parentElement.classList.remove('hidden');
    startTimer(session.timer);
  } else {
    $timerBadge.classList.add('hidden');
    $timerBar.parentElement.classList.add('hidden');
  }
}

function startTimer(seconds) {
  $timerBadge.textContent = seconds + 's';
  $timerBar.style.width = '100%';
  $timerBar.className = 'timer-bar';
  $timerBadge.className = 'timer-badge';
  const startMs = performance.now();
  timerInterval = setInterval(() => {
    const elapsed = (performance.now() - startMs) / 1000;
    const remaining = Math.max(0, seconds - elapsed);
    const pct = (remaining / seconds) * 100;
    $timerBar.style.width = pct + '%';
    $timerBadge.textContent = Math.ceil(remaining) + 's';
    if (remaining <= seconds * 0.25) {
      $timerBar.className = 'timer-bar danger'; $timerBadge.className = 'timer-badge danger';
    } else if (remaining <= seconds * 0.5) {
      $timerBar.className = 'timer-bar warning'; $timerBadge.className = 'timer-badge warning';
    }
    if (remaining <= 0) { clearInterval(timerInterval); handleTimeout(); }
  }, 50);
}

function handleTimeout() {
  const ex = session.exercises[session.current];
  const elapsed = (performance.now() - session.startTime) / 1000;
  session.results.push({ exercise: ex, userAnswer: null, correct: false, timeout: true, time: elapsed });
  $input.disabled = true;
  $feedback.textContent = t('fb_timeout', ex.answer.toLocaleString());
  $feedback.className = 'feedback timeout';
  $feedback.classList.remove('hidden');
  showNextButton();
}

function submitAnswer() {
  if ($input.disabled) return;
  const raw = $input.value.replace(/[,\s]/g, '').trim();
  if (raw === '') return;
  clearInterval(timerInterval);
  const userAnswer = parseFloat(raw);
  const ex = session.exercises[session.current];
  const elapsed = (performance.now() - session.startTime) / 1000;
  const isCorrect = userAnswer === ex.answer;
  session.results.push({ exercise: ex, userAnswer, correct: isCorrect, timeout: false, time: elapsed });
  $input.disabled = true;
  if (isCorrect) {
    $feedback.textContent = t('fb_correct', elapsed.toFixed(1));
    $feedback.className = 'feedback correct';
  } else {
    $feedback.textContent = t('fb_wrong', ex.answer.toLocaleString());
    $feedback.className = 'feedback wrong';
  }
  $feedback.classList.remove('hidden');
  showNextButton();
}

function showNextButton() {
  $btnNext.classList.remove('hidden');
  $btnNext.textContent = session.current < session.count - 1 ? t('btn_next') : t('btn_see_results');
  $btnNext.focus();
}

function nextExercise() {
  session.current++;
  if (session.current >= session.count) finishRound();
  else showExercise();
}

function finishRound() {
  clearInterval(timerInterval);
  $exercise.classList.add('hidden');
  $results.classList.remove('hidden');
  const correct = session.results.filter(r => r.correct).length;
  const total = session.results.length;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  const avgTime = total > 0 ? (session.results.reduce((s, r) => s + r.time, 0) / total).toFixed(1) : 0;
  document.getElementById('res-correct').textContent = correct;
  document.getElementById('res-total').textContent = total;
  document.getElementById('res-accuracy').textContent = accuracy + '%';
  document.getElementById('res-avg-time').textContent = avgTime + 's';

  let html = `<table><thead><tr>
    <th>${t('tbl_num')}</th><th>${t('tbl_problem')}</th>
    <th>${t('tbl_your_answer')}</th><th>${t('tbl_correct_ans')}</th><th>${t('tbl_time')}</th>
  </tr></thead><tbody>`;
  session.results.forEach((r, i) => {
    const cls = r.timeout ? 'row-timeout' : (r.correct ? 'row-correct' : 'row-wrong');
    const ua = r.timeout ? `(${t('timer_off') === 'Aus' ? 'Timeout' : 'timeout'})` : (r.userAnswer != null ? r.userAnswer.toLocaleString() : '—');
    html += `<tr class="${cls}"><td>${i+1}</td><td>${r.exercise.display}</td><td>${ua}</td><td>${r.exercise.answer.toLocaleString()}</td><td>${r.time.toFixed(1)}s</td></tr>`;
  });
  html += '</tbody></table>';
  document.getElementById('results-detail').innerHTML = html;

  saveRound({ date: new Date().toISOString(), operation: session.operation, difficulty: session.difficulty, count: total, correct, accuracy, avgTime: parseFloat(avgTime) });
}

// ── Progress / localStorage ─────────────────────────────────
const STORAGE_KEY = 'mental-calculus-progress';

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch { return []; }
}

function saveRound(data) {
  const progress = loadProgress();
  progress.push(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

document.getElementById('btn-clear-progress').addEventListener('click', () => {
  if (confirm(t('confirm_clear'))) {
    localStorage.removeItem(STORAGE_KEY);
    renderProgress();
  }
});

function renderProgress() {
  const data = loadProgress();
  const $summary = document.getElementById('progress-summary');
  if (data.length === 0) {
    $summary.innerHTML = `<p style="color:var(--text-dim)">${t('no_rounds')}</p>`;
    clearCanvas('chart-accuracy'); clearCanvas('chart-speed');
    return;
  }
  const totalRounds = data.length;
  const totalProblems = data.reduce((s, d) => s + d.count, 0);
  const totalCorrect = data.reduce((s, d) => s + d.correct, 0);
  const overallAccuracy = Math.round((totalCorrect / totalProblems) * 100);
  const avgSpeed = (data.reduce((s, d) => s + d.avgTime, 0) / totalRounds).toFixed(1);
  const bestAccuracy = Math.max(...data.map(d => d.accuracy));
  let streak = 0;
  for (let i = data.length - 1; i >= 0; i--) { if (data[i].accuracy >= 70) streak++; else break; }

  $summary.innerHTML = `
    <div class="progress-stat"><span class="stat-value">${totalRounds}</span><span class="stat-label">${t('stat_rounds')}</span></div>
    <div class="progress-stat"><span class="stat-value">${totalProblems}</span><span class="stat-label">${t('stat_problems')}</span></div>
    <div class="progress-stat"><span class="stat-value">${overallAccuracy}%</span><span class="stat-label">${t('stat_accuracy')}</span></div>
    <div class="progress-stat"><span class="stat-value">${avgSpeed}s</span><span class="stat-label">${t('stat_speed')}</span></div>
    <div class="progress-stat"><span class="stat-value">${bestAccuracy}%</span><span class="stat-label">${t('stat_best')}</span></div>
    <div class="progress-stat"><span class="stat-value">${streak}</span><span class="stat-label">${t('stat_streak')}</span></div>`;

  const recent = data.slice(-30);
  drawLineChart('chart-accuracy', recent.map((d,i) => i+1), recent.map(d => d.accuracy), t('chart_accuracy'), 0, 100, val => val + '%');
  drawLineChart('chart-speed', recent.map((d,i) => i+1), recent.map(d => d.avgTime), t('chart_speed'), 0, null, val => val.toFixed(1) + 's');
}

function clearCanvas(id) {
  const canvas = document.getElementById(id);
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawLineChart(canvasId, labels, values, title, minY, maxY, formatVal) {
  const canvas = document.getElementById(canvasId);
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  const w = rect.width, h = rect.height;
  ctx.clearRect(0, 0, w, h);
  const pad = { top: 40, right: 20, bottom: 30, left: 50 };
  const plotW = w - pad.left - pad.right;
  const plotH = h - pad.top - pad.bottom;
  if (maxY === null) maxY = Math.max(...values) * 1.2 || 10;
  if (minY === null) minY = 0;
  ctx.fillStyle = '#9395a5';
  ctx.font = '13px Segoe UI, system-ui, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(title, pad.left, 24);
  ctx.strokeStyle = '#2e3144'; ctx.lineWidth = 1;
  const gridLines = 5;
  for (let i = 0; i <= gridLines; i++) {
    const y = pad.top + (plotH / gridLines) * i;
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y); ctx.stroke();
    const val = maxY - ((maxY - minY) / gridLines) * i;
    ctx.fillStyle = '#9395a5'; ctx.font = '11px Segoe UI, system-ui, sans-serif'; ctx.textAlign = 'right';
    ctx.fillText(formatVal(val), pad.left - 8, y + 4);
  }
  if (values.length < 2) return;
  ctx.strokeStyle = '#6c63ff'; ctx.lineWidth = 2.5; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  ctx.beginPath();
  values.forEach((v, i) => {
    const x = pad.left + (plotW / (values.length - 1)) * i;
    const y = pad.top + plotH - ((v - minY) / (maxY - minY)) * plotH;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();
  values.forEach((v, i) => {
    const x = pad.left + (plotW / (values.length - 1)) * i;
    const y = pad.top + plotH - ((v - minY) / (maxY - minY)) * plotH;
    ctx.fillStyle = '#6c63ff'; ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI * 2); ctx.fill();
  });
}

// ── Lessons ─────────────────────────────────────────────────
function showLessonList() {
  const $list = document.getElementById('lessons-list');
  const $detail = document.getElementById('lesson-detail');
  $list.classList.remove('hidden');
  $detail.classList.add('hidden');

  $list.innerHTML = getLessons().map(l => `
    <div class="lesson-card" data-lesson="${l.id}">
      <span class="lesson-tag">${l.tag}</span>
      <h3>${l.title}</h3>
      <p>${l.summary}</p>
    </div>`).join('');

  $list.querySelectorAll('.lesson-card').forEach(card => {
    card.addEventListener('click', () => showLesson(card.dataset.lesson));
  });
}

function showLesson(id) {
  const lesson = getLessons().find(l => l.id === id);
  if (!lesson) return;
  const $list = document.getElementById('lessons-list');
  const $detail = document.getElementById('lesson-detail');
  $list.classList.add('hidden');
  $detail.classList.remove('hidden');

  $detail.innerHTML = `
    <button class="btn-back" id="btn-lesson-back">${t('lesson_back')}</button>
    <h2>${lesson.title}</h2>
    ${lesson.content}
    <span class="lesson-practice-link" data-op="${lesson.opKey}">${t('lesson_practice', lesson.tag)}</span>`;

  document.getElementById('btn-lesson-back').addEventListener('click', showLessonList);

  $detail.querySelector('.lesson-practice-link').addEventListener('click', function () {
    navigateTo('practice');
    const op = this.dataset.op;
    document.querySelectorAll('#op-select .btn-toggle').forEach(b => {
      b.classList.toggle('active', b.dataset.op === op);
    });
  });
}

// ── Keyboard shortcut ────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !$btnNext.classList.contains('hidden') && document.activeElement !== $input) {
    $btnNext.click();
  }
});

// ── Init ────────────────────────────────────────────────────
applyLang();
showLessonList();
