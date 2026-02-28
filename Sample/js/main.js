// Sample Site - Main JavaScript
// LocalStorage helper functions
const storage = {
    get(key) {
        const json = localStorage.getItem(key);
        return json ? JSON.parse(json) : null;
    },
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    remove(key) {
        localStorage.removeItem(key);
    }
};

// Initialize sample data if not exists
function initializeData() {
    if (!storage.get('users')) {
        storage.set('users', []);
    }
    if (!storage.get('products')) {
        storage.set('products', [
            { id: 1, name: 'Switch 24 Port', category: 'switches', price: 120, description: 'Managed Switch 24 Port Layer 3', image: 'product1.jpg' },
            { id: 2, name: 'Router Wifi 6', category: 'routers', price: 180, description: 'High-speed Wifi 6 Router', image: 'product2.jpg' },
            { id: 3, name: 'Firewall Pro', category: 'firewalls', price: 450, description: 'Enterprise Firewall System', image: 'product3.jpg' },
            { id: 4, name: 'Access Point', category: 'access-points', price: 85, description: 'Wireless Access Point', image: 'product4.jpg' }
        ]);
    }
    if (!storage.get('news')) {
        storage.set('news', [
            { id: 1, title: 'New Router Release', category: 'news', content: 'Company releases new WiFi 6 router', date: '2025-01-15', image: 'news1.jpg' },
            { id: 2, title: 'Network Security Tips', category: 'tips', content: 'Best practices for network security', date: '2025-01-10', image: 'news2.jpg' }
        ]);
    }
    if (!storage.get('cart')) {
        storage.set('cart', []);
    }
}

// User registration
function registerUser(user) {
    const users = storage.get('users') || [];
    if (users.some(u => u.username === user.username)) {
        return { success: false, message: 'Tên đăng nhập đã tồn tại' };
    }
    users.push(user);
    storage.set('users', users);
    return { success: true, message: 'Đăng ký thành công' };
}

// User login
function loginUser(username, password) {
    const users = storage.get('users') || [];
    return users.find(u => u.username === username && u.password === password);
}

// Cart functions
function addToCart(product) {
    const cart = storage.get('cart') || [];
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    storage.set('cart', cart);
}

function removeFromCart(productId) {
    const cart = storage.get('cart') || [];
    storage.set('cart', cart.filter(item => item.id !== productId));
}

function getCart() {
    return storage.get('cart') || [];
}

function getTotalPrice() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
}

// Validation functions
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

function validateUsername(username) {
    return username.length >= 3 && /^[a-zA-Z0-9_]+$/.test(username);
}

// Form event listeners setup
document.addEventListener('DOMContentLoaded', () => {
    initializeData();
    
    // Setup registration form
    const regForm = document.getElementById('register-form');
    if (regForm) {
        regForm.addEventListener('submit', handleRegister);
    }
    
    // Setup login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Setup search form
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', handleSearch);
    }
});

function handleRegister(e) {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const email = form.email.value.trim();
    const fullname = form.fullname.value.trim();
    
    // Validation
    if (!validateUsername(username)) {
        showError('Tên đăng nhập phải từ 3 ký tự, chỉ chứa chữ, số và dấu gạch dưới');
        return;
    }
    
    if (!validatePassword(password)) {
        showError('Mật khẩu phải có từ 6 ký tự trở lên');
        return;
    }
    
    if (password !== confirmPassword) {
        showError('Mật khẩu xác nhận không khớp');
        return;
    }
    
    if (!validateEmail(email)) {
        showError('Email không hợp lệ');
        return;
    }
    
    if (!fullname) {
        showError('Vui lòng nhập tên đầy đủ');
        return;
    }
    
    const result = registerUser({ username, password, email, fullname });
    if (result.success) {
        showSuccess(`Đăng ký thành công!<br>Tên đăng nhập: ${username}<br>Email: ${email}<br>Tên: ${fullname}`);
        form.reset();
    } else {
        showError(result.message);
    }
}

function handleLogin(e) {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;
    
    const user = loginUser(username, password);
    if (user) {
        storage.set('currentUser', user);
        showSuccess('Đăng nhập thành công! Chuyển hướng...');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    } else {
        showError('Tên đăng nhập hoặc mật khẩu không chính xác');
    }
}

function handleSearch(e) {
    e.preventDefault();
    const query = e.target.q.value;
    window.location.href = `search_result.html?q=${encodeURIComponent(query)}`;
}

function showSuccess(message) {
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.className = 'alert alert-success';
        resultDiv.innerHTML = message;
    }
}

function showError(message) {
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.className = 'alert alert-error';
        resultDiv.textContent = message;
    }
}

// Logout function
function logout() {
    storage.remove('currentUser');
    window.location.href = 'index.html';
}

// Get current user
function getCurrentUser() {
    return storage.get('currentUser');
}
