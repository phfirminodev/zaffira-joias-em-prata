/**
 * ZAFFIRA JOIAS EM PRATA - MOTOR INTERATIVO & E-COMMERCE
 * Joalheria em Formosa - GO (R. João Moreira, 533D - Centro, CEP 73801-630)
 * Plus Code: FM57+62 Centro, Formosa - GO
 * Avaliação 5,0 ★★★★★ (6 avaliações no Google Maps)
 * Telefone / WhatsApp: (61) 99977-4747
 * Instagram Oficial: https://www.instagram.com/zaffiraprata/
 * Horário: Aberto · Fecha 18:30 (Segunda a Sábado das 09:00 às 18:30)
 * Entrega disponível para Formosa e todo o Brasil
 */

// ==========================================================================
// BANCO DE DADOS DE PRODUTOS (ZAFFIRA JOIAS EM PRATA)
// ==========================================================================
const PRODUCTS = [
  {
    id: 1,
    name: "Anel Solitário Zaffira em Prata 925 com Zircônia Brilhante",
    category: "aneis",
    tags: ["bestseller", "aneis", "exclusivas"],
    badge: "MAIS VENDIDO",
    badgeType: "badge-gold",
    priceCompare: 199.00,
    price: 149.00,
    rating: 5.0,
    reviewsCount: 6,
    imgMain: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=700&q=80",
    imgHover: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80",
    colors: ["#E5E5E5", "#D4AF37"],
    sizes: ["Aro 14", "Aro 16", "Aro 18", "Aro 20", "Aro 22"],
    description: "Anel solitário clássico confeccionado em Prata 925 legítima com garras delicadas e pedra central de zircônia lapidação brilhante. Brilho radiante de alta joalheria, garantia vitalícia do metal e estojo de presente incluso."
  },
  {
    id: 2,
    name: "Colar Ponto de Luz Prata 925 com Veneziana Diamantada",
    category: "colares",
    tags: ["bestseller", "colares", "exclusivas"],
    badge: "DESTAQUE",
    badgeType: "badge-gold",
    priceCompare: 169.00,
    price: 119.00,
    rating: 5.0,
    reviewsCount: 6,
    imgMain: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=700&q=80",
    imgHover: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80",
    colors: ["#E5E5E5"],
    sizes: ["40cm + extensor", "45cm"],
    description: "Colar ponto de luz em Prata 925 de lei, cravejado com zircônia redonda facetada de 6mm em berço de alta precisão. Corrente veneziana diamantada que reflete a luz com extrema suavidade e elegância."
  },
  {
    id: 3,
    name: "Par de Alianças Tradicionais em Prata 950 Anatômicas Polidas",
    category: "aliancas",
    tags: ["bestseller", "aliancas"],
    badge: "COMPROMISSO",
    badgeType: "badge-gold",
    priceCompare: 390.00,
    price: 289.00,
    rating: 5.0,
    reviewsCount: 6,
    imgMain: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80",
    imgHover: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80",
    colors: ["#E5E5E5"],
    sizes: ["Aros 12 ao 30 (Gravação Grátis)"],
    description: "Par de alianças confeccionadas em Prata 950 pura, com acabamento espelhado de luxo e formato anatômico confortável. Acompanha estojo de veludo, gravação personalizada dos nomes e certificado de garantia vitalícia."
  },
  {
    id: 4,
    name: "Brinco Argola Cravejada Microzircônias Prata 925 Fecho Click",
    category: "brincos",
    tags: ["brincos", "bestseller"],
    badge: "ESSENCIAL",
    badgeType: "badge-gold",
    priceCompare: 139.00,
    price: 98.00,
    rating: 5.0,
    reviewsCount: 6,
    imgMain: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=700&q=80",
    imgHover: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=700&q=80",
    colors: ["#E5E5E5"],
    sizes: ["P (11mm)", "M (14mm)", "G (18mm)"],
    description: "Argolinha em Prata 925 com fileira frontal de microzircônias padrão 5A lapidadas. Fecho click anatômico e ultra seguro, hipoalergênico e ideal para uso contínuo no dia a dia ou em composições de furos."
  },
  {
    id: 5,
    name: "Pulseira Riviera Clássica em Prata 925 com Zircônias 5A",
    category: "pulseiras",
    tags: ["bestseller", "pulseiras", "exclusivas"],
    badge: "ALTA JOALHERIA",
    badgeType: "badge-gold",
    priceCompare: 310.00,
    price: 219.00,
    rating: 5.0,
    reviewsCount: 6,
    imgMain: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=700&q=80",
    imgHover: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80",
    colors: ["#E5E5E5"],
    sizes: ["16cm", "18cm", "20cm"],
    description: "A clássica e atemporal pulseira Riviera inteiramente estruturada em Prata 925 de Lei com pedras lapidadas individualmente. Conta com fecho joia e dupla trava lateral para máxima proteção e requinte."
  },
  {
    id: 6,
    name: "Anel Meia Aliança Cravejado com Zircônias Baguete Prata 925",
    category: "aneis",
    tags: ["aneis", "lancamentos"],
    badge: "TENDÊNCIA",
    badgeType: "badge-new",
    priceCompare: 189.00,
    price: 139.00,
    rating: 5.0,
    reviewsCount: 6,
    imgMain: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80",
    imgHover: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=700&q=80",
    colors: ["#E5E5E5"],
    sizes: ["Aro 14", "Aro 16", "Aro 18", "Aro 20"],
    description: "Aparador sofisticado para compor com alianças ou solitários. Confeccionado em Prata 925 com zircônias baguete e brilhantes montadas em trilho espelhado que conferem glamour imediato."
  },
  {
    id: 7,
    name: "Gargantilha Fita Choker Laminada Espelhada em Prata 925",
    category: "colares",
    tags: ["colares", "lancamentos", "exclusivas"],
    badge: "MODERNO",
    badgeType: "badge-new",
    priceCompare: 220.00,
    price: 159.00,
    rating: 5.0,
    reviewsCount: 6,
    imgMain: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80",
    imgHover: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=700&q=80",
    colors: ["#E5E5E5"],
    sizes: ["35cm + 5cm extensor", "40cm"],
    description: "Gargantilha estilo fita de alta maleabilidade e acabamento espelhado. Feita em Prata 925 legítima, assenta perfeitamente sobre a clavícula e realça qualquer decote com brilho líquido e luxuoso."
  },
  {
    id: 8,
    name: "Brinco Ponto de Luz Zircônia Solitária 6mm Prata 925",
    category: "brincos",
    tags: ["brincos", "bestseller"],
    badge: "PREÇO ESPECIAL",
    badgeType: "badge-gold",
    priceCompare: 99.00,
    price: 69.00,
    rating: 5.0,
    reviewsCount: 6,
    imgMain: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80",
    imgHover: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=700&q=80",
    colors: ["#E5E5E5"],
    sizes: ["Par 6mm"],
    description: "O brinco ponto de luz clássico que não pode faltar. Garra tradicional de 4 pontas em Prata 925 e zircônia cristal de máxima pureza. Tarraxas anatômicas e seguras."
  },
  {
    id: 9,
    name: "Pulseira Elos Venezianos com Pingentes em Prata 925",
    category: "pulseiras",
    tags: ["pulseiras", "lancamentos"],
    badge: "CHARME",
    badgeType: "badge-new",
    priceCompare: 179.00,
    price: 129.00,
    rating: 5.0,
    reviewsCount: 6,
    imgMain: "https://images.unsplash.com/photo-1611591475152-473549646b10?auto=format&fit=crop&w=700&q=80",
    imgHover: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=700&q=80",
    colors: ["#E5E5E5"],
    sizes: ["17cm + 3cm extensor"],
    description: "Pulseira delicada em Prata 925 com corrente elos venezianos e pingente de coração com acabamento polido. Versátil para usar individualmente ou em mix de pulseiras."
  },
  {
    id: 10,
    name: "Corrente Veneziana Prata 925 com Pingente Cruz Cravejada",
    category: "colares",
    tags: ["colares", "exclusivas"],
    badge: "EXCLUSIVA",
    badgeType: "badge-gold",
    priceCompare: 240.00,
    price: 179.00,
    rating: 5.0,
    reviewsCount: 6,
    imgMain: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=700&q=80",
    imgHover: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80",
    colors: ["#E5E5E5"],
    sizes: ["45cm", "50cm", "60cm"],
    description: "Corrente veneziana legítima em Prata 925 acompanhada de pingente de cruz com zircônias lapidadas de alta refração. Símbolo de fé, elegância e proteção em uma joia atemporal."
  }
];

// ==========================================================================
// BANCO DE FOTOS GOOGLE MAPS (FILTROS DE MÍDIA)
// ==========================================================================
const GOOGLE_PHOTOS = [
  {
    category: "anel",
    img: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=600&q=80",
    caption: "Anéis Solitários em Prata 925"
  },
  {
    category: "anel",
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
    caption: "Alianças de Prata 950 Anatômicas"
  },
  {
    category: "colar",
    img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80",
    caption: "Colar Ponto de Luz Zircônia"
  },
  {
    category: "colar",
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
    caption: "Gargantilhas e Correntes Venezianas"
  },
  {
    category: "brinco",
    img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=600&q=80",
    caption: "Argolas Cravejadas com Fecho Click"
  },
  {
    category: "brinco",
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
    caption: "Brincos Solitários e Conjuntos"
  },
  {
    category: "interior",
    img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=600&q=80",
    caption: "Espaço Zaffira • R. João Moreira, 533D"
  },
  {
    category: "proprietario",
    img: "assets/logo-zaffira.png",
    caption: "Zaffira Joias em Prata Oficial"
  },
  {
    category: "street",
    img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=600&q=80",
    caption: "Centro de Formosa - GO (R. João Moreira)"
  }
];

// ==========================================================================
// ESTADO GLOBAL DO CARRINHO E WISHLIST (ZAFFIRA STORE)
// ==========================================================================
class ZaffiraStore {
  constructor() {
    this.cart = this.loadCart();
    this.wishlist = this.loadWishlist();
    this.coupon = null;
    this.discountPercent = 0;
    this.freeShippingThreshold = 199.00;

    this.init();
  }

  loadCart() {
    try {
      const saved = localStorage.getItem('zaffiraprata_cart');
      return saved ? JSON.parse(saved) : [
        {
          id: 1,
          name: "Anel Solitário Zaffira em Prata 925 com Zircônia Brilhante",
          variant: "Prata 925 / Aro 16",
          price: 149.00,
          qty: 1,
          img: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=700&q=80"
        }
      ];
    } catch (e) {
      return [];
    }
  }

  saveCart() {
    localStorage.setItem('zaffiraprata_cart', JSON.stringify(this.cart));
    this.renderCartUI();
  }

  loadWishlist() {
    try {
      const saved = localStorage.getItem('zaffiraprata_wishlist');
      return saved ? JSON.parse(saved) : [1, 2];
    } catch (e) {
      return [];
    }
  }

  saveWishlist() {
    localStorage.setItem('zaffiraprata_wishlist', JSON.stringify(this.wishlist));
    this.updateWishlistBadges();
  }

  addToCart(productId, variantText = null, qty = 1) {
    const product = PRODUCTS.find(p => p.id === Number(productId));
    if (!product) return;

    const variant = variantText || (product.sizes ? product.sizes[0] : "Padrão");
    const existing = this.cart.find(item => item.id === product.id && item.variant === variant);

    if (existing) {
      existing.qty += qty;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        variant: variant,
        price: product.price,
        qty: qty,
        img: product.imgMain
      });
    }

    this.saveCart();
    this.openCart();
    showToast(`Adicionado à sacola: ${product.name}`);
  }

  removeFromCart(index) {
    if (this.cart[index]) {
      const item = this.cart[index];
      this.cart.splice(index, 1);
      this.saveCart();
      showToast(`Item removido: ${item.name}`);
    }
  }

  updateQty(index, delta) {
    if (this.cart[index]) {
      this.cart[index].qty += delta;
      if (this.cart[index].qty <= 0) {
        this.removeFromCart(index);
      } else {
        this.saveCart();
      }
    }
  }

  applyCoupon(code) {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === "ZAFFIRA10" || cleanCode === "FORMOSA10") {
      this.coupon = cleanCode;
      this.discountPercent = 10;
      this.renderCartUI();
      showToast("Cupom Zaffira de 10% OFF aplicado com sucesso!");
      return true;
    } else if (cleanCode === "PRATA15") {
      this.coupon = cleanCode;
      this.discountPercent = 15;
      this.renderCartUI();
      showToast("Cupom VIP de 15% OFF aplicado nas suas pratas!");
      return true;
    } else {
      showToast("Cupom inválido. Tente ZAFFIRA10 para 10% de desconto.", "error");
      return false;
    }
  }

  getSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  getDiscountAmount() {
    return (this.getSubtotal() * this.discountPercent) / 100;
  }

  getTotal() {
    return Math.max(0, this.getSubtotal() - this.getDiscountAmount());
  }

  openCart() {
    const backdrop = document.getElementById('cartDrawerBackdrop');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeCart() {
    const backdrop = document.getElementById('cartDrawerBackdrop');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleWishlist(productId) {
    const id = Number(productId);
    const index = this.wishlist.indexOf(id);
    if (index > -1) {
      this.wishlist.splice(index, 1);
      showToast("Removido dos favoritos.");
    } else {
      this.wishlist.push(id);
      showToast("Salvo na sua lista de desejos da Zaffira!");
    }
    this.saveWishlist();
  }

  updateWishlistBadges() {
    const badge = document.getElementById('wishlistCountBadge');
    if (badge) {
      badge.textContent = this.wishlist.length;
    }

    document.querySelectorAll('.btn-wishlist-toggle').forEach(btn => {
      const pid = Number(btn.getAttribute('data-product-id'));
      if (this.wishlist.includes(pid)) {
        btn.classList.add('active');
        btn.querySelector('svg').style.fill = '#B91C1C';
      } else {
        btn.classList.remove('active');
        btn.querySelector('svg').style.fill = 'currentColor';
      }
    });
  }

  renderCartUI() {
    const cartCountBadges = document.querySelectorAll('.cart-count-badge');
    const totalItems = this.cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountBadges.forEach(b => b.textContent = totalItems);

    const cartList = document.getElementById('cartItemsList');
    if (!cartList) return;

    if (this.cart.length === 0) {
      cartList.innerHTML = `
        <div class="cart-empty-state">
          <svg viewBox="0 0 512 512"><path d="M463.54,164.66c-14.69-16.9-35.96-26.65-58.35-26.75H151.58l-4.87-16.78c-9.79-32.25-39.24-54.54-72.94-55.2l-1.22-.24h-24.31c-10.08,0-18.24,8.16-18.24,18.24s8.16,18.24,18.24,18.24h24.31c18.41,.16,34.43,12.59,39.15,30.4l61.51,207.4c9.93,32.68,40.01,55.07,74.16,55.2h142.97c38.89-.42,71.5-29.5,76.35-68.08l14.59-100.66c3.39-22.19-3.1-44.76-17.75-61.76h0Zm-18.24,57.14l-14.59,100.9c-3.19,19.87-20.24,34.56-40.36,34.77H247.38c-18.06,0-33.99-11.86-39.15-29.18l-45.72-154.15h243.14c11.91,.18,23.15,5.56,30.76,14.73,7.61,9.16,10.86,21.19,8.87,32.93h.01Z"/></svg>
          <p>Sua sacola de joias em prata está vazia.</p>
          <a href="#produtos" onclick="store.closeCart()" class="btn btn-primary-gold" style="margin-top: 15px; font-size: 11px;">Ver Peças Exclusivas</a>
        </div>
      `;
    } else {
      cartList.innerHTML = this.cart.map((item, idx) => `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-details">
            <h5 class="cart-item-title">${item.name}</h5>
            <div class="cart-item-variant">${item.variant}</div>
            <div class="cart-item-bottom">
              <div class="qty-control">
                <button class="qty-btn" onclick="store.updateQty(${idx}, -1)">-</button>
                <span class="qty-number">${item.qty}</span>
                <button class="qty-btn" onclick="store.updateQty(${idx}, 1)">+</button>
              </div>
              <div class="cart-item-price">R$ ${(item.price * item.qty).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
              <span class="cart-item-remove" onclick="store.removeFromCart(${idx})" title="Remover item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </span>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Atualiza Barra de Frete Grátis
    const subtotal = this.getSubtotal();
    const remainingForFreeShipping = Math.max(0, this.freeShippingThreshold - subtotal);
    const progressPercent = Math.min(100, (subtotal / this.freeShippingThreshold) * 100);

    const shippingText = document.getElementById('shippingProgressText');
    const progressBar = document.getElementById('shippingProgressBar');
    if (shippingText && progressBar) {
      if (remainingForFreeShipping <= 0) {
        shippingText.innerHTML = `🎉 Parabéns! Você garantiu <strong>FRETE GRÁTIS</strong> com embalagem de luxo e certificado!`;
        progressBar.style.width = '100%';
      } else {
        shippingText.innerHTML = `Faltam <strong>R$ ${remainingForFreeShipping.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> para garantir <strong>FRETE GRÁTIS</strong>!`;
        progressBar.style.width = `${progressPercent}%`;
      }
    }

    // Totais
    const subtotalEl = document.getElementById('cartSubtotal');
    const discountEl = document.getElementById('cartDiscount');
    const totalEl = document.getElementById('cartTotal');
    const pixTotalEl = document.getElementById('cartPixTotal');

    if (subtotalEl) subtotalEl.textContent = `R$ ${subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    if (discountEl) {
      if (this.discountPercent > 0) {
        discountEl.innerHTML = `- R$ ${this.getDiscountAmount().toLocaleString('pt-BR', { minimumFractionDigits: 2 })} (${this.discountPercent}% OFF)`;
      } else {
        discountEl.textContent = `R$ 0,00`;
      }
    }

    const finalTotal = this.getTotal();
    if (totalEl) totalEl.textContent = `R$ ${finalTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;

    const pixTotal = finalTotal * 0.95; // 5% de desconto no Pix
    if (pixTotalEl) {
      pixTotalEl.textContent = `ou R$ ${pixTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} à vista no Pix (5% OFF)`;
    }
  }

  init() {
    this.renderCartUI();
    this.updateWishlistBadges();
  }
}

// Inicializa a loja
let store;
document.addEventListener('DOMContentLoaded', () => {
  store = new ZaffiraStore();
  initAnnouncementBar();
  initHeroSlider();
  initProductsGrid();
  initQuickViewModal();
  initSearchModal();
  initMobileMenu();
  initHeaderScroll();
  initGooglePhotosGallery();
});

// ==========================================================================
// TOAST NOTIFICATION ENGINE
// ==========================================================================
function showToast(message, type = "success") {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${type === 'error' ? '#EF4444' : '#9F7F68'}" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;

  toast.classList.add('active');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('active');
  }, 3500);
}

// ==========================================================================
// TOP ANNOUNCEMENT BAR ROTATOR
// ==========================================================================
function initAnnouncementBar() {
  const items = document.querySelectorAll('.announcement-item');
  if (items.length <= 1) return;

  let currentIndex = 0;
  setInterval(() => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
  }, 4200);
}

// ==========================================================================
// HERO SLIDER (TRANSIÇÃO SUAVE & CONTROLES)
// ==========================================================================
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.querySelector('.slider-arrow.prev');
  const nextBtn = document.querySelector('.slider-arrow.next');

  if (!slides.length) return;

  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
      if (dots[i]) dots[i].classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetTimer(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetTimer(); });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => { showSlide(idx); resetTimer(); });
  });

  function startTimer() {
    slideInterval = setInterval(nextSlide, 6500);
  }

  function resetTimer() {
    clearInterval(slideInterval);
    startTimer();
  }

  startTimer();
}

// ==========================================================================
// GRID DE PRODUTOS & TABS DE FILTRO (ZAFFIRA)
// ==========================================================================
function initProductsGrid() {
  const grid = document.getElementById('productsGrid');
  const tabs = document.querySelectorAll('.filter-tab-btn');

  const catLabels = {
    aneis: 'Anéis em Prata 925',
    colares: 'Colares & Gargantilhas',
    brincos: 'Brincos & Argolas',
    pulseiras: 'Pulseiras & Rivieras',
    aliancas: 'Alianças de Prata 950'
  };

  function render(filter = 'todos') {
    if (!grid) return;

    let filtered = PRODUCTS;
    if (filter === 'bestseller') {
      filtered = PRODUCTS.filter(p => p.tags.includes('bestseller'));
    } else if (filter === 'lancamentos') {
      filtered = PRODUCTS.filter(p => p.tags.includes('lancamentos'));
    } else if (filter === 'aneis') {
      filtered = PRODUCTS.filter(p => p.category === 'aneis');
    } else if (filter === 'colares') {
      filtered = PRODUCTS.filter(p => p.category === 'colares');
    } else if (filter === 'brincos') {
      filtered = PRODUCTS.filter(p => p.category === 'brincos');
    } else if (filter === 'pulseiras') {
      filtered = PRODUCTS.filter(p => p.category === 'pulseiras');
    } else if (filter === 'aliancas') {
      filtered = PRODUCTS.filter(p => p.category === 'aliancas');
    }

    grid.innerHTML = filtered.map(product => {
      const isFav = store ? store.wishlist.includes(product.id) : false;
      const installmentsVal = (product.price / 12).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      const pixVal = (product.price * 0.95).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      const label = catLabels[product.category] || 'Prata 925 Legítima';

      return `
        <div class="product-card" data-product-id="${product.id}">
          <div class="product-image-container">
            <div class="product-badges">
              <span class="product-badge ${product.badgeType}">${product.badge}</span>
            </div>

            <div class="product-quick-actions">
              <button class="quick-action-btn btn-wishlist-toggle ${isFav ? 'active' : ''}" data-product-id="${product.id}" title="Adicionar aos Favoritos" onclick="store.toggleWishlist(${product.id})">
                <svg viewBox="0 0 24 24" fill="${isFav ? '#B91C1C' : 'currentColor'}"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </button>
              <button class="quick-action-btn" title="Espiada Rápida" onclick="openQuickView(${product.id})">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
              </button>
            </div>

            <a href="javascript:void(0)" onclick="openQuickView(${product.id})">
              <img src="${product.imgMain}" alt="${product.name}" class="product-img img-main" loading="lazy">
              <img src="${product.imgHover}" alt="${product.name}" class="product-img img-hover" loading="lazy">
            </a>
          </div>

          <div class="product-info">
            <span class="product-category-tag">${label}</span>
            <h3 class="product-title">
              <a href="javascript:void(0)" onclick="openQuickView(${product.id})">${product.name}</a>
            </h3>

            <div class="product-rating">
              <div class="rating-stars">★★★★★</div>
              <span class="rating-count">5,0 (${product.reviewsCount})</span>
            </div>

            <div class="product-swatches">
              ${product.colors.map((color, i) => `
                <span class="color-swatch ${i === 0 ? 'active' : ''}" style="background-color: ${color};" title="Variação"></span>
              `).join('')}
            </div>

            <div class="product-price-wrapper">
              <div>
                <span class="price-compare">R$ ${product.priceCompare.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                <span class="price-current">R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
              <div class="price-installments">12x de <strong>R$ ${installmentsVal}</strong> sem juros</div>
              <div class="price-pix-discount">R$ ${pixVal} à vista no Pix (5% OFF)</div>
            </div>

            <button class="btn-add-card" onclick="store.addToCart(${product.id})">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              Comprar
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter');
      render(filter);
    });
  });

  render('bestseller');
}

// ==========================================================================
// QUICK VIEW MODAL (ESPIADA RÁPIDA)
// ==========================================================================
let currentQuickViewProduct = null;
let selectedSize = null;

function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === Number(productId));
  if (!product) return;

  currentQuickViewProduct = product;
  selectedSize = product.sizes ? product.sizes[0] : "Padrão";

  const modal = document.getElementById('quickViewModal');
  const content = document.getElementById('quickViewContent');

  if (!modal || !content) return;

  const installments = (product.price / 12).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  const pixVal = (product.price * 0.95).toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  content.innerHTML = `
    <div class="quickview-gallery">
      <img src="${product.imgMain}" alt="${product.name}" id="quickViewMainImg">
    </div>

    <div class="quickview-info">
      <span class="product-category-tag">${product.badge} • ZAFFIRA JOIAS EM PRATA</span>
      <h2 class="quickview-title">${product.name}</h2>
      
      <div class="product-rating">
        <div class="rating-stars">★★★★★</div>
        <span class="rating-count">5,0 (${product.reviewsCount} avaliações 5 estrelas no Google Maps)</span>
      </div>

      <div class="quickview-price">
        <span class="price-compare">R$ ${product.priceCompare.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
        R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </div>
      <div class="quickview-installments">
        Em até 12x de <strong>R$ ${installments}</strong> sem juros ou <strong>R$ ${pixVal}</strong> no Pix (5% OFF)
      </div>

      <p style="font-size: 13.5px; color: #666; line-height: 1.6; margin-bottom: 20px;">
        ${product.description}
      </p>

      ${product.sizes && product.sizes.length > 1 ? `
        <div class="quickview-options">
          <span class="options-label">Selecione o Tamanho / Aro:</span>
          <div class="size-pills">
            ${product.sizes.map((s, idx) => `
              <button class="size-pill ${idx === 0 ? 'active' : ''}" onclick="selectQuickViewSize('${s}', this)">${s}</button>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div style="display: flex; gap: 12px; margin-top: auto;">
        <button class="btn btn-primary-gold" style="flex: 1;" onclick="addQuickViewToCart()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          Adicionar à Sacola
        </button>
        <button class="btn btn-outline-dark" onclick="buyViaWhatsApp(${product.id})" title="Atendimento com Zaffira no WhatsApp">
          WhatsApp
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function selectQuickViewSize(size, btnEl) {
  selectedSize = size;
  const pills = btnEl.parentElement.querySelectorAll('.size-pill');
  pills.forEach(p => p.classList.remove('active'));
  btnEl.classList.add('active');
}

function addQuickViewToCart() {
  if (currentQuickViewProduct) {
    store.addToCart(currentQuickViewProduct.id, selectedSize);
    closeQuickView();
  }
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

function initQuickViewModal() {
  const modal = document.getElementById('quickViewModal');
  if (!modal) return;
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeQuickView();
  });
}

// ==========================================================================
// LIVE SEARCH MODAL (BUSCA INTELIGENTE EM TEMPO REAL)
// ==========================================================================
function initSearchModal() {
  const searchBackdrop = document.getElementById('searchModalBackdrop');
  const searchInput = document.getElementById('liveSearchInput');
  const resultsContainer = document.getElementById('searchLiveResults');

  if (!searchBackdrop || !searchInput) return;

  window.openSearchModal = function() {
    searchBackdrop.classList.add('active');
    searchInput.focus();
    document.body.style.overflow = 'hidden';
  };

  window.closeSearchModal = function() {
    searchBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  searchBackdrop.addEventListener('click', (e) => {
    if (e.target === searchBackdrop) closeSearchModal();
  });

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!resultsContainer) return;

    if (query.length < 2) {
      resultsContainer.style.display = 'none';
      resultsContainer.innerHTML = '';
      return;
    }

    const matches = PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      resultsContainer.style.display = 'block';
      resultsContainer.innerHTML = `<div style="padding: 15px; text-align: center; color: #888; font-size: 13px;">Nenhuma joia em prata encontrada para "${query}". Tente buscar por "Anel", "Solitário", "Colar", "Brinco", "Argola", "Pulseira" ou "Prata 925".</div>`;
    } else {
      resultsContainer.style.display = 'block';
      resultsContainer.innerHTML = matches.map(p => `
        <div class="search-result-row" onclick="closeSearchModal(); openQuickView(${p.id})">
          <img src="${p.imgMain}" alt="${p.name}">
          <div>
            <div style="font-size: 13.5px; font-weight: 500; color: #111;">${p.name}</div>
            <div style="font-size: 12px; color: #9F7F68; font-weight: 600;">R$ ${p.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
          </div>
        </div>
      `).join('');
    }
  });

  window.applySearchTag = function(tagText) {
    searchInput.value = tagText;
    searchInput.dispatchEvent(new Event('input'));
  };
}

// ==========================================================================
// GOOGLE MAPS MEDIA GALLERY TABS
// ==========================================================================
function initGooglePhotosGallery() {
  const container = document.getElementById('gmapsGalleryContainer');
  if (!container) return;

  window.filterGooglePhotos = function(category, btnEl) {
    if (btnEl) {
      const allChips = document.querySelectorAll('.media-filter-chip');
      allChips.forEach(c => c.classList.remove('active'));
      btnEl.classList.add('active');
    }

    let items = GOOGLE_PHOTOS;
    if (category !== 'tudo') {
      items = GOOGLE_PHOTOS.filter(p => p.category === category);
    }

    if (items.length === 0) {
      items = GOOGLE_PHOTOS;
    }

    container.innerHTML = items.map(photo => `
      <div class="gmaps-gallery-item" onclick="openPhotoModal('${photo.img}', '${photo.caption}')">
        <img src="${photo.img}" alt="${photo.caption}" loading="lazy">
        <div class="gmaps-gallery-caption">${photo.caption}</div>
      </div>
    `).join('');
  };

  filterGooglePhotos('tudo', null);
}

function openPhotoModal(imgUrl, caption) {
  showToast(`Visualizando: ${caption}`);
}

// ==========================================================================
// GOOGLE MAPS INTERACTIVE ACTIONS (ROTAS, SALVAR, COMPARTILHAR)
// ==========================================================================
function copyStoreAddress() {
  const address = "R. João Moreira, 533D - Centro, Formosa - GO, 73801-630 (FM57+62)";
  navigator.clipboard.writeText(address).then(() => {
    showToast("Endereço copiado para a área de transferência!");
  }).catch(() => {
    showToast("R. João Moreira, 533D - Centro, Formosa - GO");
  });
}

function saveLocationToMaps() {
  showToast("Local salvo nos seus favoritos do Google Maps! ⭐");
}

function shareLocation() {
  const url = "https://maps.app.goo.gl/DQgqWUt5CkoB9DUq9";
  if (navigator.share) {
    navigator.share({
      title: "Zaffira Joias em Prata - Formosa GO",
      text: "Zaffira Joias em Prata • R. João Moreira, 533D - Centro, Formosa - GO. Nota 5,0 no Google Maps!",
      url: url
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(url).then(() => {
      showToast("Link oficial do Google Maps copiado para compartilhar!");
    });
  }
}

function sendToSmartphone() {
  const url = `https://wa.me/?text=${encodeURIComponent("Zaffira Joias em Prata: R. João Moreira, 533D - Centro, Formosa - GO, 73801-630. Telefone (61) 99977-4747. Acesse no Google Maps: https://maps.app.goo.gl/DQgqWUt5CkoB9DUq9")}`;
  window.open(url, '_blank');
}

function openGoogleReviewModal() {
  const url = "https://maps.app.goo.gl/DQgqWUt5CkoB9DUq9";
  showToast("Obrigado por apoiar a Zaffira Joias em Prata! Abrindo perfil oficial no Google Maps...");
  setTimeout(() => {
    window.open(url, '_blank');
  }, 600);
}

function likeReview(btn) {
  btn.classList.toggle('liked');
  const countSpan = btn.querySelector('.like-count');
  if (countSpan) {
    let current = parseInt(countSpan.textContent || "1");
    if (btn.classList.contains('liked')) {
      countSpan.textContent = (current + 1).toString();
      showToast("Você marcou esta avaliação como útil!");
    } else {
      countSpan.textContent = Math.max(1, current - 1).toString();
    }
  }
}

// ==========================================================================
// MOBILE MENU DRAWER
// ==========================================================================
function initMobileMenu() {
  const hamburger = document.getElementById('mobileHamburgerBtn');
  const drawer = document.getElementById('mobileMenuDrawer');
  const closeBtn = document.getElementById('mobileMenuClose');

  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      drawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (drawer) {
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) {
        drawer.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Backdrop click do carrinho
  const cartBackdrop = document.getElementById('cartDrawerBackdrop');
  if (cartBackdrop) {
    cartBackdrop.addEventListener('click', (e) => {
      if (e.target === cartBackdrop && store) {
        store.closeCart();
      }
    });
  }
}

// ==========================================================================
// HEADER SCROLL SHADOW
// ==========================================================================
function initHeaderScroll() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ==========================================================================
// WHATSAPP CONCIERGE INTEGRATION (ZAFFIRA JOIAS EM PRATA)
// ==========================================================================
function buyViaWhatsApp(productId) {
  const product = PRODUCTS.find(p => p.id === Number(productId));
  const phone = "5561999774747"; // WhatsApp Zaffira: (61) 99977-4747
  let msg = "Olá, Zaffira Joias em Prata! Gostaria de atendimento personalizado para escolher minhas joias em prata 925.";
  if (product) {
    msg = `Olá, Zaffira Joias em Prata! Gostaria de mais informações sobre: *${product.name}* (Ref #${product.id}) no valor de R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}.`;
  }
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function checkoutWhatsApp() {
  if (!store || store.cart.length === 0) {
    showToast("Adicione peças em prata à sua sacola para finalizar a compra.");
    return;
  }

  const phone = "5561999774747"; // WhatsApp Zaffira: (61) 99977-4747
  let itemsList = store.cart.map(i => `• ${i.qty}x ${i.name} (${i.variant}) - R$ ${(i.price * i.qty).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`).join('\n');
  let total = store.getTotal().toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  let cupomText = store.coupon ? `\nCupom aplicado: ${store.coupon} (${store.discountPercent}% OFF)` : '';

  let message = `*NOVO PEDIDO - ZAFFIRA JOIAS EM PRATA*\n(R. João Moreira, 533D - Centro, Formosa - GO)\n\nOlá! Vim pelo site da Zaffira e gostaria de concluir meu pedido:\n\n${itemsList}\n${cupomText}\n*Total: R$ ${total}*\n\nGostaria de combinar a entrega em Formosa (ou envio seguro para meu endereço) / retirada na loja e a forma de pagamento (Pix 5% OFF ou Cartão em até 12x).`;

  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}
