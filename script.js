// Product data
const products = [
    { sno: 1, particulars: "PATTI A.0.5.0", gauge: "126", width: "171", price: "171" },
    { sno: 2, particulars: "PATTI A.0.4.0", gauge: "126", width: "154", price: "154" },
    { sno: 3, particulars: "PATTI B.0.5.0", gauge: "115", width: "133", price: "133" },
    { sno: 4, particulars: "PATTI B.0.4.0", gauge: "115", width: "109", price: "109" },
    { sno: 5, particulars: "PATTI B.0.3.5", gauge: "115", width: "99", price: "99" },
    { sno: 6, particulars: "PATTI C.0.5.0", gauge: "105", width: "126", price: "126" },
    { sno: 7, particulars: "PATTI C.0.4.0", gauge: "105", width: "101", price: "101" },
    { sno: 8, particulars: "PATTI C.0.3.5", gauge: "105", width: "92", price: "92" },
    { sno: 9, particulars: "PATTI C.0.3.0", gauge: "105", width: "80", price: "80" },
    { sno: 10, particulars: "PATTI D.0.5.0", gauge: "101", width: "120", price: "120" },
    { sno: 11, particulars: "PATTI D.0.4.0", gauge: "101", width: "96", price: "96" },
    { sno: 12, particulars: "PATTI D.0.3.5", gauge: "101", width: "88", price: "88" },
    { sno: 13, particulars: "PATTI D.0.3.0", gauge: "101", width: "78", price: "78" },
    { sno: 14, particulars: "PATTI 0.3.0(Small)", gauge: "95", width: "74", price: "74" },
    { sno: 15, particulars: "PATTI 0.0.0(Small)", gauge: "95", width: "66", price: "66" },
    { sno: 16, particulars: "BOTTOM A.0.7.5", gauge: "82", width: "160", price: "160" },
    { sno: 17, particulars: "BOTTOM A.0.6.0", gauge: "82", width: "122", price: "122" },
    { sno: 18, particulars: "BOTTOM B.0.7.5", gauge: "72", width: "124", price: "124" },
    { sno: 19, particulars: "BOTTOM B.0.6.0", gauge: "72", width: "101", price: "101" },
    { sno: 20, particulars: "BOTTOM B.0.5.0", gauge: "72", width: "84", price: "84" },
    { sno: 21, particulars: "BOTTOM C.0.7.5", gauge: "68", width: "117", price: "117" },
    { sno: 22, particulars: "BOTTOM C.0.6.0", gauge: "65", width: "93", price: "93" },
    { sno: 23, particulars: "BOTTOM C.0.5.0", gauge: "65", width: "81", price: "81" },
    { sno: 24, particulars: "BOTTOM C.0.4.0", gauge: "65", width: "69", price: "69" },
    { sno: 25, particulars: "BOTTOM 0.4.0(Small)", gauge: "61", width: "62", price: "62" },
    { sno: 26, particulars: "BOTTOM 0.0.0(Small)", gauge: "61", width: "56", price: "56" },
    { sno: 27, particulars: "PERIMETER A.5.0", gauge: "65", width: "96", price: "96" },
    { sno: 28, particulars: "PERIMETER 0.5.0", gauge: "55", width: "69", price: "69" },
    { sno: 29, particulars: "PERIMETER 0.4.0", gauge: "55", width: "55", price: "55" },
    { sno: 30, particulars: "PERIMETER 0.3.5", gauge: "55", width: "50", price: "50" },
    { sno: 31, particulars: "PERIMETER 0.3.0", gauge: "55", width: "47", price: "47" },
    { sno: 32, particulars: "PERIMETER 0.0.0", gauge: "55", width: "42", price: "42" },
    { sno: 33, particulars: "PERIMETER. 0.0.0", gauge: "50", width: "38", price: "38" },
    { sno: 34, particulars: "PERIMETER.PL 0.3.5", gauge: "55", width: "52", price: "52" },
    { sno: 35, particulars: "L.ANGLE 0.5.0", gauge: "35", width: "49", price: "49" },
    { sno: 36, particulars: "L.ANGLE 0.4.0", gauge: "35", width: "39", price: "39" },
    { sno: 37, particulars: "L.ANGLE 0.3.5", gauge: "35", width: "36", price: "36" },
    { sno: 38, particulars: "L.ANGLE 0.3.0", gauge: "35", width: "32", price: "32" },
    { sno: 39, particulars: "L.ANGLE 0.3.0", gauge: "32", width: "30", price: "30" },
    { sno: 40, particulars: "L.ANGLE 0.0.0", gauge: "32", width: "27", price: "27" },
    { sno: 41, particulars: "L.ANGLE.PL 0.3.5", gauge: "35", width: "41", price: "41" },
    { sno: 42, particulars: "L.ANGLE.PL(8ft)", gauge: "35", width: "42", price: "30" },
    { sno: 43, particulars: "PATT.TRUE.PL 0.4.0", gauge: "111", width: "112", price: "112" },
    { sno: 44, particulars: "PATT.TRUE.PL 0.3.5", gauge: "111", width: "100", price: "100" },
    { sno: 45, particulars: "BOTTOM.TRUE.PL 0.6.0", gauge: "68", width: "100", price: "100" },
    { sno: 46, particulars: "BOTTOM.TRUE.PL 0.5.0", gauge: "68", width: "88", price: "88" },
    { sno: 47, particulars: "STUD.3.inc.10.FT 0.5.0", gauge: "148", width: "173", price: "173" },
    { sno: 48, particulars: "FLOOR.3.inc.10.FT 0.5.0", gauge: "124", width: "149", price: "149" },
    { sno: 49, particulars: "STUD.3.inc.10.FT 0.4.0", gauge: "148", width: "147", price: "147" },
    { sno: 50, particulars: "FLOOR.3.Inc.10.FT 0.4.0", gauge: "124", width: "126", price: "126" },
    { sno: 51, particulars: "STUD.2.inc.10.FT 0.5.0", gauge: "124", width: "147", price: "147" },
    { sno: 52, particulars: "FLOOR.2.inc.10.FT 0.5.0", gauge: "101", width: "123", price: "123" },
    { sno: 53, particulars: "STUD.2.inc.10.FT 0.4.0", gauge: "124", width: "120", price: "120" },
    { sno: 54, particulars: "FLOOR.2.inc.10.FT 0.4.0", gauge: "101", width: "101", price: "101" },
    { sno: 55, particulars: "STUD.3.inc.12.FT 0.5.0", gauge: "148", width: "207", price: "207" },
    { sno: 56, particulars: "FLOOR.3.inc.12.FT 0.5.0", gauge: "124", width: "179", price: "179" },
    { sno: 57, particulars: "STUD.3.inc.12.FT 0.4.0", gauge: "148", width: "176", price: "176" },
    { sno: 58, particulars: "FLOOR.3.Inc.12.FT 0.4.0", gauge: "124", width: "152", price: "152" },
    { sno: 59, particulars: "STUD.2.inc.12.FT 0.5.0", gauge: "124", width: "177", price: "177" },
    { sno: 60, particulars: "FLOOR.2.inc.12.FT 0.5.0", gauge: "101", width: "148", price: "148" },
    { sno: 61, particulars: "STUD.2.inc.12.FT 0.4.0", gauge: "124", width: "144", price: "144" },
    { sno: 62, particulars: "FLOOR.2.inc.12.FT 0.4.0", gauge: "101", width: "121", price: "121" }
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
            <td>${product.gauge}</td>
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
            product.gauge.includes(searchTerm) ||
            product.width.includes(searchTerm) ||
            product.price.includes(searchTerm)
        );
    }
    
    // Apply category filter
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.particulars.startsWith(category)
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