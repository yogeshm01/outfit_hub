// Product Database with Sale Prices
const products = {
    featured: [
        { id: 'f1', name: 'Limited Edition Watch', price: 199.99, originalPrice: 299.99, onSale: true, image: 'men/watch.png', category: 'featured' },
        { id: 'f2', name: 'Designer Sunglasses', price: 149.99, originalPrice: 199.99, onSale: true, image: 'other/sunglass.png', category: 'featured' },
        { id: 'f3', name: 'Premium Leather Bag', price: 299.99, originalPrice: 399.99, onSale: true, image: 'men/leather_bag.png', category: 'featured' },
        { id: 'f4', name: 'Wireless Earbuds', price: 179.99, originalPrice: 229.99, onSale: true, image: 'other/earbuds.png', category: 'featured' }
    ],
    men: [
        { id: 'm1', name: 'Classic White Shirt', price: 49.99, originalPrice: 69.99, onSale: true, image: 'men/white_shirt.png', category: 'men' },
        { id: 'm2', name: 'Slim Fit Jeans', price: 79.99, image: 'men/slim_fit_jeans.png', category: 'men' },
        { id: 'm3', name: 'Leather Jacket', price: 199.99, originalPrice: 299.99, onSale: true, image: 'men/leather_jacket.png', category: 'men' },
        { id: 'm4', name: 'Cotton T-Shirt', price: 29.99, image: 'men/cotton_tshirt.png', category: 'men' },
        { id: 'm5', name: 'Formal Suit', price: 299.99, originalPrice: 399.99, onSale: true, image: 'men/formal_suit.png', category: 'men' },
        { id: 'm6', name: 'Casual Blazer', price: 149.99, image: 'men/casual_blazzer.png', category: 'men' },
        { id: 'm7', name: 'Polo Shirt', price: 39.99, image: 'men/polo.png', category: 'men' },
        { id: 'm8', name: 'Cargo Pants', price: 59.99, originalPrice: 79.99, onSale: true, image: 'men/cargo.png', category: 'men' },
        { id: 'm9', name: 'Winter Coat', price: 179.99, image: 'men/winter_coat.png', category: 'men' },
        { id: 'm10', name: 'Denim Jacket', price: 89.99, image: 'men/denim_jacket.png', category: 'men' },
        { id: 'm11', name: 'Sweater', price: 69.99, originalPrice: 89.99, onSale: true, image: 'men/sweater.png', category: 'men' },
        { id: 'm12', name: 'Dress Shoes', price: 129.99, image: 'men/shoes.png', category: 'men' },
        { id: 'm13', name: 'Sports Shorts', price: 34.99, image: 'men/sports_shoes.png', category: 'men' },
        { id: 'm14', name: 'Hoodie', price: 54.99, originalPrice: 74.99, onSale: true, image: 'men/hoodie.png', category: 'men' },
        { id: 'm15', name: 'Track Pants', price: 44.99, image: 'men/track_pants.png', category: 'men' },
        { id: 'm16', name: 'Formal Shirt', price: 64.99, image: 'men/formal_shirt.png', category: 'men' },
        { id: 'm17', name: 'Wool Coat', price: 199.99, originalPrice: 249.99, onSale: true, image: 'men/wool_coat.png', category: 'men' },
        { id: 'm18', name: 'Chino Pants', price: 69.99, image: 'men/chino_pant.png', category: 'men' },
        { id: 'm19', name: 'Leather Belt', price: 39.99, image: 'men/leather_jacket.png', category: 'men' },
        { id: 'm20', name: 'Casual Shoes', price: 89.99, originalPrice: 119.99, onSale: true, image: 'men/sneaker.png', category: 'men' }
    ],
    women: [
        { id: 'w1', name: 'Floral Dress', price: 79.99, originalPrice: 99.99, onSale: true, image: 'women/floral.png', category: 'women' },
        { id: 'w2', name: 'High-Waist Jeans', price: 69.99, image: 'women/high_waist.png', category: 'women' },
        { id: 'w3', name: 'Blouse', price: 44.99, originalPrice: 59.99, onSale: true, image: 'women/blouse.png', category: 'women' },
        { id: 'w4', name: 'Maxi Skirt', price: 59.99, image: 'women/maxi_skirt.png', category: 'women' },
        { id: 'w5', name: 'Evening Gown', price: 249.99, originalPrice: 299.99, onSale: true, image: 'women/evening_gown.png', category: 'women' },
        { id: 'w6', name: 'Cardigan', price: 49.99, image: 'women/cardigan.png', category: 'women' },
        { id: 'w7', name: 'Leather Pants', price: 89.99, originalPrice: 119.99, onSale: true, image: 'women/leather_pant.png', category: 'women' },
        { id: 'w8', name: 'Summer Dress', price: 69.99, image: 'women/summer_dress.png', category: 'women' },
        { id: 'w9', name: 'Blazer', price: 129.99, originalPrice: 159.99, onSale: true, image: 'women/blazer.png', category: 'women' },
        { id: 'w10', name: 'Crop Top', price: 29.99, image: 'women/crop_top.png', category: 'women' },
        { id: 'w11', name: 'Pencil Skirt', price: 54.99, originalPrice: 69.99, onSale: true, image: 'women/pencil_skirt.png', category: 'women' },
        { id: 'w12', name: 'Winter Coat', price: 199.99, image: 'women/winter_coat.png', category: 'women' },
        { id: 'w13', name: 'Jumpsuit', price: 84.99, originalPrice: 99.99, onSale: true, image: 'women/jumpsuit.png', category: 'women' },
        { id: 'w14', name: 'Sweater Dress', price: 74.99, image: 'women/sweater.png', category: 'women' },
        { id: 'w15', name: 'Yoga Pants', price: 44.99, originalPrice: 54.99, onSale: true, image: 'women/yoga.png', category: 'women' },
        { id: 'w16', name: 'Silk Blouse', price: 79.99, image: 'women/silk.png', category: 'women' },
        { id: 'w17', name: 'Denim Shorts', price: 39.99, originalPrice: 49.99, onSale: true, image: 'women/denim.png', category: 'women' },
        { id: 'w18', name: 'Formal Suit', price: 179.99, image: 'women/formal.png', category: 'women' },
        { id: 'w19', name: 'Ankle Boots', price: 99.99, originalPrice: 129.99, onSale: true, image: 'women/ankle.png', category: 'women' },
        { id: 'w20', name: 'Cocktail Dress', price: 149.99, image: 'women/cocktail.png', category: 'women' }
    ],
    kids: [
        { id: 'k1', name: 'Dinosaur T-Shirt', price: 24.99, originalPrice: 34.99, onSale: true, image: 'kids/dinosaur.png', category: 'kids' },
        { id: 'k2', name: 'Denim Overalls', price: 39.99, image: 'kids/denim.png', category: 'kids' },
        { id: 'k3', name: 'Princess Dress', price: 49.99, originalPrice: 64.99, onSale: true, image: 'kids/princess.png', category: 'kids' },
        { id: 'k4', name: 'Sports Shorts', price: 19.99, image: 'kids/short.png', category: 'kids' },
        { id: 'k5', name: 'Winter Jacket', price: 59.99, originalPrice: 79.99, onSale: true, image: 'kids/winter.png', category: 'kids' },
        { id: 'k6', name: 'School Uniform', price: 44.99, image: 'kids/uni.png', category: 'kids' },
        { id: 'k7', name: 'Pajama Set', price: 29.99, originalPrice: 39.99, onSale: true, image: 'kids/pajama.png', category: 'kids' },
        { id: 'k8', name: 'Rain Boots', price: 34.99, image: 'kids/rainboot.png', category: 'kids' },
        { id: 'k9', name: 'Summer Dress', price: 39.99, originalPrice: 49.99, onSale: true, image: 'kids/summer.png', category: 'kids' },
        { id: 'k10', name: 'Cargo Pants', price: 34.99, image: 'kids/cargo.png', category: 'kids' },
        { id: 'k11', name: 'Superhero Costume', price: 44.99, originalPrice: 54.99, onSale: true, image: 'kids/super.png', category: 'kids' },
        { id: 'k12', name: 'Sneakers', price: 49.99, image: 'kids/sneaker.png', category: 'kids' },
        { id: 'k13', name: 'Swim Set', price: 29.99, originalPrice: 39.99, onSale: true, image: 'kids/swim.png', category: 'kids' },
        { id: 'k14', name: 'Hoodie', price: 34.99, image: 'kids/hoodie.png', category: 'kids' },
        { id: 'k15', name: 'Ballet Tutu', price: 39.99, originalPrice: 49.99, onSale: true, image: 'kids/ballet.png', category: 'kids' },
        { id: 'k16', name: 'Baseball Cap', price: 19.99, image: 'kids/base.png', category: 'kids' },
        { id: 'k17', name: 'Winter Gloves', price: 24.99, originalPrice: 29.99, onSale: true, image: 'kids/glove.png', category: 'kids' },
        { id: 'k18', name: 'Backpack', price: 29.99, image: 'kids/back.png', category: 'kids' },
        { id: 'k19', name: 'Party Dress', price: 54.99, originalPrice: 69.99, onSale: true, image: 'kids/party.png', category: 'kids' },
        { id: 'k20', name: 'Sport Jersey', price: 34.99, image: 'kids/sport.png', category: 'kids' }
    ],
    others: [
        { id: 'o1', name: 'Smart Watch', price: 199.99, originalPrice: 249.99, onSale: true, image: 'other/smartwatch.png', category: 'others' },
        { id: 'o2', name: 'Leather Wallet', price: 49.99, image: 'other/wallet.png', category: 'others' },
        { id: 'o3', name: 'Backpack', price: 79.99, originalPrice: 99.99, onSale: true, image: 'other/bag.png', category: 'others' },
        { id: 'o4', name: 'Sunglasses', price: 129.99, image: 'other/sunglass.png', category: 'others' },
        { id: 'o5', name: 'Travel Bag', price: 149.99, originalPrice: 179.99, onSale: true, image: 'other/travel.png', category: 'others' },
        { id: 'o6', name: 'Fitness Tracker', price: 89.99, image: 'other/fitness.png', category: 'others' },
        { id: 'o7', name: 'Umbrella', price: 29.99, originalPrice: 39.99, onSale: true, image: 'other/umbrella.png', category: 'others' },
        { id: 'o8', name: 'Scarf', price: 34.99, image: 'other/scarf.png', category: 'others' },
        { id: 'o9', name: 'Hat', price: 39.99, originalPrice: 49.99, onSale: true, image: 'other/hat.png', category: 'others' },
        { id: 'o10', name: 'Jewelry Box', price: 59.99, image: 'other/jwellery.png', category: 'others' },
        { id: 'o11', name: 'Phone Case', price: 24.99, originalPrice: 29.99, onSale: true, image: 'other/phone.png', category: 'others' },
        { id: 'o12', name: 'Laptop Sleeve', price: 44.99, image: 'other/laptop.png', category: 'others' },
        { id: 'o13', name: 'Water Bottle', price: 29.99, originalPrice: 34.99, onSale: true, image: 'other/water.png', category: 'others' },
        { id: 'o14', name: 'Gym Bag', price: 69.99, image: 'other/gym.png', category: 'others' },
        { id: 'o15', name: 'Travel Pillow', price: 34.99, originalPrice: 39.99, onSale: true, image: 'other/pillow.png', category: 'others' },
        { id: 'o16', name: 'Portable Charger', price: 49.99, image: 'other/portable.png', category: 'others' },
        { id: 'o17', name: 'Headphones', price: 159.99, originalPrice: 199.99, onSale: true, image: 'other/headphone.png', category: 'others' },
        { id: 'o18', name: 'Travel Organizer', price: 39.99, image: 'other/organizer.png', category: 'others' },
        { id: 'o19', name: 'Lunch Box', price: 29.99, originalPrice: 34.99, onSale: true, image: 'other/lunch.png', category: 'others' },
        { id: 'o20', name: 'Desk Organizer', price: 44.99, image: 'other/desk.png', category: 'others' }
    ]
};

// Shopping Cart with Quantities
let cart = [];

// DOM Elements
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');
const cartCount = document.querySelector('.cart-count');
const cartItems = document.querySelector('.cart-items');
const subtotalElement = document.querySelector('.subtotal');
const totalElement = document.querySelector('.total-amount');
const checkoutBtn = document.querySelector('.checkout-btn');

// Navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        
        sections.forEach(section => {
            section.classList.remove('active-section');
            if (section.id === targetId) {
                section.classList.add('active-section');
            }
        });

        navLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');

        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Product Card Template
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    let priceHTML = product.onSale 
        ? `<p class="product-price">
            <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
            <span class="sale-price">$${product.price.toFixed(2)}</span>
           </p>`
        : `<p class="product-price">$${product.price.toFixed(2)}</p>`;

    let saleBadge = product.onSale ? '<div class="sale-badge">SALE</div>' : '';

    card.innerHTML = `
        ${saleBadge}
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            ${priceHTML}
            <button class="add-to-cart" data-id="${product.id}" data-category="${product.category}">
                Add to Cart
            </button>
        </div>
    `;
    return card;
}

// Initialize Products
function initializeProducts() {
    const containers = {
        featured: document.getElementById('featured-products'),
        men: document.getElementById('men-products'),
        women: document.getElementById('women-products'),
        kids: document.getElementById('kids-products'),
        others: document.getElementById('other-products')
    };

    for (const [category, container] of Object.entries(containers)) {
        products[category]?.forEach(product => {
            container.appendChild(createProductCard(product));
        });
    }
}

// Add to Cart Functionality
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const productId = e.target.dataset.id;
        const category = e.target.dataset.category;
        const product = products[category].find(p => p.id === productId);
        
        if (product) {
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity = (existingItem.quantity || 1) + 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            
            updateCart();
            
            // Enhanced animation feedback
            e.target.innerHTML = '<i class="fas fa-check"></i> Added!';
            e.target.style.backgroundColor = '#27ae60';
            e.target.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                e.target.textContent = 'Add to Cart';
                e.target.style.backgroundColor = '';
                e.target.style.transform = '';
            }, 1000);
        }
    }
});

// Update Cart
function updateCart() {
    cartCount.textContent = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    cartItems.innerHTML = '';
    let subtotal = 0;

    cart.forEach((item, index) => {
        subtotal += item.price * (item.quantity || 1);
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn minus" onclick="updateQuantity(${index}, -1)">-</button>
                <span class="quantity-display">${item.quantity || 1}</span>
                <button class="quantity-btn plus" onclick="updateQuantity(${index}, 1)">+</button>
            </div>
            <button onclick="removeFromCart(${index})" class="remove-item">×</button>
        `;
        cartItems.appendChild(cartItem);
    });

    const shipping = cart.length > 0 ? 5.99 : 0;
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    totalElement.textContent = `$${(subtotal + shipping).toFixed(2)}`;
}

// Update Quantity
function updateQuantity(index, change) {
    const item = cart[index];
    const newQuantity = (item.quantity || 1) + change;
    
    if (newQuantity < 1) {
        removeFromCart(index);
    } else {
        item.quantity = newQuantity;
        updateCart();
    }
}

// Remove from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Checkout
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Thank you for your purchase! This is a demo site, no actual purchase will be made.');
    cart = [];
    updateCart();
});

// Initialize the store
document.addEventListener('DOMContentLoaded', () => {
    initializeProducts();
    updateCart();
});