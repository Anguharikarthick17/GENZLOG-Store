/**
 * GENZLOG STORE — script.js
 * Brand: GENZLOG | SHOP THE NEXT.
 *
 * Discount codes: GENZLOG10 (10% off), WELCOME15 (15% off)
 * Tax: 5% (illustrative — does not represent actual GST)
 * Free shipping threshold: ₹2,000 | Flat shipping: ₹99
 *
 * Money: stored as integer paise internally; converted to ₹ for display.
 */

'use strict';

/* ====================================================
   1. PRODUCT DATA
   ==================================================== */
const PRODUCTS = [
  {
    id: 'p001',
    name: 'Vertex ANC Pro Earbuds',
    category: 'electronics',
    price: 799900,       // paise (₹7,999)
    originalPrice: 1199900,
    description: 'Adaptive noise cancellation with 36-hour total playback. IPX5 water resistance, spatial audio support and touch controls. Includes wireless charging case.',
    image: 'assets/images/prod_earbuds.jpg',
    stock: 12,
    isNew: true,
    isFeatured: true,
    dateAdded: '2026-10-01',
    keywords: ['earbuds', 'wireless', 'audio', 'anc', 'noise cancelling', 'bluetooth']
  },
  {
    id: 'p002',
    name: 'Orbit Series Smartwatch',
    category: 'electronics',
    price: 1299900,
    originalPrice: 1699900,
    description: 'Precision-crafted aluminium case, always-on AMOLED display, GPS, SpO2 sensor and 14-day battery. Health tracking re-engineered for daily life.',
    image: 'assets/images/prod_smartwatch.jpg',
    stock: 8,
    isNew: true,
    isFeatured: true,
    dateAdded: '2026-09-28',
    keywords: ['smartwatch', 'watch', 'fitness', 'health', 'gps', 'amoled', 'wearable']
  },
  {
    id: 'p003',
    name: 'Slate 14 Ultra Laptop',
    category: 'electronics',
    price: 8999900,
    originalPrice: null,
    description: 'Ultra-thin 14-inch laptop. OLED display, 32 GB RAM, 1 TB NVMe SSD. Machined aluminium, under 1.2 kg. Built for power without compromise.',
    image: 'assets/images/prod_laptop.jpg',
    stock: 5,
    isNew: true,
    isFeatured: true,
    dateAdded: '2026-10-05',
    keywords: ['laptop', 'computer', 'ultrabook', 'oled', 'portable', 'computing']
  },
  {
    id: 'p004',
    name: 'Arc Mechanical Keyboard',
    category: 'electronics',
    price: 1249900,
    originalPrice: 1499900,
    description: 'TKL form factor with hot-swappable linear switches. Per-key RGB backlighting, aircraft-grade aluminium frame and braided USB-C cable.',
    image: 'assets/images/prod_keyboard.jpg',
    stock: 20,
    isNew: false,
    isFeatured: false,
    dateAdded: '2026-08-15',
    keywords: ['keyboard', 'mechanical', 'gaming', 'typing', 'peripheral', 'rgb']
  },
  {
    id: 'p005',
    name: 'Phantom MX Mouse',
    category: 'electronics',
    price: 399900,
    originalPrice: 499900,
    description: 'Ergonomic wireless mouse with a precision 25K DPI sensor, near-zero latency wireless at 1ms polling and silent magnetic scroll wheel.',
    image: 'assets/images/prod_mouse.jpg',
    stock: 30,
    isNew: false,
    isFeatured: false,
    dateAdded: '2026-07-20',
    keywords: ['mouse', 'wireless', 'gaming', 'peripheral', 'dpi']
  },
  {
    id: 'p006',
    name: 'Studio Monitor Headphones',
    category: 'electronics',
    price: 2199900,
    originalPrice: 2799900,
    description: 'Reference-grade over-ear headphones. 50 mm planar drivers, foldable titanium frame and detachable balanced cable. For the discerning listener.',
    image: 'assets/images/prod_headphones.jpg',
    stock: 7,
    isNew: false,
    isFeatured: true,
    dateAdded: '2026-09-10',
    keywords: ['headphones', 'studio', 'audio', 'over-ear', 'planar', 'music']
  },
  {
    id: 'p007',
    name: 'Monochrome Utility Jacket',
    category: 'fashion',
    price: 599900,
    originalPrice: 799900,
    description: 'Technical shell jacket in matte charcoal. Articulated fit, 10K waterproof rating, adjustable hood and zippered interior pockets.',
    image: 'assets/images/prod_jacket.jpg',
    stock: 15,
    isNew: true,
    isFeatured: true,
    dateAdded: '2026-10-03',
    keywords: ['jacket', 'utility', 'outerwear', 'waterproof', 'technical']
  },
  {
    id: 'p008',
    name: 'Structured Cargo Trousers',
    category: 'fashion',
    price: 349900,
    originalPrice: 449900,
    description: 'Relaxed-tapered fit with reinforced cargo pockets. Heavyweight Japanese ripstop. Machine washable. Available in graphite and slate.',
    image: 'assets/images/prod_cargo_trousers.jpg',
    stock: 22,
    isNew: false,
    isFeatured: false,
    dateAdded: '2026-08-01',
    keywords: ['trousers', 'cargo', 'pants', 'bottoms', 'streetwear']
  },
  {
    id: 'p009',
    name: 'Heavyweight Oversized Tee',
    category: 'fashion',
    price: 189900,
    originalPrice: null,
    description: '320 GSM combed cotton. Boxy silhouette, reinforced collar, and precision cut for intentional drape. Preshrunk for lasting fit.',
    image: 'assets/images/prod_tee.jpg',
    stock: 50,
    isNew: false,
    isFeatured: false,
    dateAdded: '2026-06-01',
    keywords: ['tshirt', 'tee', 'cotton', 'oversized', 'streetwear', 'casual']
  },
  {
    id: 'p010',
    name: 'Merino Knit Crewneck',
    category: 'fashion',
    price: 479900,
    originalPrice: 599900,
    description: 'Extra-fine 18.5-micron merino wool. Relaxed crew neck with ribbed cuffs and hem. Breathable, odour-resistant and naturally thermoregulating.',
    image: 'assets/images/prod_knit_crewneck.jpg',
    stock: 18,
    isNew: false,
    isFeatured: false,
    dateAdded: '2026-09-15',
    keywords: ['sweater', 'knit', 'merino', 'crewneck', 'wool', 'knitwear']
  },
  {
    id: 'p011',
    name: 'Canvas Runner Low',
    category: 'fashion',
    price: 279900,
    originalPrice: 349900,
    description: 'Vulcanised canvas upper, natural gum rubber sole. Clean profile, cotton lace-up and padded tongue for all-day comfort.',
    image: 'assets/images/prod_canvas_runner.jpg',
    stock: 35,
    isNew: false,
    isFeatured: false,
    dateAdded: '2026-07-01',
    keywords: ['shoes', 'sneakers', 'canvas', 'footwear', 'runner', 'low-top']
  },
  {
    id: 'p012',
    name: 'Structured Tote Bag',
    category: 'accessories',
    price: 449900,
    originalPrice: null,
    description: 'Tumbled leather structured tote. Spacious interior with welt pocket, magnetic closure and detachable crossbody strap. Fits a 15-inch laptop.',
    image: 'assets/images/prod_tote_bag.jpg',
    stock: 10,
    isNew: true,
    isFeatured: true,
    dateAdded: '2026-10-08',
    keywords: ['bag', 'tote', 'leather', 'handbag', 'carry', 'laptop bag']
  },
  {
    id: 'p013',
    name: 'Minimalist Bifold Wallet',
    category: 'accessories',
    price: 149900,
    originalPrice: 199900,
    description: 'Full-grain vegetable-tanned leather bifold. Six card slots, two note pockets, RFID shielding. Slim profile — built to last.',
    image: 'assets/images/prod_wallet.jpg',
    stock: 40,
    isNew: false,
    isFeatured: false,
    dateAdded: '2026-06-15',
    keywords: ['wallet', 'leather', 'bifold', 'rfid', 'card holder', 'slim']
  },
  {
    id: 'p014',
    name: 'Titanium Slim Sunglasses',
    category: 'accessories',
    price: 699900,
    originalPrice: 899900,
    description: 'Lightweight titanium frame, polarised grey lenses with 100% UV400 protection. Adjustable nose pads and spring hinges for a precise fit.',
    image: 'assets/images/prod_sunglasses.jpg',
    stock: 12,
    isNew: true,
    isFeatured: false,
    dateAdded: '2026-09-25',
    keywords: ['sunglasses', 'eyewear', 'titanium', 'polarised', 'uv', 'glasses']
  },
  {
    id: 'p015',
    name: 'Leather Field Watch Strap',
    category: 'accessories',
    price: 119900,
    originalPrice: null,
    description: 'Horween leather NATO strap in aged graphite. Quick-release pins, stainless steel hardware, compatible with 18–22 mm lugs.',
    image: 'assets/images/prod_watch_strap.jpg',
    stock: 0,
    isNew: false,
    isFeatured: false,
    dateAdded: '2026-05-01',
    keywords: ['watch strap', 'leather', 'nato', 'watch band', 'accessories', 'horween']
  },
  {
    id: 'p016',
    name: 'Woven Utility Cap',
    category: 'accessories',
    price: 129900,
    originalPrice: 159900,
    description: 'Six-panel construction in woven cotton-nylon blend. Adjustable strapback, unstructured crown, tonal embroidery. One size.',
    image: 'assets/images/prod_cap.jpg',
    stock: 25,
    isNew: false,
    isFeatured: false,
    dateAdded: '2026-08-20',
    keywords: ['cap', 'hat', 'snapback', 'strapback', 'headwear', 'unstructured']
  }
];

/* ====================================================
   2. DISCOUNT CODES
   ==================================================== */
const DISCOUNT_CODES = {
  'GENZLOG10': { rate: 0.10, label: 'GENZLOG10' },
  'WELCOME15': { rate: 0.15, label: 'WELCOME15' }
};

/* ====================================================
   3. CONSTANTS
   ==================================================== */
const FREE_SHIPPING_THRESHOLD_PAISE = 200000; // ₹2,000
const FLAT_SHIPPING_PAISE           = 9900;   // ₹99
const TAX_RATE                      = 0.05;   // 5% illustrative

/* ====================================================
   4. APPLICATION STATE
   ==================================================== */
let state = {
  cart: [],        // [{ productId, quantity }]
  wishlist: [],    // [productId, …]
  discount: null,  // { code, rate, label } or null
  recentlyViewed: [], // [productId, …] (max 5)
  activeFilter: 'all',
  activeSort: 'featured',
  searchQuery: ''
};

/* ====================================================
   5. STORAGE HELPERS
   ==================================================== */
function safeStorage(op) {
  try { return op(); } catch (e) { return null; }
}

function loadState() {
  const raw = safeStorage(() => ({
    cart: JSON.parse(localStorage.getItem('genz_cart') || '[]'),
    wishlist: JSON.parse(localStorage.getItem('genz_wishlist') || '[]'),
    discount: JSON.parse(localStorage.getItem('genz_discount') || 'null'),
    recentlyViewed: JSON.parse(localStorage.getItem('genz_rv') || '[]')
  }));
  if (!raw) return;

  // Validate cart
  const validIds = new Set(PRODUCTS.map(p => p.id));
  state.cart = (raw.cart || []).filter(item =>
    validIds.has(item.productId) &&
    typeof item.quantity === 'number' &&
    item.quantity >= 1
  ).map(item => {
    const p = PRODUCTS.find(x => x.id === item.productId);
    return { productId: item.productId, quantity: Math.min(item.quantity, p ? p.stock : 1) };
  });

  // Validate wishlist
  state.wishlist = (raw.wishlist || []).filter(id => validIds.has(id));

  // Validate discount
  if (raw.discount && DISCOUNT_CODES[raw.discount.code]) {
    state.discount = raw.discount;
  }

  // Validate recentlyViewed
  state.recentlyViewed = (raw.recentlyViewed || []).filter(id => validIds.has(id)).slice(0, 5);
}

function saveState() {
  safeStorage(() => {
    localStorage.setItem('genz_cart', JSON.stringify(state.cart));
    localStorage.setItem('genz_wishlist', JSON.stringify(state.wishlist));
    localStorage.setItem('genz_discount', JSON.stringify(state.discount));
    localStorage.setItem('genz_rv', JSON.stringify(state.recentlyViewed));
  });
}

/* ====================================================
   6. PRICING ENGINE
   ==================================================== */
function calculateSubtotal() {
  return state.cart.reduce((sum, item) => {
    const p = PRODUCTS.find(x => x.id === item.productId);
    return p ? sum + (p.price * item.quantity) : sum;
  }, 0);
}

function calculateDiscount(subtotal) {
  if (!state.discount) return 0;
  return Math.round(subtotal * state.discount.rate);
}

function calculateTax(subtotalAfterDiscount) {
  return Math.round(subtotalAfterDiscount * TAX_RATE);
}

function calculateShipping(subtotalAfterDiscount) {
  if (subtotalAfterDiscount <= 0) return 0;
  return subtotalAfterDiscount >= FREE_SHIPPING_THRESHOLD_PAISE ? 0 : FLAT_SHIPPING_PAISE;
}

function calculateGrandTotal() {
  const subtotal         = calculateSubtotal();
  const discount         = calculateDiscount(subtotal);
  const afterDiscount    = subtotal - discount;
  const tax              = calculateTax(afterDiscount);
  const shipping         = calculateShipping(afterDiscount);
  const total            = afterDiscount + tax + shipping;
  return { subtotal, discount, afterDiscount, tax, shipping, total };
}

/* ====================================================
   7. CURRENCY FORMATTING
   ==================================================== */
function formatPaise(paise) {
  const rupees = paise / 100;
  return '₹' + rupees.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

/* ====================================================
   8. CART OPERATIONS
   ==================================================== */
function addToCart(productId, quantity = 1) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p || p.stock === 0) return false;

  const existing = state.cart.find(i => i.productId === productId);
  if (existing) {
    const newQty = existing.quantity + quantity;
    if (newQty > p.stock) {
      showToast(`Max ${p.stock} available.`, 'error');
      return false;
    }
    existing.quantity = newQty;
  } else {
    if (quantity > p.stock) { quantity = p.stock; }
    state.cart.push({ productId, quantity });
  }
  saveState();
  renderCart();
  updateCartBadge();
  return true;
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.productId !== productId);
  saveState();
  renderCart();
  updateCartBadge();
}

function updateQuantity(productId, newQty) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const item = state.cart.find(i => i.productId === productId);
  if (!item) return;

  if (newQty < 1) { removeFromCart(productId); return; }
  if (newQty > p.stock) {
    showToast(`Only ${p.stock} in stock.`, 'error');
    newQty = p.stock;
  }
  item.quantity = newQty;
  saveState();
  renderCart();
  updateCartBadge();
}

function clearCart() {
  state.cart = [];
  state.discount = null;
  saveState();
  renderCart();
  updateCartBadge();
}

function getCartItemCount() {
  return state.cart.reduce((s, i) => s + i.quantity, 0);
}

/* ====================================================
   9. WISHLIST OPERATIONS
   ==================================================== */
function toggleWishlist(productId) {
  const idx = state.wishlist.indexOf(productId);
  if (idx === -1) {
    state.wishlist.push(productId);
    showToast('Added to wishlist.', 'success');
  } else {
    state.wishlist.splice(idx, 1);
    showToast('Removed from wishlist.', 'success');
  }
  saveState();
  renderWishlist();
  updateWishlistBadge();
  // Update wishlist buttons in product cards
  document.querySelectorAll(`[data-wishlist-id="${productId}"]`).forEach(btn => {
    btn.classList.toggle('active', state.wishlist.includes(productId));
    btn.setAttribute('aria-label', state.wishlist.includes(productId) ? 'Remove from wishlist' : 'Add to wishlist');
  });
}

/* ====================================================
   10. DISCOUNT OPERATIONS
   ==================================================== */
function applyDiscount(code) {
  const normalised = (code || '').trim().toUpperCase();
  if (!normalised) return;

  if (state.discount) {
    showDiscountMsg('A discount is already applied.', 'error');
    return;
  }

  const found = DISCOUNT_CODES[normalised];
  if (!found) {
    showDiscountMsg('Invalid code. Try GENZLOG10 or WELCOME15.', 'error');
    return;
  }

  state.discount = { code: normalised, rate: found.rate, label: found.label };
  saveState();
  renderCart();
  showDiscountMsg('', '');
  showToast(`${normalised} applied — ${(found.rate * 100).toFixed(0)}% off.`, 'success');
}

function removeDiscount() {
  state.discount = null;
  saveState();
  renderCart();
  document.getElementById('discountInput').value = '';
  showDiscountMsg('', '');
}

function showDiscountMsg(msg, type) {
  const el = document.getElementById('discountMsg');
  el.textContent = msg;
  el.className = 'discount-msg' + (type ? ` discount-msg--${type}` : '');
}

/* ====================================================
   11. RECENTLY VIEWED
   ==================================================== */
function trackRecentlyViewed(productId) {
  state.recentlyViewed = [productId, ...state.recentlyViewed.filter(id => id !== productId)].slice(0, 5);
  saveState();
  renderRecentlyViewed();
}

/* ====================================================
   12. RENDER: PRODUCT CARD
   ==================================================== */
function createProductCard(product, compact = false) {
  const inWishlist   = state.wishlist.includes(product.id);
  const isOutOfStock = product.stock === 0;
  const hasDiscount  = Boolean(product.originalPrice && product.originalPrice > product.price);
  const discount     = hasDiscount
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const card = document.createElement('div');
  card.className = 'product-card' + (isOutOfStock ? ' product-card--out-of-stock' : '');
  card.setAttribute('role', 'listitem');
  card.dataset.productId = product.id;

  // Image & Designed Fallback
  const imgHtml = product.image
    ? `<img class="product-media__img product-card__img" src="${escapeAttr(product.image)}" alt="${escapeAttr(product.name)}" loading="lazy" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex'">`
    : '';
  const placeholderHtml = `<div class="product-media__placeholder product-card__img-placeholder" style="${product.image ? 'display:none' : 'display:flex'}" aria-label="Image placeholder">
    <div class="placeholder-graphic">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
      <span class="placeholder-brand">GENZLOG</span>
    </div>
  </div>`;

  // High-contrast Monochrome Badges
  const badgeHtml = `
    <div class="product-media__badges product-card__badges">
      ${product.isNew ? '<span class="badge badge--new">NEW</span>' : ''}
      ${hasDiscount && discount > 0 ? `<span class="badge badge--sale">-${discount}%</span>` : ''}
    </div>`;

  card.innerHTML = `
    <div class="product-media product-card__img-wrap">
      ${imgHtml}
      ${placeholderHtml}
      ${badgeHtml}
      <button class="product-media__wishlist product-card__wishlist ${inWishlist ? 'active' : ''}"
        data-wishlist-id="${product.id}"
        aria-label="${inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="${inWishlist ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
      <div class="product-media__overlay product-card__overlay">
        <button class="btn btn--ghost btn--sm" data-quick-view="${product.id}" aria-label="Quick view ${escapeAttr(product.name)}" style="flex:1">QUICK VIEW</button>
      </div>
    </div>
    <div class="product-info product-card__body">
      <span class="product-info__category product-card__category">${escapeHtml(product.category)}</span>
      <h3 class="product-info__name product-card__name">${escapeHtml(product.name)}</h3>
      <div class="product-info__pricing product-card__pricing">
        <span class="product-info__price product-card__price">${formatPaise(product.price)}</span>
        ${hasDiscount ? `<span class="product-info__original product-card__original">${formatPaise(product.originalPrice)}</span>` : ''}
      </div>
      <button class="product-info__add-btn product-card__add-btn"
        data-add-cart="${product.id}"
        ${isOutOfStock ? 'disabled aria-disabled="true"' : ''}
        aria-label="Add ${escapeAttr(product.name)} to bag">
        ${isOutOfStock ? 'OUT OF STOCK' : 'ADD TO BAG'}
      </button>
    </div>`;

  return card;
}

/* ====================================================
   13. RENDER: PRODUCT GRID
   ==================================================== */
function getFilteredProducts() {
  let list = [...PRODUCTS];

  if (state.activeFilter !== 'all') {
    list = list.filter(p => p.category === state.activeFilter);
  }

  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.keywords || []).some(k => k.includes(q))
    );
  }

  switch (state.activeSort) {
    case 'price-asc':  list.sort((a, b) => a.price - b.price); break;
    case 'price-desc': list.sort((a, b) => b.price - a.price); break;
    case 'name-asc':   list.sort((a, b) => a.name.localeCompare(b.name)); break;
    case 'newest':     list.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)); break;
    default:           list.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0)); break;
  }
  return list;
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  const countEl = document.getElementById('productCount');
  const filtered = getFilteredProducts();

  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state">
      <svg class="empty-state__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
      <h3 class="empty-state__title">No results found.</h3>
      <p class="empty-state__desc">Try a different keyword or browse all categories.</p>
      <button class="btn btn--ghost" id="clearFiltersBtn">CLEAR FILTERS</button>
    </div>`;
    document.getElementById('clearFiltersBtn')?.addEventListener('click', clearFilters);
  } else {
    filtered.forEach(p => grid.appendChild(createProductCard(p)));
  }

  if (countEl) {
    countEl.textContent = `${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;
  }
}

function clearFilters() {
  state.activeFilter = 'all';
  state.searchQuery = '';
  state.activeSort = 'featured';
  document.getElementById('sortSelect').value = 'featured';
  document.getElementById('navSearchInput').value = '';
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === 'all');
    b.setAttribute('aria-pressed', b.dataset.filter === 'all' ? 'true' : 'false');
  });
  renderProducts();
}

/* ====================================================
   14. RENDER: FEATURED GRID
   ==================================================== */
function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const featured = PRODUCTS.filter(p => p.isFeatured).slice(0, 3);
  grid.innerHTML = '';
  featured.forEach(p => grid.appendChild(createProductCard(p, true)));
}

/* ====================================================
   14B. RENDER: NEW ARRIVALS
   ==================================================== */
function renderNewArrivals() {
  const grid = document.getElementById('newArrivalsGrid');
  if (!grid) return;
  const sorted = [...PRODUCTS].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
  const arrivals = sorted.slice(0, 4);
  grid.innerHTML = '';
  arrivals.forEach(p => grid.appendChild(createProductCard(p)));
}

/* ====================================================
   14C. HERO SLIDESHOW LOGIC
   ==================================================== */
let heroSlideIndex = 0;
let heroSlideTimer = null;
let heroSlidePaused = false;

function initHeroSlideshow() {
  const slideshow = document.getElementById('heroSlideshow');
  if (!slideshow) return;

  const slides = document.querySelectorAll('.hero__slide');
  if (slides.length === 0) return;

  updateHeroSlideUI(0);

  const indicators = document.querySelectorAll('.hero__indicator');
  indicators.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      goToHeroSlide(idx);
      resetHeroSlideTimer();
    });
  });

  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToHeroSlide(heroSlideIndex - 1);
      resetHeroSlideTimer();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToHeroSlide(heroSlideIndex + 1);
      resetHeroSlideTimer();
    });
  }

  slideshow.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      goToHeroSlide(heroSlideIndex - 1);
      resetHeroSlideTimer();
    } else if (e.key === 'ArrowRight') {
      goToHeroSlide(heroSlideIndex + 1);
      resetHeroSlideTimer();
    }
  });

  slideshow.addEventListener('mouseenter', () => { heroSlidePaused = true; });
  slideshow.addEventListener('mouseleave', () => { heroSlidePaused = false; });
  slideshow.addEventListener('focusin', () => { heroSlidePaused = true; });
  slideshow.addEventListener('focusout', () => { heroSlidePaused = false; });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearHeroSlideTimer();
    } else {
      startHeroSlideTimer();
    }
  });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion) {
    startHeroSlideTimer();
  }
}

function updateHeroSlideUI(newIndex) {
  const slides = document.querySelectorAll('.hero__slide');
  const indicators = document.querySelectorAll('.hero__indicator');
  const counterEl = document.getElementById('heroSlideCounter');
  const total = slides.length;
  if (total === 0) return;

  heroSlideIndex = (newIndex + total) % total;

  slides.forEach((slide, idx) => {
    const isActive = idx === heroSlideIndex;
    slide.classList.toggle('active', isActive);
    slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
  });

  indicators.forEach((ind, idx) => {
    const isActive = idx === heroSlideIndex;
    ind.classList.toggle('active', isActive);
    ind.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  if (counterEl) {
    counterEl.textContent = `0${heroSlideIndex + 1} / 0${total}`;
  }
}

function goToHeroSlide(index) {
  updateHeroSlideUI(index);
}

function startHeroSlideTimer() {
  clearHeroSlideTimer();
  heroSlideTimer = setInterval(() => {
    if (!heroSlidePaused) {
      updateHeroSlideUI(heroSlideIndex + 1);
    }
  }, 3000);
}

function clearHeroSlideTimer() {
  if (heroSlideTimer) {
    clearInterval(heroSlideTimer);
    heroSlideTimer = null;
  }
}

function resetHeroSlideTimer() {
  clearHeroSlideTimer();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion) {
    startHeroSlideTimer();
  }
}

/* ====================================================
   14D. SECTION INTERACTIONS (CATEGORIES, EDITORIAL)
   ==================================================== */
function initSectionInteractions() {
  document.querySelectorAll('[data-category-explore]').forEach(panel => {
    panel.addEventListener('click', () => {
      const cat = panel.dataset.categoryExplore;
      if (cat) {
        setFilter(cat);
        document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  document.getElementById('editorialExploreBtn')?.addEventListener('click', () => {
    setFilter('all');
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('viewAllNewArrivalsBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    setFilter('all');
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
  });
}

/* ====================================================
   15. RENDER: CART
   ==================================================== */
function renderCart() {
  renderCartItems();
  renderOrderSummary();
  renderShippingProgress();
  renderDiscountUI();
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const countEl   = document.getElementById('cartDrawerCount');
  const total     = getCartItemCount();

  if (countEl) countEl.textContent = total > 0 ? `${total} item${total !== 1 ? 's' : ''}` : '';

  if (state.cart.length === 0) {
    container.innerHTML = `<div class="cart-empty">
      <svg class="cart-empty__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <h3 class="cart-empty__title">Your bag is empty.</h3>
      <p class="cart-empty__desc">Add something beautiful to get started.</p>
    </div>`;
    return;
  }

  container.innerHTML = '';
  state.cart.forEach(item => {
    const p = PRODUCTS.find(x => x.id === item.productId);
    if (!p) return;
    const lineTotal = p.price * item.quantity;
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.setAttribute('role', 'listitem');
    el.dataset.cartItemId = p.id;
    el.innerHTML = `
      <img class="cart-item__img" src="${escapeAttr(p.image)}" alt="${escapeAttr(p.name)}" loading="lazy" onerror="this.onerror=null;this.src='assets/images/prod_laptop.jpg'">
      <div class="cart-item__body">
        <p class="cart-item__name">${escapeHtml(p.name)}</p>
        <p class="cart-item__unit-price">${formatPaise(p.price)} each</p>
        <div class="cart-item__actions">
          <div class="cart-item__qty" role="group" aria-label="Quantity for ${escapeAttr(p.name)}">
            <button class="cart-item__qty-btn" data-qty-dec="${p.id}" aria-label="Decrease quantity">−</button>
            <span class="cart-item__qty-val" aria-live="polite">${item.quantity}</span>
            <button class="cart-item__qty-btn" data-qty-inc="${p.id}" aria-label="Increase quantity" ${item.quantity >= p.stock ? 'disabled aria-disabled="true"' : ''}>+</button>
          </div>
          <span class="cart-item__subtotal">${formatPaise(lineTotal)}</span>
        </div>
        <button class="cart-item__remove" data-remove-cart="${p.id}" aria-label="Remove ${escapeAttr(p.name)} from bag">Remove</button>
      </div>`;
    container.appendChild(el);
  });
}

function renderOrderSummary(targetId = 'orderSummary') {
  const el = document.getElementById(targetId);
  if (!el) return;
  const { subtotal, discount, afterDiscount, tax, shipping, total } = calculateGrandTotal();

  let html = `
    <div class="order-summary__row">
      <span class="order-summary__label">Subtotal</span>
      <span class="order-summary__value">${formatPaise(subtotal)}</span>
    </div>`;

  if (discount > 0) {
    html += `<div class="order-summary__row">
      <span class="order-summary__label">Discount (${state.discount.label})</span>
      <span class="order-summary__value order-summary__value--discount">−${formatPaise(discount)}</span>
    </div>`;
  }

  html += `
    <div class="order-summary__row">
      <span class="order-summary__label">Estimated Tax (5%)</span>
      <span class="order-summary__value">${formatPaise(tax)}</span>
    </div>
    <div class="order-summary__row">
      <span class="order-summary__label">Shipping</span>
      <span class="order-summary__value ${shipping === 0 ? 'order-summary__value--free' : ''}">${shipping === 0 ? 'FREE' : formatPaise(shipping)}</span>
    </div>
    <div class="order-summary__total-row">
      <span class="order-summary__total-label">Total</span>
      <span class="order-summary__total-value">${formatPaise(total)}</span>
    </div>`;

  el.innerHTML = html;
}

function renderShippingProgress() {
  const el = document.getElementById('shippingProgress');
  if (!el) return;
  const { afterDiscount } = calculateGrandTotal();

  if (state.cart.length === 0) { el.style.display = 'none'; return; }
  el.style.display = '';

  if (afterDiscount >= FREE_SHIPPING_THRESHOLD_PAISE) {
    el.innerHTML = `<p class="shipping-progress__text">🎉 You've unlocked <strong>free shipping!</strong></p>
      <div class="shipping-progress__bar"><div class="shipping-progress__fill" style="width:100%"></div></div>`;
  } else {
    const remaining = FREE_SHIPPING_THRESHOLD_PAISE - afterDiscount;
    const pct = Math.round((afterDiscount / FREE_SHIPPING_THRESHOLD_PAISE) * 100);
    el.innerHTML = `<p class="shipping-progress__text">Add <strong>${formatPaise(remaining)}</strong> more for free shipping</p>
      <div class="shipping-progress__bar"><div class="shipping-progress__fill" style="width:${pct}%"></div></div>`;
  }
}

function renderDiscountUI() {
  const inputArea   = document.getElementById('discountInputArea');
  const appliedArea = document.getElementById('discountAppliedArea');
  const codeEl      = document.getElementById('discountAppliedCode');

  if (state.discount) {
    inputArea.style.display = 'none';
    appliedArea.style.display = '';
    if (codeEl) codeEl.textContent = `${state.discount.label} — ${(state.discount.rate * 100).toFixed(0)}% off`;
  } else {
    inputArea.style.display = '';
    appliedArea.style.display = 'none';
  }
}

/* ====================================================
   16. RENDER: WISHLIST
   ==================================================== */
function renderWishlist() {
  const container = document.getElementById('wishlistItems');
  if (!container) return;

  if (state.wishlist.length === 0) {
    container.innerHTML = `<div class="wishlist-empty">
      <svg style="width:64px;height:64px;color:var(--clr-border)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      <h3 style="font-family:var(--font-primary);font-size:var(--fs-xl);font-weight:700;letter-spacing:-.01em">Nothing saved yet.</h3>
      <p style="font-size:var(--fs-sm);color:var(--clr-muted)">Tap the heart icon on any product.</p>
    </div>`;
    return;
  }

  container.innerHTML = '';
  state.wishlist.forEach(id => {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const el = document.createElement('div');
    el.className = 'wishlist-item';
    el.setAttribute('role', 'listitem');
    el.innerHTML = `
      <img class="wishlist-item__img" src="${escapeAttr(p.image)}" alt="${escapeAttr(p.name)}" loading="lazy" onerror="this.onerror=null;this.src='assets/images/prod_laptop.jpg'">
      <div>
        <p class="wishlist-item__name">${escapeHtml(p.name)}</p>
        <p class="wishlist-item__price">${formatPaise(p.price)}</p>
      </div>
      <button class="wishlist-item__remove" data-wishlist-remove="${p.id}" aria-label="Remove ${escapeAttr(p.name)} from wishlist">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>`;
    container.appendChild(el);
  });
}

/* ====================================================
   17. RENDER: RECENTLY VIEWED
   ==================================================== */
function renderRecentlyViewed() {
  const section = document.getElementById('recentlyViewedSection');
  const grid    = document.getElementById('recentlyViewedGrid');
  if (!section || !grid) return;

  if (state.recentlyViewed.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = '';
  grid.innerHTML = '';
  state.recentlyViewed.forEach(id => {
    const p = PRODUCTS.find(x => x.id === id);
    if (p) grid.appendChild(createProductCard(p));
  });
}

/* ====================================================
   18. RENDER: CHECKOUT
   ==================================================== */
function renderCheckout() {
  // Items
  const itemsEl = document.getElementById('checkoutItems');
  if (itemsEl) {
    itemsEl.innerHTML = '';
    state.cart.forEach(item => {
      const p = PRODUCTS.find(x => x.id === item.productId);
      if (!p) return;
      const el = document.createElement('div');
      el.className = 'checkout-item';
      el.setAttribute('role', 'listitem');
      el.innerHTML = `
        <img class="checkout-item__img" src="${escapeAttr(p.image)}" alt="${escapeAttr(p.name)}" loading="lazy" onerror="this.onerror=null;this.src='assets/images/prod_laptop.jpg'">
        <div>
          <p class="checkout-item__name">${escapeHtml(p.name)}</p>
          <p class="checkout-item__qty">Qty: ${item.quantity}</p>
        </div>
        <span class="checkout-item__price">${formatPaise(p.price * item.quantity)}</span>`;
      itemsEl.appendChild(el);
    });
  }
  renderOrderSummary('checkoutSummary');
}

/* ====================================================
   19. BADGE UPDATES
   ==================================================== */
function updateCartBadge() {
  const count = getCartItemCount();
  const badge = document.getElementById('cartBadge');
  const btn   = document.getElementById('cartToggleBtn');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
    badge.classList.remove('bump');
    requestAnimationFrame(() => badge.classList.add('bump'));
    setTimeout(() => badge.classList.remove('bump'), 300);
  }
  if (btn) btn.setAttribute('aria-label', `Shopping bag (${count} item${count !== 1 ? 's' : ''})`);
}

function updateWishlistBadge() {
  const count = state.wishlist.length;
  const badge = document.getElementById('wishlistBadge');
  const btn   = document.getElementById('wishlistToggleBtn');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
  if (btn) btn.setAttribute('aria-label', `Wishlist (${count} item${count !== 1 ? 's' : ''})`);
}

/* ====================================================
   20. QUICK VIEW MODAL
   ==================================================== */
let quickViewProductId = null;
let quickViewQty = 1;
let lastFocusedElement = null;

function openQuickView(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  lastFocusedElement = document.activeElement;
  quickViewProductId = productId;
  quickViewQty = 1;

  document.getElementById('quickViewCategory').textContent = p.category;
  document.getElementById('quickViewTitle').textContent = p.name;
  document.getElementById('quickViewPrice').textContent = formatPaise(p.price);
  const origEl = document.getElementById('quickViewOriginal');
  origEl.textContent = p.originalPrice ? formatPaise(p.originalPrice) : '';
  document.getElementById('quickViewDesc').textContent = p.description;
  document.getElementById('quickViewImg').src = p.image || '';
  document.getElementById('quickViewImg').alt = p.name;

  const stockEl = document.getElementById('quickViewStock');
  if (p.stock === 0) {
    stockEl.textContent = 'Out of Stock';
    stockEl.className = 'modal__stock modal__stock--out';
  } else if (p.stock <= 5) {
    stockEl.textContent = `Only ${p.stock} left`;
    stockEl.className = 'modal__stock modal__stock--low';
  } else {
    stockEl.textContent = `In Stock (${p.stock})`;
    stockEl.className = 'modal__stock modal__stock--ok';
  }

  document.getElementById('modalQtyVal').textContent = quickViewQty;
  document.getElementById('modalQtyDec').disabled = true;
  document.getElementById('modalQtyInc').disabled = p.stock <= 1;

  const addBtn = document.getElementById('modalAddToCartBtn');
  addBtn.disabled = p.stock === 0;
  addBtn.textContent = p.stock === 0 ? 'OUT OF STOCK' : 'ADD TO BAG';

  const overlay = document.getElementById('quickViewOverlay');
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');

  setTimeout(() => document.getElementById('quickViewClose').focus(), 50);
  trackRecentlyViewed(productId);
}

function closeQuickView() {
  const overlay = document.getElementById('quickViewOverlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
  if (lastFocusedElement) lastFocusedElement.focus();
}

function updateModalQty(delta) {
  const p = PRODUCTS.find(x => x.id === quickViewProductId);
  if (!p) return;
  quickViewQty = Math.max(1, Math.min(quickViewQty + delta, p.stock));
  document.getElementById('modalQtyVal').textContent = quickViewQty;
  document.getElementById('modalQtyDec').disabled = quickViewQty <= 1;
  document.getElementById('modalQtyInc').disabled = quickViewQty >= p.stock;
}

/* ====================================================
   21. DRAWER HELPERS
   ==================================================== */
function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartOverlay').setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
  setTimeout(() => document.getElementById('cartClose').focus(), 50);
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartOverlay').setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
  document.getElementById('cartToggleBtn').focus();
}

function openWishlist() {
  document.getElementById('wishlistDrawer').classList.add('open');
  document.getElementById('wishlistOverlay').classList.add('open');
  document.getElementById('wishlistOverlay').setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
  setTimeout(() => document.getElementById('wishlistClose').focus(), 50);
}

function closeWishlist() {
  document.getElementById('wishlistDrawer').classList.remove('open');
  document.getElementById('wishlistOverlay').classList.remove('open');
  document.getElementById('wishlistOverlay').setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
  document.getElementById('wishlistToggleBtn').focus();
}

/* ====================================================
   22. VIEWS: CHECKOUT / CONFIRMATION
   ==================================================== */
function showCheckout() {
  if (state.cart.length === 0) {
    showToast('Your bag is empty.', 'error');
    return;
  }
  closeCart();
  document.getElementById('mainView').classList.add('hidden');
  document.getElementById('mainView').style.display = 'none';
  document.getElementById('checkoutView').classList.add('active');
  document.getElementById('confirmationView').classList.remove('active');
  renderCheckout();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showMain() {
  document.getElementById('mainView').classList.remove('hidden');
  document.getElementById('mainView').style.display = '';
  document.getElementById('checkoutView').classList.remove('active');
  document.getElementById('confirmationView').classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showConfirmation(refCode) {
  document.getElementById('mainView').style.display = 'none';
  document.getElementById('checkoutView').classList.remove('active');
  document.getElementById('confirmationView').classList.add('active');
  document.getElementById('confirmRef').textContent = `Order Reference: ${refCode}`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ====================================================
   23. CHECKOUT VALIDATION + SUBMISSION
   ==================================================== */
function validateCheckout() {
  const fields = [
    { id: 'fullName',  errId: 'fullNameError',  label: 'Full name',
      fn: v => v.trim().length >= 2 ? '' : 'Please enter your full name.' },
    { id: 'email',     errId: 'emailError',     label: 'Email',
      fn: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Please enter a valid email address.' },
    { id: 'phone',     errId: 'phoneError',     label: 'Phone',
      fn: v => /^[\d\s\+\-]{8,15}$/.test(v.trim()) ? '' : 'Enter a valid phone number.' },
    { id: 'address',   errId: 'addressError',   label: 'Address',
      fn: v => v.trim().length >= 5 ? '' : 'Please enter your street address.' },
    { id: 'city',      errId: 'cityError',      label: 'City',
      fn: v => v.trim().length >= 2 ? '' : 'Please enter your city.' },
    { id: 'state',     errId: 'stateError',     label: 'State',
      fn: v => v.trim().length >= 2 ? '' : 'Please enter your state.' },
    { id: 'pincode',   errId: 'pincodeError',   label: 'PIN code',
      fn: v => /^\d{6}$/.test(v.trim()) ? '' : 'Enter a valid 6-digit PIN code.' }
  ];

  let isValid = true;
  fields.forEach(f => {
    const input  = document.getElementById(f.id);
    const errEl  = document.getElementById(f.errId);
    const errMsg = f.fn(input.value);
    if (errMsg) {
      input.classList.add('error');
      errEl.textContent = errMsg;
      errEl.classList.add('visible');
      isValid = false;
    } else {
      input.classList.remove('error');
      errEl.textContent = '';
      errEl.classList.remove('visible');
    }
  });

  if (state.cart.length === 0) {
    showToast('Your bag is empty.', 'error');
    isValid = false;
  }

  return isValid;
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  if (!validateCheckout()) return;

  const refCode = 'GZ' + Date.now().toString(36).toUpperCase();
  clearCart();
  showConfirmation(refCode);
}

/* ====================================================
   24. TOAST NOTIFICATIONS
   ==================================================== */
const MAX_TOASTS = 3;

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const existing  = container.querySelectorAll('.toast');
  if (existing.length >= MAX_TOASTS) existing[0].remove();

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.textContent = message;

  container.appendChild(toast);
  toast.addEventListener('animationend', e => {
    if (e.animationName === 'toastOut') toast.remove();
  });
}

/* ====================================================
   25. NAVIGATION HELPERS
   ==================================================== */
function navigateTo(target) {
  showMain();
  closeMobileMenu();
  setTimeout(() => {
    if (target === 'discover') {
      document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Set filter and scroll to collection
      setFilter(target);
      document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, 50);
}

function setFilter(filter) {
  state.activeFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => {
    const match = b.dataset.filter === filter;
    b.classList.toggle('active', match);
    b.setAttribute('aria-pressed', match ? 'true' : 'false');
  });
  renderProducts();
}

function closeMobileMenu() {
  const menu   = document.getElementById('mobileMenu');
  const toggle = document.getElementById('mobileMenuToggle');
  menu.classList.remove('open');
  toggle.classList.remove('active');
  toggle.setAttribute('aria-expanded', 'false');
}

/* ====================================================
   26. SECURITY HELPERS
   ==================================================== */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function escapeAttr(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* ====================================================
   27. EVENT DELEGATION
   ==================================================== */
function initEventDelegation() {
  // Product grid — add to cart, quick view, wishlist
  document.getElementById('productGrid')?.addEventListener('click', handleGridClick);
  document.getElementById('featuredGrid')?.addEventListener('click', handleGridClick);
  document.getElementById('newArrivalsGrid')?.addEventListener('click', handleGridClick);
  document.getElementById('recentlyViewedGrid')?.addEventListener('click', handleGridClick);
  document.getElementById('heroSlidesTrack')?.addEventListener('click', handleGridClick);

  // Cart items
  document.getElementById('cartItems')?.addEventListener('click', handleCartClick);

  // Wishlist items
  document.getElementById('wishlistItems')?.addEventListener('click', e => {
    const removeBtn = e.target.closest('[data-wishlist-remove]');
    if (removeBtn) {
      const id = removeBtn.dataset.wishlistRemove;
      toggleWishlist(id);
    }
  });
}

function handleGridClick(e) {
  const addBtn      = e.target.closest('[data-add-cart]');
  const quickBtn    = e.target.closest('[data-quick-view]');
  const wishlistBtn = e.target.closest('[data-wishlist-id]');

  if (addBtn && !addBtn.disabled) {
    const id = addBtn.dataset.addCart;
    const ok = addToCart(id, 1);
    if (ok) {
      const p = PRODUCTS.find(x => x.id === id);
      showToast(`${p ? p.name : 'Product'} added to bag.`, 'success');
      addBtn.textContent = 'ADDED ✓';
      addBtn.classList.add('added');
      setTimeout(() => {
        const p2 = PRODUCTS.find(x => x.id === id);
        addBtn.textContent = p2 && p2.stock === 0 ? 'OUT OF STOCK' : 'ADD TO BAG';
        addBtn.classList.remove('added');
      }, 1500);
    }
  } else if (quickBtn) {
    openQuickView(quickBtn.dataset.quickView);
  } else if (wishlistBtn) {
    toggleWishlist(wishlistBtn.dataset.wishlistId);
  }
}

function handleCartClick(e) {
  const decBtn    = e.target.closest('[data-qty-dec]');
  const incBtn    = e.target.closest('[data-qty-inc]');
  const removeBtn = e.target.closest('[data-remove-cart]');

  if (decBtn) {
    const id   = decBtn.dataset.qtyDec;
    const item = state.cart.find(i => i.productId === id);
    if (item) updateQuantity(id, item.quantity - 1);
  } else if (incBtn && !incBtn.disabled) {
    const id   = incBtn.dataset.qtyInc;
    const item = state.cart.find(i => i.productId === id);
    if (item) updateQuantity(id, item.quantity + 1);
  } else if (removeBtn) {
    const id = removeBtn.dataset.removeCart;
    const p  = PRODUCTS.find(x => x.id === id);
    removeFromCart(id);
    showToast(`${p ? p.name : 'Item'} removed.`, 'success');
  }
}

/* ====================================================
   28. KEYBOARD TRAP (modals/drawers)
   ==================================================== */
function trapFocus(container, e) {
  const focusable = container.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex="0"]');
  const first = focusable[0];
  const last  = focusable[focusable.length - 1];
  if (e.key === 'Tab') {
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }
}

/* ====================================================
   29. INIT — WIRE UP ALL UI
   ==================================================== */
function init() {
  loadState();

  // Render initial UI
  renderProducts();
  renderFeatured();
  renderNewArrivals();
  initHeroSlideshow();
  initSectionInteractions();
  renderCart();
  renderWishlist();
  renderRecentlyViewed();
  updateCartBadge();
  updateWishlistBadge();

  // Footer copyright
  document.getElementById('footerCopy').textContent = `© ${new Date().getFullYear()} GENZLOG. All rights reserved.`;

  // Event delegation
  initEventDelegation();

  // ── Navigation ──
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => navigateTo(el.dataset.nav));
  });

  // Mobile menu toggle
  document.getElementById('mobileMenuToggle').addEventListener('click', function () {
    const menu   = document.getElementById('mobileMenu');
    const isOpen = menu.classList.toggle('open');
    this.classList.toggle('active', isOpen);
    this.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // ── Search ──
  const searchToggle  = document.getElementById('searchToggleBtn');
  const searchWrap    = document.getElementById('navSearchWrap');
  const searchInput   = document.getElementById('navSearchInput');
  const searchClear   = document.getElementById('navSearchClear');

  searchToggle.addEventListener('click', () => {
    const isOpen = searchWrap.classList.toggle('open');
    searchToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (isOpen) setTimeout(() => searchInput.focus(), 300);
    else { searchInput.value = ''; state.searchQuery = ''; renderProducts(); }
  });

  searchInput.addEventListener('input', () => {
    state.searchQuery = searchInput.value.trim();
    renderProducts();
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    renderProducts();
    searchInput.focus();
  });

  // ── Cart ──
  document.getElementById('cartToggleBtn').addEventListener('click', () => { renderCart(); openCart(); });
  document.getElementById('cartClose').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
  document.getElementById('continueShoppingBtn').addEventListener('click', closeCart);

  // ── Wishlist ──
  document.getElementById('wishlistToggleBtn').addEventListener('click', () => { renderWishlist(); openWishlist(); });
  document.getElementById('wishlistClose').addEventListener('click', closeWishlist);
  document.getElementById('wishlistOverlay').addEventListener('click', closeWishlist);

  // ── Quick View ──
  document.getElementById('quickViewClose').addEventListener('click', closeQuickView);
  document.getElementById('quickViewOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('quickViewOverlay')) closeQuickView();
  });
  document.getElementById('modalQtyDec').addEventListener('click', () => updateModalQty(-1));
  document.getElementById('modalQtyInc').addEventListener('click', () => updateModalQty(1));
  document.getElementById('modalAddToCartBtn').addEventListener('click', () => {
    if (!quickViewProductId) return;
    const ok = addToCart(quickViewProductId, quickViewQty);
    if (ok) {
      const p = PRODUCTS.find(x => x.id === quickViewProductId);
      showToast(`${p ? p.name : 'Product'} added to bag.`, 'success');
      closeQuickView();
    }
  });
  document.getElementById('quickViewOverlay').addEventListener('keydown', e => {
    if (e.key === 'Escape') closeQuickView();
    trapFocus(document.getElementById('quickViewModal'), e);
  });

  // ── Cart drawer keyboard ──
  document.getElementById('cartDrawer').addEventListener('keydown', e => {
    if (e.key === 'Escape') closeCart();
    trapFocus(document.getElementById('cartDrawer'), e);
  });

  // ── Wishlist drawer keyboard ──
  document.getElementById('wishlistDrawer').addEventListener('keydown', e => {
    if (e.key === 'Escape') closeWishlist();
    trapFocus(document.getElementById('wishlistDrawer'), e);
  });

  // ── Discount ──
  document.getElementById('applyDiscountBtn').addEventListener('click', () => {
    applyDiscount(document.getElementById('discountInput').value);
  });
  document.getElementById('discountInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); applyDiscount(document.getElementById('discountInput').value); }
  });
  document.getElementById('removeDiscountBtn').addEventListener('click', () => {
    removeDiscount();
    showToast('Discount removed.', 'success');
  });

  // ── Filters ──
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.dataset.filter));
  });

  // ── Sort ──
  document.getElementById('sortSelect').addEventListener('change', e => {
    state.activeSort = e.target.value;
    renderProducts();
  });

  // ── Hero CTAs ──
  document.getElementById('heroExploreCta').addEventListener('click', () => {
    document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('heroEditionCta').addEventListener('click', () => {
    document.getElementById('featuredSection').scrollIntoView({ behavior: 'smooth' });
  });

  // ── Checkout ──
  document.getElementById('checkoutBtn').addEventListener('click', showCheckout);
  document.getElementById('checkoutBack').addEventListener('click', showMain);
  document.getElementById('checkoutForm').addEventListener('submit', handleCheckoutSubmit);
  document.getElementById('confirmContinue').addEventListener('click', () => {
    showMain();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Clear form errors on input
  document.getElementById('checkoutForm').querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('error');
      const errEl = document.getElementById(input.id + 'Error');
      if (errEl) { errEl.textContent = ''; errEl.classList.remove('visible'); }
    });
  });

  // ── Footer links ──
  document.getElementById('footerWishlist').addEventListener('click', () => { renderWishlist(); openWishlist(); });
  document.getElementById('footerCart').addEventListener('click', () => { renderCart(); openCart(); });

  // ── Navbar scroll effect ──
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  // ── Back to top ──
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── Global keyboard (Escape) ──
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (document.getElementById('cartDrawer').classList.contains('open'))      closeCart();
      if (document.getElementById('wishlistDrawer').classList.contains('open'))  closeWishlist();
      if (document.getElementById('quickViewOverlay').classList.contains('open')) closeQuickView();
      if (document.getElementById('mobileMenu').classList.contains('open'))      closeMobileMenu();
    }
  });
}

/* ====================================================
   30. BOOT
   ==================================================== */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
