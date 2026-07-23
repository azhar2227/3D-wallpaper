// 3D वॉलपेपर प्रोडक्ट्स
const products = [
    { id: 1, name: "3D स्पेस वॉलपेपर", price: 199, img: "https://via.placeholder.com/150?text=Space+3D" },
    { id: 2, name: "3D एब्सट्रैक्ट आर्ट", price: 249, img: "https://via.placeholder.com/150?text=Abstract+3D" },
    { id: 3, name: "3D नेचर सीन", price: 299, img: "https://via.placeholder.com/150?text=Nature+3D" },
    { id: 4, name: "3D साइबरपंक सिटी", price: 349, img: "https://via.placeholder.com/150?text=Cyberpunk+3D" },
    { id: 5, name: "3D अंडरवाटर", price: 199, img: "https://via.placeholder.com/150?text=Underwater+3D" },
    { id: 6, name: "3D मिनिमलिस्ट", price: 179, img: "https://via.placeholder.com/150?text=Minimal+3D" },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    if (sectionId === 'products') renderProducts();
    if (sectionId === 'cart') renderCart();
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="price">₹${p.price}</p>
            <button onclick="addToCart(${p.id})">कार्ट में डालें</button>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    saveCart();
    updateCartCount();
    alert('वॉलपेपर कार्ट में डाला गया!');
}

function renderCart() {
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    if (cart.length === 0) {
        container.innerHTML = '<p>आपका कार्ट खाली है।</p>';
        totalEl.innerHTML = '';
        return;
    }
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name} (x${item.qty})</span>
            <span>₹${item.price * item.qty}</span>
            <button onclick="removeFromCart(${item.id})">हटाएं</button>
        </div>
    `).join('');
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    totalEl.innerHTML = `कुल: ₹${total}`;
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
    updateCartCount();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cart-count').textContent = count;
}

function checkout() {
    if (cart.length === 0) {
        alert('कार्ट खाली है!');
        return;
    }
    document.getElementById('checkout-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('checkout-modal').style.display = 'none';
}

document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('🎉 ऑर्डर सफलतापूर्वक प्लेस हो गया! धन्यवाद।');
    cart = [];
    saveCart();
    updateCartCount();
    closeModal();
    showSection('home');
});

showSection('home');
updateCartCount();
