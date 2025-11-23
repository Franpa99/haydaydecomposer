// Hay Day Product Recipes Database
const RECIPES = {
  // Animal Feed
  'chicken feed': [
    { element: 'wheat', quantity: 2 },
    { element: 'corn', quantity: 1 }
  ],
  'cow feed': [
    { element: 'corn', quantity: 1 },
    { element: 'soybean', quantity: 2 }
  ],
  'pig feed': [
    { element: 'carrot', quantity: 2 },
    { element: 'soybean', quantity: 1 }
  ],
  'sheep feed': [
    { element: 'wheat', quantity: 3 },
    { element: 'soybean', quantity: 1 }
  ],
  'goat feed': [
    { element: 'wheat', quantity: 1 },
    { element: 'carrot', quantity: 2 },
    { element: 'corn', quantity: 1 }
  ],

  // Dairy Products
  'cream': [
    { element: 'milk', quantity: 1 }
  ],
  'butter': [
    { element: 'milk', quantity: 2 }
  ],
  'cheese': [
    { element: 'milk', quantity: 3 }
  ],
  'goat cheese': [
    { element: 'goat milk', quantity: 2 }
  ],

  // Bakery - Breads
  'bread': [
    { element: 'wheat', quantity: 3 }
  ],
  'corn bread': [
    { element: 'corn', quantity: 2 },
    { element: 'egg', quantity: 2 }
  ],

  // Bakery - Cookies & Muffins
  'cookie': [
    { element: 'wheat', quantity: 2 },
    { element: 'brown sugar', quantity: 1 },
    { element: 'egg', quantity: 2 }
  ],
  'raspberry muffin': [
    { element: 'raspberries', quantity: 2 },
    { element: 'wheat', quantity: 2 },
    { element: 'egg', quantity: 1 }
  ],
  'blackberry muffin': [
    { element: 'blackberries', quantity: 2 },
    { element: 'wheat', quantity: 1 },
    { element: 'egg', quantity: 2 }
  ],

  // Pizza
  'pizza': [
    { element: 'wheat', quantity: 2 },
    { element: 'tomato', quantity: 1 },
    { element: 'cheese', quantity: 1 }
  ],
  'spicy pizza': [
    { element: 'wheat', quantity: 2 },
    { element: 'tomato', quantity: 1 },
    { element: 'cheese', quantity: 1 },
    { element: 'chili pepper', quantity: 1 }
  ],

  // Sugar Products
  'brown sugar': [
    { element: 'sugarcane', quantity: 1 }
  ],
  'white sugar': [
    { element: 'sugarcane', quantity: 2 }
  ],
  'syrup': [
    { element: 'sugarcane', quantity: 4 }
  ],

  // Popcorn
  'popcorn': [
    { element: 'corn', quantity: 2 }
  ],
  'buttered popcorn': [
    { element: 'corn', quantity: 2 },
    { element: 'butter', quantity: 1 }
  ],
  'chili popcorn': [
    { element: 'corn', quantity: 2 },
    { element: 'chili pepper', quantity: 2 }
  ],

  // Breakfast
  'pancake': [
    { element: 'egg', quantity: 3 },
    { element: 'brown sugar', quantity: 1 }
  ],
  'bacon and eggs': [
    { element: 'egg', quantity: 4 },
    { element: 'bacon', quantity: 2 }
  ],

  // Burgers
  'hamburger': [
    { element: 'bread', quantity: 2 },
    { element: 'bacon', quantity: 2 }
  ],
  'fish burger': [
    { element: 'fish fillet', quantity: 2 },
    { element: 'bread', quantity: 2 },
    { element: 'chili pepper', quantity: 1 }
  ],

  // Cooked Vegetables
  'roasted tomatoes': [
    { element: 'tomato', quantity: 2 }
  ],
  'baked potato': [
    { element: 'potato', quantity: 2 },
    { element: 'cream', quantity: 1 },
    { element: 'chili pepper', quantity: 1 },
    { element: 'cheese', quantity: 1 }
  ],

  // Pies
  'carrot pie': [
    { element: 'carrot', quantity: 3 },
    { element: 'wheat', quantity: 2 },
    { element: 'egg', quantity: 1 }
  ],
  'pumpkin pie': [
    { element: 'pumpkin', quantity: 3 },
    { element: 'wheat', quantity: 2 },
    { element: 'egg', quantity: 1 }
  ],
  'bacon pie': [
    { element: 'bacon', quantity: 3 },
    { element: 'wheat', quantity: 2 },
    { element: 'egg', quantity: 1 }
  ],
  'apple pie': [
    { element: 'apples', quantity: 3 },
    { element: 'wheat', quantity: 2 },
    { element: 'egg', quantity: 1 },
    { element: 'syrup', quantity: 1 }
  ],
  'fish pie': [
    { element: 'fish fillet', quantity: 3 },
    { element: 'wheat', quantity: 2 },
    { element: 'egg', quantity: 1 }
  ],
  'feta pie': [
    { element: 'goat cheese', quantity: 1 },
    { element: 'wheat', quantity: 2 },
    { element: 'egg', quantity: 1 }
  ],

  // Casserole
  'casserole': [
    { element: 'potato', quantity: 2 },
    { element: 'cheese', quantity: 1 },
    { element: 'bacon', quantity: 2 },
    { element: 'egg', quantity: 2 }
  ],

  // Cakes
  'carrot cake': [
    { element: 'carrot', quantity: 2 },
    { element: 'butter', quantity: 1 },
    { element: 'brown sugar', quantity: 1 }
  ],
  'cream cake': [
    { element: 'wheat', quantity: 5 },
    { element: 'cream', quantity: 1 },
    { element: 'white sugar', quantity: 1 }
  ],
  'red berry cake': [
    { element: 'raspberries', quantity: 1 },
    { element: 'cherries', quantity: 2 },
    { element: 'milk', quantity: 1 },
    { element: 'egg', quantity: 1 }
  ],
  'cheesecake': [
    { element: 'cookie', quantity: 1 },
    { element: 'cheese', quantity: 1 }
  ],
  'strawberry cake': [
    { element: 'wheat', quantity: 3 },
    { element: 'cream', quantity: 1 },
    { element: 'white sugar', quantity: 1 },
    { element: 'strawberries', quantity: 2 }
  ],
  'chocolate cake': [
    { element: 'butter', quantity: 1 },
    { element: 'brown sugar', quantity: 1 },
    { element: 'cacaos', quantity: 2 }
  ],

  // Textiles
  'sweater': [
    { element: 'wool', quantity: 2 }
  ],
  'cotton fabric': [
    { element: 'cotton', quantity: 3 }
  ],
  'blue woolly hat': [
    { element: 'wool', quantity: 1 },
    { element: 'indigo', quantity: 1 }
  ],
  'blue sweater': [
    { element: 'wool', quantity: 2 },
    { element: 'indigo', quantity: 2 }
  ],
  'cotton shirt': [
    { element: 'cotton fabric', quantity: 2 }
  ],
  'wooly chaps': [
    { element: 'cotton fabric', quantity: 1 },
    { element: 'wool', quantity: 3 }
  ],
  'violet dress': [
    { element: 'cotton fabric', quantity: 2 },
    { element: 'indigo', quantity: 1 },
    { element: 'raspberries', quantity: 1 }
  ],

  // Juices
  'carrot juice': [
    { element: 'carrot', quantity: 3 }
  ],
  'apple juice': [
    { element: 'apples', quantity: 2 }
  ],
  'cherry juice': [
    { element: 'cherries', quantity: 2 }
  ],
  'tomato juice': [
    { element: 'tomato', quantity: 3 }
  ],
  'berry juice': [
    { element: 'raspberries', quantity: 1 },
    { element: 'blackberries', quantity: 1 }
  ],

  // Ice Cream
  'vanilla ice cream': [
    { element: 'cream', quantity: 1 },
    { element: 'milk', quantity: 1 },
    { element: 'white sugar', quantity: 1 }
  ],
  'cherry popsicle': [
    { element: 'cherry juice', quantity: 1 },
    { element: 'syrup', quantity: 1 }
  ],
  'strawberry ice cream': [
    { element: 'cream', quantity: 1 },
    { element: 'milk', quantity: 1 },
    { element: 'white sugar', quantity: 1 },
    { element: 'strawberries', quantity: 3 }
  ],

  // Jams
  'apple jam': [
    { element: 'apples', quantity: 3 }
  ],
  'raspberry jam': [
    { element: 'raspberries', quantity: 3 }
  ],
  'blackberry jam': [
    { element: 'blackberries', quantity: 3 }
  ],

  // Ores & Bars
  'silver bar': [
    { element: 'silver ore', quantity: 3 }
  ],
  'gold bar': [
    { element: 'gold ore', quantity: 3 }
  ],
  'platinum bar': [
    { element: 'platinum ore', quantity: 3 }
  ],
  'refined coal': [
    { element: 'coal', quantity: 3 }
  ],
  'iron bar': [
    { element: 'iron ore', quantity: 3 }
  ]
};

// Product categories for organization
const CATEGORIES = {
  'Animal Feed': ['chicken feed', 'cow feed', 'pig feed', 'sheep feed', 'goat feed'],
  'Dairy': ['cream', 'butter', 'cheese', 'goat cheese'],
  'Bakery': ['bread', 'corn bread', 'cookie', 'raspberry muffin', 'blackberry muffin', 'pizza', 'spicy pizza'],
  'Sugar': ['brown sugar', 'white sugar', 'syrup'],
  'Snacks': ['popcorn', 'buttered popcorn', 'chili popcorn'],
  'Breakfast': ['pancake', 'bacon and eggs'],
  'Burgers': ['hamburger', 'fish burger'],
  'Cooked Vegetables': ['roasted tomatoes', 'baked potato'],
  'Pies': ['carrot pie', 'pumpkin pie', 'bacon pie', 'apple pie', 'fish pie', 'feta pie', 'casserole'],
  'Cakes': ['carrot cake', 'cream cake', 'red berry cake', 'cheesecake', 'strawberry cake', 'chocolate cake'],
  'Textiles': ['sweater', 'cotton fabric', 'blue woolly hat', 'blue sweater', 'cotton shirt', 'wooly chaps', 'violet dress'],
  'Juices': ['carrot juice', 'apple juice', 'cherry juice', 'tomato juice', 'berry juice'],
  'Ice Cream': ['vanilla ice cream', 'cherry popsicle', 'strawberry ice cream'],
  'Jams': ['apple jam', 'raspberry jam', 'blackberry jam'],
  'Ores & Bars': ['silver bar', 'gold bar', 'platinum bar', 'refined coal', 'iron bar']
};

// Get all product names for autocomplete
function getAllProducts() {
  const recipeProducts = Object.keys(RECIPES);
  const animalProducts = Object.keys(ANIMAL_PRODUCTS);
  const allProducts = [...recipeProducts, ...animalProducts, ...BASE_INGREDIENTS];
  return [...new Set(allProducts)].sort(); // Remove duplicates and sort
}

// Get recipe for a product (case-insensitive)
function getRecipe(productName) {
  const normalized = productName.toLowerCase().trim();
  return RECIPES[normalized] || [];
}

// Check if product exists
function productExists(productName) {
  const normalized = productName.toLowerCase().trim();
  return normalized in RECIPES || 
         normalized in ANIMAL_PRODUCTS || 
         BASE_INGREDIENTS.includes(normalized);
}

// Animal products that require feeding
// Format: { product: { feed: 'feed_type', yield: number_per_feeding } }
const ANIMAL_PRODUCTS = {
  'egg': { feed: 'chicken feed', yield: 3 },
  'milk': { feed: 'cow feed', yield: 3 },
  'bacon': { feed: 'pig feed', yield: 3 },
  'wool': { feed: 'sheep feed', yield: 3 },
  'goat milk': { feed: 'goat feed', yield: 3 }
};

// Base ingredients (crops and other raw materials)
const BASE_INGREDIENTS = [
  // Crops
  'wheat',
  'corn',
  'soybean',
  'carrot',
  'sugarcane',
  'tomato',
  'chili pepper',
  'pumpkin',
  'indigo',
  'strawberry',
  'raspberries',
  'blackberries',
  'cotton',
  'potato',
  'lettuce',
  'cabbage',
  'onion',
  'garlic',
  'cucumber',
  'bell pepper',
  'apple',
  'cherry',
  'peach',
  'apricot',
  'lemon',
  'orange',
  'cocoa',
  'coffee bean',
  'peanut',
  'rice',
  'mint',
  'lavender',
  'sunflower',
  'grapes'
];

// Check if an item is an animal product
function isAnimalProduct(productName) {
  const normalized = productName.toLowerCase().trim();
  return normalized in ANIMAL_PRODUCTS;
}

// Get animal product info
function getAnimalProductInfo(productName) {
  const normalized = productName.toLowerCase().trim();
  return ANIMAL_PRODUCTS[normalized];
}

// Check if an item is a base ingredient
function isBaseIngredient(productName) {
  const normalized = productName.toLowerCase().trim();
  return BASE_INGREDIENTS.includes(normalized);
}

