// प्रोडक्ट्स डेटा
const products = [
    { id: 1, name: "वायरलेस ईयरबड्स", price: 999, img: "https://via.placeholder.com/150?text=Earbuds" },
    { id: 2, name: "स्मार्टवॉच", price: 2499, img: "https://via.placeholder.com/150?text=Watch" },
    { id: 3, name: "ब्लूटूथ स्पीकर", price: 1499, img: "https://via.placeholder.com/150?text=Speaker" },
    { id: 4, name: "मोबाइल स्टैंड", price: 299, img: "https://via.placeholder.com/150?text=Stand" },
    { id: 5, name: "USB चार्जर", price: 499, img: "https://via.placeholder.com/150?text=Charger" },
    { id: 6, name: "लैपटॉप बैग", price: 899, img: "https://via.placeholder.com/150?text=Bag" },
];

// कार्ट
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// सेक्शन दिखाओ
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    if (sectionId === 'products') renderProducts();
    if (sectionId === 'cart') renderCart();
}

// प्रोडक्ट्स रेंडर करो
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

// कार्ट में डालो
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
    alert('प्रोडक्ट कार्ट में डाला गया!');
}

// कार्ट रेंडर करो
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

// कार्ट से हटाओ
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
    updateCartCount();
}

// कार्ट सेव करो
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// कार्ट काउंट अपडेट
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cart-count').textContent = count;
}

// चेकआउट
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

// चेकआउट फॉर्म सबमिट
document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('🎉 ऑर्डर सफलतापूर्वक प्लेस हो गया! धन्यवाद।');
    cart = [];
    saveCart();
    updateCartCount();
    closeModal();
    showSection('home');
});

// शुरू में होम दिखाओ और कार्ट काउंट सेट करो
showSection('home');
updateCartCount();