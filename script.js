// --- Freshcart 2.0 Core Logic ---

// Product Database
const productsData = {
    'kiwi': {
        name: 'Fresh Kiwi',
        price: 300,
        unit: 'Kg',
        image: 'all fruits image/1.png',
        tag: 'Fresh',
        description: 'Vibrant green kiwis sourced from premium orchards. Rich in Vitmain C, fiber, and antioxidants, these kiwis offer a perfect balance of sweetness and tanginess.',
        benefits: ['High Vitamin C', 'Digestive Health', 'Rich in Fiber'],
        reviews: [
            { user: 'Amit S.', rating: 5, comment: 'Very fresh and juicy!' },
            { user: 'Priya R.', rating: 4, comment: 'Great quality, slightly expensive.' }
        ]
    },
    'carambola': {
        name: 'Carambola (Star Fruit)',
        price: 90,
        unit: 'Kg',
        image: 'all fruits image/amrak.png',
        tag: 'Seasonal',
        description: 'Exotic star-shaped fruit with a unique sweet-and-sour profile. Perfect for fruit salads and garnishing.',
        benefits: ['Low Calorie', 'Vitamin C', 'Hydrating'],
        reviews: [
            { user: 'Rahul V.', rating: 5, comment: 'Hard to find this quality elsewhere!' }
        ]
    },
    'apple': {
        name: 'Fresh Apple',
        price: 120,
        unit: 'Kg',
        image: 'all fruits image/apple.png',
        tag: 'Best Seller',
        description: 'Crisp, sweet, and locally harvested apples. The perfect healthy snack for any time of the day.',
        benefits: ['Heart Healthy', 'High Fiber', 'Boosts Immunity'],
        reviews: [
            { user: 'Sonal K.', rating: 5, comment: 'Best apples I have had in a while.' }
        ]
    },
    'watermelon': {
        name: 'Watermelon',
        price: 30,
        unit: 'Kg',
        image: 'all fruits image/hirmana.png',
        tag: 'Fresh',
        description: 'Sweet and hydrating watermelons, perfect for quenching thirst on a hot day.',
        benefits: ['Hydration', 'Lycopene Rich', 'Vitamin A'],
        reviews: []
    },
    'banana': {
        name: 'Golden Banana',
        price: 60,
        unit: 'Dozen',
        image: 'all fruits image/Banan.png',
        tag: 'Essential',
        description: 'Sweet, creamy, and energy-packed bananas. Sourced from organic plantations.',
        benefits: ['Energy Boost', 'Potassium Rich', 'Great for Smoothies'],
        reviews: []
    },
    'lychee': {
        name: 'Sweet Lychee',
        price: 120,
        unit: 'Kg',
        image: 'all fruits image/Lichi.png',
        tag: 'Seasonal',
        description: 'Fragrant and sweet lychees with a delicate floral flavor. A summer favorite.',
        benefits: ['Antioxidants', 'Vitamin C', 'Immunity Support'],
        reviews: []
    },
    'grapes': {
        name: 'Fresh Grapes',
        price: 80,
        unit: 'Kg',
        image: 'all fruits image/graps.png',
        tag: 'Fresh',
        description: 'Seedless green grapes, bursting with sweet juice. Perfect for snacking.',
        benefits: ['Brain Health', 'Heart Health', 'Vitamin K'],
        reviews: []
    },
    'orange': {
        name: 'Juicy Orange',
        price: 60,
        unit: 'Kg',
        image: 'all fruits image/orange.png',
        tag: 'Citrus',
        description: 'Sweet and tangy oranges, packed with juice. Great for fresh OJ.',
        benefits: ['High Vitamin C', 'Skin Health', 'Immunity'],
        reviews: []
    },
    'mango': {
        name: 'Alphonso Mango',
        price: 150,
        unit: 'Kg',
        image: 'all fruits image/mango.png',
        tag: 'Premium',
        description: 'The King of Fruits. Famous for its rich flavor, aroma, and silky texture.',
        benefits: ['Vitamin A', 'Fiber', 'Iron'],
        reviews: []
    },
    'pineapple': {
        name: 'Tropical Pineapple',
        price: 70,
        unit: 'Piece',
        image: 'all fruits image/ananas.png',
        tag: 'Tropical',
        description: 'Fresh and ripe tropical pineapples. Sweet with a tangy kick.',
        benefits: ['Digestion', 'Anti-inflammatory', 'Vitamin C'],
        reviews: []
    },
    'pomegranate': {
        name: 'Pomegranate',
        price: 180,
        unit: 'Kg',
        image: 'all fruits image/anar.png',
        tag: 'Healthy',
        description: 'Ruby red arils packed with nutrients. Deep, sweet, and slightly tart flavor.',
        benefits: ['Heart Health', 'Antioxidants', 'Iron Boost'],
        reviews: []
    },
    'dragon': {
        name: 'Dragon Fruit',
        price: 100,
        unit: 'Piece',
        image: 'all fruits image/dragon.png',
        tag: 'Exotic',
        description: 'Stunning pink dragon fruit with white speckled flesh. Mildly sweet and crunchy.',
        benefits: ['Prebiotics', 'Low GI', 'Magnesium'],
        reviews: []
    }
};

// Slider Logic
let currentIndex = 0;
let slideInterval;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    if (!slides) return;
    const totalSlides = slides.children.length;
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    resetInterval();
}

function startInterval() {
    slideInterval = setInterval(() => moveSlide(1), 5000);
}

function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
}

// Initial start
startInterval();

// Sticky Header Logic
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Toast Notifications
function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Side-Drawer Cart Toggle
const cartDrawer = document.getElementById('cart-drawer');
const cartDrawerBtn = document.getElementById('cart-drawer-btn');
const closeDrawerBtn = document.getElementById('close-drawer');

if (cartDrawerBtn) {
    cartDrawerBtn.addEventListener('click', () => {
        renderDrawerCart();
        cartDrawer.classList.add('open');
    });
}

if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener('click', () => {
        cartDrawer.classList.remove('open');
    });
}

// Close drawer on outside click
document.addEventListener('click', (e) => {
    if (cartDrawer && cartDrawer.classList.contains('open') &&
        !cartDrawer.contains(e.target) && !cartDrawerBtn.contains(e.target)) {
        cartDrawer.classList.remove('open');
    }
});

// Cart Management
function addToCart(productName, productPrice, productImage) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, image: productImage, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderDrawerCart();

    // Open drawer to show progress
    if (cartDrawer) cartDrawer.classList.add('open');
    showToast(`${productName} added to cart!`);
}

function buyNow(productName, productPrice, productImage) {
    addToCart(productName, productPrice, productImage);
    window.location.href = "cart.html";
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartCountElements = document.querySelectorAll(".cart-count");
    cartCountElements.forEach(el => {
        el.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    });
}

function renderDrawerCart() {
    const container = document.getElementById('cart-drawer-items');
    const totalEl = document.getElementById('drawer-total');
    if (!container) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: var(--text-muted); margin-top: 2rem;">Your cart is empty.</p>`;
        if (totalEl) totalEl.textContent = "₹0.00";
        return;
    }

    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const itemEl = document.createElement('div');
        itemEl.style.display = 'flex';
        itemEl.style.gap = '1rem';
        itemEl.style.marginBottom = '1rem';
        itemEl.style.alignItems = 'center';

        itemEl.innerHTML = `
            <img src="${item.image}" style="width: 60px; height: 60px; object-fit: contain; border-radius: var(--radius-sm); border: 1px solid #eff2ef;">
            <div style="flex: 1;">
                <h4 style="font-size: 0.9rem; margin-bottom: 0.25rem;">${item.name}</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary);">₹${item.price} x ${item.quantity}</p>
            </div>
            <button onclick="removeFromDrawer(${index})" style="background: none; border: none; color: #e74c3c; cursor: pointer; font-size: 0.8rem;">Remove</button>
        `;
        container.appendChild(itemEl);
    });

    if (totalEl) totalEl.textContent = `₹${total.toFixed(2)}`;
}

function removeFromDrawer(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderDrawerCart();
}

// Search Logic
function searchProducts() {
    const query = document.getElementById('product-search').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const name = product.querySelector('h3').textContent.toLowerCase();
        if (name.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });

    if (query) {
        showToast(`Searching for "${query}"...`);
    }
}

// Navigation for departments (backwards compatibility)
function navigateSection() {
    var selectedPage = document.getElementById("sectionSelect").value;
    if (selectedPage) {
        window.location.href = selectedPage;
    }
}

// Initializations
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();

    // Check if we are on a shop page and render search results if needed
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('q');
    if (searchParam) {
        document.getElementById('product-search').value = searchParam;
        searchProducts();
    }
});
