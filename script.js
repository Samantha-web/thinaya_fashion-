// ===== DATA LAYER =====
const STORAGE_KEY = 'thinaya_products_v7';
const CART_KEY = 'thinaya_cart';

const IMG = 'https://images.unsplash.com/photo-';
const extraImgs = [
  `${IMG}1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80`,
  `${IMG}1490481651871-ab68de25d43d?auto=format&fit=crop&w=500&q=80`,
  `${IMG}1469334031218-e382a71b716b?auto=format&fit=crop&w=500&q=80`,
  `${IMG}1515372039744-b8f02a3ae446?auto=format&fit=crop&w=500&q=80`,
  `${IMG}1556905055-8f358a7a47b2?auto=format&fit=crop&w=500&q=80`,
  `${IMG}1564257631407-4deb1f99d992?auto=format&fit=crop&w=500&q=80`,
  `${IMG}1539008835657-9e8e9680c956?auto=format&fit=crop&w=500&q=80`,
  `${IMG}1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80`,
];

function makeImages(main, ...extras) {
  return [main, ...extras];
}

const defaultProducts = [
  { id: 1, title: "Royal Red Bridal Lehenga", category: "Bridal", type: "For Sale", price: "RS. 250,000.00", image: `${IMG}1595844730298-b960fa25fa21?auto=format&fit=crop&w=500&q=80`, images: makeImages(`${IMG}1595844730298-b960fa25fa21?auto=format&fit=crop&w=500&q=80`, extraImgs[0], extraImgs[1], extraImgs[2], extraImgs[3]), video: "uploads/videos/01.mp4", status: "Available" },
  { id: 2, title: "Kandyan Golden Saree", category: "Wedding Saree", type: "For Rent", price: "RS. 45,000.00", image: `${IMG}1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80`, images: makeImages(`${IMG}1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80`, extraImgs[2], extraImgs[3]), video: "uploads/videos/01.mp4", status: "Available" },
  { id: 3, title: "Emerald Green Gown", category: "Party Wear", type: "For Rent", price: "RS. 25,000.00", image: `${IMG}1583391733958-6c68b6b02bc3?auto=format&fit=crop&w=500&q=80`, images: makeImages(`${IMG}1583391733958-6c68b6b02bc3?auto=format&fit=crop&w=500&q=80`, extraImgs[4]), video: "", status: "Rented" },
  { id: 4, title: "Velvet Sharara Suit", category: "Designer Wear", type: "For Sale", price: "RS. 120,000.00", image: `${IMG}1600093463592-8e36ae95ef56?auto=format&fit=crop&w=500&q=80`, images: makeImages(`${IMG}1600093463592-8e36ae95ef56?auto=format&fit=crop&w=500&q=80`, extraImgs[5]), video: "", status: "Sold" },
  { id: 5, title: "Ivory Silk Bridal Saree", category: "Wedding Saree", type: "For Sale", price: "RS. 180,000.00", image: `${IMG}1591604021695-0c69b7c05981?auto=format&fit=crop&w=500&q=80`, images: makeImages(`${IMG}1591604021695-0c69b7c05981?auto=format&fit=crop&w=500&q=80`, extraImgs[6], extraImgs[7]), video: "", status: "Available" },
  { id: 6, title: "Blush Pink Reception Gown", category: "Gown", type: "For Rent", price: "RS. 35,000.00", image: `${IMG}1566174053879-31528523f8ae?auto=format&fit=crop&w=500&q=80`, images: makeImages(`${IMG}1566174053879-31528523f8ae?auto=format&fit=crop&w=500&q=80`, extraImgs[0], extraImgs[2], extraImgs[4], extraImgs[5]), video: "uploads/videos/01.mp4", status: "Available" },
  { id: 7, title: "Gold Embroidered Lehenga", category: "Bridal", type: "For Sale", price: "RS. 320,000.00", image: `${IMG}1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80`, images: makeImages(`${IMG}1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80`, extraImgs[1], extraImgs[3]), video: "uploads/videos/01.mp4", status: "Available" },
  { id: 8, title: "Navy Blue Designer Suit", category: "Designer Wear", type: "For Sale", price: "RS. 95,000.00", image: `${IMG}1585487000160-6ebcfceb0d0?auto=format&fit=crop&w=500&q=80`, images: makeImages(`${IMG}1585487000160-6ebcfceb0d0?auto=format&fit=crop&w=500&q=80`, extraImgs[4], extraImgs[5]), video: "", status: "Available" },
  { id: 9, title: "Traditional Kandyan Wedding Saree", category: "Wedding Saree", type: "For Rent", price: "RS. 55,000.00", image: `${IMG}1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80`, images: makeImages(`${IMG}1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80`, extraImgs[6]), video: "", status: "Available" },
  { id: 10, title: "Red & Gold Bridal Saree", category: "Wedding Saree", type: "For Rent", price: "RS. 65,000.00", image: `${IMG}1595844730298-b960fa25fa21?auto=format&fit=crop&w=500&q=80`, images: makeImages(`${IMG}1595844730298-b960fa25fa21?auto=format&fit=crop&w=500&q=80`, extraImgs[7]), video: "", status: "Rented" },
  { id: 11, title: "Pastel Pink Party Saree", category: "Party Wear", type: "For Rent", price: "RS. 18,000.00", image: `${IMG}1600093463592-8e36ae95ef56?auto=format&fit=crop&w=500&q=80`, images: makeImages(`${IMG}1600093463592-8e36ae95ef56?auto=format&fit=crop&w=500&q=80`, extraImgs[0], extraImgs[4]), video: "", status: "Available" },
  { id: 12, title: "Ivory Lace Reception Saree", category: "Wedding Saree", type: "For Rent", price: "RS. 38,000.00", image: `${IMG}1591604021695-0c69b7c05981?auto=format&fit=crop&w=500&q=80`, images: makeImages(`${IMG}1591604021695-0c69b7c05981?auto=format&fit=crop&w=500&q=80`, extraImgs[1]), video: "", status: "Available" },
  { id: 13, title: "Royal Blue Designer Gown", category: "Gown", type: "For Rent", price: "RS. 42,000.00", image: `${IMG}1566174053879-31528523f8ae?auto=format&fit=crop&w=500&q=80`, images: makeImages(`${IMG}1566174053879-31528523f8ae?auto=format&fit=crop&w=500&q=80`, extraImgs[2], extraImgs[5]), video: "", status: "Available" },
  { id: 14, title: "Gold Embroidered Party Saree", category: "Party Wear", type: "For Rent", price: "RS. 22,000.00", image: `${IMG}1583391733958-6c68b6b02bc3?auto=format&fit=crop&w=500&q=80`, images: makeImages(`${IMG}1583391733958-6c68b6b02bc3?auto=format&fit=crop&w=500&q=80`, extraImgs[3]), video: "", status: "Available" },
  { id: 15, title: "Magenta Silk Bridal Lehenga", category: "Bridal", type: "For Rent", price: "RS. 85,000.00", image: `${IMG}1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80`, images: makeImages(`${IMG}1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80`, extraImgs[6], extraImgs[7]), video: "", status: "Available" },
  { id: 16, title: "Teal Green Designer Saree", category: "Designer Wear", type: "For Rent", price: "RS. 28,000.00", image: `${IMG}1585487000160-6ebcfceb0d0?auto=format&fit=crop&w=500&q=80`, images: makeImages(`${IMG}1585487000160-6ebcfceb0d0?auto=format&fit=crop&w=500&q=80`, extraImgs[0], extraImgs[4]), video: "", status: "Available" },
];

function getProductImages(product) {
  if (product.images && product.images.length > 0) return product.images;
  if (product.image) return [product.image];
  return [];
}

function getProducts() {
  try {
    let data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProducts));
      return JSON.parse(JSON.stringify(defaultProducts));
    }
    const parsed = JSON.parse(data);
    if (!Array.isArray(parsed)) throw new Error('Data is not an array');
    const needsMigration = parsed.some(p => !p.type || !p.status || (!p.images && p.image));
    const migrated = parsed.map(p => ({
      ...p,
      type: p.type || 'For Sale',
      status: p.status || 'Available',
      images: p.images || (p.image ? [p.image] : [])
    }));
    if (needsMigration) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
    }
    return migrated;
  } catch (e) {
    console.error('getProducts error:', e);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProducts));
    return JSON.parse(JSON.stringify(defaultProducts));
  }
}

function saveProducts(products) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    localStorage.setItem('thinaya_last_update', Date.now());
  } catch (e) {
    console.error('saveProducts error:', e);
    showToast('Failed to save — storage may be full', 'fa-exclamation-triangle');
  }
}

function getCart() {
  let data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// ===== PAGE DETECTION =====
let currentPageType = 'index';

function getPageType() {
  const fullPath = window.location.pathname.split('/').pop() || 'index.html';
  const path = fullPath.split('?')[0].split('#')[0];
  if (path === 'shop.html') return 'shop';
  if (path === 'rental.html') return 'rental';
  return 'index';
}

// ===== CAROUSELS =====
function initCarousels() {
  document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
    const carousel = wrapper.querySelector('.carousel');
    const prevBtn = wrapper.querySelector('.prev');
    const nextBtn = wrapper.querySelector('.next');

    if (prevBtn && nextBtn && carousel) {
      const cardWidth = carousel.querySelector('.carousel > *')?.offsetWidth || 300;
      const gap = 25;
      const scrollAmount = cardWidth + gap;

      prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });
      nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
    }
  });
}

// ===== TOAST =====
let toastTimer;

function showToast(message, icon = 'fa-check-circle') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  clearTimeout(toastTimer);
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> ${message}`;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== RENDER PRODUCTS =====
let currentProducts = [];

function renderProducts(products, filter = 'All', pageType) {
  const grid = document.getElementById('new-arrivals-grid');
  if (!grid) return;

  currentProducts = products;
  const type = pageType || getPageType();

  let filtered = [];

  if (type === 'shop') {
    filtered = products.filter(p => p.type === 'For Sale');
  } else if (type === 'rental') {
    filtered = products.filter(p => p.type === 'For Rent');
  } else {
    filtered = products;
  }

  if (filter !== 'All') {
    filtered = filtered.filter(p => p.category === filter);
  }

  const toShow = filtered.slice(0, 12);

  grid.innerHTML = '';

  if (toShow.length === 0) {
    const msg = type === 'shop' ? 'No items available for sale yet.' :
                type === 'rental' ? 'No items available for rent yet.' :
                'No products found in this category.';
    grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:60px 20px; color:var(--text-light);"><i class="fa-solid fa-box-open" style="font-size:3rem; margin-bottom:20px; display:block; color:#ddd;"></i><p style="font-size:1.2rem;">${msg}</p></div>`;
    return;
  }

  toShow.forEach(p => {
    const isRent = p.type === 'For Rent';
    const isUnavailable = p.status === 'Sold' || p.status === 'Rented';
    const card = document.createElement('div');
    card.className = 'product-card' + (isUnavailable ? ' product-unavailable' : '');
    card.dataset.id = p.id;

    let statusBadgeHtml = '';
    if (p.status === 'Sold') {
      statusBadgeHtml = '<span class="badge badge-sold">Sold</span>';
    } else if (p.status === 'Rented') {
      statusBadgeHtml = '<span class="badge badge-rented">Rented</span>';
    }

    let actionHtml = '';
    if (isUnavailable) {
      const label = p.status === 'Sold' ? 'Sold Out' : 'Rented Out';
      actionHtml = `<div class="product-unavailable-label">${label}</div>`;
    } else {
      actionHtml = `<button class="btn btn-sm add-to-cart-btn" data-id="${p.id}"><i class="fa-solid fa-bag-shopping"></i> ${isRent ? 'Rent Now' : 'Add to Cart'}</button>`;
    }

    card.innerHTML = `
      <div class="product-img">
        <span class="badge ${isRent ? 'badge-rent' : ''}">${p.category} | ${p.type}</span>
        ${statusBadgeHtml}
        <img src="${getProductImages(p)[0]}" alt="${p.title}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"400\\" height=\\"400\\" fill=\\"%23f0f0f0\\"><rect width=\\"400\\" height=\\"400\\"/><text x=\\"200\\" y=\\"200\\" text-anchor=\\"middle\\" dy=\\".3em\\" font-size=\\"18\\" fill=\\"%23999\\">Image Unavailable</text></svg>'">
        ${p.video ? '<div class="has-video-badge"><i class="fa-solid fa-video"></i></div>' : ''}
        <div class="product-actions">${actionHtml}</div>
      </div>
      <div class="product-info">
        <p class="product-category">${p.category}</p>
        <h4>${p.title}</h4>
        <p class="product-price">${p.price}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

function handleGridClick(e) {
  const addBtn = e.target.closest('.add-to-cart-btn');
  if (addBtn) {
    e.stopPropagation();
    const id = parseInt(addBtn.dataset.id);
    const product = currentProducts.find(p => p.id === id);
    if (product) addToCart(product);
    return;
  }
  const card = e.target.closest('.product-card');
  if (!card || e.target.closest('.product-unavailable-label')) return;
  const id = parseInt(card.dataset.id);
  const product = currentProducts.find(p => p.id === id);
  if (product) openProductModal(product);
}

// ===== FILTERS =====
let sharedProducts = [];

function initFilters(products) {
  sharedProducts = products;
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(sharedProducts, btn.dataset.filter, currentPageType);
    });
  });
}

// ===== CART =====
let cartOpen = false;

function addToCart(product) {
  if (product.status === 'Sold') {
    showToast('This item has been sold and is no longer available', 'fa-ban');
    return;
  }
  if (product.status === 'Rented') {
    showToast('This item is currently rented out', 'fa-ban');
    return;
  }

  let cart = getCart();
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart(cart);
  updateCartBadge();
  renderCartItems();
  showToast(`${product.title} added to cart!`);
}

function removeFromCart(productId) {
  let cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
  updateCartBadge();
  renderCartItems();
}

function updateQty(productId, delta) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  saveCart(cart);
  updateCartBadge();
  renderCartItems();
}

function updateCartBadge() {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = total;
  });
}

function renderCartItems() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total-amount');
  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `<div class="cart-empty"><i class="fa-solid fa-bag-shopping"></i><p>Your cart is empty</p></div>`;
    if (totalEl) totalEl.textContent = 'LKR 0';
    return;
  }

  container.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const priceNum = Math.round(parseFloat(item.price.replace(/[^0-9.]/g, '')));
    total += priceNum * item.qty;

    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="cart-item-img" onerror="this.src='data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"80\\" height=\\"100\\" fill=\\"%23f0f0f0\\"><rect width=\\"80\\" height=\\"100\\"/><text x=\\"40\\" y=\\"50\\" text-anchor=\\"middle\\" dy=\\".3em\\" font-size=\\"10\\" fill=\\"%23999\\">N/A</text></svg>'">
      <div class="cart-item-info">
        <h4>${item.title}</h4>
        <div class="cart-item-price">${item.price}</div>
        <div class="cart-item-qty">
          <button class="qty-minus" data-id="${item.id}">−</button>
          <span>${item.qty}</span>
          <button class="qty-plus" data-id="${item.id}">+</button>
        </div>
      </div>
      <button class="cart-item-remove" data-id="${item.id}"><i class="fa-solid fa-trash-can"></i></button>
    `;
    container.appendChild(div);
  });

  if (totalEl) {
    totalEl.textContent = `LKR ${total.toLocaleString()}`;
  }

  container.querySelectorAll('.qty-minus').forEach(btn => {
    btn.addEventListener('click', () => updateQty(parseInt(btn.dataset.id), -1));
  });
  container.querySelectorAll('.qty-plus').forEach(btn => {
    btn.addEventListener('click', () => updateQty(parseInt(btn.dataset.id), 1));
  });
  container.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
  });
}

function toggleCart() {
  cartOpen = !cartOpen;
  document.getElementById('cart-sidebar')?.classList.toggle('open', cartOpen);
  document.getElementById('cart-overlay')?.classList.toggle('show', cartOpen);
  if (cartOpen) renderCartItems();
}

function initCart() {
  const cartIcon = document.getElementById('cart-toggle');
  const closeBtn = document.getElementById('cart-close');
  const overlay = document.getElementById('cart-overlay');

  if (cartIcon) cartIcon.addEventListener('click', (e) => { e.preventDefault(); toggleCart(); });
  if (closeBtn) closeBtn.addEventListener('click', toggleCart);
  if (overlay) overlay.addEventListener('click', toggleCart);

  updateCartBadge();
}

// ===== CARD POPUP — opens modal for any card type =====
let modalImages = [];
let modalImageIndex = 0;

function updateModalImageNav() {
  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;
  const imgEl = overlay.querySelector('.modal-image-inner');
  const counterEl = document.getElementById('modal-image-counter');
  const prevBtn = document.getElementById('modal-arrow-prev');
  const nextBtn = document.getElementById('modal-arrow-next');

  if (imgEl && modalImages.length > 0) {
    imgEl.src = modalImages[modalImageIndex];
  }

  if (counterEl) {
    counterEl.textContent = modalImages.length > 1 ? `${modalImageIndex + 1}/${modalImages.length}` : '';
  }

  if (prevBtn) prevBtn.style.display = modalImages.length > 1 ? '' : 'none';
  if (nextBtn) nextBtn.style.display = modalImages.length > 1 ? '' : 'none';
}

function prevModalImage() {
  if (modalImages.length < 2) return;
  modalImageIndex = (modalImageIndex - 1 + modalImages.length) % modalImages.length;
  updateModalImageNav();
}

function nextModalImage() {
  if (modalImages.length < 2) return;
  modalImageIndex = (modalImageIndex + 1) % modalImages.length;
  updateModalImageNav();
}

function openCardPopup(data) {
  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;

  modalImages = data.images || (data.image ? [data.image] : []);
  modalImageIndex = 0;

  overlay.querySelector('.modal-image-inner').alt = data.title || '';
  overlay.querySelector('.modal-body h2').textContent = data.title || '';
  updateModalImageNav();

  const badge = overlay.querySelector('.modal-badge');
  const priceEl = overlay.querySelector('.modal-price');
  const modalBtn = overlay.querySelector('.modal-add-btn');
  const videoContainer = overlay.querySelector('.modal-video');
  const statusBadge = overlay.querySelector('.modal-status-badge');

  if (statusBadge) statusBadge.style.display = 'none';

  if (data.isProduct) {
    const p = data.product;
    const isRent = p.type === 'For Rent';
    const isUnavailable = p.status === 'Sold' || p.status === 'Rented';

    badge.textContent = `${p.category} | ${p.type}`;
    badge.classList.remove('badge-rent');
    if (isRent) badge.classList.add('badge-rent');

    if (statusBadge) {
      if (p.status === 'Sold') {
        statusBadge.textContent = 'Sold';
        statusBadge.className = 'badge badge-sold modal-status-badge';
        statusBadge.style.display = 'inline-block';
      } else if (p.status === 'Rented') {
        statusBadge.textContent = 'Rented';
        statusBadge.className = 'badge badge-rented modal-status-badge';
        statusBadge.style.display = 'inline-block';
      }
    }

    priceEl.textContent = p.price;
    priceEl.style.display = 'block';

    let desc = '';
    if (p.status === 'Sold') desc = `This ${p.title.toLowerCase()} has been sold. Check our other stunning pieces available for purchase.`;
    else if (p.status === 'Rented') desc = `This ${p.title.toLowerCase()} is currently rented out. Browse our other available pieces for your special occasion.`;
    else desc = `Exquisite ${p.title.toLowerCase()} — a stunning piece from our ${p.category} collection. ${isRent ? 'Available for rent at a special occasion.' : 'Available for purchase. Crafted with premium materials and fine attention to detail.'}`;
    overlay.querySelector('.modal-desc').textContent = desc;

    if (videoContainer) {
      if (p.video) {
        videoContainer.innerHTML = `<video src="${p.video}" controls style="width:100%;border-radius:8px;margin-top:15px;"></video>`;
        videoContainer.style.display = 'block';
      } else {
        videoContainer.innerHTML = '';
        videoContainer.style.display = 'none';
      }
    }

    if (isUnavailable) {
      const label = p.status === 'Sold' ? 'Sold Out' : 'Rented Out';
      modalBtn.innerHTML = `<i class="fa-solid fa-ban"></i> ${label}`;
      modalBtn.disabled = true;
      modalBtn.style.opacity = '0.5';
      modalBtn.style.cursor = 'not-allowed';
      modalBtn.onclick = null;
    } else {
      modalBtn.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> ${isRent ? 'Rent This Outfit' : 'Add to Cart'}`;
      modalBtn.disabled = false;
      modalBtn.style.opacity = '1';
      modalBtn.style.cursor = 'pointer';
      modalBtn.onclick = () => { addToCart(p); toggleCart(); overlay.classList.remove('show'); };
    }
  } else {
    badge.textContent = data.badge || '';
    badge.classList.remove('badge-rent');
    priceEl.style.display = 'none';
    overlay.querySelector('.modal-desc').textContent = data.description || '';

    if (videoContainer) {
      if (data.video) {
        videoContainer.innerHTML = `<video src="${data.video}" controls style="width:100%;border-radius:8px;margin-top:15px;"></video>`;
        videoContainer.style.display = 'block';
      } else {
        videoContainer.innerHTML = '';
        videoContainer.style.display = 'none';
      }
    }

    if (data.link) {
      modalBtn.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> View Collection`;
      modalBtn.disabled = false;
      modalBtn.style.opacity = '1';
      modalBtn.style.cursor = 'pointer';
      modalBtn.onclick = () => { window.location.href = data.link; };
      modalBtn.style.display = 'block';
    } else {
      modalBtn.style.display = 'none';
    }
  }

  overlay.classList.add('show');
}

// ----- Global popup helpers for cards (called from renderProducts and inline onclick) -----
function openProductModal(product) {
  const images = getProductImages(product);
  openCardPopup({ isProduct: true, product, title: product.title, image: images[0] || '', images });
}

function openCategoryPopup(title, image) {
  openCardPopup({ isProduct: false, title, image, badge: 'Collection', description: `Explore our ${title} collection — traditional and contemporary pieces for your special occasion.`, link: 'shop.html' });
}

function openVideoPopup(title, image, videoSrc) {
  openCardPopup({ isProduct: false, title, image, badge: 'Trending Video', description: `Watch "${title}" — see how this stunning piece looks and moves in real life.`, video: videoSrc || 'uploads/videos/01.mp4' });
}

function openCampaignPopup(title, image, link) {
  openCardPopup({ isProduct: false, title, image, badge: "Editor's Pick", description: `Discover our ${title.toLowerCase()} — curated exclusively for you.`, link: link || '#' });
}

function openTestimonialPopup(author, label, quote) {
  openCardPopup({ isProduct: false, title: author, image: '', badge: label, description: quote });
}

function initModal() {
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  if (!overlay || !closeBtn) return;

  closeBtn.addEventListener('click', () => overlay.classList.remove('show'));
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('show');
  });

  const prevBtn = document.getElementById('modal-arrow-prev');
  const nextBtn = document.getElementById('modal-arrow-next');

  if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevModalImage(); });
  if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextModalImage(); });

  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('show')) return;
    if (e.key === 'ArrowLeft') prevModalImage();
    if (e.key === 'ArrowRight') nextModalImage();
    if (e.key === 'Escape') overlay.classList.remove('show');
  });
}

// ===== SEARCH =====
let searchProducts = [];

function initSearch(products) {
  searchProducts = products;
  const searchIcon = document.getElementById('search-toggle');
  const overlay = document.getElementById('search-overlay');
  const closeBtn = document.getElementById('search-close');
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');

  if (!searchIcon || !overlay) return;

  searchIcon.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.classList.add('show');
    setTimeout(() => input?.focus(), 300);
  });

  if (closeBtn) closeBtn.addEventListener('click', () => overlay.classList.remove('show'));
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('show');
  });

  if (input) {
    input.addEventListener('input', () => {
      const q = input.value.toLowerCase().trim();
      if (!q) { results.innerHTML = ''; return; }

      const matches = searchProducts.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );

      results.innerHTML = matches.slice(0, 8).map(p => `
        <div class="search-result-item" data-id="${p.id}">
          <img src="${getProductImages(p)[0]}" alt="${p.title}" onerror="this.style.display='none'">
          <span>${p.title}</span>
          <small>${p.price}</small>
        </div>
      `).join('');

      results.querySelectorAll('.search-result-item').forEach(el => {
        el.addEventListener('click', () => {
          const id = parseInt(el.dataset.id);
          const product = searchProducts.find(p => p.id === id);
          if (product) { openProductModal(product); overlay.classList.remove('show'); input.value = ''; results.innerHTML = ''; }
        });
      });
    });
  }
}

// ===== MOBILE NAV =====
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const overlay = document.getElementById('mobile-overlay');
  const closeBtn = document.getElementById('mobile-close');

  if (!hamburger || !mobileNav) return;

  function open() {
    mobileNav.classList.add('open');
    overlay?.classList.add('show');
    hamburger.classList.add('active');
  }

  function close() {
    mobileNav.classList.remove('open');
    overlay?.classList.remove('show');
    hamburger.classList.remove('active');
  }

  hamburger.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (overlay) overlay.addEventListener('click', close);

  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', close);
  });
}

// ===== SCROLL TO TOP =====
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 500);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== NEWSLETTER =====
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input');
    if (input?.value.trim()) {
      showToast('Thank you for subscribing!', 'fa-envelope');
      input.value = '';
    }
  });
}

// ===== PRICE HELPERS =====
function formatPrice(currency, amount) {
  const num = parseFloat(amount) || 0;
  return `${currency} ${num.toLocaleString('en-LK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function parsePrice(priceStr) {
  const match = priceStr.match(/^([^\d]+)\s*([\d,]+\.?\d*)/);
  if (match) {
    return { currency: match[1].trim(), amount: parseFloat(match[2].replace(/,/g, '')) };
  }
  return { currency: 'RS.', amount: 0 };
}

// ===== FILE / IMAGE HANDLING =====
function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}



// ===== CROSS-TAB SYNC =====
function initCrossTabSync() {
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY || e.key === 'thinaya_last_update') {
      sharedProducts = getProducts();
      const currentFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'All';
      renderProducts(sharedProducts, currentFilter, currentPageType);
    }
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  const products = getProducts();
  currentPageType = getPageType();

  initCarousels();

  const grid = document.getElementById('new-arrivals-grid');
  if (grid && !grid.dataset.listenerAttached) {
    grid.addEventListener('click', handleGridClick);
    grid.dataset.listenerAttached = 'true';
  }

  if (currentPageType === 'shop') {
    document.querySelector('.page-title') && (document.querySelector('.page-title').textContent = 'Shop — Items For Sale');
    renderProducts(products, 'All', 'shop');
  } else if (currentPageType === 'rental') {
    document.querySelector('.page-title') && (document.querySelector('.page-title').textContent = 'Rentals — Items For Rent');
    renderProducts(products, 'All', 'rental');
  } else {
    renderProducts(products, 'All');
  }

  initFilters(products);
  initCart();
  initModal();
  initSearch(products);
  initMobileNav();
  initScrollTop();
  initNewsletter();
  initCrossTabSync();
});
