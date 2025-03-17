// Initialize Lucide icons
lucide.createIcons();

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartButton = document.getElementById('cartButton');
const cartSidebar = document.getElementById('cartSidebar');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const totalAmount = document.getElementById('totalAmount');
const productModal = document.getElementById('productModal');
const categoryButtons = document.querySelectorAll('.category-button');

// State
let selectedCategory = 'all';
let cart = [];

// Event Listeners
cartButton.addEventListener('click', toggleCart);
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedCategory = button.dataset.category;
    updateActiveCategory();
    renderProducts();
  });
});

// Functions
function toggleCart() {
  cartSidebar.classList.toggle('hidden');
}

function updateActiveCategory() {
  categoryButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.category === selectedCategory);
  });
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  
  card.innerHTML = `
    <div class="product-image-container">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      ${product.onSale ? '<span class="product-badge sale-badge">SALE</span>' : ''}
      ${product.isNew ? '<span class="product-badge new-badge">NEW</span>' : ''}
    </div>
    <div class="product-info">
      <h3 class="product-name">${product.name}</h3>
      <div class="product-price">
        <span class="current-price">$${product.price}</span>
        ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
      </div>
      <button class="add-to-cart-button">Add to Cart</button>
    </div>
  `;

  const imageContainer = card.querySelector('.product-image-container');
  const addToCartButton = card.querySelector('.add-to-cart-button');

  imageContainer.addEventListener('click', () => showProductModal(product));
  addToCartButton.addEventListener('click', (e) => {
    e.stopPropagation();
    addToCart(product);
  });

  return card;
}

function renderProducts() {
  productsGrid.innerHTML = '';
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  filteredProducts.forEach(product => {
    productsGrid.appendChild(createProductCard(product));
  });
}

function addToCart(product) {
  cart.push(product);
  updateCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

function updateCart() {
  // Update cart count
  cartCount.textContent = cart.length;
  cartCount.classList.toggle('hidden', cart.length === 0);

  // Update cart items
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    cartTotal.classList.add('hidden');
  } else {
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-info">
          <h3 class="cart-item-name">${item.name}</h3>
          <p class="cart-item-price">$${item.price}</p>
        </div>
        <button class="remove-button" onclick="removeFromCart(${item.id})">
          <i data-lucide="x"></i>
        </button>
      </div>
    `).join('');
    
    // Update total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalAmount.textContent = `$${total.toFixed(2)}`;
    cartTotal.classList.remove('hidden');
    
    // Reinitialize Lucide icons for new cart items
    lucide.createIcons();
  }
}

function showProductModal(product) {
  const modalBody = productModal.querySelector('.modal-body');
  modalBody.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="modal-image">
    <div class="modal-info">
      <h2>${product.name}</h2>
      <p class="modal-description">${product.description}</p>
      <div class="modal-price">
        <span class="modal-current-price">$${product.price}</span>
        ${product.originalPrice ? `<span class="modal-original-price">$${product.originalPrice}</span>` : ''}
      </div>
      <button class="modal-add-to-cart">Add to Cart</button>
    </div>
  `;

  const addToCartButton = modalBody.querySelector('.modal-add-to-cart');
  addToCartButton.addEventListener('click', () => {
    addToCart(product);
    closeModal();
  });

  productModal.classList.remove('hidden');
}

function closeModal() {
  productModal.classList.add('hidden');
}

// Close modal when clicking outside or on close button
productModal.addEventListener('click', (e) => {
  if (e.target === productModal) {
    closeModal();
  }
});

productModal.querySelector('.close-button').addEventListener('click', closeModal);

// Initial render
renderProducts();
updateCart();