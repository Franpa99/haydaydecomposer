// Hay Day Product Decomposer - Main Application Logic

// State management
let products = [];
let currentFocus = -1;

// DOM elements
const productForm = document.getElementById('productForm');
const productNameInput = document.getElementById('productName');
const productQuantityInput = document.getElementById('productQuantity');
const productBody = document.getElementById('productBody');
const decomposeButton = document.getElementById('decomposeButton');
const clearAllButton = document.getElementById('clearAllButton');
const decomposedList = document.getElementById('decomposedList');
const decomposedBody = document.getElementById('decomposedBody');

// Initialize application
function init() {
  loadFromLocalStorage();
  setupEventListeners();
  setupAutocomplete();
  renderProductList();
}

// Event Listeners
function setupEventListeners() {
  productForm.addEventListener('submit', handleFormSubmit);
  decomposeButton.addEventListener('click', handleDecompose);
  clearAllButton.addEventListener('click', handleClearAll);
  
  // Close autocomplete when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.input-group')) {
      closeAllLists();
    }
  });
}

// Form submission handler
function handleFormSubmit(event) {
  event.preventDefault();
  
  const productName = productNameInput.value.trim().toLowerCase();
  const quantity = parseInt(productQuantityInput.value) || 1;
  
  if (!productName) {
    alert('Please enter a product name');
    return;
  }
  
  if (!productExists(productName)) {
    alert(`Product "${productName}" not found. Please select from the suggestions.`);
    return;
  }
  
  addProduct(productName, quantity);
  
  // Reset form
  productNameInput.value = '';
  productQuantityInput.value = '1';
  productNameInput.focus();
}

// Add or update product
function addProduct(name, quantity) {
  const existingProduct = products.find(p => p.name === name);
  
  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    products.push({ name, quantity });
  }
  
  renderProductList();
  saveToLocalStorage();
  updateUIState();
}

// Remove product
function removeProduct(index) {
  products.splice(index, 1);
  renderProductList();
  saveToLocalStorage();
  updateUIState();
}

// Update product quantity
function updateQuantity(index, delta) {
  products[index].quantity += delta;
  
  if (products[index].quantity <= 0) {
    removeProduct(index);
  } else {
    renderProductList();
    saveToLocalStorage();
  }
}

// Clear all products
function handleClearAll() {
  if (products.length === 0) return;
  
  if (confirm('Are you sure you want to clear all products?')) {
    products = [];
    renderProductList();
    saveToLocalStorage();
    updateUIState();
    decomposedList.classList.add('hidden');
  }
}

// Render product list table
function renderProductList() {
  productBody.innerHTML = '';
  
  if (products.length === 0) {
    const row = document.createElement('tr');
    row.innerHTML = '<td colspan="3" class="empty-state">No products added yet</td>';
    productBody.appendChild(row);
    return;
  }
  
  products.forEach((product, index) => {
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td style="text-align: left;">${wrapWithTooltip(product.name)}</td>
      <td>
        <div class="quantity-controls">
          <button class="quantity-btn" onclick="updateQuantity(${index}, -1)" title="Decrease">−</button>
          <span class="quantity-display">${product.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${index}, 1)" title="Increase">+</button>
        </div>
      </td>
      <td>
        <button class="remove-button" onclick="removeProduct(${index})">Remove</button>
      </td>
    `;
    
    productBody.appendChild(row);
  });
}

// Decompose products
function handleDecompose() {
  if (products.length === 0) return;
  
  const decomposedProducts = new Map();
  
  // Decompose each product
  products.forEach(({ name, quantity }) => {
    decomposeProduct(name, quantity, decomposedProducts);
  });
  
  renderDecomposedList(decomposedProducts);
}

// Recursive decomposition
function decomposeProduct(productName, productQuantity, resultMap) {
  const recipe = getRecipe(productName);
  
  if (recipe.length === 0) {
    // Check if it's an animal product
    if (isAnimalProduct(productName)) {
      const animalInfo = getAnimalProductInfo(productName);
      const feedsNeeded = Math.ceil(productQuantity / animalInfo.yield);
      
      // Decompose the feed required
      decomposeProduct(animalInfo.feed, feedsNeeded, resultMap);
    } else {
      // Base ingredient (crop/ore/etc)
      const current = resultMap.get(productName) || 0;
      resultMap.set(productName, current + productQuantity);
    }
  } else {
    // Decompose further
    recipe.forEach(({ element, quantity }) => {
      decomposeProduct(element, quantity * productQuantity, resultMap);
    });
  }
}

// Render decomposed list
function renderDecomposedList(decomposedMap) {
  decomposedBody.innerHTML = '';
  
  // Convert map to array and sort alphabetically
  const sortedItems = Array.from(decomposedMap.entries())
    .sort((a, b) => a[0].localeCompare(b[0]));
  
  sortedItems.forEach(([element, quantity]) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td style="text-align: left;">${wrapWithTooltip(element)}</td>
      <td><strong>${quantity}</strong></td>
    `;
    decomposedBody.appendChild(row);
  });
  
  decomposedList.classList.remove('hidden');
  
  // Smooth scroll to results
  decomposedList.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Update UI state (show/hide buttons)
function updateUIState() {
  if (products.length > 0) {
    decomposeButton.classList.remove('hidden');
    clearAllButton.classList.remove('hidden');
  } else {
    decomposeButton.classList.add('hidden');
    clearAllButton.classList.add('hidden');
    decomposedList.classList.add('hidden');
  }
}

// Autocomplete functionality
function setupAutocomplete() {
  const allProducts = getAllProducts();
  
  productNameInput.addEventListener('input', function() {
    const value = this.value.toLowerCase();
    closeAllLists();
    
    if (!value) return;
    
    currentFocus = -1;
    
    const autocompleteDiv = document.createElement('div');
    autocompleteDiv.setAttribute('id', 'autocomplete-list');
    autocompleteDiv.setAttribute('class', 'autocomplete-items');
    
    this.parentNode.appendChild(autocompleteDiv);
    
    let matchCount = 0;
    const maxMatches = 10;
    
    allProducts.forEach(product => {
      if (matchCount >= maxMatches) return;
      
      if (product.toLowerCase().includes(value)) {
        const item = document.createElement('div');
        
        // Highlight matching part
        const index = product.toLowerCase().indexOf(value);
        const before = product.substr(0, index);
        const match = product.substr(index, value.length);
        const after = product.substr(index + value.length);
        
        item.innerHTML = `${before}<strong>${match}</strong>${after}`;
        item.addEventListener('click', function() {
          productNameInput.value = product;
          closeAllLists();
          productQuantityInput.focus();
        });
        
        autocompleteDiv.appendChild(item);
        matchCount++;
      }
    });
  });
  
  // Handle keyboard navigation
  productNameInput.addEventListener('keydown', function(e) {
    let autocompleteList = document.getElementById('autocomplete-list');
    if (autocompleteList) {
      const items = autocompleteList.getElementsByTagName('div');
      
      if (e.keyCode === 40) { // Down arrow
        e.preventDefault();
        currentFocus++;
        addActive(items);
      } else if (e.keyCode === 38) { // Up arrow
        e.preventDefault();
        currentFocus--;
        addActive(items);
      } else if (e.keyCode === 13) { // Enter
        if (currentFocus > -1 && items[currentFocus]) {
          e.preventDefault();
          items[currentFocus].click();
        }
      }
    }
  });
}

// Add active class to autocomplete item
function addActive(items) {
  if (!items) return false;
  removeActive(items);
  
  if (currentFocus >= items.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = items.length - 1;
  
  items[currentFocus].classList.add('autocomplete-active');
}

// Remove active class from autocomplete items
function removeActive(items) {
  for (let item of items) {
    item.classList.remove('autocomplete-active');
  }
}

// Close all autocomplete lists
function closeAllLists() {
  const items = document.getElementsByClassName('autocomplete-items');
  Array.from(items).forEach(item => item.remove());
}

// Local Storage functions
function saveToLocalStorage() {
  try {
    localStorage.setItem('haydayProducts', JSON.stringify(products));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
}

function loadFromLocalStorage() {
  try {
    const saved = localStorage.getItem('haydayProducts');
    if (saved) {
      products = JSON.parse(saved);
      updateUIState();
    }
  } catch (e) {
    console.error('Failed to load from localStorage:', e);
    products = [];
  }
}

// Utility function to capitalize words
function capitalizeWords(str) {
  return str.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Create tooltip HTML for a product's recipe
function createTooltip(productName) {
  const recipe = getRecipe(productName);
  
  if (recipe.length === 0) {
    return `<span class="tooltip">
      <div class="tooltip-base">Base ingredient - No recipe needed</div>
    </span>`;
  }
  
  let tooltipContent = `<span class="tooltip">
    <div class="tooltip-title">Recipe: ${capitalizeWords(productName)}</div>`;
  
  recipe.forEach(({ element, quantity }) => {
    tooltipContent += `
      <div class="tooltip-item">
        <span class="tooltip-ingredient">${capitalizeWords(element)}</span>
        <span class="tooltip-quantity">×${quantity}</span>
      </div>`;
  });
  
  tooltipContent += `</span>`;
  return tooltipContent;
}

// Wrap product name with tooltip
function wrapWithTooltip(productName, displayName = null) {
  const display = displayName || capitalizeWords(productName);
  const tooltip = createTooltip(productName);
  return `<span class="tooltip-container">${display}${tooltip}</span>`;
}

// Position tooltips dynamically for fixed positioning
function setupTooltipPositioning() {
  document.addEventListener('mouseover', function(e) {
    const container = e.target.closest('.tooltip-container');
    if (!container) return;
    
    const tooltip = container.querySelector('.tooltip');
    if (!tooltip) return;
    
    // Get container position
    const rect = container.getBoundingClientRect();
    
    // Position tooltip above the element
    const tooltipRect = tooltip.getBoundingClientRect();
    const left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
    const top = rect.top - tooltipRect.height - 10;
    
    // Adjust if tooltip goes off screen
    const adjustedLeft = Math.max(10, Math.min(left, window.innerWidth - tooltipRect.width - 10));
    const adjustedTop = top < 10 ? rect.bottom + 10 : top;
    
    tooltip.style.left = adjustedLeft + 'px';
    tooltip.style.top = adjustedTop + 'px';
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Setup tooltip positioning
setupTooltipPositioning();