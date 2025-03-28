// Product data
const products = [
    { sno: 1, particulars: "PATTI", "gauge(mm)": "A.0.5.0", width: "126", price: "171" },
    { sno: 2, particulars: "PATTI", "gauge(mm)": "A.0.4.0", width: "126", price: "154" },
    { sno: 3, particulars: "PATTI", "gauge(mm)": "B.0.5.0", width: "115", price: "133" },
    { sno: 4, particulars: "PATTI", "gauge(mm)": "B.0.4.0", width: "115", price: "109" },
    { sno: 5, particulars: "PATTI", "gauge(mm)": "B.0.3.5", width: "115", price: "99" },
    { sno: 6, particulars: "PATTI", "gauge(mm)": "C.0.5.0", width: "105", price: "126" },
    { sno: 7, particulars: "PATTI", "gauge(mm)": "C.0.4.0", width: "105", price: "101" },
    { sno: 8, particulars: "PATTI", "gauge(mm)": "C.0.3.5", width: "105", price: "92" },
    { sno: 9, particulars: "PATTI", "gauge(mm)": "C.0.3.0", width: "105", price: "80" },
    { sno: 10, particulars: "PATTI", "gauge(mm)": "D.0.5.0", width: "101", price: "120" },
    { sno: 11, particulars: "PATTI", "gauge(mm)": "D.0.4.0", width: "101", price: "96" },
    { sno: 12, particulars: "PATTI", "gauge(mm)": "D.0.3.5", width: "101", price: "88" },
    { sno: 13, particulars: "PATTI", "gauge(mm)": "D.0.3.0", width: "101", price: "78" },
    { sno: 14, particulars: "PATTI", "gauge(mm)": "0.3.0(Small)", width: "95", price: "74" },
    { sno: 15, particulars: "PATTI", "gauge(mm)": "0.0.0(Small)", width: "95", price: "66" },
    { sno: 16, particulars: "BOTTOM", "gauge(mm)": "A.0.7.5", width: "82", price: "160" },
    { sno: 17, particulars: "BOTTOM", "gauge(mm)": "A.0.6.0", width: "82", price: "122" },
    { sno: 18, particulars: "BOTTOM", "gauge(mm)": "B.0.7.5", width: "72", price: "124" },
    { sno: 19, particulars: "BOTTOM", "gauge(mm)": "B.0.6.0", width: "72", price: "101" },
    { sno: 20, particulars: "BOTTOM", "gauge(mm)": "B.0.5.0", width: "72", price: "84" },
    { sno: 21, particulars: "BOTTOM", "gauge(mm)": "C.0.7.5", width: "68", price: "117" },
    { sno: 22, particulars: "BOTTOM", "gauge(mm)": "C.0.6.0", width: "65", price: "93" },
    { sno: 23, particulars: "BOTTOM", "gauge(mm)": "C.0.5.0", width: "65", price: "81" },
    { sno: 24, particulars: "BOTTOM", "gauge(mm)": "C.0.4.0", width: "65", price: "69" },
    { sno: 25, particulars: "BOTTOM", "gauge(mm)": "0.4.0(Small)", width: "61", price: "62" },
    { sno: 26, particulars: "BOTTOM", "gauge(mm)": "0.0.0(Small)", width: "61", price: "56" },
    { sno: 27, particulars: "PERIMETER", "gauge(mm)": "A.5.0", width: "65", price: "96" },
    { sno: 28, particulars: "PERIMETER", "gauge(mm)": "0.5.0", width: "55", price: "69" },
    { sno: 29, particulars: "PERIMETER", "gauge(mm)": "0.4.0", width: "55", price: "55" },
    { sno: 30, particulars: "PERIMETER", "gauge(mm)": "0.3.5", width: "55", price: "50" },
    { sno: 31, particulars: "PERIMETER", "gauge(mm)": "0.3.0", width: "55", price: "47" },
    { sno: 32, particulars: "PERIMETER", "gauge(mm)": "0.0.0", width: "55", price: "42" },
    { sno: 33, particulars: "PERIMETER", "gauge(mm)": "0.0.0", width: "50", price: "38" },
    { sno: 34, particulars: "PERIMETER.PL", "gauge(mm)": "0.3.5", width: "55", price: "52" },
    { sno: 35, particulars: "L.ANGLE", "gauge(mm)": "0.5.0", width: "35", price: "49" },
    { sno: 36, particulars: "L.ANGLE", "gauge(mm)": "0.4.0", width: "35", price: "39" },
    { sno: 37, particulars: "L.ANGLE", "gauge(mm)": "0.3.5", width: "35", price: "36" },
    { sno: 38, particulars: "L.ANGLE", "gauge(mm)": "0.3.0", width: "35", price: "32" },
    { sno: 39, particulars: "L.ANGLE", "gauge(mm)": "0.3.0", width: "32", price: "30" },
    { sno: 40, particulars: "L.ANGLE", "gauge(mm)": "0.0.0", width: "32", price: "27" },
    { sno: 41, particulars: "L.ANGLE.PL", "gauge(mm)": "0.3.5", width: "35", price: "41" },
    { sno: 42, particulars: "L.ANGLE.PL(8ft)", "gauge(mm)": "0.3.5", width: "35", price: "30" },
    { sno: 43, particulars: "PATT.TRUE.PL", "gauge(mm)": "0.4.0", width: "111", price: "112" },
    { sno: 44, particulars: "PATT.TRUE.PL", "gauge(mm)": "0.3.5", width: "111", price: "100" },
    { sno: 45, particulars: "BOTTOM.TRUE.PL", "gauge(mm)": "0.6.0", width: "68", price: "100" },
    { sno: 46, particulars: "BOTTOM.TRUE.PL", "gauge(mm)": "0.5.0", width: "68", price: "88" },
    { sno: 47, particulars: "STUD.3.inc.10.FT", "gauge(mm)": "0.5.0", width: "148", price: "173" },
    { sno: 48, particulars: "FLOOR.3.inc.10.FT", "gauge(mm)": "0.5.0", width: "124", price: "149" },
    { sno: 49, particulars: "STUD.3.inc.10.FT", "gauge(mm)": "0.4.0", width: "148", price: "147" },
    { sno: 50, particulars: "FLOOR.3.Inc.10.FT", "gauge(mm)": "0.4.0", width: "124", price: "126" },
    { sno: 51, particulars: "STUD.2.inc.10.FT", "gauge(mm)": "0.5.0", width: "124", price: "147" },
    { sno: 52, particulars: "FLOOR.2.inc.10.FT", "gauge(mm)": "0.5.0", width: "101", price: "123" },
    { sno: 53, particulars: "STUD.2.inc.10.FT", "gauge(mm)": "0.4.0", width: "124", price: "120" },
    { sno: 54, particulars: "FLOOR.2.inc.10.FT", "gauge(mm)": "0.4.0", width: "101", price: "101" },
    { sno: 55, particulars: "STUD.3.inc.12.FT", "gauge(mm)": "0.5.0", width: "148", price: "207" },
    { sno: 56, particulars: "FLOOR.3.inc.12.FT", "gauge(mm)": "0.5.0", width: "124", price: "179" },
    { sno: 57, particulars: "STUD.3.inc.12.FT", "gauge(mm)": "0.4.0", width: "148", price: "176" },
    { sno: 58, particulars: "FLOOR.3.Inc.12.FT", "gauge(mm)": "0.4.0", width: "124", price: "152" },
    { sno: 59, particulars: "STUD.2.inc.12.FT", "gauge(mm)": "0.5.0", width: "124", price: "177" },
    { sno: 60, particulars: "FLOOR.2.inc.12.FT", "gauge(mm)": "0.5.0", width: "101", price: "148" },
    { sno: 61, particulars: "STUD.2.inc.12.FT", "gauge(mm)": "0.4.0", width: "124", price: "144" },
    { sno: 62, particulars: "FLOOR.2.inc.12.FT", "gauge(mm)": "0.4.0", width: "101", price: "121" }
];

// DOM elements
const productsTableBody = document.getElementById('productsTableBody');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const resetFilters = document.getElementById('resetFilters');
const downloadPdf = document.getElementById('downloadPdf');
const quoteForm = document.getElementById('quoteForm');
const notification = document.getElementById('notification');

// Display products in the table
function displayProducts(productsToDisplay) {
    productsTableBody.innerHTML = '';
    
    productsToDisplay.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.sno}</td>
            <td>${product.particulars}</td>
            <td>${product["gauge(mm)"]}</td>
            <td>${product.width}</td>
            <td>${product.price}</td>
        `;
        productsTableBody.appendChild(row);
    });
}

// Filter products based on search and category
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    
    let filteredProducts = products;
    
    // Apply search filter
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.particulars.toLowerCase().includes(searchTerm) ||
            product["gauge(mm)"].toLowerCase().includes(searchTerm) ||
            product.width.includes(searchTerm) ||
            product.price.includes(searchTerm)
        );
    }
    
    // Apply category filter
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.particulars.toLowerCase().includes(category.toLowerCase())
        );
    }
    
    displayProducts(filteredProducts);
}

// Show notification
function showNotification(message, isSuccess = true) {
    notification.textContent = message;
    notification.style.backgroundColor = isSuccess ? '#27ae60' : '#e74c3c';
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Initialize the page
function init() {
    // Display all products initially
    displayProducts(products);
    
    // Event listeners
    searchInput.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
    
    resetFilters.addEventListener('click', () => {
        searchInput.value = '';
        categoryFilter.value = 'all';
        filterProducts();
    });
    
    downloadPdf.addEventListener('click', () => {
        showNotification('PDF download would be implemented here in a real application');
    });
    
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        
        // In a real app, you would send this data to a server
        console.log('Quote request:', { name, phone });
        
        showNotification('Thank you for your request! We will contact you shortly.');
        quoteForm.reset();
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);