/* ============================================
   Novel Curator — Application Logic
   ============================================ */

// ===== SVG ICON LIBRARY =====
const ICONS = {
  // Genre / cover icons
  fantasy:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="M9 15l3-3 3 3"/></svg>',
  scifi:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.34 17.66l-1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/></svg>',
  romance:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  mystery:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  horror:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/><path d="M12 6v6l4 2"/></svg>',
  adventure: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>',
  literary:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>',
  thriller:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  historical:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-4h6v4"/><path d="M9 12h.01"/><path d="M15 12h.01"/></svg>',
  comedy:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
  // UI meta icons
  chapters:  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  rating:    '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  // Empty state icons
  complete:  '<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  list:      '<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
  logo:      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
};

// ===== SAMPLE DATA =====
const GENRES = [
  { id: 'fantasy',    label: 'Fantasy' },
  { id: 'scifi',      label: 'Sci-Fi' },
  { id: 'romance',    label: 'Romance' },
  { id: 'mystery',    label: 'Mystery' },
  { id: 'horror',     label: 'Horror' },
  { id: 'adventure',  label: 'Adventure' },
  { id: 'literary',   label: 'Literary' },
  { id: 'thriller',   label: 'Thriller' },
  { id: 'historical', label: 'Historical' },
  { id: 'comedy',     label: 'Comedy' },
];

const NOVELS = [
  {
    id: 1,
    title: "The Last Ember of Arathis",
    author: "Lysandra Vail",
    genres: ["fantasy"],
    tags: ["Epic Fantasy", "Magic System", "Chosen One"],
    status: "Ongoing",
    chapters: 247,
    rating: 4.7,
    synopsis: "When the ancient Ember that sustains all magic begins to flicker and die, a reluctant blacksmith's apprentice discovers she is the last living descendant of the Arathian flame-weavers. Hunted by shadow courts and guided by a blind oracle, she must journey across fractured kingdoms to reignite the source — or watch civilisation crumble into darkness.",
    coverClass: "cover-fantasy",
    coverIcon: "fantasy"
  },
  {
    id: 2,
    title: "Neon Veins",
    author: "Kai Mercer",
    genres: ["scifi"],
    tags: ["Cyberpunk", "AI", "Noir"],
    status: "Completed",
    chapters: 188,
    rating: 4.5,
    synopsis: "In the rain-soaked megacity of Neo Kyoto, bioware hacker Ren Sato takes a contract to extract data from a rogue AI — only to discover the AI is sentient, desperate, and carrying memories of a life that might have been his own. As corporate kill-squads close in, Ren must decide what it means to be human in a world of synthetic minds.",
    coverClass: "cover-scifi",
    coverIcon: "scifi"
  },
  {
    id: 3,
    title: "Letters to a Stranger",
    author: "Camille Fontaine",
    genres: ["romance"],
    tags: ["Slow Burn", "Pen Pals", "Second Chance"],
    status: "Completed",
    chapters: 96,
    rating: 4.8,
    synopsis: "After a mix-up at a Parisian bookshop, two strangers begin exchanging letters tucked inside second-hand novels. Neither knows the other's name, yet their words become an anchor through heartbreak, career upheaval, and the terrifying thrill of falling in love with someone you've never met.",
    coverClass: "cover-romance",
    coverIcon: "romance"
  },
  {
    id: 4,
    title: "The Vanishing at Hollow Creek",
    author: "Desmond Hale",
    genres: ["mystery"],
    tags: ["Small Town", "Cold Case", "Dual Timeline"],
    status: "Completed",
    chapters: 132,
    rating: 4.4,
    synopsis: "Twenty years after a teenage girl vanished from the quiet town of Hollow Creek, an investigative journalist returns home to re-examine the case. But the deeper she digs, the more she realises the town's silence isn't grief — it's complicity. And someone will do anything to keep the past buried.",
    coverClass: "cover-mystery",
    coverIcon: "mystery"
  },
  {
    id: 5,
    title: "The Bone Garden",
    author: "Sienna Blackwood",
    genres: ["horror"],
    tags: ["Gothic", "Haunted House", "Psychological"],
    status: "Ongoing",
    chapters: 73,
    rating: 4.3,
    synopsis: "Archaeologist Maren Cole inherits a decaying Victorian estate from a grandmother she never knew. Beneath the overgrown garden lie bones — hundreds of them — arranged in patterns that predate the house by centuries. As Maren excavates the truth, the house begins to remember her, too.",
    coverClass: "cover-horror",
    coverIcon: "horror"
  },
  {
    id: 6,
    title: "Sky Road",
    author: "Tomas Achebe",
    genres: ["adventure"],
    tags: ["Exploration", "Survival", "Found Family"],
    status: "Ongoing",
    chapters: 156,
    rating: 4.6,
    synopsis: "A disgraced cartographer, a mute engineer, and a twelve-year-old stowaway set out to map the Sky Road — a chain of floating islands drifting across an uncharted ocean. With dwindling supplies and rival expeditions on their tail, they must learn to trust each other or be lost to the clouds forever.",
    coverClass: "cover-adventure",
    coverIcon: "adventure"
  },
  {
    id: 7,
    title: "All the Quiet Between",
    author: "Harper Ellison",
    genres: ["literary"],
    tags: ["Introspective", "Family Drama", "Grief"],
    status: "Completed",
    chapters: 64,
    rating: 4.9,
    synopsis: "In the year after her mother's death, June dismantles the family home room by room. Each object — a cracked teapot, a box of unsent letters, a dress still smelling of jasmine — unlocks a memory, a secret, or a conversation that should have happened. A luminous meditation on loss, silence, and the things we inherit.",
    coverClass: "cover-literary",
    coverIcon: "literary"
  },
  {
    id: 8,
    title: "Dead Drop",
    author: "Viktor Rahn",
    genres: ["thriller"],
    tags: ["Espionage", "Fast-Paced", "Conspiracy"],
    status: "Completed",
    chapters: 204,
    rating: 4.2,
    synopsis: "CIA analyst Maya Chen intercepts a coded message that was never meant for American eyes. Within hours, three agents are dead and Maya is running — not from enemies abroad, but from her own agency. With a 72-hour window before a catastrophic false-flag attack, she must expose the conspiracy from the inside.",
    coverClass: "cover-thriller",
    coverIcon: "thriller"
  },
  {
    id: 9,
    title: "The Cartographer's Daughter",
    author: "Isabelle de Marchetti",
    genres: ["historical"],
    tags: ["Renaissance", "Art", "Political Intrigue"],
    status: "Completed",
    chapters: 178,
    rating: 4.6,
    synopsis: "Florence, 1497. When her father is imprisoned for heresy, seventeen-year-old Lucia takes over his workshop, forging maps for the Medici court while secretly encoding escape routes for condemned scholars. But when a mysterious commission arrives from the Vatican itself, Lucia must navigate a labyrinth of art, power, and betrayal.",
    coverClass: "cover-historical",
    coverIcon: "historical"
  },
  {
    id: 10,
    title: "Deus Error Machina",
    author: "Priya Chakraborty",
    genres: ["comedy", "scifi"],
    tags: ["Satire", "Workplace Humour", "AI"],
    status: "Ongoing",
    chapters: 89,
    rating: 4.5,
    synopsis: "When a mid-level IT technician accidentally uploads her consciousness into the company's new AI assistant, she discovers corporate life is even worse from the inside. Now she's fielding existential crises from the chatbot, dodging a VP who wants to 'optimise' her, and trying to get back into her body before the free trial expires.",
    coverClass: "cover-comedy",
    coverIcon: "comedy"
  },
  {
    id: 11,
    title: "Thornfield Rising",
    author: "Elara Quinn",
    genres: ["fantasy", "romance"],
    tags: ["Dark Academia", "Rivals to Lovers", "Magic School"],
    status: "Ongoing",
    chapters: 134,
    rating: 4.7,
    synopsis: "At the ancient Thornfield Academy, where students wield ink-based sorcery, two rival scholars compete for the only seat on the Arcane Council. But when forbidden glyphs begin appearing across campus — glyphs that kill — they must set aside their bitter rivalry and work together. Falling for each other was not part of the plan.",
    coverClass: "cover-fantasy",
    coverIcon: "fantasy"
  },
  {
    id: 12,
    title: "The Silence Protocol",
    author: "James Whitford",
    genres: ["scifi", "thriller"],
    tags: ["Space Opera", "Military", "First Contact"],
    status: "Ongoing",
    chapters: 312,
    rating: 4.4,
    synopsis: "Humanity's deep-space listening array picks up a signal: a perfect silence in the cosmic background radiation, shaped like a warning. Captain Lena Vasquez and her crew are sent to investigate the source at the galaxy's edge. What they find isn't an alien civilisation — it's what's left after one goes quiet.",
    coverClass: "cover-scifi",
    coverIcon: "scifi"
  },
  {
    id: 13,
    title: "Rosemary and Rue",
    author: "Aoife Brennan",
    genres: ["romance", "literary"],
    tags: ["LGBTQ+", "Small Town", "Healing"],
    status: "Completed",
    chapters: 78,
    rating: 4.8,
    synopsis: "After a public breakdown ends her career in London, chef Niamh retreats to her grandmother's cottage in rural Kerry. There she meets Saoirse — a laconic beekeeper with a greenhouse full of secrets and no interest in being anyone's manic pixie dream girl. A warm, honest story about rebuilding from scratch.",
    coverClass: "cover-romance",
    coverIcon: "romance"
  },
  {
    id: 14,
    title: "Echoes in the Abattoir",
    author: "Marcus Crane",
    genres: ["horror", "mystery"],
    tags: ["Cosmic Horror", "Unreliable Narrator", "Rural"],
    status: "Completed",
    chapters: 102,
    rating: 4.1,
    synopsis: "A livestock inspector is called to a remote abattoir where workers are reporting impossible things: animals that won't die, meat that rearranges itself, a humming from beneath the killing floor. His report will be deemed 'inconclusive.' His sanity will not be so lucky.",
    coverClass: "cover-horror",
    coverIcon: "horror"
  },
  {
    id: 15,
    title: "The Mapmaker's Gambit",
    author: "Rafael dos Santos",
    genres: ["adventure", "historical"],
    tags: ["Age of Sail", "Treasure Hunt", "Rivalry"],
    status: "Completed",
    chapters: 221,
    rating: 4.5,
    synopsis: "1718. Two rival cartographers — one a disgraced Portuguese noble, the other a formerly enslaved polyglot — race across the Atlantic following fragments of a map that promises something far stranger than gold. Their competition becomes an unlikely partnership as they face storms, mutiny, and the question of what's worth finding.",
    coverClass: "cover-adventure",
    coverIcon: "adventure"
  },
];

// ===== STATE =====
const state = {
  selectedGenres: new Set(),
  deck: [],           // novels in current session (filtered, shuffled)
  currentIndex: 0,
  shortlist: [],       // shortlisted novel objects
  history: [],         // for undo: { novel, action }
  previousScreen: 'swipe',
};

// ===== DOM REFS =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const dom = {
  genreGrid:       $('#genre-grid'),
  btnStart:        $('#btn-start'),
  screenWelcome:   $('#screen-welcome'),
  screenSwipe:     $('#screen-swipe'),
  screenShortlist: $('#screen-shortlist'),
  swipeArea:       $('#swipe-area'),
  swipeControls:   $('#swipe-controls'),
  swipeHint:       $('#swipe-hint'),
  emptyState:      $('#empty-state'),
  btnSkip:         $('#btn-skip'),
  btnShortlist:    $('#btn-shortlist'),
  btnUndo:         $('#btn-undo'),
  btnShortlistView:$('#btn-shortlist-view'),
  shortlistBadge:  $('#shortlist-badge'),
  shortlistGrid:   $('#shortlist-grid'),
  shortlistEmpty:  $('#shortlist-empty'),
  btnBackSwipe:    $('#btn-back-swipe'),
  btnClear:        $('#btn-clear-shortlist'),
  btnNewGenres:    $('#btn-new-genres'),
  btnViewShortlistEmpty: $('#btn-view-shortlist-empty'),
  logoHome:        $('#logo-home'),
  toast:           $('#toast'),
};

// ===== CATALOGUE CONTRACT NORMALIZATION =====
function normalizeNovel(raw) {
  if (!raw) return null;
  const genres = Array.isArray(raw.genres)
    ? raw.genres
    : (raw.genre ? [raw.genre] : ['literary']);
  const tags = Array.isArray(raw.tags) ? raw.tags : [];
  const primaryGenre = genres[0] || 'literary';

  return {
    id: raw.id !== undefined && raw.id !== null ? raw.id : Math.random().toString(36).substring(2, 9),
    title: raw.title ? String(raw.title) : 'Untitled Novel',
    author: raw.author ? String(raw.author) : '',
    synopsis: raw.synopsis || raw.description || 'No description available for this novel.',
    genres: genres,
    tags: tags,
    status: raw.status ? String(raw.status) : '',
    chapters: typeof raw.chapters === 'number' ? raw.chapters : null,
    rating: typeof raw.rating === 'number' ? raw.rating : null,
    coverImage: raw.coverImage || raw.coverUrl || raw.cover || '',
    coverClass: raw.coverClass || `cover-${primaryGenre}`,
    coverIcon: raw.coverIcon || (ICONS[primaryGenre] ? primaryGenre : 'literary'),
  };
}

// ===== INITIALIZATION =====
function init() {
  renderGenres();
  bindEvents();
  loadState();
}

function loadState() {
  try {
    const saved = localStorage.getItem('novelswipe_shortlist');
    if (saved) {
      state.shortlist = JSON.parse(saved);
      updateBadge();
    }
  } catch (_) {}
}

function saveState() {
  try {
    localStorage.setItem('novelswipe_shortlist', JSON.stringify(state.shortlist));
  } catch (_) {}
}

// ===== GENRE SELECTION =====
function renderGenres() {
  dom.genreGrid.innerHTML = GENRES.map(g =>
    `<button class="genre-chip" data-genre="${g.id}" id="genre-${g.id}"><span class="genre-icon">${ICONS[g.id]}</span>${g.label}</button>`
  ).join('');
}

function toggleGenre(genreId) {
  if (state.selectedGenres.has(genreId)) {
    state.selectedGenres.delete(genreId);
  } else {
    state.selectedGenres.add(genreId);
  }
  // Update UI
  $$('.genre-chip').forEach(chip => {
    chip.classList.toggle('selected', state.selectedGenres.has(chip.dataset.genre));
  });
  dom.btnStart.disabled = state.selectedGenres.size === 0;
}

// ===== SCREEN MANAGEMENT =====
function showScreen(screenId) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  $(`#screen-${screenId}`).classList.add('active');
}

// ===== DECK BUILDING =====
function buildDeck() {
  const normalized = NOVELS.map(normalizeNovel).filter(Boolean);
  const filtered = normalized.filter(n =>
    n.genres.some(g => state.selectedGenres.has(g))
  );
  // Shuffle
  state.deck = [...filtered].sort(() => Math.random() - 0.5);
  state.currentIndex = 0;
  state.history = [];
  dom.btnUndo.disabled = true;
}

// ===== START SWIPING =====
function startSwiping() {
  buildDeck();
  showScreen('swipe');
  renderCards();
}

// ===== CARD RENDERING =====
function renderCards() {
  // Clear existing cards
  dom.swipeArea.querySelectorAll('.novel-card').forEach(c => c.remove());

  if (state.currentIndex >= state.deck.length) {
    showEmptyState();
    return;
  }

  hideEmptyState();
  dom.swipeControls.style.display = '';
  dom.swipeHint.style.display = '';

  // Render up to 3 cards (stacked)
  const cardsToShow = Math.min(3, state.deck.length - state.currentIndex);
  for (let i = cardsToShow - 1; i >= 0; i--) {
    const novel = state.deck[state.currentIndex + i];
    const card = createCardElement(novel);
    if (i === 0) {
      card.classList.add('top-card');
      setupSwipeGesture(card, novel);
    } else if (i === 1) {
      card.classList.add('stack-1');
    } else {
      card.classList.add('stack-2');
    }
    dom.swipeArea.prepend(card);
  }
}

function createCardElement(rawNovel) {
  const novel = normalizeNovel(rawNovel);
  const card = document.createElement('div');
  card.className = 'novel-card';
  card.id = `card-${novel.id}`;

  // Cover: image if available, else clothbound emblem
  const coverHtml = novel.coverImage
    ? `<img src="${novel.coverImage}" alt="${novel.title}" class="card-cover-img" loading="lazy" />`
    : `<div class="card-cover-bg ${novel.coverClass || 'cover-default'}"><span class="cover-icon">${ICONS[novel.coverIcon] || ICONS.literary}</span></div>`;

  // Optional status badge
  const statusHtml = novel.status
    ? `<div class="card-status status-${novel.status.toLowerCase()}">${novel.status}</div>`
    : '';

  // Optional author
  const authorHtml = novel.author
    ? `<p class="card-author">by ${novel.author}</p>`
    : '';

  // Optional tags
  const tagsHtml = novel.tags && novel.tags.length > 0
    ? `<div class="card-tags">${novel.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>`
    : '';

  // Optional meta items (chapters, rating, genres)
  const metaItems = [];
  if (novel.chapters !== null) {
    metaItems.push(`<span class="card-meta-item">${ICONS.chapters} ${novel.chapters} chapters</span>`);
  }
  if (novel.rating !== null) {
    metaItems.push(`<span class="card-meta-item">${ICONS.rating} ${novel.rating}</span>`);
  }
  if (novel.genres && novel.genres.length > 0) {
    const genreLabels = novel.genres.map(g => GENRES.find(x => x.id === g)?.label || g).join(', ');
    metaItems.push(`<span class="card-meta-item">${genreLabels}</span>`);
  }
  const metaHtml = metaItems.length > 0
    ? `<div class="card-meta">${metaItems.join('')}</div>`
    : '';

  card.innerHTML = `
    <div class="card-cover">
      ${coverHtml}
      <div class="card-cover-overlay"></div>
      <div class="card-stamp like-stamp">SAVE</div>
      <div class="card-stamp skip-stamp">SKIP</div>
      ${statusHtml}
    </div>
    <div class="card-body">
      <h2 class="card-title">${novel.title}</h2>
      ${authorHtml}
      ${tagsHtml}
      <p class="card-synopsis" title="Click or press Enter to expand/collapse synopsis" tabindex="0" role="button" aria-expanded="false">${novel.synopsis}</p>
      ${metaHtml}
    </div>
  `;

  // Click / Enter on synopsis to expand long descriptions
  const synopsisEl = card.querySelector('.card-synopsis');
  if (synopsisEl) {
    const toggleExpand = (e) => {
      e.stopPropagation();
      const isExpanded = synopsisEl.classList.toggle('expanded');
      synopsisEl.setAttribute('aria-expanded', isExpanded);
    };
    synopsisEl.addEventListener('click', toggleExpand);
    synopsisEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleExpand(e);
      }
    });
  }

  return card;
}

// ===== SWIPE GESTURE =====
function setupSwipeGesture(card, novel) {
  let startX = 0, startY = 0, currentX = 0, isDragging = false;
  const THRESHOLD = 100;  // px to trigger action

  function onPointerDown(e) {
    if (card.classList.contains('animating')) return;
    isDragging = true;
    startX = e.clientX || e.touches?.[0]?.clientX || 0;
    startY = e.clientY || e.touches?.[0]?.clientY || 0;
    card.classList.add('dragging');
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const clientX = e.clientX || e.touches?.[0]?.clientX || 0;
    currentX = clientX - startX;
    const rotation = currentX * 0.08;
    const opacity = Math.max(0, 1 - Math.abs(currentX) / 400);
    card.style.transform = `translateX(${currentX}px) rotate(${rotation}deg)`;

    // Show stamp
    const likeStamp = card.querySelector('.like-stamp');
    const skipStamp = card.querySelector('.skip-stamp');
    if (currentX > 50) {
      likeStamp.style.opacity = Math.min(1, (currentX - 50) / 80);
      skipStamp.style.opacity = 0;
    } else if (currentX < -50) {
      skipStamp.style.opacity = Math.min(1, (Math.abs(currentX) - 50) / 80);
      likeStamp.style.opacity = 0;
    } else {
      likeStamp.style.opacity = 0;
      skipStamp.style.opacity = 0;
    }
  }

  function onPointerUp() {
    if (!isDragging) return;
    isDragging = false;
    card.classList.remove('dragging');

    if (currentX > THRESHOLD) {
      animateCardOut(card, 'right', () => shortlistNovel(novel));
    } else if (currentX < -THRESHOLD) {
      animateCardOut(card, 'left', () => skipNovel(novel));
    } else {
      // Snap back
      card.style.transition = 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)';
      card.style.transform = '';
      card.querySelector('.like-stamp').style.opacity = 0;
      card.querySelector('.skip-stamp').style.opacity = 0;
      setTimeout(() => { card.style.transition = ''; }, 350);
    }
    currentX = 0;
  }

  // Mouse events
  card.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);

  // Touch events
  card.addEventListener('touchstart', (e) => onPointerDown(e.touches[0]), { passive: true });
  window.addEventListener('touchmove', (e) => onPointerMove(e.touches[0]), { passive: true });
  window.addEventListener('touchend', onPointerUp);

  // Cleanup on card removal
  card._cleanup = () => {
    window.removeEventListener('mousemove', onPointerMove);
    window.removeEventListener('mouseup', onPointerUp);
    window.removeEventListener('touchmove', onPointerMove);
    window.removeEventListener('touchend', onPointerUp);
  };
}

function animateCardOut(card, direction, callback) {
  card._cleanup?.();
  card.classList.add('animating');
  const x = direction === 'right' ? 600 : -600;
  const rot = direction === 'right' ? 30 : -30;
  card.style.transform = `translateX(${x}px) rotate(${rot}deg)`;
  card.style.opacity = '0';
  setTimeout(() => {
    card.remove();
    callback();
  }, 400);
}

// ===== ACTIONS =====
function shortlistNovel(novel) {
  if (!state.shortlist.find(n => n.id === novel.id)) {
    state.shortlist.push(novel);
    saveState();
    updateBadge();
    showToast(`"${novel.title}" added to shortlist`);
  }
  state.history.push({ novel, action: 'shortlist' });
  dom.btnUndo.disabled = false;
  advanceCard();
}

function skipNovel(novel) {
  state.history.push({ novel, action: 'skip' });
  dom.btnUndo.disabled = false;
  advanceCard();
}

function advanceCard() {
  state.currentIndex++;
  renderCards();
}

function undoAction() {
  if (state.history.length === 0) return;
  const last = state.history.pop();
  dom.btnUndo.disabled = state.history.length === 0;

  // Remove from shortlist if it was shortlisted
  if (last.action === 'shortlist') {
    state.shortlist = state.shortlist.filter(n => n.id !== last.novel.id);
    saveState();
    updateBadge();
  }

  state.currentIndex--;
  renderCards();
  showToast('Action undone');
}

// ===== BUTTON SWIPE =====
function handleButtonSkip() {
  const topCard = dom.swipeArea.querySelector('.top-card');
  if (!topCard || state.currentIndex >= state.deck.length) return;
  const novel = state.deck[state.currentIndex];
  animateCardOut(topCard, 'left', () => skipNovel(novel));
}

function handleButtonShortlist() {
  const topCard = dom.swipeArea.querySelector('.top-card');
  if (!topCard || state.currentIndex >= state.deck.length) return;
  const novel = state.deck[state.currentIndex];
  animateCardOut(topCard, 'right', () => shortlistNovel(novel));
}

// ===== SHORTLIST VIEW =====
function renderShortlist() {
  if (state.shortlist.length === 0) {
    dom.shortlistEmpty.style.display = '';
    dom.shortlistGrid.innerHTML = '';
    return;
  }
  dom.shortlistEmpty.style.display = 'none';
  dom.shortlistGrid.innerHTML = state.shortlist.map((rawNovel, idx) => {
    const novel = normalizeNovel(rawNovel);
    const coverHtml = novel.coverImage
      ? `<img src="${novel.coverImage}" alt="${novel.title}" class="card-cover-img" />`
      : `<div class="card-cover-bg ${novel.coverClass || 'cover-default'}"><span class="cover-icon cover-icon-sm">${ICONS[novel.coverIcon] || ICONS.literary}</span></div>`;

    const authorHtml = novel.author
      ? `<p class="card-author">by ${novel.author}</p>`
      : '';

    const tagsHtml = novel.tags && novel.tags.length > 0
      ? `<div class="card-tags">${novel.tags.slice(0, 3).map(t => `<span class="card-tag">${t}</span>`).join('')}</div>`
      : '';

    const metaItems = [];
    if (novel.chapters !== null) {
      metaItems.push(`<span class="card-meta-item">${ICONS.chapters} ${novel.chapters} ch</span>`);
    }
    if (novel.rating !== null) {
      metaItems.push(`<span class="card-meta-item">${ICONS.rating} ${novel.rating}</span>`);
    }
    if (novel.status) {
      metaItems.push(`<span class="card-meta-item status-${novel.status.toLowerCase()}">${novel.status}</span>`);
    }

    return `
      <div class="shortlist-item" style="animation-delay: ${idx * 0.05}s" id="shortlist-${novel.id}">
        <div class="shortlist-item-cover">
          ${coverHtml}
        </div>
        <div class="shortlist-item-info">
          <h4>${novel.title}</h4>
          ${authorHtml}
          ${tagsHtml}
          <div class="card-meta">
            ${metaItems.join('')}
          </div>
        </div>
        <div class="shortlist-item-actions">
          <button class="btn-remove" data-novel-id="${novel.id}" aria-label="Remove ${novel.title} from shortlist" title="Remove from shortlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Bind remove buttons
  dom.shortlistGrid.querySelectorAll('.btn-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.novelId;
      removeFromShortlist(id);
    });
  });
}

function removeFromShortlist(id) {
  state.shortlist = state.shortlist.filter(n => String(n.id) !== String(id));
  saveState();
  updateBadge();
  renderShortlist();
  showToast('Removed from shortlist');
}

function clearShortlist() {
  if (state.shortlist.length === 0) return;
  state.shortlist = [];
  saveState();
  updateBadge();
  renderShortlist();
  showToast('Shortlist cleared');
}

// ===== EMPTY / BADGE =====
function showEmptyState() {
  dom.emptyState.style.display = '';
  dom.swipeControls.style.display = 'none';
  dom.swipeHint.style.display = 'none';
}

function hideEmptyState() {
  dom.emptyState.style.display = 'none';
}

function updateBadge() {
  const count = state.shortlist.length;
  dom.shortlistBadge.textContent = count;
  dom.shortlistBadge.classList.toggle('visible', count > 0);
  dom.btnShortlistView.setAttribute('aria-label', `View shortlist, ${count} item${count === 1 ? '' : 's'} saved`);
}

// ===== TOAST =====
let toastTimer = null;
function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => dom.toast.classList.remove('show'), 2200);
}

// ===== EVENT BINDINGS =====
function bindEvents() {
  // Genre selection
  dom.genreGrid.addEventListener('click', (e) => {
    const chip = e.target.closest('.genre-chip');
    if (chip) toggleGenre(chip.dataset.genre);
  });

  // Start
  dom.btnStart.addEventListener('click', startSwiping);

  // Swipe controls
  dom.btnSkip.addEventListener('click', handleButtonSkip);
  dom.btnShortlist.addEventListener('click', handleButtonShortlist);
  dom.btnUndo.addEventListener('click', undoAction);

  // Shortlist view
  dom.btnShortlistView.addEventListener('click', () => {
    state.previousScreen = document.querySelector('.screen.active')?.id.replace('screen-', '') || 'swipe';
    renderShortlist();
    showScreen('shortlist');
  });

  // Back from shortlist
  dom.btnBackSwipe.addEventListener('click', () => {
    showScreen(state.previousScreen);
  });

  // Clear shortlist
  dom.btnClear.addEventListener('click', clearShortlist);

  // Empty state buttons
  dom.btnNewGenres.addEventListener('click', () => {
    showScreen('welcome');
  });

  dom.btnViewShortlistEmpty.addEventListener('click', () => {
    state.previousScreen = 'swipe';
    renderShortlist();
    showScreen('shortlist');
  });

  // Logo → home
  dom.logoHome.addEventListener('click', () => {
    showScreen('welcome');
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const activeScreen = document.querySelector('.screen.active');

    if (activeScreen?.id === 'screen-swipe') {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        handleButtonSkip();
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        handleButtonShortlist();
      } else if (e.key === 'z' || e.key === 'Z') {
        e.preventDefault();
        undoAction();
      } else if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        dom.btnShortlistView.click();
      }
    } else if (activeScreen?.id === 'screen-shortlist') {
      if (e.key === 'Escape' || e.key === 'Backspace') {
        e.preventDefault();
        dom.btnBackSwipe.click();
      }
    } else if (activeScreen?.id === 'screen-welcome') {
      if (e.key === 'Enter' && !dom.btnStart.disabled) {
        e.preventDefault();
        dom.btnStart.click();
      }
    }
  });
}

// ===== LAUNCH =====
document.addEventListener('DOMContentLoaded', init);
